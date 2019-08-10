<template>
  <input
    type="text"
    min="0"
    pattern="[0-9]+"
    :tabindex="idx"
    v-model.number="inputVal"
    :id="inputId"
    :class="{ 'active': inputId === tmpId }"
    @click="editNum($event)"
    @touchstart="editNum($event)"
    @blur="editDone($event)"
    @keyup.enter="editDone($event)"
    @keyup.tab="editDone($event);editNum($event)"
    @keyup.esc="editCancel($event)"
    @keypress="checkNum($event)"
  >
</template>

<script>
import { setTimeout } from 'timers';
// TODO: Mask implement
export default {
  props: {
    num: {
      type: [Number]
    },
    inputId: {
      type: [String, Number],
      default: ''
    },
    idx: {
      type: [Number],
      default: 0
    }
  },
  data: () => ( {
    tmpNum: '',
    tmpId: ''
  } ),
  methods: {
    checkNum ( e ) {
      if ( e.which < 48 || e.which > 57 ) {
        e.preventDefault();
      }
    },
    editNum ( e ) {
      e.target.value = e.target.value.replace('/ /g','')
      this.tmpNum = Number(e.target.value);
      console.log("TCL: editNum ->  this.tmpNum",  this.tmpNum)

      this.tmpId = e.target.id;
      setTimeout( function () { e.target.select(); }, 0 );
      // e.target.value = 0;
      if ( e.target.id !== 'control1' ) {
        this.$store.dispatch( 'MUTATE_CONTROL2', 0 );
      } else {
        this.$store.dispatch( 'MUTATE_CONTROL1', 0 );
      }
    },
    editDone ( e ) {
      if ( !isNaN( Number( e.target.value ) ) ) {
        if ( e.target.id !== 'control1' ) {
          this.$store.dispatch( 'MUTATE_CONTROL2', e.target.value );
        } else {
          this.$store.dispatch( 'MUTATE_CONTROL1', e.target.value );
        }
        this.tmpId = null;
      }
    },
    editCancel ( e ) {
      // e.target.value = this.tmpNum;
      let nm = this.tmpNum.replace('/ /g','')
             console.log("TCL: editCancel -> this.tmpNum", nm)
            if ( e.target.id !== 'control1' ) {
        this.$store.dispatch( 'MUTATE_CONTROL2', Number(nm) );
 
      } else {
        this.$store.dispatch( 'MUTATE_CONTROL1', Number(nm) );
      }
      this.tmpId = null;
      //e.target.blur();
    }
  },
  computed: {
    inputVal: {
      get: function () {
        let _num = Number( this.num ).toLocaleString( 'ru-RU' );
        return _num;
      },
      set: function ( num ) {
        this.$emit( 'input', Number( num ) );
      }
    }
  }
};
</script>

<style scoped lang="scss">
input[type="text"] {
  outline: none;
  padding-left: 1rem;
  &:hover{
    color:darken(lightskyblue, 8%);
    appearance: textfield;
    -webkit-appearance: none;
  }
  &:not(.active) {
    background: transparent url(../img/baseline-expand_more-24px.svg) no-repeat 100% 50%;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
.active{
  border: 1px solid lightgray;
}
</style>

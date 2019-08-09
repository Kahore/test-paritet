<template>

  <input
    type="number"
    v-model="inputVal"
    :id="inputId"
    :class="{ 'active': inputId === tmpId }"
    @click="editNum($event)"
    @touchstart="editNum($event)"
    @blur="editDone($event)"
    @keyup.enter="editDone($event)"
    @keyup.tab="editDone($event);editNum($event)"
    @keyup.esc="editCancel($event)"
  >

</template>

<script>
// TODO: Mask implement
export default {
  props: {
    num: {
      type: [Number]
    },
    inputId: {
      type: [String, Number],
      default: ''
    }
  },
  data: () => ( {
    tmpNum: '',
    tmpId: ''
  } ),
  methods: {
    editNum ( e ) {
      this.tmpNum = e.target.value;
      this.tmpId = e.target.id;
      e.target.value = 0;
      e.target.select();
    },
    editDone ( e ) {
      if ( e.target.id !== 'control1' ) {
        this.$store.dispatch( 'MUTATE_CONTROL2', e.target.value );
      } else {
        this.$store.dispatch( 'MUTATE_CONTROL1', e.target.value );
      }
      this.tmpId = null;
    },
    editCancel ( e ) {
      e.target.value = this.tmpNum;
      this.tmpId = null;
    }
  },
  computed: {
    inputVal: {
      get: function () {
        let _num = Number( this.num );
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
input[type="number"] {
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

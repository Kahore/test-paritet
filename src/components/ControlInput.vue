<template>

  <input
    type="number"
    v-model="inputVal"
    :id="inputId"
    @click="editNum($event)"
    @touchstart="editNum($event)"
    @blur="editDone($event)"
    @keyup.enter="editDone($event)"
    @keyup.tab="editDone($event)"
    @keyup.esc="editCancel($event)"
  >

</template>

<script>
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
    tmpNum: ''
  } ),
  methods: {
    editNum ( e ) {
      this.tmpNum = e.target.value;
     
      e.target.value = 0;
      e.target.select();
      console.log( 'TCL: editNum -> this.tmpNum', this.tmpNum );
    },
    editDone ( e ) {
      console.log( 'TCL: editDone -> val', e.target.value );
      if ( e.target.id !== 'control1' ) {
        this.$store.dispatch( 'MUTATE_CONTROL2', e.target.value );
      } else {
         this.$store.dispatch( 'MUTATE_CONTROL1', e.target.value );
      }
      this.$store.dispatch( 'SET_EDIT', null );
    },
    editCancel ( e ) {
      e.target.value = this.tmpNum;
      console.log( 'TCL: editDone -> val', this.tmpNum );
      this.$store.dispatch( 'SET_EDIT', null );
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
  border: 1px solid lightgray;
  padding-left: 1rem;
}
</style>

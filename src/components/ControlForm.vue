<template>
  <v-container
    grid-list-xl
    fluid
  >
    <app-input
      input-id="control1"
      :num="control1"
      tabindex="1"/>
    <small 
      id="sumControl"
      @click="sumControl()">Сумма</small><br>
    <app-input
      input-id="control2"
      :num="control2"
      tabindex="2"/>
    <small 
      id="setConst"
      @click="setConst()">Константа</small><br>
    <app-input
      input-id="control3"
      :num="control2"
      tabindex="3"/>
  </v-container>
</template>

<script>

export default {
  components: {
    'app-input': () => import( '@/components/ControlInput' )
  },
  name: 'ControlForm',
  computed: {
    control1: {
      get: function () {
        return this.$store.getters.GET_CONTROL1;
      },
      set: function ( num ) {
        this.$emit( 'input', num );
      }
    },
    control2: {
      get: function () {
        return this.$store.getters.GET_CONTROL2;
      },
      set: function ( num ) {
        this.$emit( 'input', num );
      }
    },
    control_const () {
      return this.$store.getters.GET_CONTROL_CONST;
    }
  },
  methods: {
    sumControl () {
      this.$store.dispatch( 'MUTATE_SUMM' );
    },
    setConst () {
      this.$store.dispatch( 'MUTATE_CONTROL2', this.control_const );
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
small{
  display: block;
  padding-left: 1rem;
  color: darken(lightskyblue, 8%);
  font-size: 0.7rem;
  &:hover{
    cursor: pointer;
  }
}
</style>

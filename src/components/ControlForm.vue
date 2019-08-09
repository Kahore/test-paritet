<template>
  <v-container
    grid-list-xl
    fluid
  >
  <div :class="{ 'todos-list__block--onEdit': editedID === 'control1' }">
    <div class="todos-list__block_view">
     <span @click="setEdit($event)" class="control1">{{ control1 }}</span>
    </div>
    <div class="todos-list__block_edit">
      <app-input
        input-id="control1"
        :num="control1"
        tabindex="1"/>
      <small @click="sumControl()">Сумма</small><br>
    </div>
  </div>
  <div :class="{ 'todos-list__block--onEdit': editedID === 'control2'}">
    
    <div class="todos-list__block_view">
      <span @click="setEdit($event)" class="control2">{{ control2 }}</span>
    </div>
    <div class="todos-list__block_edit">
    <app-input
      input-id="control2"
      :num="control2"
      tabindex="2"/>
    <small @click="setConst()">Константа</small><br>
    </div>
      </div>
       <div :class="{ 'todos-list__block--onEdit': editedID === 'control3' }">
    <div class="todos-list__block_view">
      <span @click="setEdit($event)" class="control3">{{ control2 }}</span>
    </div>
    <div class="todos-list__block_edit">
      <app-input
        input-id="control3"
        :num="control2"
        tabindex="3"/>
    </div>
      </div>
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
    },
    editedID () {
      return this.$store.getters.GET_ID_ON_EDIT;
    },
  },
  methods: {
    sumControl () {
      this.$store.dispatch( 'MUTATE_SUMM' );
    },
    setConst () {
      this.$store.dispatch( 'MUTATE_CONTROL2', this.control_const );
    },
    setEdit(e){
      
       this.$store.dispatch( 'SET_EDIT', e.target.className );
       console.log("TCL: setEdit -> e.target.name ", e.target.className )
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todos-list__block {
    &_edit {
    display: none;
  }
    &--onEdit .todos-list__block_view {
    display: none;
  }
  &--onEdit .todos-list__block_edit {
    display: flex;
  }
}
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

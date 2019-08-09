<template>
  <div id="app">
    <v-app id="inspire">
      <ControlForm/>
    </v-app>
  </div>
</template>

<script>
import ControlForm from './components/ControlForm.vue';

export default {
  name: 'app',
  components: {
    ControlForm
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 15%;
  width: 500px;
  height: 500px;
}
</style>

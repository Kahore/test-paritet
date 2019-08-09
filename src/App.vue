<template>
  <div id="app">
    <ControlNum/>
  </div>
</template>

<script>
import ControlNum from './components/ControlNum.vue';

export default {
  name: 'app',
  components: {
    ControlNum
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

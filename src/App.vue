<template>
  <div id="app">
    <ControlForm/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    ControlForm: () => import( './components/ControlForm.vue' )
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
  margin-top: 100px;
  margin-left: 15%;
  width: 300px;
  height: 200px;
  -webkit-box-shadow: 2px 6px 21px 1px rgba(0,0,0,0.27);
  -moz-box-shadow: 2px 6px 21px 1px rgba(0,0,0,0.27);
  box-shadow: 2px 6px 21px 1px rgba(0,0,0,0.27);
}
</style>

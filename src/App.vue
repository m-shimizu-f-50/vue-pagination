<template>
  <div id="app">
    <Probando />
  </div>
</template>

<script>
import Probando from "./components/Probando";

export default {
  name: "App",
  components: {
    Probando,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

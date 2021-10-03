<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name:"App",
});
</script>

<template>
  <router-link to="/">YES ... I AM</router-link>
  <router-link to="/Home">GO Home</router-link>
  <router-link to="/About">GO About</router-link>
</template>





<style>

a {
  margin: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

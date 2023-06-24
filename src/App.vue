<template>
  <NavBar @run-search="(data) => { searchData = data }"></NavBar>
  <p>Use the enter key to search.</p>
  <p>
    <a
      href="https://dev.pokemontcg.io/"
      style="margin:0; margin-bottom:1em; text-decoration:none; font-size:1em; color:darkblue"
    >Optionally, get an API Key Here for more than 1000 requests a day.</a>
  </p>

  <CardViewer :searchData="searchData"></CardViewer>

  <!--img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Welcome to Your Vue.js App" /-->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import CardViewer from './components/CardViewer.vue';

export default {
  name: 'App',
  components: {
    NavBar, CardViewer
  },
  data() {
    return {
      searchData: null
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: aliceblue;
}

a:visited {
  text-decoration: none;
  color: #2c3e50;
}

#app {
  background-color: aliceblue;
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  padding-top: 1em;
}
</style>

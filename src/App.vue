<template>
  <p id="header">
    <a
      href="https://dev.pokemontcg.io/"
      style="margin:0; margin-bottom:1em; text-decoration:none; font-size:1em; color:darkblue"
    >Optionally, get an API Key Here for more than 1000 requests a day.</a>
  </p>
  <NavBar
    @run-search="(data) => { searchData = data }"
    @run-sort="(data) => { sortData = data }"
  ></NavBar>
  <CardViewer
    :searchData="searchData"
    :sortData="sortData"
  ></CardViewer>
</template>

<script>
import NavBar from './components/NavBar.vue';
import CardViewer from './components/CardViewer.vue';

export default {
  name: 'App',
  components: {
    NavBar, CardViewer
  },
  data() {
    return {
      searchData: null,
      sortData: null
    }
  }
}
</script>

<style>
body {
  margin: 0;
  /*background-color: aliceblue;*/
  background-color: aliceblue;
}

#header {
  margin-top: 0
}

a:visited {
  text-decoration: none;
  color: #2c3e50;
}

#app {
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  padding-top: .5em;
}</style>

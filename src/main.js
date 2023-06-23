import { createApp } from 'vue'
import App from './App.vue'
import apikey from './api-key.js'
import $pokemon from 'pokemontcgsdk'


const app = createApp(App)

// import v-select globally
import vSelect from "vue-select";
app.component("v-select", vSelect);

// import pokemon as $pokemon
$pokemon.configure({
    apiKey: apikey.getAPIKey()
})
app.provide('$pokemon', $pokemon)

app.mount('#app')

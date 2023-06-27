<template>
    <nav>
        <SearchBarSubtype v-model="valueSubtype"></SearchBarSubtype>
        <SearchBarInput
            v-model="valuePokemon"
            :placeholder="'Pokemon'"
            @run-search="$emit('run-search', searchData)"
        ></SearchBarInput>
        <SearchBarInput
            v-model="valueYear"
            :placeholder="'Year'"
            @run-search="$emit('run-search', searchData)"
        ></SearchBarInput>
        <SearchBarInput
            v-model="valueAPIKey"
            :password="true"
            :placeholder="'Optional API Key'"
            @run-search="$emit('run-search', searchData)"
        ></SearchBarInput>

    </nav>
</template>

<script>
import SearchBarInput from "./SearchBarInput.vue";
import SearchBarSubtype from "./SearchBarSubtype.vue";


export default {
    components: {
        SearchBarInput,
        SearchBarSubtype
    },
    props: {
    },
    data() {
        return {
            valuePokemon: '',
            valueYear: '',
            valueSubtype: '',
            valueAPIKey: JSON.parse(localStorage.getItem('PokeApiKey')) ? JSON.parse(localStorage.getItem('PokeApiKey')) : '',
        }
    }
    ,
    computed: {
        searchData: function () {
            let data = {
                pokemon: this.valuePokemon.trim(),
                year: this.valueYear.trim(),
                subtype: this.valueSubtype.trim(),
                key: this.valueAPIKey.trim()
            }
            return data
        }
    },
    watch: {
    },
    methods: {
    },

}

</script>

<style scoped>
nav {
    background-color: aliceblue;
    width: 90%;
    display: inline-grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    margin-bottom: 0em;
}
</style>
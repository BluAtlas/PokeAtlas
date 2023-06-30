<template>
    <nav>
        <SearchBarSelect
            v-model="valueSubtype"
            placeholder="SubType"
            :options-promise="$pokemon.subtype.all"
        ></SearchBarSelect>
        <SearchBarInput
            v-model="valuePokemon"
            :placeholder="'Pokemon'"
            @run-search="$emit('run-search', searchData)"
        ></SearchBarInput>
        <SearchBarSelect
            v-model="valueYear"
            :placeholder="'Year'"
            :options-data="years"
        ></SearchBarSelect>
        <SearchBarInput
            v-model="valueAPIKey"
            :password="true"
            :placeholder="'Optional API Key'"
            @run-search="$emit('run-search', searchData)"
        ></SearchBarInput>
        <SearchBarSelect
            v-model="valueOrderBy"
            placeholder="Sort By"
            :options-data="['name', 'set', 'rarity', 'number']"
        ></SearchBarSelect>

    </nav>
</template>

<script>
import SearchBarInput from "./SearchBarInput.vue";
import SearchBarSelect from "./SearchBarSelect.vue";


export default {
    components: {
        SearchBarInput,
        SearchBarSelect
    },
    inject: ['$pokemon'],
    props: {
    },
    data() {
        return {
            valuePokemon: null,
            valueYear: null,
            valueSubtype: null,
            valueOrderBy: null,
            valueAPIKey: JSON.parse(localStorage.getItem('PokeApiKey')) !== null ? JSON.parse(localStorage.getItem('PokeApiKey')) : '',
        }
    }
    ,
    computed: {
        searchData: function () {
            return {
                subtype: this.valueSubtype !== null ? this.valueSubtype.toLowerCase().trim() : '',
                pokemon: this.valuePokemon != null ? this.valuePokemon.toLowerCase().trim() : '',
                year: this.valueYear != null ? this.valueYear : '',
                key: this.valueAPIKey != null ? this.valueAPIKey.trim() : '',
                orderBy: this.valueOrderBy !== null ? this.valueOrderBy.toLowerCase().trim() : '',
            }
        },
        years: function () {
            var dates = []
            for (let i = 1999; i <= new Date().getFullYear(); i++) {
                dates.push(i)
            }
            return dates
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
    grid-template-columns: 1fr 3fr .8fr 1fr;
    margin-bottom: 0em;
}
</style>
<template>
    <nav>
        <SearchBarSelect
            @run-search="$emit('run-search', searchData)"
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
            @run-search="$emit('run-search', searchData)"
            v-model="valueOrderBy"
            placeholder="Sort By"
            :options-data="[
                { label: 'Name', value: 'name' },
                { label: 'Date', value: 'set.releaseDate' },
                { label: 'Set', value: 'set.name' },
                { label: 'Series', value: 'set.series' },
                { label: 'Rarity', value: 'rarity' },
                { label: 'Market Value', value: 'tcgplayer.prices.normal.market' },
                { label: 'Holo Market', value: 'tcgplayer.prices.holofoil.market' },
                { label: 'RHolo Market', value: 'tcgplayer.prices.reverseHolofoil.market' },
            ]"
            @option:selected="$emit('run-sort', sortData)"
        ></SearchBarSelect>
        <SearchBarSelect
            @run-search="$emit('run-search', searchData)"
            v-model="valueOrderIsAscending"
            placeholder="Sort Direction"
            :options-data="[
                { label: 'Ascending', value: true },
                { label: 'Descending', value: false },
            ]"
            @option:selected="$emit('run-sort', sortData)"
        ></SearchBarSelect>
        <SearchBarSelect
            @run-search="$emit('run-search', searchData)"
            v-model="valueYear"
            :placeholder="'Year'"
            :options-data="releaseYears"
        ></SearchBarSelect>
        <SearchBarInput
            v-model="valueAPIKey"
            :password="true"
            :placeholder="'Optional API Key'"
            @run-search="$emit('run-search', searchData)"
        ></SearchBarInput>


    </nav>
    <br>
    <button @click.prevent="$emit('run-search', searchData)">Search for Cards</button>
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
    emits: ["run-search", "run-sort"],
    data() {
        return {
            valuePokemon: null,
            valueYear: null,
            valueSubtype: null,
            valueOrderBy: null,
            valueOrderIsAscending: null,
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
                sortData: this.sortData,
            }
        },
        sortData: function () {
            return { string: this.valueOrderBy !== null ? this.valueOrderBy.value.trim() : '', isAscending: this.valueOrderIsAscending !== null ? this.valueOrderIsAscending.value : false }
        },
        releaseYears: function () {
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
    grid-template-columns: 1fr 3fr 1fr 1fr;
    margin-bottom: 0em;
}

button {
    margin-top: .5em;
    font-size: 16px;
    padding: 0.7em 1.4em 0.7em 1.4em;
    color: white;
    background: #bcaee5;
    border: none;
    letter-spacing: 0.05em;
    border-radius: 20em;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    text-align: center;
}

button:hover {
    background: #b5a5e6;
}

button:active {
    background: #ac99e5;
}
</style>
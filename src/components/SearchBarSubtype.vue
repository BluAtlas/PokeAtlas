<template>
    <v-select
        placeholder="Subtype"
        v-model="selectedOption"
        :options="options"
        :loading="loading"
        autocomplete
        @keyup.enter="console.log('enter')"
    ></v-select>
</template>

<script>
export default {
    components: {
    },
    inject: ['$pokemon'],
    props: {
    },
    data() {
        return {
            options: [],
            loading: true,
            selectedOption: null
        }
    }
    ,
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created() {
        this.$pokemon.subtype.all().then((types) => {
            this.options = types
            this.loading = false;
        });
    }

}
</script>

<style>
@import "vue-select/dist/vue-select.css";


/* Example styles */
/* Example styling for the dropdown */
</style>

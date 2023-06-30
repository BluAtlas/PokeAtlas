<template>
    <v-select
        v-model="selectedOption"
        :placeholder="placeholder"
        :options="options"
        :loading="loading"
        :selectOnTab="true"
        autocomplete
    ></v-select>
</template>

<script>
export default {
    components: {
    },
    inject: ['$pokemon'],
    props: [
        'optionsPromise', 'placeholder', 'optionsData'
    ],
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
        if (this.optionsPromise !== undefined) {
            this.optionsPromise().then((options) => {
                this.options = options
                this.loading = false;
            });
        } else {
            this.options = this.optionsData
            this.loading = false;
        }
    }

}
</script>

<style>
@import "vue-select/dist/vue-select.css";
</style>

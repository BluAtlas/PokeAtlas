<template>
    <div class="v-select vs--single">
        <div class="vs__dropdown-toggle">
            <div class="vs__selected-options">
                <input
                    class="vs__search"
                    aria-autocomplete="list"
                    aria-labelledby="vs2__combobox"
                    aria-controls="vs2__listbox"
                    :type="password ? 'password' : 'search'"
                    autocomplete="off"
                    :placeholder="placeholder"
                    :value="modelValue"
                    @input="(e) => { $emit('update:modelValue', e.target.value) }"
                    @keyup.prevent.enter="$emit('run-search')"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: [
        'placeholder',
        'modelValue',
        'password'
    ],
    data() {
        return {}
    }
    ,
    computed: {
    },
    watch: {
    },
    methods: {
    },

}
</script>
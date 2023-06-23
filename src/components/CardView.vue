<template>
    <div id="main">
        <a
            :href="cardData.tcgplayer.url"
            target="_blank"
        >
            <img
                :src="cardData.images.small"
                alt="pokemon card"
                width="240"
                height="330"
            >
        </a>
        <div id="prices">
            <p
                v-for="(price, key) in cardData.tcgplayer.prices"
                :key="key"
            >{{ key }}:<br>${{ price.market }}</p>
        </div>
    </div>
</template>


<script>
export default {
    components: {
    },
    props: [
        'cardData'
    ],
    data() {
        return {
        }
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

<style scoped>
#main {
    border: solid yellow;

}
</style>
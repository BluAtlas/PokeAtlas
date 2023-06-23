<template>
    <div id="main">

        <CardView
            :cardData="{ tcgplayer: { url: 'https://prices.pokemontcg.io/tcgplayer/swsh4-25' }, images: { small: 'https://images.pokemontcg.io/swsh4/25.png' } }"
        ></CardView>
        <CardView
            v-for="(card, index) in cardData"
            :key="index"
            :cardData="card"
        ></CardView>
    </div>
</template>


<script>
import CardView from "./CardView.vue";

export default {
    components: {
        CardView
    },
    inject: ['$pokemon'],
    props: [
        'searchData'

    ],
    data() {
        return {
            cardData: []
        }
    }
    ,
    computed: {
    },
    watch: {
        searchData: function (newSearchData) {
            if (newSearchData !== null) {
                let q = '';
                if (newSearchData.pokemon != '') {
                    q = q.concat(`name:"${newSearchData.pokemon}*" `)
                }
                if (newSearchData.year != '') {
                    q = q.concat(`set.releaseDate:"*${newSearchData.year}*" `)
                }
                if (newSearchData.subtype != '') {
                    q = q.concat(`subtype:"${newSearchData.subtype}"`)
                }
                if (q != '') {
                    console.log("SEARCHED:", q);
                    this.$pokemon.card.all({ q }).then((cards) => {
                        console.log(cards)
                        this.cardData = cards
                    })
                }
            }
        }
    },
    methods: {
    },

}
</script>

<style scoped>
#main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 2em;
    column-gap: .5em;
}
</style>

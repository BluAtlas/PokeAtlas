<template>
    <h3 v-if="loading">Loading Card Data...</h3>
    <h3 v-if="!loading">{{ cardData.length }} Results</h3>
    <div id="cardviewer">
        <!--CardView :cardData="exampleCard"></CardView-->
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
        'searchData', 'sortData'

    ],
    data() {
        return {
            cardData: [],
            savedKey: '',
            loading: false,
            exampleCard: {
                "id": "swsh4-25",
                "name": "Charizard",
                "supertype": "Pokémon",
                "subtypes": [
                    "Stage 2",
                ],
                "hp": "170",
                "types": [
                    "Fire"
                ],
                "evolvesFrom": "Charmeleon",
                "abilities": [
                    {
                        "name": "Battle Sense",
                        "text": "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards.",
                        "type": "Ability"
                    }
                ],
                "attacks": [
                    {
                        "name": "Royal Blaze",
                        "cost": [
                            "Fire",
                            "Fire"
                        ],
                        "convertedEnergyCost": 2,
                        "damage": "100+",
                        "text": "This attack does 50 more damage for each Leon card in your discard pile."
                    }
                ],
                "weaknesses": [
                    {
                        "type": "Water",
                        "value": "×2"
                    }
                ],
                "retreatCost": [
                    "Colorless",
                    "Colorless",
                    "Colorless"
                ],
                "convertedRetreatCost": 3,
                "set": {
                    "id": "swsh4",
                    "name": "Vivid Voltage",
                    "series": "Sword & Shield",
                    "printedTotal": 185,
                    "total": 203,
                    "legalities": {
                        "unlimited": "Legal",
                        "standard": "Legal",
                        "expanded": "Legal"
                    },
                    "ptcgoCode": "VIV",
                    "releaseDate": "2020/11/13",
                    "updatedAt": "2020/11/13 16:20:00",
                    "images": {
                        "symbol": "https://images.pokemontcg.io/swsh4/symbol.png",
                        "logo": "https://images.pokemontcg.io/swsh4/logo.png"
                    }
                },
                "number": "25",
                "artist": "Ryuta Fuse",
                "rarity": "Rare",
                "flavorText": "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
                "nationalPokedexNumbers": [
                    6
                ],
                "legalities": {
                    "unlimited": "Legal",
                    "standard": "Legal",
                    "expanded": "Legal"
                },
                "images": {
                    "small": "https://images.pokemontcg.io/swsh4/25.png",
                    "large": "https://images.pokemontcg.io/swsh4/25_hires.png"
                },
                "tcgplayer": {
                    "url": "https://prices.pokemontcg.io/tcgplayer/swsh4-25",
                    "updatedAt": "2021/08/04",
                    "prices": {
                        "normal": {
                            "low": 1.73,
                            "mid": 3.54,
                            "high": 12.99,
                            "market": 2.82,
                            "directLow": 3.93
                        },
                        "reverseHolofoil": {
                            "low": 3,
                            "mid": 8.99,
                            "high": 100,
                            "market": 3.89,
                            "directLow": 4.46
                        }
                    }
                },
                "cardmarket": {
                    "url": "https://prices.pokemontcg.io/cardmarket/swsh4-25",
                    "updatedAt": "2021/08/04",
                    "prices": {
                        "averageSellPrice": 9.38,
                        "lowPrice": 8.95,
                        "trendPrice": 10.29,
                        "germanProLow": null,
                        "suggestedPrice": null,
                        "reverseHoloSell": null,
                        "reverseHoloLow": null,
                        "reverseHoloTrend": null,
                        "lowPriceExPlus": 8.95,
                        "avg1": 9.95,
                        "avg7": 9.35,
                        "avg30": 11.31,
                        "reverseHoloAvg1": null,
                        "reverseHoloAvg7": null,
                        "reverseHoloAvg30": null
                    }
                }
            }
        }
    }
    ,
    computed: {
    },
    watch: {
        searchData: function (newSearchData) {
            if (newSearchData !== null) {
                this.cardData = [];
                this.loading = true;
                let q = '';
                let orderBy = '';
                if (newSearchData.key !== null && this.savedKey == '') {
                    this.$pokemon.configure({
                        apiKey: newSearchData.key
                    })
                    this.savedKey = newSearchData.key
                    localStorage.setItem('PokeApiKey', JSON.stringify(this.savedKey))
                }
                if (newSearchData.pokemon != '') {
                    q += `name:"${newSearchData.pokemon}*" `
                }
                if (newSearchData.year != '') {
                    q += `set.releaseDate:"*${newSearchData.year}*" `
                }
                if (newSearchData.subtype != '') {
                    q += `subtypes:"${newSearchData.subtype}" `
                }
                if (newSearchData.sortData.string != '') {
                    orderBy = newSearchData.sortData.string
                    if (!newSearchData.sortData.isAscending) {
                        orderBy = '-' + orderBy;
                    }
                }
                if (q != '') {
                    console.log("Search q:", q, "\nOrderBy:", orderBy);
                    if (this.savedKey != '') { console.log("Using API Key") }
                    this.$pokemon.card.all({ q, orderBy }).then((cards) => {
                        this.loading = false
                        this.cardData = cards
                        this.sortCardData(newSearchData.sortData)
                    })
                } else {
                    this.loading = false;
                }
            }
        },
        sortData: function (newSortData) {
            this.sortCardData(newSortData)
        },
        cardData: function () {

        }
    },
    methods: {
        sortCardData: function (sortData) {
            if (this.cardData.length > 0) {
                let direction_integer = -1
                if (sortData.isAscending) {
                    direction_integer = 1;
                }
                let searchProps = sortData.string.split('.')
                this.cardData.sort((a, b) => {
                    for (let i of searchProps) { // ensure properties exist, sort to back if they don't
                        if (a[i] === undefined && b[i] === undefined) {
                            return 0;
                        } else if (a[i] === undefined) {
                            return 1
                        } else if (b[i] === undefined) {
                            return -1
                        } else {
                            a = a[i]
                            b = b[i]
                        }
                    }
                    // loop ended, both objects have the desired sortable property
                    return a > b ? direction_integer : b > a ? -direction_integer : 0
                })
            }
        }
    },

}
</script>

<style scoped>
#cardviewer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 2em;
    column-gap: .5em;
    margin-bottom: 1em;
}
</style>

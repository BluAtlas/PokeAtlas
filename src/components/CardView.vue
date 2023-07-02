<template>
    <div
        id="cardview"
        :class="[cardType]"
    >
        <div id="subtype">
            <p
                @click.prevent="console.log(cardData)"
                v-for="(subtype, index) in cardSubtypes"
                :key="index"
            >{{ subtype }}</p>
        </div>
        <div id="name">{{ cardName }}</div>
        <div id="rarity-supertype">{{ cardRarity }} {{ cardSupertype }}</div>
        <div id="setnumber">Card {{ cardNumber }} / {{ cardSetTotal }}</div>
        <div id="setdate">{{ cardSetReleaseDate }}</div>
        <div id="seticon">
            <a
                :href="cardSetImagesSymbol"
                target="_blank"
            >
                <img
                    :src="cardSetImagesSymbol"
                    alt="set symbol"
                    object-fit="contain"
                >
            </a>
        </div>
        <div id="card">
            <a
                :href="cardImagesLarge"
                target="_blank"
            >
                <img
                    :src="cardImagesSmall"
                    alt="pokemon card"
                    width="245"
                    height="342"
                ></a>
        </div>
        <div id="price">
            <v-select
                placeholder="Select Foiling"
                v-model="selectedOption"
                :options="cardTcgplayerPrices"
                autocomplete
            ></v-select>
            <p id="price-market">{{ cardTcgplayerPricesMarket }}
            </p>
            <p id="price-range">{{ cardTcgplayerPricesLow }}
                -
                {{ cardTcgplayerPricesHigh }}
            </p>
            <p id="price-date">{{ cardTcgplayerUpdatedAt }}</p>
        </div>
        <div id="buttons">
            <a
                v-if="cardTcgplayerUrl"
                :href="cardTcgplayerUrl"
                target="_blank"
            >
                <img
                    src="../assets/tcg-logo.png"
                    alt="tcg logo"
                    width="30"
                    height="30"
                ></a>
            <a
                v-if="cardCardmarketUrl"
                :href="cardCardmarketUrl"
                target="_blank"
            >
                <img
                    src="../assets/cardmarket-logo.png"
                    alt="tcg logo"
                    width="30"
                    height="30"
                ></a>
        </div>
        <div id="series">
            <p>{{ cardSetSeries }}</p>
            <p>{{ cardSetName }}</p>
        </div>
        <div id="setlogo">
            <a
                :href="cardSetImagesLogo"
                target="_blank"
            >
                <img
                    :src="cardSetImagesLogo"
                    alt="set logo"
                    object-fit="contain"
                >
            </a>
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
            selectedOption: null,

        }
    }
    ,
    computed: {
        // cardData validation functions, probably a shorter way to do this
        cardSubtypes: function () { return this.cardData.subtypes !== undefined ? this.cardData.subtypes.slice(0, 3) : [] },
        cardName: function () { return this.cardData.name !== undefined ? this.cardData.name : '' },
        cardRarity: function () { return this.cardData.rarity !== undefined ? this.cardData.rarity : '' },
        cardSupertype: function () { return this.cardData.supertype !== undefined ? this.cardData.supertype : '' },
        cardNumber: function () { return this.cardData.number !== undefined ? this.cardData.number : '' },
        cardSetSeries: function () { return this.cardData.set !== undefined ? this.cardData.set.series !== undefined ? this.cardData.set.series : '' : '' },
        cardSetName: function () { return this.cardData.set !== undefined ? this.cardData.set.name !== undefined ? this.cardData.set.name : '' : '' },
        cardSetTotal: function () { return this.cardData.set !== undefined ? this.cardData.set.total !== undefined ? this.cardData.set.total : '' : '' },
        cardSetReleaseDate: function () { return this.cardData.set !== undefined ? this.cardData.set.releaseDate !== undefined ? this.cardData.set.releaseDate : '' : '' },
        cardSetImagesSymbol: function () { return this.cardData.set !== undefined ? this.cardData.set.images !== undefined ? this.cardData.set.images.symbol !== undefined ? this.cardData.set.images.symbol : '' : '' : '' },
        cardSetImagesLogo: function () { return this.cardData.set !== undefined ? this.cardData.set.images !== undefined ? this.cardData.set.images.logo !== undefined ? this.cardData.set.images.logo : '' : '' : '' },
        cardImagesSmall: function () { return this.cardData.images !== undefined ? this.cardData.images.small !== undefined ? this.cardData.images.small : '' : '' },
        cardImagesLarge: function () { return this.cardData.images !== undefined ? this.cardData.images.large !== undefined ? this.cardData.images.large : '' : '' },
        cardTcgplayerPrices: function () { return this.cardData.tcgplayer !== undefined ? this.cardData.tcgplayer.prices !== undefined ? Object.keys(this.cardData.tcgplayer.prices) : [] : [] },
        cardTcgplayerPricesMarket: function () { return this.cardData.tcgplayer !== undefined ? this.cardData.tcgplayer.prices !== undefined ? this.cardData.tcgplayer.prices[this.selectedOption] !== undefined ? this.cardData.tcgplayer.prices[this.selectedOption].market !== undefined ? '$'.concat(parseFloat(this.cardData.tcgplayer.prices[this.selectedOption].market).toFixed(2)) : 'N/A' : 'N/A' : 'N/A' : 'N/A' },
        cardTcgplayerPricesLow: function () { return this.cardData.tcgplayer !== undefined ? this.cardData.tcgplayer.prices !== undefined ? this.cardData.tcgplayer.prices[this.selectedOption] !== undefined ? this.cardData.tcgplayer.prices[this.selectedOption].low !== undefined ? '$'.concat(parseFloat(this.cardData.tcgplayer.prices[this.selectedOption].low).toFixed(2)) : 'N/A' : 'N/A' : 'N/A' : 'N/A' },
        cardTcgplayerPricesHigh: function () { return this.cardData.tcgplayer !== undefined ? this.cardData.tcgplayer.prices !== undefined ? this.cardData.tcgplayer.prices[this.selectedOption] !== undefined ? this.cardData.tcgplayer.prices[this.selectedOption].high !== undefined ? '$'.concat(parseFloat(this.cardData.tcgplayer.prices[this.selectedOption].high).toFixed(2)) : 'N/A' : 'N/A' : 'N/A' : 'N/A' },
        cardTcgplayerUpdatedAt: function () { return this.cardData.tcgplayer !== undefined ? this.cardData.tcgplayer.updatedAt !== undefined ? "As of ".concat(this.cardData.tcgplayer.updatedAt) : 'N/A' : 'N/A' },
        cardTcgplayerUrl: function () { return this.cardData.tcgplayer !== undefined ? this.cardData.tcgplayer.url !== undefined ? this.cardData.tcgplayer.url : null : null },
        cardCardmarketUrl: function () { return this.cardData.cardmarket !== undefined ? this.cardData.cardmarket.url !== undefined ? this.cardData.cardmarket.url : null : null },
        cardType: function () { return this.cardData.types !== undefined ? this.cardData.types.length > 0 ? this.cardData.types[0].toLowerCase() : 'notype' : 'notype' },
        cardSelectedOption: function () { return this.cardData.tcgplayer !== undefined ? this.cardData.tcgplayer.prices !== undefined ? Object.keys(this.cardData.tcgplayer.prices).length > 0 ? Object.keys(this.cardData.tcgplayer.prices).sort((a, b) => a == "normal" ? -1 : b == "normal" ? 1 : 0)[0] : null : null : null }
    },
    watch: {
        cardData: function () {
            this.selectedOption = this.cardSelectedOption
        }
    },
    methods: {
    },
    created: function () {
        this.selectedOption = this.cardSelectedOption;
    }

}
</script>

<style scoped>
.colorless {
    background-color: #E5D6D0;
}

.darkness {
    background-color: #bfc2be;
}

.dragon {
    background-color: #f4e095;
}

.fairy {
    background-color: #f5c2d9;
}

.fighting {
    background-color: #ffb88f;
}

.fire {
    background-color: #ee8e8e;
}

.grass {
    background-color: #c8f867;
}

.lightning {
    background-color: #fcf391;
}

.metal {
    background-color: #cfc4bf;
}

.psychic {
    background-color: #cea6c7;
}

.water {
    background-color: #b5e6f3;
}

.notype {
    background-color: antiquewhite;
}

#cardview {
    border: solid rgb(255, 217, 0);
    border-width: 7px;
    border-radius: 20px;
    /*background-color: antiquewhite;*/

    display: grid;
    grid-template-columns: 75px 180px 150px 60px;
    grid-template-rows: auto 30px 150px 70px auto 79px;
    grid-column-gap: 4px;
    grid-row-gap: 0px;
}

#subtype {
    display: flex;
    flex-direction: column;
    justify-content: center;


    grid-area: 1 / 1 / 3 / 2;
}

#subtype p {
    margin: 2px;
}

#name {
    display: flex;
    text-align: left;
    font-size: 1.4em;
    flex-direction: column-reverse;
    margin-top: 10px;

    grid-area: 1 / 2 / 2 / 3;
}

#rarity-supertype {
    text-align: left;

    grid-area: 2 / 2 / 3 / 3;
}

#setnumber {
    display: flex;
    text-align: right;
    font-size: 1em;
    flex-direction: column-reverse;
    margin-right: 8px;
    margin-top: 10px;

    grid-area: 1 / 3 / 2 / 4;
}

#setdate {
    text-align: right;
    margin-right: 8px;

    grid-area: 2 / 3 / 3 / 4;
}

#seticon {
    display: flex;
    justify-content: center;
    flex-direction: column;

    grid-area: 1 / 4 / 3 / 4;
}

#seticon img {
    width: 40px;
    max-width: 40px;
    max-height: 40px;
}

#card {
    margin-top: 10px;
    margin-bottom: 3px;

    grid-area: 3 / 1 / 7 / 3;
}

#card img {
    border-radius: 10px;
}

#seticon img {
    width: 40px;
    max-width: 40px;
    max-height: 40px;
}

#price {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;

    grid-area: 3 / 3 / 4 / 5;
}

#price-market {
    color: green;
    font-size: 2em;
    margin-top: 20px;
    margin-bottom: 15px;

    grid-area: 3 / 3 / 4 / 5;
}

#price-range {
    margin-top: 0px;
    margin-bottom: 0px;

    grid-area: 3 / 3 / 4 / 5;
}

#price-date {
    margin-top: 0px;
    margin-bottom: 0px;

    grid-area: 3 / 3 / 4 / 5;
}

#buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    grid-area: 4 / 3 / 5 / 5;
}

#buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid;
    border-width: 3px;
    border-color: lightblue;
    border-radius: 15px;
    background-color: lightblue;
    margin: 5px;
    height: 40px;
    width: 40px;
}

#buttons img {
    margin: 5px;
}

#series {
    display: flex;
    flex-direction: column;
    justify-content: center;

    grid-area: 5 / 3 / 6 / 5;
}

#series p {
    margin-top: 0px;
    margin-bottom: 0px;
}

#setlogo {
    grid-area: 6 / 3 / 7 / 5;
}

#setlogo img {
    width: 200;
    max-height: 75px;
    max-width: 200px;
}

.placeholder {
    background-color: #eee;
}

@keyframes placeHolderShimmer {
    0% {
        background-position: -468px 0
    }

    100% {
        background-position: 468px 0
    }
}

.animated-background {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100px;
    position: relative;
}
</style>
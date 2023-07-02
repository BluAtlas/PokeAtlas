<template>
    <div
        id="cardview"
        class="animated-background"
    >
        <div id="subtype">
        </div>
        <div id="name"></div>
        <div id="rarity-supertype"></div>
        <div id="setnumber"></div>
        <div id="setdate"></div>
        <div id="seticon"></div>
        <div id="card"></div>
        <div id="price">
            <div id="price-selector"></div>
            <div id="price-market"></div>
            <div id="price-range"></div>
            <div id="price-date"></div>
        </div>
        <div id="buttons">
        </div>
        <div id="series">
        </div>
        <div id="setlogo">
        </div>
    </div>
</template>

<style scoped>
#cardview {
    box-sizing: border-box;
    border: 7px solid #eeeeee;
    border-radius: 20px;

    display: grid;
    grid-template-columns: 77px 184px 154px 62px;
    grid-template-rows: 35px 30px 150px 70px 60px 79px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

#subtype {
    box-sizing: border-box;
    border: 10px solid #eeeeee;
    grid-area: 1 / 1 / 3 / 2;
}

#name {
    box-sizing: border-box;
    border: 3px solid #eeeeee;
    border-top: 10px solid #eeeeee;
    grid-area: 1 / 2 / 2 / 3;
}

#rarity-supertype {
    box-sizing: border-box;
    border-top: 5px solid #eeeeee;
    border-left: 3px solid #eeeeee;
    border-right: 3px solid #eeeeee;
    border-bottom: 10px solid #eeeeee;
    grid-area: 2 / 2 / 3 / 3;
}

#setnumber {
    box-sizing: border-box;
    border-top: 15px solid #eeeeee;
    border-bottom: 3px solid #eeeeee;
    border-left: 10px solid #eeeeee;
    border-right: 10px solid #eeeeee;
    grid-area: 1 / 3 / 2 / 4;
}

#setdate {
    box-sizing: border-box;
    border-top: 5px solid #eeeeee;
    border-bottom: 10px solid #eeeeee;
    border-left: 10px solid #eeeeee;
    border-right: 10px solid #eeeeee;
    grid-area: 2 / 3 / 3 / 4;
}

#seticon {
    box-sizing: border-box;
    border: 10px solid #eeeeee;
    grid-area: 1 / 4 / 3 / 4;
}

#card {
    box-sizing: border-box;
    border: 10px solid #eeeeee;
    grid-area: 3 / 1 / 7 / 3;
}


#price {
    display: flex;
    flex-direction: column;
    justify-content: end;
    grid-area: 3 / 3 / 4 / 5;
}

#price-selector {
    box-sizing: border-box;
    border-top: 10px solid #eeeeee;
    border-right: 10px solid #eeeeee;
    border-left: 10px solid #eeeeee;
    height: 40px;
    margin-top: 0px;
    margin-bottom: 0px;
    grid-area: 3 / 3 / 4 / 5;
}

#price-market {
    box-sizing: border-box;
    border-top: 15px solid #eeeeee;
    border-bottom: 20px solid #eeeeee;
    border-left: 40px solid #eeeeee;
    border-right: 40px solid #eeeeee;
    height: 73px;
    margin-top: 0px;
    margin-bottom: 0px;
    grid-area: 3 / 3 / 4 / 5;
}

#price-range {
    box-sizing: border-box;
    border-right: 30px solid #eeeeee;
    border-left: 30px solid #eeeeee;
    height: 18.5px;
    margin-top: 0px;
    margin-bottom: 0px;
    grid-area: 3 / 3 / 4 / 5;
}

#price-date {
    box-sizing: border-box;
    border-right: 30px solid #eeeeee;
    border-left: 30px solid #eeeeee;
    height: 18.5px;
    margin-top: 0px;
    margin-bottom: 0px;
    grid-area: 3 / 3 / 4 / 5;
}

#buttons {
    box-sizing: border-box;
    border-top: 12px solid #eeeeee;
    border-left: 40px solid #eeeeee;
    border-right: 40px solid #eeeeee;
    border-bottom: 10px solid #eeeeee;
    grid-area: 4 / 3 / 5 / 5;
}

#series {
    box-sizing: border-box;
    border: 10px solid #eeeeee;
    border-left: 30px solid #eeeeee;
    border-right: 30px solid #eeeeee;
    grid-area: 5 / 3 / 6 / 5;
}


#setlogo {
    box-sizing: border-box;
    border: 10px solid #eeeeee;
    grid-area: 6 / 3 / 7 / 5;
}

.placeholder {
    background-color: #eee;
    max-width: 489.8px;
    max-height: 437px;
}

.animated-background {
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-size: 100px 100px;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    position: relative;
}

@keyframes placeHolderShimmer {
    0% {
        background-position: -1000px 0
    }

    100% {
        background-position: 1000px 0
    }
}
</style>
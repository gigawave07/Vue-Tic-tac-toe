<template>
    <div class="game">
        <div class="game-board">
            <p>{{status}}</p>
            <div
                    class="board-row"
                    v-for="i of [0,3,6]"
                    :key="i"
            >
                <span v-for="j of [0,1,2]" :key="j">
                    <Square
                            :value="i+j"
                            :logic="logic"
                    />
                </span>
            </div>
        </div>
        <div class="game-info">
            <div v-for="(item,i) of game.history" :key="i">
                <button @click="jumpTo(i)">
                    {{ i ? `Go to turn #${i}` : `Reset Game`}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Square from "./Square";
    import gameLogic from "./GameLogic";

    export default {
        name: "TicTacToe",
        components: {Square},
        setup() {
            const logic = gameLogic()
            const {game, status, jumpTo} = logic

            return {
                status,
                game,
                logic,
                jumpTo
            }
        }
    }
</script>

<style>
    body {
        font: 14px "Century Gothic", Futura, sans-serif;
        margin: 20px;
    }

    ol, ul {
        padding-left: 30px;
    }

    .board-row:after {
        clear: both;
        content: "";
        display: table;
    }

    .status {
        margin-bottom: 10px;
    }

    .square {
        background: #fff;
        border: 1px solid #999;
        float: left;
        font-size: 24px;
        font-weight: bold;
        line-height: 34px;
        height: 34px;
        margin-right: -1px;
        margin-top: -1px;
        padding: 0;
        text-align: center;
        width: 34px;
    }

    .square:focus {
        outline: none;
    }

    .kbd-navigation .square:focus {
        background: #ddd;
    }

    .game {
        display: flex;
        flex-direction: row;
    }

    .game-info {
        margin-left: 20px;
    }

    .win {
        color: red;
    }

</style>

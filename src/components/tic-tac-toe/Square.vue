<template>
    <button
            :class="{'square': true, 'win': highlight}"
            @click="handleClick(value)"
    >
        {{logic.game.current[value]}}
    </button>
</template>

<script>

    import {computed, toRefs} from "@vue/reactivity";

    export default {
        name: "Square",
        props: ['value','logic'],
        setup(props) {
            let {lineWon} = toRefs(props.logic.lineWon)
            let highlight = computed(() => lineWon ? lineWon.includes(props.value) : false)
            const handleClick = (i) => {
                props.logic.handleClick(i)
            }


            return {
                lineWon,
                highlight,
                handleClick
            }
        }
    }
</script>

<style scoped>

</style>

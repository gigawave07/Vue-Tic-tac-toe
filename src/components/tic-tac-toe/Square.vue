<template>
    <button
            :class="{'square': true, 'win': highlight}"
            @click="handleClick(value)"
    >
        {{logic.game.current[value]}}
    </button>
</template>

<script>

    import {computed} from "@vue/reactivity";

    export default {
        name: "Square",
        props: ['value','logic'],
        setup(props) {
            let highlight = computed(() => props.logic.game.lineWon ? props.logic.game.lineWon.includes(props.value) : false)
            const handleClick = (i) => {
                props.logic.handleClick(i)
            }


            return {
                highlight,
                handleClick
            }
        }
    }
</script>

<style scoped>

</style>

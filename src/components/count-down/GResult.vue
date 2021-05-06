<template>
    <h1>{{ timer.currentTimer }}</h1>
    <ul>
        <li v-for="(capture, idx) of timer.captures" :key="capture">Capture {{ idx + 1 }}: {{ capture }}</li>
    </ul>
</template>

<script>
    import countTimer from "../../store/timer";

    export default {
        name: "GResult",
        setup() {
            const timer = countTimer

            return {
                timer
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
</style>

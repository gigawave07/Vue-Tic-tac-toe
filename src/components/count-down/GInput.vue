<template>
    <input type="text" v-model="timer.inputTimer">
</template>

<script>
    import countTimer from "../../store/timer";

    export default {
        name: "GInput",
        setup() {
            const timer = countTimer
            return {
                timer
            }
        }
    }
</script>

<style scoped>

</style>

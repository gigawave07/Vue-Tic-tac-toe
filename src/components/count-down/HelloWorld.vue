<template>
    <div>
        <g-input/>
    </div>
    <div>
        <g-button :itemID="constant.START">Start</g-button>
        <g-button :itemID="constant.STOP">Stop</g-button>
        <g-button :itemID="constant.CAPTURE">Capture</g-button>
        <g-button :itemID="constant.CONTINUE">Continue</g-button>
        <g-button :itemID="constant.RESET">Reset</g-button>
    </div>
    <div>
        <g-result/>
    </div>
</template>

<script>
    import countTimer from "../../store/timer";
    import GInput from "./GInput";
    import GButton from "./GButton";
    import CONSTANT from "../../modules/const";
    import GResult from "./GResult";

    export default {
        name: 'HelloWorld',
        components: {
            GInput,
            GButton,
            GResult
        },
        setup() {
            const timer = countTimer

            const constant = CONSTANT

            return {
                timer,
                constant
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

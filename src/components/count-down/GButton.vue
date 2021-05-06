<template>
    <button @click="execute" :disabled="logic.getEnableStatus()">
        <slot>Default Button</slot>
    </button>
</template>

<script>
    import countTimer from "../../store/timer";
    import BaseLogic from "../../logic/BaseLogic";

    export default {
        name: "GButton",
        props: {
            itemID: {
                required: true,
            }
        },
        setup(props) {
            const timer = countTimer

            const logic = BaseLogic.createLogic(props.itemID)

            function execute() {
                this.logic.execute()
            }

            return {
                timer,
                logic,
                execute
            }
        }
    }
</script>

<style scoped>

</style>

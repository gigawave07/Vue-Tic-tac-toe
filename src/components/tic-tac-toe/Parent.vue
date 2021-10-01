<template>
    <div>
        <Test />
    </div>
</template>

<script>
    import Test from "../Test";

    export default {
        name: "Parent",
        components: {
            Test
        },
        data() {
            return {
                obj: {
                    prop: undefined,
                },
                arr: [
                    {
                        a: 1,
                        name: 'A'
                    },
                    {
                        a: 2,
                        name: 'B'
                    },
                    {
                        a: 3,
                        name: 'C'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>

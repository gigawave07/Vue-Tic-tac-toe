<template>
    <div>
        <select name="" id="" v-model="selected" @change="handleChange">
            <option :value="a.a" v-for="a of arr" :key="a.a">
                {{a.name}}
            </option>
        </select>
        <div>
            {{obj.prop}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Test.vue",
        data() {
            return {
                selected: '',
            }
        },
        methods: {
            handleChange() {
                this.obj.prop = this.selected
            }
        }
    }
</script>

<style scoped>

</style>

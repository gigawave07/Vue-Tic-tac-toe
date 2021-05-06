<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld />
  <TicTacToe />
</template>

<script>
import HelloWorld from './components/count-down/HelloWorld.vue'
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

export default {
  name: 'App',
  components: {
    HelloWorld,
    TicTacToe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

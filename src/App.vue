<template>
  
  <TickPage></TickPage>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TickPage from './views/TickPage.vue'
// import TickPage from './components/TickPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    TickPage,
    // TickPage
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

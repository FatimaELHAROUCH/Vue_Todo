<template>
  <div id="app">
    <DashboardPage/>
  </div>
</template>

<script>

import DashboardPage from './components/Dashboard.vue'
export default {
  name: 'App',
  components: {
    DashboardPage
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

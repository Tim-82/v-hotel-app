<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
// import Home from './views/Home.vue'
import Navbar from './views/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  /* @import './assets/css/App.css'; */
  /* src="@/assets/App.css" */
  /* @import '@/assets/App.css'; */
</style>

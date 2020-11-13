<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: { Home },
  data () {
    return {
      // films: []
    }
  }
}
</script>

<style scoped>
  /* @import './assets/css/App.css'; */
  /* src="@/assets/App.css" */
  /* @import '@/assets/App.css'; */
</style>

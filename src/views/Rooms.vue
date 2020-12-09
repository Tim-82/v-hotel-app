<template>
  <div class="roomsHero">
    <div class="banner">
      <h1>{{ title }}</h1>
      <div />
      <router-link class="btn-primary" :to="{name: 'home'}" tag="button">return home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <nav class="navbar">
    <div class="nav-center">
      <div class="nav-header">
        <router-link :to="{name: 'home'}">
          <img src="../assets/images/logo.svg" alt="Beach Resort">
        </router-link>
        <button
          class="nav-btn"
          type="button"
          @click="isOPen = !isOPen"
        >
          <i class="fas fa-align-right nav-icon"></i>
        </button>
      </div>
      <ul :class="[isOPen ? ['nav-links', 'show-nav'] : 'nav-links']">
        <router-link :to="{name: 'home'}" tag="li">Home</router-link>
        <router-link :to="{name: 'rooms'}" tag="li">Rooms</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isOPen: false
    }
  }
}
</script>

<style>
</style>

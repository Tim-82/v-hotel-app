<template>
  <div>
    <div class="defaultHero">
      <div class="banner">
        <h1>luxurious rooms</h1>
        <div />
        <p>deluxe rooms starting at $299</p>
        <router-link class="btn-primary" :to="{name: 'rooms'}" tag="button">our rooms</router-link>
      </div>
    </div>
    <Services/>
  </div>
</template>

<script>
import Services from '@/components/Services'

export default {
  name: 'Services',
  components: {
    Services
  }
}
</script>

<style>

</style>

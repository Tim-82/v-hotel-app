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
    <FeaturedRooms/>
  </div>
</template>

<script>
import Services from '@/components/Services'
import FeaturedRooms from '@/components/FeaturedRooms'

export default {
  name: 'Home',
  components: {
    Services,
    FeaturedRooms
  },
  data () {
    return {}
  },
  created () {
    this.get_data_from_api()
  },
  methods: {
    get_data_from_api () {
      this.$store.dispatch('GET_DATA_FROM_API')
    }
  }
}
</script>

<style>
</style>

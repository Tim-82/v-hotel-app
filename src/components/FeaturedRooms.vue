<template>
  <section class="featured-rooms">
    <div class="section-title">
      <h4>featured rooms</h4>
      <div />
    </div>
    <div class="featured-rooms-center">
      <Loading />
    </div>
  </section>
</template>

<script>
import Loading from './Loading.vue'
export default {
  components: {
    Loading
  },
  data () {
    return {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true
    }
  }
}
</script>

<style>

</style>

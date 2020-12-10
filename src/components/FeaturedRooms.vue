<template>
  <div>
    <Room />
    <section class="featured-rooms">
      <div class="section-title">
        <h4>featured rooms</h4>
        <div />
      </div>
      <div class="featured-rooms-center">
        <Loading />
      </div>
    </section>
  </div>
</template>

<script>
import Loading from './Loading.vue'
import Room from './Room.vue'

export default {
  components: {
    Loading,
    Room
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

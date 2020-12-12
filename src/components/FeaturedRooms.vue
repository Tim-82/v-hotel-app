<template>
  <div>
    <Room />
    <section class="featured-rooms">
      <div class="section-title">
        <h4>featured rooms</h4>
        <div />
      </div>
      <div class="featured-rooms-center">
        <article class="room">
          <div class="img-container">
            <img
              v-for="(f_room, index) in featuredRooms"
              :key=index
              :src="f_room[0]"
              alt="single room"
            >
          </div>
        </article>
      </div>
      <!-- <Loading /> -->
    </section>
  </div>
</template>

<script>
// import Loading from './Loading.vue'
import Room from './Room.vue'

export default {
  components: {
    // Loading,
    Room
  },
  props: {
    featuredRooms: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      rooms: [],
      sortedRooms: [],
      loading: true
    }
  }
}
</script>

<style>

</style>

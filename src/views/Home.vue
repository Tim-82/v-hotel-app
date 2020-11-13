<template>
  <div>
    <Navbar />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data () {
    return {
      films: []
    }
  }
}
</script>

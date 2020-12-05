<template>
  <section class="services">
    <div class="section-title">
      <h4>services</h4>
      <div />
    </div>

    <div  class="services-center">
      <article
        v-for="(item, index) in services"
        :key="index"
        class="service"
      >
        <!-- <span>{{item.icon}}</span> -->
        <span><i :class=item.icon></i></span>
        <h6>{{item.title}}</h6>
        <p>{{item.info}}</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      services: [
        {
          icon: 'fas fa-cocktail',
          title: 'Free coctails',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
          icon: 'fas fa-hiking',
          title: 'Endless Hiking',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
          icon: 'fas fa-shuttle-van',
          title: 'Free shuttle',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
          icon: 'fas fa-beer',
          title: 'Strongest Beer',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        }
      ]
    }
  }
}
</script>

<style>
</style>

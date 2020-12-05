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
        <span>{{item.icon}}</span>
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
          icon: '<i class="fas fa-cocktail"></i>',
          title: 'Free coctails',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
          icon: '<i class="fas fa-hiking"></i>',
          title: 'Endless Hiking',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
          icon: '<i class="fas fa-shuttle-van"></i>',
          title: 'Free shuttle',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
          icon: '<i class="fas fa-beer"></i>',
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

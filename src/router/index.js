import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Rooms from '@/components/Rooms.vue'
// import SingleRooms from '@/components/SingleRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rooms/',
    name: 'rooms',
    component: () => import('@/components/Rooms.vue')
  },
  {
    path: '/rooms/:id',
    name: 'singleRooms',
    component: () => import('@/components/SingleRoom.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Tuto from '../views/Tuto.vue'
import Wiki from '../views/Wiki.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tuto
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: Wiki
  }
]

const router = new VueRouter({
  routes
})

export default router

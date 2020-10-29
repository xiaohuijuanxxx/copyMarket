import Vue from 'vue'
import VueRouter from 'vue-router'

const index = ()=>import('@/views/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: "/copyMarket",
  routes
})

export default router

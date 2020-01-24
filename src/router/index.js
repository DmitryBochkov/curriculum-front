import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DisplayCurricula from '../views/DisplayCurricula.vue'
import DisplayCurriculum from '../views/DisplayCurriculum.vue'
import UpsertCurriculum from '../views/UpsertCurriculum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/curricula',
    name: 'DisplayCurricula',
    component: DisplayCurricula
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: DisplayCurriculum
  },
  {
    path: '/curriculum/upsert',
    name: 'upsert',
    component: UpsertCurriculum
  }
]

const router = new VueRouter({
  routes
})

export default router

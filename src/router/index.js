import Vue from 'vue'
import Router from 'vue-router'
import HomeSite from '@/pages/home/HomeSite.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeSite',
      component: HomeSite
    }
  ]
})

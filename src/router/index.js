import Vue from 'vue'
import Router from 'vue-router'
import HomeSite from '@/pages/home/HomeSite.vue'
import HomeCity from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeSite',
      component: HomeSite
    }, {
      path: '/city',
      name: 'HomeCity',
      component: HomeCity
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

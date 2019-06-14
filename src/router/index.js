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
  ],
  // 滚动行为： 每次刷新页面，都从顶部加载
  scrollBehavior (to, from, savedPositon) {
    return {x: 0, y: 0}
  }
})

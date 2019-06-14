<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'HomeSite',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      // city: '西安',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      console.log(this.city)
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        // this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconsList = res.data.iconsList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
      // console.log(res)
    }
  },
  computed: {
    ...mapState({
      city: 'city'
    })
  },
  mounted () {
    console.log('mounted..')
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 解决缓存问题
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
        :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">
          <p>{{sightName}}</p>
        </div>
        <div class="banner-number">
          <span class="iconfont">&#xe63e;</span>
            {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      :swiperList="gallaryImgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
// import CommonGallary from 'src/common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary: CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  data () {
    return {
      showGallary: false
      // gallaryImgs: [{
      //   id: '001',
      //   imgUrl: 'https://img1.qunarzz.com/travel/d2/1506/cb/2287edee229ebb.jpg'
      // }, {
      //   id: '002',
      //   imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/9001870e87c71627527bab14e6cf651b.jpg'
      // }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      display: flex
      left: 0
      bottom: .2rem
      right: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex: 1
        color: #fff
        text-align: left
        padding-left: .4rem
      .banner-number
        height: .3rem
        padding: 0 .4rem
        line-height: .3rem
        border-radius: .2rem
        background: rgba(0, 0, 0, 0.8)
</style>

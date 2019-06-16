<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
        src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/825d10452fe6890dd9b8ac1d294b44df.jpg"/>
      <div class="banner-info">
        <div class="banner-title">
          <p>古巴与生俱来的浪漫与激情</p>
        </div>
        <div class="banner-number">
          <span class="iconfont">&#xe63e;</span>
            39
        </div>
      </div>
    </div>
    <common-gallary
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

<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-detail-back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link tag="div" to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  // props: {
  //   swiperList: Array
  // },
  data () {
    return {
      showAbs: true,
      // 实现渐隐渐显的效果
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      let top = document.documentElement.scrollTop
      if (top > 40) {
        let opacity = top / 134
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 对上面全局事件进行解绑
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  .header-abs
    position: absolute
    left: .1rem
    top: .1rem
    width: .7rem
    height: .7rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-detail-back-icon
      color: #fff
      font-size: .3rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    background: $bgColor
    color: #fff
    text-align: center
    line-height: .56rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .8rem
</style>

<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="gallary-image" :src='item.imgUrl'/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  // props: {
  //   swiperList: Array
  // },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 加入图片页数下表
        paginationType: 'fraction',
        // 支持循环轮播
        loop: true,
        // 自动播放时间
        autoplay: 3000,
        // 播放的速度
        speed: 300,
        // 解决swiper图片宽度计算问题, swiper监听dom结构发生变化时会自动刷新页面
        observeParents: true,
        observer: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/travel/d2/1506/cb/2287edee229ebb.jpg'
      }, {
        id: '002',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/9001870e87c71627527bab14e6cf651b.jpg'
      }]
    }
  },
  methods: {
    // 点击事件触发，隐藏Gallary
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
      display: flex
      flex-direction: column
      justify-content: center
      z-index: 99
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: #000
      .wrapper
          height: 0
          width: 100%
          padding-bottom: 100%
          .gallary-image
              width: 100%
          .swiper-pagination
            color: #fff
            bottom: -1rem
</style>

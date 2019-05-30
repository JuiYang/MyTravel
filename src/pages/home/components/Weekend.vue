<template>
  <div>
      <div class="recommend-title">周末去哪儿</div>
      <ul>
          <li v-for="item of weekendList" :key="item.id">
            <!-- <div class="item-img-wrapper"> -->
            <div class="item-img-wrapper">
              <img class="item-img" :src='item.imgUrl'/>
            </div>
            <!-- </div> -->
            <div class="item-info">
                <p class="item-title">{{item.imgTitle}}</p>
                <p class="item-desc">{{item.imgDesc}}</p>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      // weekendList: [{
      //   id: '0001',
      //   imgUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
      //   imgTitle: '西安必打卡',
      //   imgDesc: '寻长安梦，开启穿越的圆梦之旅'
      // }, {
      //   id: '0002',
      //   imgUrl: 'http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg',
      //   imgTitle: '探寻文化古都',
      //   imgDesc: '一场时空穿越的旅行，探寻历史悠久的文化古都！寻觅历史留下的点点足迹，细细品味古人的伟大'
      // }, {
      //   id: '0003',
      //   imgUrl: 'http://img1.qunarzz.com/sight/source/1505/30/67d5e62ca78a29.jpg_r_640x214_9dfb4295.jpg',
      //   imgTitle: '西安花花世界',
      //   imgDesc: '月落星驰又一春，不负人间看花人'
      // }, {
      //   id: '0004',
      //   imgUrl: 'http://img1.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg',
      //   imgTitle: '西安演出在线',
      //   imgDesc: '这里有绚丽奇幻的神秘梦幻舞剧，歌舞揭开盛唐面纱，体验穿越时空的奇妙，感受大唐之盛世'
      // }]
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    @import '../../../assets/styles/mixins.styl'
    .recommend-title
      line-height .8rem
      background #eee
      text-indent -5.2rem
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 37.4375%
    .item-img
      width 100%
    .item-info
      flex 1
      overflow hidden
      padding .1rem
      padding-left .18rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
</style>

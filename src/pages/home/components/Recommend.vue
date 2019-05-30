<template>
  <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
          <li class="recommend-item border-bottom" v-for="item of recommendList" :key="item.id">
            <!-- <div class="item-img-wrapper"> -->
            <img class="item-img" :src='item.imgUrl'/>
            <!-- </div> -->
            <div class="item-info">
                <p class="item-title">{{item.imgTitle}}</p>
                <p class="item-desc">{{item.imgDesc}}</p>
                <button class="item-detail">查看详情</button>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      // recommendList: [{
      //   id: '0001',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_200x200_f54c65bd.jpg',
      //   imgTitle: '华清宫',
      //   imgDesc: '华清宫是唐代封建帝王游幸的别宫。'
      // }, {
      //   id: '0002',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_200x200_f54c65bd.jpg',
      //   imgTitle: '华清宫',
      //   imgDesc: '华清宫是唐代封建帝王游幸的别宫。'
      // }, {
      //   id: '0003',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_200x200_f54c65bd.jpg',
      //   imgTitle: '华清宫',
      //   imgDesc: '华清宫是唐代封建帝王游幸的别宫。'
      // }, {
      //   id: '0004',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_200x200_f54c65bd.jpg',
      //   imgTitle: '华清宫',
      //   imgDesc: '华清宫是唐代封建帝王游幸的别宫。'
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
    .recommend-item
        overflow hidden
        display flex
        height 1.86rem
        background #fff
        .item-img
          width 1.7rem
          height 1.7rem
          padding .1rem
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
            .item-detail
              background #ff9300
              border-radius .06rem
              color #fff
              margin-top .1rem
              padding 0 .1rem
</style>

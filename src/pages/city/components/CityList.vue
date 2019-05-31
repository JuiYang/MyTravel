<template>
  <div class="cityList" ref="wrapper">
    <div>
      <div class="location">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">西安</div>
          </div>
        </div>
      </div>
      <div class="hotCity">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div>
            <div class="button-wraper">
              <div class="button">西安</div>
            </div>
            <div class="button-wraper">
              <div class="button">北京</div>
            </div>
            <div class="button-wraper">
              <div class="button">上海</div>
            </div>
            <div class="button-wraper">
              <div class="button">杭州</div>
            </div>
            <div class="button-wraper">
              <div class="button">丽江</div>
            </div>
            <div class="button-wraper">
              <div class="button">桂林</div>
            </div>
          </div>
        </div>
      </div>
      <div class="chooseCity">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">西安</div>
          <div class="item border-bottom">咸阳</div>
          <div class="item border-bottom">渭南</div>
          <div class="item border-bottom">铜川</div>
          <div class="item border-bottom">宝鸡</div>
          <div class="item border-bottom">榆林</div>
          <div class="item border-bottom">杨凌</div>
          <div class="item border-bottom">安康</div>
          <div class="item border-bottom">商洛</div>
          <div class="item border-bottom">汉中</div>
        </div>
      </div>
      <div class="chooseCity">
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">西安</div>
          <div class="item border-bottom">咸阳</div>
          <div class="item border-bottom">渭南</div>
          <div class="item border-bottom">铜川</div>
          <div class="item border-bottom">宝鸡</div>
          <div class="item border-bottom">榆林</div>
          <div class="item border-bottom">杨凌</div>
          <div class="item border-bottom">安康</div>
          <div class="item border-bottom">商洛</div>
          <div class="item border-bottom">汉中</div>
        </div>
      </div>
      <div class="chooseCity">
        <div class="title border-topbottom">C</div>
        <div class="item-list">
          <div class="item border-bottom">西安</div>
          <div class="item border-bottom">咸阳</div>
          <div class="item border-bottom">渭南</div>
          <div class="item border-bottom">铜川</div>
          <div class="item border-bottom">宝鸡</div>
          <div class="item border-bottom">榆林</div>
          <div class="item border-bottom">杨凌</div>
          <div class="item border-bottom">安康</div>
          <div class="item border-bottom">商洛</div>
          <div class="item border-bottom">汉中</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .cityList
    top: 1.6rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    position: absolute
    .title
      line-height: .64rem
      background: #eee
      color: #666
      text-align: left
      padding-left: .1rem
    .button-list
      overflow: hidden
      padding: .05rem
      .button-wraper
        width: 33.33%
        float: left
        .button
          border: .02rem solid #ccc
          text-align: center
          margin: .1rem
          border-radius: .06rem
          padding: .15rem 0
    .item-list
      .item
        line-height: .65rem
        padding-left: .2rem
        text-align: left
</style>

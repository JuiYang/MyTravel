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
            <div class="button-wraper" v-for="item of hotCity" :key="item.id">
              <div class="button">{{item.name}}</div>
            </div>
            <!-- <div class="button-wraper">
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
            </div> -->
          </div>
        </div>
      </div>
      <div class="chooseCity" v-for="(items, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="item of items" :key="item.id">
          <div class="item border-bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCity: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  components: {
  },
  // 监听器
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
      console.log(this.letter)
    }
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

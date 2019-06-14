<template>
  <div>
    <div class="item" v-for="(item, key) of list" :key="key">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  // props: {
  //   swiperList: Array
  // },
  data () {
    return {
      showAbs: true
    }
  },
  props: {
    list: Array
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  .item-children
    padding-left: .2rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    text-align: left
    .item-title-icon
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block;
      width: .36rem;
      height: .36rem;
      background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
</style>

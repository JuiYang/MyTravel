<template>
  <div class="cityHead">
      城市选择
      <router-link to="/">
        <div class="iconfont city-head-back">&#xe624;</div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  .cityHead
    position: relative
    background: $bgColor
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    font-size: .34rem
    .city-head-back
      position: absolute
      top: 0
      width: .6rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>

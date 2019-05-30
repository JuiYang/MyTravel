<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont input-icon">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  .header
    display: flex
    line-height: .56rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      margin-top: 0.12rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      margin-top: .12rem
      margin-bottom: .12rem
      margin-left: .20rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      margin-top: 0.12rem
      .arrow-icon
        font-size: .3rem
        margin-left: -0.1rem
</style>

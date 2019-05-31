<template>
  <div class="city-search">
      <input class="search-input" type="text" placeholder="请输入城市或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  .city-search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      height: .62rem
      line-height: .62rem
      width: 100%
      color: #666
      border-radius: .1rem
      padding-left: .2rem
      text-align: left
</style>

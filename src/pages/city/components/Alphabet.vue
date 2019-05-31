<template>
  <div>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">D</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityAlphabet',
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
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    text-align: right
    top: 1.54rem
    right: 0
    bottom: 0
    width: .24rem
    .item
      line-height: .3rem
      text-align: center
      color: $bgColor
</style>

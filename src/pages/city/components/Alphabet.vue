<template>
  <div>
    <ul class="list">
      <li class="item" v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item">
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { clearTimeout, setTimeout } from 'timers'
// import { constants } from 'fs'
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 页面渲染完成时，生命周期钩子会执行，刷新时执行
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    // 通过函数节流的方式减少HandleTouchMove函数的执行次数，16s之后执行的操作会覆盖16s之前执行的操作，减少执行次数
    handleTouchMove (e) {
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          console.log(this.startY)
          const touchY = e.touches[0].clientY - 70
          console.log(touchY)
          const index = Math.floor((touchY - this.startY) / 15)
          console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
          console.log('index letter ' + this.letters[index])
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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

<template>
  <div>
    <div class="city-search">
        <input v-model="keyWord" class="search-input" type="text" placeholder="请输入城市或拼音">
        <div class="search-content" v-show="keyWord" ref="search">
          <ul>
            <li class="search-item border-bottom" v-for="item of list" :key="item"
            @click="handleCityClick(item.name)">{{item.name}}</li>
            <li class="search-item border-bottom" v-show="notFindData">没有找到对应数据</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers'
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyWord: '',
      timer: null,
      list: []
    }
  },
  props: {
    cities: Object
  },
  computed: {
    notFindData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.keyWord = this.$store.state.city
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyWord) > -1 ||
            value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  components: {
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {
      click: true
    })
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
  .search-content
    z-index: 1
    text-align: left
    overflow: hidden
    position: absolute
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .68rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>

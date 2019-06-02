<template>
  <div class="icons">
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :hotCity="hotCity" :cities="cities" :letter="letter"></city-list>
      <city-alphabet :cities="cities"
      @change="handleLetterChange"
      ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/Alphabet.vue'

export default {
  name: 'HomeCity',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  },
  data () {
    return {
      hotCity: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCitySucc)
    },
    getCitySucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.hotCity = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
      console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>

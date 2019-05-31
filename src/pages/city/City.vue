<template>
  <div class="icons">
      <city-header></city-header>
      <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
export default {
  name: 'HomeCity',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>

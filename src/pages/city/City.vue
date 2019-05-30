<template>
  <div class="icons">
      <city-header></city-header>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader.vue'
export default {
  name: 'HomeCity',
  components: {
    CityHeader: CityHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>

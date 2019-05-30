<template>
  <div class="hello">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default {
  name: 'HomeSite',
  components: {
    HomeHeader: HomeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

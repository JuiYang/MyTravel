<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailList from './components/List.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader,
    DetailList: DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '大连圣亚海洋馆'
        }, {
          title: '海洋动物世界滑稽表演'
        }]
      }, {
        title: '学生票',
        children: [{
          title: '大连圣亚海洋馆'
        }, {
          title: '海洋动物世界滑稽表演'
        }]
      }, {
        title: '大学生票',
        children: [{
          title: '大连圣亚海洋馆'
        }, {
          title: '海洋动物世界滑稽表演'
        }]
      }, {
        title: '长者票',
        children: [{
          title: '大连圣亚海洋馆'
        }, {
          title: '海洋动物世界滑稽表演'
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>

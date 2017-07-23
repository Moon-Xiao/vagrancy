<template>
  <div class="city-index">
    <city-index-info :des="city"></city-index-info>

    <div class="hot-des">
      <p class="plcHotPlaceAll">
        <a href="#" class="bigBtnViewAll fontYaHei">查看全部景点（12）</a>
      </p>
    </div>
  </div>
</template>
<script>
  import CityIndexInfo from '../Common/IndexInfo.vue'
  export default {
    components: {CityIndexInfo},
    data () {
      return {}
    },
    props: {
      city: Object
    }
  }
</script>
<style>
</style>

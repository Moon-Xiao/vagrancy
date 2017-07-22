<template>
  <div class="city-index">
    <city-index-info :desIndexInfo="cityIndexInfo"></city-index-info>

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
      return {
        cityIndexInfo: {
          img: [
            '/static/images/des/country/china1 680x400.jpg',
            '/static/images/des/country/china2 680x400.jpg',
            '/static/images/des/country/china3 680x400.jpg'
          ],
          experiences: [
            {
              author: 'author0',
              content: '1997年之前就來過澳門和香港，那時候，並沒有自由行這一說。當時，私下之見，對澳門的印象比較好。20年之後，來香港工作，除了見識到香港的繁華和擁擠之外，也體會到香港的可愛與靈動。'
            },
            {
              author: '子虎sama',
              content: '金窝银窝，不如自己的土窝。'
            },
            {
              author: '天马行空02',
              content: '201105 港澳游 20121018台湾旅游。'
            },
            {
              author: 'senor_s',
              content: '太多风景没有看过。'
            }
          ],
          travels: {
            img: '/static/images/des/country/china travels.jpg',
            title: '香港有记',
            author: 'sherylll',
            amount: 154759
          }
        }
      }
    },
    props: {
      city: Object
    }
  }
</script>
<style>
</style>

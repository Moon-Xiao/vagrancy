<template>
  <div id="collection">
    <tab :tabs="collectionList">
      <div v-for="(item,index) in collectionList" :slot="`nav-`+index" :style="'background-color:'+item.color"
           style="width: 100%;height: 300px">
        {{item.info}}
      </div>
    </tab>
  </div>
</template>
<script>
  import Tab from './Comment/Tab.vue'

  export default {
    data () {
      return {
        collectionList: [
          {title: '1', info: 'i1', color: 'red'},
          {title: '2', info: 'i2', color: 'blue'},
          {title: '3', info: 'i3', color: 'yellow'},
          {title: '4', info: 'i4', color: 'pink'}
        ]
      }
    },
    props: {},
    components: {
      Tab
    },
    methods: {}
  }
</script>
<style lang="less">

</style>

<template>
  <div>
    <tabs :tabs="tabs"></tabs>
  </div>
</template>

<script>
  import Tabs from './Tabs.vue'
  export default {
    components: {Tabs},
    mounted () {
      console.log(this.$slots)
    },
    props: {
      tabs: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="less">

</style>

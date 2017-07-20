<template>
  <div class="scenic-index">
    <scenic-info :scenic="scenic"></scenic-info>
  </div>
</template>
<script>
  import ScenicInfo from './ScenicInfo.vue'
  export default {
    components: {ScenicInfo},
    data () {
      return {}
    },
    props: {
      scenic: Array
    }
  }
</script>
<style>
</style>

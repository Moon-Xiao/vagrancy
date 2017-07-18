<template>
  <div class="stores">
    <!--<StoresBanner></StoresBanner>-->

    <router-view></router-view>
    <!--<StoreSlides></StoreSlides>-->
    <!--<advert-strip></advert-strip>-->
  </div>
</template>
<script>
  import {links} from '../router/index.js'
  export default{
    data () {
      return {
        links: links
      }
    }
  }
</script>
<style>
</style>

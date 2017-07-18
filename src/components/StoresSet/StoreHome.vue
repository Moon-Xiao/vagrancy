<template>
  <div id="store-home-container">
    <StoresBanner></StoresBanner>
    <b-navbar toggleable type="inverse" id="store-nav">
      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <template v-if="link.path==='/stores'" v-for="link in links">
            <template v-for="item in link.children">
              <b-nav-item :to='item.path'>{{item.name}}</b-nav-item>
            </template>
          </template>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <store-slides></store-slides>
    <store-ad></store-ad>
    <store-flash-sale></store-flash-sale>
    <store-flight-hotel></store-flight-hotel>
    <store-local-place></store-local-place>
  </div>
</template>

<script>
  import StoresBanner from './StoresBanner.vue'
  import {links} from '../../router/index.js'
  import StoreSlides from './StoreSlides.vue'
  import StoreAd from './StoreAd.vue'
  import StoreFlashSale from './StoreFlashSale.vue'
  import StoreFlightHotel from './StoreFlightHotel.vue'
  import StoreLocalPlace from './StoreLocalPlace.vue'

  export default {
    components: {
      StoresBanner,
      StoreSlides,
      StoreAd,
      StoreFlashSale,
      StoreFlightHotel,
      StoreLocalPlace
    },
    data () {
      return {
        links: links
      }
    }
  }
</script>

<style>
  #store-home-container{
    width: 100%;
  }

  #store-nav{
    padding: 0 4rem;
  }

  #store-home-container .navbar .nav.navbar-nav li>a.active {
    box-sizing: border-box;
    color: #f8f8f8;
    background-color: violet;
    transition: 0.5s background-color;
  }
</style>

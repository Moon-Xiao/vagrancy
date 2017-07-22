<template>
  <div id="store-home-container">
    <StoresBanner></StoresBanner>
    <b-navbar toggleable type="inverse" id="store-nav">
      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <template v-if="link.path==='/stores'" v-for="link in links">
            <template v-if="item.name!==''" v-for="item in link.children">
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
    <store-theme-ad></store-theme-ad>
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
  import StoreThemeAd from './StoreThemeAd.vue'

  export default {
    components: {
      StoresBanner,
      StoreSlides,
      StoreAd,
      StoreFlashSale,
      StoreFlightHotel,
      StoreLocalPlace,
      StoreThemeAd
    },
    data () {
      return {
        links: links
      }
    }
  }
</script>

<style>
  #store-home-container {
    width: 100%;
  }

  #store-nav {
    padding: 0 4rem;
  }

  #store-home-container .navbar .nav.navbar-nav li > a.active {
    box-sizing: border-box;
    background-color: #00b081;
    transition: 0.5s background-color;
  }

  .navbar .nav.navbar-nav li > a {
    position: relative;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    font-weight: bold;
    color: #323232;
    transition: 0.5s background-color;
  }

  #store-home-container .navbar .navbar-nav li a.nav-link:before {
    content: '';
    position: absolute;
    left: 50%;
    right: 50%;
    top: 0;
    background: #00b081;
    height: 4px;
    transition-property: left, right;
    transition-duration: .3s;
    transition-timing-function: ease-out;
  }

  #store-home-container .navbar .nav.navbar-nav .nav-item:hover .nav-link {
    color: #00b081;
  }
</style>

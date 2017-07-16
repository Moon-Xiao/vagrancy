<template>
  <div class="home">
    <carousel></carousel>
    <advert-strip></advert-strip>
    <interest-section></interest-section>
    <counter></counter>
    <travels-section></travels-section>
    <!--<store-section></store-section>-->
    <cooperator></cooperator>

  </div>

</template>
<script>
  import Carousel from './Home/Carousel'
  import AdvertStrip from './Home/AdvertStrip.vue'
  import InterestSection from './Home/InterestSection.vue'
  import TravelsSection from './Home/TravelsSection.vue'
  import Cooperator from './Home/Cooperator.vue'
  //  import StoreSection from './Home/StoreSection.vue'
  import Counter from './Home/Counter.vue'
  export default{
    components: {
      Carousel,
      AdvertStrip,
      InterestSection,
      Counter,
      TravelsSection,
      //      StoreSection,
      Cooperator
    }
  }
</script>

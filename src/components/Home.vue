<template>
  <div class="home">
    <carousel></carousel>
    <advert-strip></advert-strip>
    <interest-section></interest-section>
    <travels-section></travels-section>
  </div>

</template>
<script>
  import Carousel from './Home/Carousel'
  import AdvertStrip from './Home/AdvertStrip.vue'
  import InterestSection from './Home/InterestSection.vue'
  import TravelsSection from './Home/TravelsSection.vue'
  export default{
    components: {
      Carousel,
      AdvertStrip,
      InterestSection,
      TravelsSection
    }
  }
</script>

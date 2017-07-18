<template>
  <div class="store-ad-container">
    <img class="ad-item" v-for="image in album" :src="image.src"/>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          album: [
            {
              src: '/static/images/store_temp/ad1.jpg'
            },
            {
              src: '/static/images/store_temp/ad2.jpg'
            },
            {
              src: '/static/images/store_temp/ad3.jpg'
            },
            {
              src: '/static/images/store_temp/ad4.jpg'
            }
          ]
        }
      }
    }
</script>

<style>
  .store-ad-container{
    display: flex;
    height: 9rem;
    width: 100%;
    padding: 1rem 4rem;
  }

  .ad-item{
    flex: 1;
    margin-right: 1rem;
    border-radius: 0.5rem;
  }
</style>

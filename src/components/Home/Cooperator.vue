<template>
  <div class="cooperator">
    <section class="container">
      <div ref="companies" class="companies">

          <img v-for="i in 8" :src="`/static/images/company${i}.png`">

      </div>
    </section>
  </div>
</template>
<script>
  export default{

    mounted () {
      this.$refs.companies.animate({left: '-=10px'})
    }
  }
</script>
<style scoped>
  .cooperator {
    margin:50px 0;
  }
  .cooperator .container {
    height: 90px;
    overflow: hidden;

  }
  .cooperator .companies{
    overflow: hidden;
    height: 80px;
    white-space: nowrap;
    position: absolute;
    animation:ncompanie 10s infinite;
    -moz-animation:ncompanie 10s infinite; /* Firefox */
    -webkit-animation:ncompanie 10s infinite; /* Safari and Chrome */
    -o-animation:ncompanie 10s infinite; /* Opera */
    animation-direction:alternate;
    -webkit-animation-direction:alternate;
  }
  @keyframes ncompanie {
    0%   {left:0px; }
    100%  {left:-800px;}
  }
  @-webkit-keyframes ncompanie /* Safari and Chrome */
  {
    0%   {left:0px; }
    100%  {left:-800px;}
  }

  .cooperator .companies img {
    padding: 15px;
    height: 100%;
  }
</style>

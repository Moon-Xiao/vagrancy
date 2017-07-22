<template>
  <div id="concern">
    <div class="row">
      <div v-for="(item,index) in items" class="col-3">
        <div class="card" :style="'background-color:'+colors[index%colors.length]">
          <div class="card-icon">
            <div class="icon"></div>
          </div>
          <div class="card-info"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data  () {
      return {
        colors: ['red', 'blue', 'yellow'],
        items: [
          {img: '', name: '', rate: '', tipList: [], sameFans: ''},
          {},
          {},
          {}
        ]
      }
    },
    methods: {}
  }
</script>

<style>
  #concern .row .card {
    height: 8rem;
  }

  #concern .row .card .card-icon {
    display: inline-block;
  }

  #concern .row .card .card-icon .icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 1rem auto;
    background-color: #1baede;
  }

  #concern .row .card .card-info {
    display: inline-block;
  }
</style>

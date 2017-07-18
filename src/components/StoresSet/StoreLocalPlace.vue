<template>
  <div class="store-localplace-container">
    <div class="flashsale-top">
      <span class="store-home-common-title">当地玩乐</span>
      <span class="store-home-common-subtitle">像当地人一样，体验最本土的吃喝玩乐</span>
    </div>
    <div class="flashsale-bottom">
      <div class="flashsale-item" v-for="item in saleItems">
        <img :src="item.src"/>
        <div id="item-description">
          <p>{{item.description}}</p>
          <div id="price-div">
            <span id="item-price">{{item.price}}</span>
            <span id="unit">元起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style>
  .store-localplace-container {
    height: 24rem;
    width: 100%;
    padding: 1rem 4rem;
    display: flex;
    flex-direction: column;
    color: gray;
    font-size: 0.9rem;
    font-weight: bold;
    background-color: rgb(241,241,241);
  }
</style>

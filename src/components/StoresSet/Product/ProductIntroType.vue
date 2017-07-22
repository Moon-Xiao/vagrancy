<template>
  <div class="product-intro-type">
    <div class="product-intro-left">
      <img :src="productDetail.src"/>
      <p class="product-id">产品编号：{{productDetail.id}}</p>
      <div class="collection-div">
        <div @click="clicked=!clicked" :class="['item-div',{active:clicked}]">
          <i v-if="!clicked" class="fa fa-heart-o"></i>
          <i v-if="clicked" class="fa fa-heart"></i>
          <span>收藏</span>
        </div>
        <div class="item-div">
          <i class="fa fa-share-alt"></i>
          <span>分享</span>
        </div>
      </div>
    </div>
    <div class="product-intro-right">
      <div class="product-type-row">
        <div class="row-title">出发城市</div>
        <div class="row-types">
          <button @click="choosen1=index+1" :class="['type-item',{active:choosen1===index+1}]" type="button"
                  v-for="(place,index) in productDetail.departures">{{place.name}}
          </button>
        </div>
      </div>
      <div class="product-type-row">
        <div class="row-title">行程天数</div>
        <div class="row-types" style="clear: both">
          <button @click="choosen2=index+1" :class="['type-item',{active:choosen2===index+1}]" type="button"
                  v-for="(day,index) in productDetail.days">{{day.time}}天往返
          </button>
        </div>
      </div>
      <div class="product-type-row">
        <div class="row-title">航空公司</div>
        <div class="row-types">
          <button @click="choosen3=index+1" :class="['type-item',{active:choosen3===index+1}]" type="button"
                  v-for="(aircompany,index) in productDetail.airplaneCompanys">{{aircompany.name}}
          </button>
        </div>
      </div>
      <div class="product-type-row">
        <div class="row-title">出行日期</div>
        <div class="row-types">
          <button @click="choosen4=index+1" :class="['type-item',{active:choosen4===index+1}]" type="button"
                  v-for="(departureDate,index) in productDetail.departureDates">{{departureDate.des}}
          </button>
        </div>
      </div>
      <div class="product-type-row">
        <div class="row-title">数量</div>
        <div class="plus-minus-div">
          <button type="button" class="yunsuan" @click="number=number>1?number-1:1">-</button>
          <input id="choose-number-input" type="text" pattern="[0-9][1-9]*" :value="number"/>
          <button type="button" class="yunsuan" @click="number++">+</button>
        </div>
      </div>
      <div class="product-type-row">
        <div class="buy-it-now">
          <router-link to="/collection" class="buy-button">立即购买</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      productDetail: Object
    },
    data () {
      return {
        clicked: false,
        choosen1: 1,
        choosen2: 1,
        choosen3: 1,
        choosen4: 1,
        number: 1
      }
    }
  }
</script>

<style scoped>
  .product-intro-type {
    width: 100%;
    padding: 0.5rem 12rem 2rem 8rem;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .product-intro-left {
    width: 42%;
    position: relative;
  }

  .product-intro-right {
    width: 53%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-intro-left img {
    width: 100%;
  }

  .product-intro-left p {
    position: absolute;
    top: 0.6rem;
    left: 0.8rem;
    font-size: 0.7rem;
    font-weight: bold;
    color: white;
  }

  .product-type-row {
    width: 100%;
    padding: 1rem;
  }

  .row-title {
    color: #383838;
    font-weight: bold;
    font-size: 1rem;
    text-align: left;
  }

  .row-types {
    padding: 0.8rem 0;
  }

  .row-types .type-item {
    margin-right: 1rem;
    background-color: white;
    color: #707070;
    border: solid 1px rgb(180, 180, 180);
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    outline: none;
    float: left;
    margin-top: 0.7rem;
  }

  .row-types .type-item:hover {
    border: solid 1px #707070;
  }

  .row-types .active {
    color: rgb(253, 117, 107);
    border: solid 1px rgb(253, 117, 107);
    box-shadow: 0 0 2px rgb(253, 117, 107);
  }

  .row-types .active:hover {
    color: rgb(253, 117, 107) !important;
    border: solid 1px rgb(253, 117, 107) !important;
  }

  .plus-minus-div {
    float: left;
    padding: 1rem 0;
  }

  #choose-number-input {
    width: 3rem;
    text-align: right;
    padding-right: 0.5rem;
  }

  .yunsuan {
    outline: none;
    width: 1.5rem;
    background-color: rgb(240, 240, 240);
    border: none;
  }

  .buy-it-now {
    float: right;
    padding-right: 2rem;
  }

  .buy-it-now .buy-button {
    background-color: rgb(253, 117, 107);
    font-size: 1.2rem;
    border: none;
    color: white;
    padding: 0.8rem 1rem;
    outline: none;
    box-shadow: 0 0 2px rgb(253, 117, 107);
  }

  .item-div {
    float: left;
  }

  .item-div:hover i, .item-div:hover span {
    color: #00b081;
  }

  .collection-div {
    padding: 1rem 0;
    float: left;
  }

  .collection-div i {
    font-size: 1.3rem;
    color: rgb(140, 140, 140);
    padding: 0.3rem 0.3rem 0 0;
  }

  .collection-div span {
    color: #717171;
    padding-right: 1.5rem;
  }

  .collection-div .active i{
    color: rgb(253,117,106);
  }

</style>

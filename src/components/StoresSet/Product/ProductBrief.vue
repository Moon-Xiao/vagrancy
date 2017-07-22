<template>
  <div class="product-brief-container">
    <div class="product-top-des">
      <div class="product-title">{{productDetail.description}}</div>
      <div class="product-price">
        <span class="price">{{productDetail.price}}</span>
        <span>元起</span>
      </div>
    </div>
    <div class="bought-num">
      <span>已售{{productDetail.soldNum}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      productDetail: Object
    }
  }
</script>

<style>
  .product-brief-container {
    width: 100%;
    padding: 1rem 8rem;
    background-color: rgb(240,240,240);
  }

  .product-top-des {
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
    margin-right: 3rem;
    font-size: 1.3rem;
  }

  .product-price{
    width: 30rem;
    text-align: right;
    font-size: 0.9rem;
    color: rgb(120,120,120);
  }

  .product-price .price{
    font-size: 1.5rem;
    color: rgb(253, 117, 107);
    font-weight: bold;
  }

  .bought-num{
    color: rgb(140,140,140);
    text-align: left;
    font-size: 0.8rem;
    padding: 0.5rem 0;
  }

</style>

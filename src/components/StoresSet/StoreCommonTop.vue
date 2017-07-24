<template>
  <div class="store-common-top-container" style="clear: both">
    <div class="store-logo">
      旅途商城
    </div>
    <div class="store-search" :style="focusing ? 'border: solid 1px #00b081' : ''">
      <i class="fa fa-search"></i>
      <input @focus="focusing = true" @blur="focusing = false" placeholder="搜索国家、城市、产品"/>
    </div>
    <div class="store-collection">
      <div class="store-collection-item">
        <i class="fa fa-shopping-cart"></i>
        <span>我的订单</span>
      </div>
      <span>|</span>
      <div class="store-collection-item">
        <router-link to="/person/my-bag">
          <i class="fa fa-heart"></i>
          <span style="color: #717171">我的收藏</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        focusing: false
      }
    }
  }
</script>

<style>
  .store-common-top-container {
    padding: 0.5rem 4rem;
    vertical-align: center;
    width: 100%;
    height: 4rem;
  }

  .store-logo {
    color: #00b081;
    font-size: 2rem;
    font-weight: bold;
    float: left;
  }

  .store-search {
    width: 60%;
    float: left;
    border-radius: 1.25rem;
    background-color: rgb(240, 240, 240);
    height: 2.5rem;
    margin: 0.3rem 1rem 0 6rem;
    padding: 0.2rem 0.5rem;
  }

  .store-search i {
    float: left;
    margin-top: 0.4rem;
    margin-left: 0.3rem;
    font-size: 1.2rem;
    color: #00b081;
  }

  .store-search input {
    height: 100%;
    float: left;
    width: 80%;
    margin-left: 0.6rem;
    border: none;
    background-color: inherit;
  }

  .store-collection {
    float: left;
    padding: 0.8rem 0.5rem;
    color: #717171;
  }

  .store-collection i {
    float: left;
    padding: 0.2rem 0.4rem 0 0.2rem;
    color: #00b081;
  }

  .store-collection > span {
    float: left;
    font-size: 1.2rem;
  }

  .store-collection-item {
    float: left;
    padding: 0.5rem;
  }
</style>

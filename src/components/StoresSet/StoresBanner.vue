<template>

  <div id="store-search-banner">
    <div class="banner-item">
      <div id="vagrancy-store-logo">
        旅途商城
      </div>
      <div id="vagrancy-store-description">
        | 旅行特价 一键预订
      </div>
    </div>
    <div class="banner-item">
      <div id="store-search">
        <input id="search-input" placeholder="搜索国家、城市、产品"/>
        |
        <i class="fa fa-search"></i>
        <span>搜索</span>
      </div>
    </div>
    <div class="banner-item" id="app-logo-div">
      <div id="app-logo">
        <i class="fa fa-mobile"></i>
        <p>APP</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchItems: [
          {
            name: '目的地',
            icon: 'map-marker'
          },
          {
            name: '做行程',
            icon: 'calendar-check-o'
          },
          {
            name: '买折扣',
            icon: 'level-down'
          },
          {
            name: '酒店',
            icon: 'building'
          }
        ],
        selectedIndex: 1
      }
    }
  }
</script>

<style>

  #store-search-banner {
    font-family: Arial;
    position: relative;
    width: 100%;
    min-width: 800px;
    height:8rem;
    //background-color: pink;
    background: url("/static/images/store_temp/store_search_banner.jpg") no-repeat;
    background-size: cover;
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }

  .banner-item{
    flex: 1;
  }

  #store-search{
    border-radius: 1rem;
    height: 2rem;
    background-color: white;
    padding: 0.2rem 0rem 0.2rem 0.8rem;
  }

  #store-search span{
    font-size: 0.85rem;
    margin-left: 0.3rem;
  }

  #search-input{
    height: 100%;
    display: inline-block;
    float: left;
    width: 70%;
    font-size: 0.8rem;
    border: none;
  }

  #app-logo-div{
    align-self: flex-start;
  }

  #app-logo{
    height: 5rem;
    width: 3rem;
    background: url("/static/images/store_temp/top-app-bg.png") no-repeat;
    background-size: cover;
    margin: auto;
  }

  #app-logo i{
    font-size: 2rem;
    color: white;
    margin-top: 0.5rem;
  }

  #app-logo p{
    font-size: 0.8rem;
    color: white;
    font-weight: 200;
  }

  #vagrancy-store-logo{
    font-family: Arial;
    display: inline-block;
    width: auto;
    //background-color: floralwhite;
    //line-height: 10rem;
    font-size: 2.5rem;
    padding: 0 0.7rem;
  }

  #vagrancy-store-description{
    font-family: Arial;
    display: inline-block;
    width: auto;
    height: 2.5rem;
    //background-color: floralwhite;
   // line-height: 2.5rem;
    font-size: 1rem;
    padding: 0;
  }

</style>

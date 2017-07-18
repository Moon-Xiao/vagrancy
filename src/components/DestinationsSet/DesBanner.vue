<template>
  <div class="des-banner headerBox">
    <div id="headerScrollLimiter" class="headerScrollLimiter" data-backdrop-width="1920">
      <div class="promo" style="overflow:hidden;">
        <img id="backdrop" src="/static/images/des_bar_bg_01.jpg">
      </div>
      <div class="header-search-wrapper">
        <h2>准备,出发!</h2>
        <b-input-group d="destinationSearch">
          <b-form-input placeholder="搜索..."></b-form-input>
          <!-- Attach Right button -->
          <b-input-group-button slot="right" style="border: 0;">
            <b-btn style="border: 0;">
              <p class="fa fa-search"></p>
            </b-btn>
          </b-input-group-button>

        </b-input-group>


      </div>
      <div class="header-crumbs-wrapper">
        <ul class="inline-ul">
          <span class="fa  fa-map-marker"></span>
          <li><a href="">泰国</a></li>
          <span>&gt;</span>
          <li>
            <a href="">苏梅岛</a>
          </li>
          <span>&gt;</span>
          <li>
            <a href="">拉迈海滩</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .headerScrollLimiter {
    position: relative;
    min-width: 990px;
    width: 100%;
    margin: 0 auto;
    max-width: 2560px;
    overflow: hidden;
  }

  .header-search-wrapper {
    position: absolute;
    width: 600px;
    bottom: 0;
    left: 50%;
    text-align: center;
    margin-left: -300px;
    margin-bottom: 155px;
  }

  .header-search-wrapper h2 {
    font-size: 48px;
    font-weight: normal;
    color: #fff;
    margin-bottom: 20px;
    text-shadow: 1px 1px 0 #666;
  }

  .inline-ul span{
    color: white;
  }
  .form-control {
    border: 0px solid rgba(0, 0, 0, 0.15);
  }

  .btn-secondary:hover {
    color: chocolate;
  }

  .header-crumbs-wrapper {
    font-size: 1.2rem;
    color: white;
    position: absolute;
    right: 20px;
    bottom: 0;
  }

  .header-crumbs-wrapper a {
    color: white;
  }
</style>

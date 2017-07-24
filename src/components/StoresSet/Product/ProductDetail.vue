<template>
  <div class="product-detail">
    <div class="product-detail-left">
      <div class="pro-line-div">
        <div class="pro-det-title">预定流程</div>
        <div class="pro-det-content-line">
          <span class="pro-subtitle">二次确认</span>
          <p>本产品为二次确认产品,如库存不足我们会在下单后1个工作日内回复您,可帮您推荐邻近日期,若推荐日期无法出行可申请退款,拍下即默认此项条款。</p>
        </div>
        <div class="pro-det-content-line">
          <span class="pro-subtitle">预定流程</span>
          <div class="pro-img-div">
            <img src="/static/images/store_temp/img_prebook.jpg"/>
          </div>
        </div>
      </div>
      <div class="pro-line-div">
        <div class="pro-det-title">推荐行程</div>
        <div v-for="(prodet,index) in productDetail.journal" class="pro-det-content-line">
          <span v-if="index===0" class="pro-subtitle">参考行程</span>
          <span v-if="index!=0" class="pro-subtitle"></span>
          <div class="pro-img-div">
            <img :src="baseUrl+'/'+prodet.photo.path"/>
          </div>
        </div>
        <div class="pro-det-content-line">
          <span class="pro-subtitle">出行提示</span>
          <p>1. 行程中所列航班时间为参考时间，具体出发时间以实际出票为准<br>
            2. 行程中所列酒店及房型为参考，具体酒店及房型以实际预订确认为准</p>
        </div>
      </div>
      <div class="pro-line-div">
        <div class="pro-det-title">其他说明</div>
        <p class="special-intro">1. 此产品只适用于中华人民共和国港澳通行证持有者<br>
          2. 需要提供距回国日期6个月以上有效期的有效港澳通行证<br>
          3. 婴儿票年龄标准：回程时，婴儿年龄需在2周岁以下<br>
          4. 为确保您的正常出行，请在预订成功后2个工作日内将港澳通行证正反面照片发送至百程旅行网邮箱ZYX@baicheng.com，如因客人自身原因未能在出票时限内提供港澳通行证信息，由此产生的损失，需客人自行承担，请知悉，谢谢配合！<br>
          5. 本产品需自备有效香港个人旅游签注（G签），如您持团队签注（L签）请联系客服安排有偿送关服务，由于签注问题导致无法出行的责任需由旅游者自行承担</p>
      </div>
      <div class="pro-line-div">
        <div class="pro-det-title">咨询</div>
      </div>
    </div>
    <div class="product-detail-right">
      <store-lists-right></store-lists-right>
    </div>
  </div>

</template>

<script>
  import StoreListsRight from '../StoreListsRight.vue'

  export default {
    components: {
      StoreListsRight
    },
    props: {
      productDetail: Object
    }
  }
</script>

<style>
  .product-detail {
    width: 100%;
    padding: 0.5rem 12rem 2rem 8rem;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .product-detail-left {
    flex: 8;
    background-color: white;
  }

  .product-detail-right {
    flex: 3;
    background-color: white;
  }

  .pro-det-title {
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    padding: 0.8rem 1rem;
  }

  .pro-det-content-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  .pro-det-content-line .pro-subtitle {
    flex: 1;
    padding: 0.5rem 1rem 1rem 1rem;
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
    color: #333333;
  }

  .pro-det-content-line p {
    flex: 5;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    color: #555555;
    text-align: left;
  }

  .pro-det-content-line .pro-img-div {
    flex: 5;
  }

  .pro-det-content-line .pro-img-div img {
    width: 100%;
  }

  .pro-line-div {
    padding: 1rem 0;
  }

  .special-intro {
    width: 100%;
    color: #555555;
    text-align: left;
    padding: 0.5rem 1rem 1rem 2.7rem;
    line-height: 2rem;
  }

  .store-lists-right-container{
    padding: 0;
  }

</style>

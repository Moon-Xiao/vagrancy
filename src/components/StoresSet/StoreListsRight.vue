<template>
  <div class="store-lists-right-container">
    <!--<div class="list-real-time-statistic">-->
      <!--<div class="real-time-top">-->
        <!--<i class="fa fa-times"></i>-->
      <!--</div>-->
      <!--<div class="real-time-detail">-->
        <!--<div class="detail-div">-->
          <!--<div v-for="item in statistics" class="detail-item">-->
            <!--<div class="item-icon"><i @click="click() && $emit('close')" :class="'fa fa-'+item.icon"></i></div>-->
            <!--<div class="item-description">-->
              <!--{{item.user}}刚刚订购了-->
              <!--{{item.description}}-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="week-hot-sale">
      <div class="sale-top">
        <p>本周热卖</p>
      </div>
      <div class="sale-detail">
        <div v-for="item in saleItems" class="sale-detail-item">
          <img :src="item.src"/>
          <div class="des">
            <p>{{item.description}}</p>
            <div class="price">
              <span class="price-span">{{item.price}}</span>
              <span>元起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        closed: true,
        saleItems: [
          {
            description: '香港/澳门直飞帕劳5-6天往返含税机票(秒杀+暑期直降2千元+太平洋优质包机航空+可订制酒店）',
            src: '/static/images/store_temp/balidao.jpg',
            price: '1999'
          },
          {
            description: '【拒签全退】上海/杭州直飞日本多地4-30天往返含税机票(日航/全日空等,赠日上免税店打折券）',
            src: '/static/images/store_temp/japan.jpg',
            price: '1999'
          },
          {
            description: '【暑期】上海/南京直飞马尔代夫库达富士岛6-7天自由行（超高性价比+豪华五星+一价全包+三餐酒水+赠送30分钟SPA/出海活动+可升级水飞）',
            src: '/static/images/store_temp/maldives.jpg',
            price: '1999'
          },
          {
            description: '【暑期】上海/南京直飞马尔代夫库达富士岛6-7天自由行（超高性价比+豪华五星+一价全包+三餐酒水+赠送30分钟SPA/出海活动+可升级水飞）',
            src: '/static/images/store_temp/maldives.jpg',
            price: '1999'
          }
        ]
      }
    },
    methods: {
      click () {
        console.log('c')
      }
    }
  }
</script>

<style>
  .store-lists-right-container {
  }

  .list-real-time-statistic {
    width: 100%;
    height: 16rem;
  }

  .real-time-top {
    width: 100%;
    padding: 0.4rem;
    height: 2rem;
    background-color: white;
  }

  .real-time-top i {
    float: right;
    font-size: 1.2rem;
    font-weight: 100;
    color: rgb(200, 200, 200);
  }

  .real-time-detail {
    height: 78%;
    padding: 0.5rem 1rem;
    background-color: white;
    overflow: hidden;
  }


   .detail-div {
    width: 100%;
    position: absolute;
    animation:ncompanie 10s;
    -moz-animation:ncompanie 10s; /* Firefox */
    -webkit-animation:ncompanie 10s; /* Safari and Chrome */
    -o-animation:ncompanie 10s; /* Opera */
  }

  @keyframes ncompanie {
    0% {
      top: 0px;
    }
    100% {
      top: -500px;
    }
  }

  @-webkit-keyframes ncompanie /* Safari and Chrome */
  {
    0% {
      top: 0px;
    }
    100% {
      top: -500px;
    }
  }

  .detail-item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 50%;
    width: 70%;
  }

  .item-icon {
    flex: 1;
    padding: 0.4rem 0 1rem 1.3rem;
    font-size: 3rem;
  }

  .item-description {
    flex: 3;
    height: 4.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    padding: 0.7rem 0.8rem;
    color: rgb(100, 100, 100);
  }

  .week-hot-sale {
    height: 35rem;
    width: 100%;
    padding: 0 1rem;
    background-color: white;
  }

  .sale-top p {
    color: rgb(100, 100, 100);
    font-weight: bold;
    padding: 1rem 0 0.6rem 0;
    font-size: 1.2rem;
  }

  .sale-detail {
    width: 100%;
    height: 85%;
  }

  .sale-detail-item {
    height: 25%;
    background-color: white;
    padding: 0.7rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .sale-detail-item img{
    height: 100%;
    width: 6rem;
    flex: 1;
  }

  .sale-detail-item .des{
    padding-left: 1.5rem;
    font-weight: bold;
    flex: 2;
    font-size: 0.9rem;
  }

  .des p{
    color: rgb(100,100,100);
    height: 2.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .des .price{
    margin-top: 1.5rem;
    float: right;
    padding-right: 0.3rem;
  }

  .des .price .price-span{
    color: rgb(253,117,107);
    font-size: 1.3rem;
  }

  .des .price span{
    font-size: 0.8rem;
    color: #757575;
  }

</style>

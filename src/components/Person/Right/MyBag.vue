<template>
  <div>
    <div v-for="item in products" class="product-description">
      <img class="product-img" :src="item.imageSrc"/>
      <div class="product-des-right">
        <div class="product-des-top">
          <span>{{item.label}}</span>
          <i class="fa fa-heart"></i>
          <span>{{item.place}}</span>
          <div class="num-jian">
            <span class="num">{{item.num}}</span>
            <span>件已售</span>
          </div>
        </div>
        <div class="product-des-middle">
          <p class="pro-des-title">{{item.description}}</p>
        </div>
        <div class="pro-price">
          <span class="pro-price-num">{{item.price}}</span>
          <span class="pro-price-unit">元起</span>
        </div>
        <div class="pro-travel-time">旅行时间：{{item.travelTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data  () {
      return {
        products: [
          {
            rank: '1',
            imageSrc: '/static/images/store_temp/productXiamen.jpg',
            label: '机票',
            place: '上海/厦门',
            description: '上海直飞厦门3-4天往返含税机票(含拼车接机服务)',
            property: [
              {
                name: '直飞航班',
                description: '上海直飞厦门，一站直达，省去转机时间以及旅途劳累'
              },
              {
                name: '拼车接机',
                description: '赠送厦门机场至厦门市区酒店的拼车接机服务，贴心服务'
              },
              {
                name: '特色之旅',
                description: '赏尽风景，吃尽美食，享受厦门给您带来的别样的小清新'
              }
            ],
            travelTime: '2016/03-2017/09',
            num: '73',
            price: '795'
          },
          {
            rank: '2',
            imageSrc: '/static/images/store_temp/canada.jpg',
            label: '机票',
            place: '南京-马尔代夫 马累',
            description: '南京直飞马尔代夫7天往返含税机票',
            property: [
              {
                name: '直飞航班',
                description: '上海直飞厦门，一站直达，省去转机时间以及旅途劳累'
              },
              {
                name: '行程自由',
                description: '赠送厦门机场至厦门市区酒店的拼车接机服务，贴心服务'
              }
            ],
            travelTime: '2017/08-2017/12',
            num: '15',
            price: '4799'
          },
          {
            rank: '3',
            imageSrc: '/static/images/store_temp/hongkong.jpg',
            label: '机票',
            place: '上海/厦门',
            description: '上海直飞厦门3-4天往返含税机票(含拼车接机服务)',
            property: [
              {
                name: '直飞航班',
                description: '上海直飞厦门，一站直达，省去转机时间以及旅途劳累'
              },
              {
                name: '拼车接机',
                description: '赠送厦门机场至厦门市区酒店的拼车接机服务，贴心服务'
              },
              {
                name: '特色之旅',
                description: '赏尽风景，吃尽美食，享受厦门给您带来的别样的小清新'
              }
            ],
            travelTime: '2016/03-2017/09',
            num: '73',
            price: '795'
          }
        ]
      }
    },
    methods: {}
  }
</script>
<style scoped>

  .product-description {
    box-shadow: 0 0 0.2rem #eee;
    width: 100%;
    height: 11.5rem;
    background-color: white;
    float: left;
    margin: 1rem 0;
    position: relative;
  }

  .choose-tab-item {
    color: #404040;
    float: left;
    font-size: 0.92rem;
    padding: 0rem 0.8rem 2rem 0.8rem;
  }

  .choose-tab-item:hover {
    color: #00b081;
  }

  .choose-tab .active {
    color: #00b081;
  }

  .product-description .product-img {
    float: left;
    height: 85%;
    border-radius: 0.1rem;
  }

  .product-des-right {
    float: left;
    width: 64%;
    padding: 0.7rem 1rem;
  }

  .product-des-top {
    width: 100%;
    color: #717171;
  }

  .product-des-top span {
    padding-right: 0.5rem;
  }

  .product-des-top i {
    color: #00b081;
    padding-left: 0.4rem;
  }

  .product-des-top .num-jian {
    float: right;
  }

  .product-des-top .num-jian .num {
    color: #00b081;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .product-des-middle {
    padding-top: 0.4rem;
  }

  .pro-des-title {
    font-size: 1.3rem;
    color: #717171;
    font-weight: bold;
    margin-bottom: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .pro-price {
    color: rgb(120, 120, 120);
    float: right;
    margin-top: 1rem;
  }

  .pro-price-num {
    color: rgb(253, 117, 107);
    font-size: 1.4rem;
    font-weight: bold;
  }

  .pro-price-unit{
    color: rgb(120, 120, 120);
    font-size: 0.9rem;
  }

  .pro-travel-time {
    position: absolute;
    bottom: 0.6rem;
    color: #717171;
    font-size: 0.7rem;
    width: inherit;
  }

  .product-des-right .buy-button-now {
    float: right;
    position: absolute;
    bottom: 0.6rem;
    right: 3%;
    background-color: rgb(253, 117, 107);
    border: none;
    padding: 0.5rem 1rem;
    color: white !important;
    font-weight: bold;
    font-size: 1rem;
  }
</style>

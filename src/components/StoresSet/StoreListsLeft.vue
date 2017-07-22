<template>
  <div class="store-list-left-container">
    <div class="choose-tab">
      <div @click="selected=index+1" :class="['choose-tab-item',{active:selected===index+1}]"
           v-for="(item,index) in chooseTab">{{item.title}}
      </div>
    </div>
    <div v-for="iproduct in products" class="product-description">
      <img class="product-img" :src="iproduct.imageSrc"/>
      <div class="product-des-right">
        <div class="product-des-top">
          <span>{{iproduct.label}}</span>
          <i class="fa fa-heart"></i>
          <span>{{iproduct.place}}</span>
          <div class="num-jian">
            <span class="num">{{iproduct.num}}</span>
            <span>件已售</span>
          </div>
        </div>
        <div class="product-des-middle">
          <p class="pro-des-title">{{iproduct.description}}</p>
          <p v-for="iproperty in iproduct.property" class="pro-des-property">{{iproperty.name}} </p>
        </div>
        <div class="pro-price">
          <span class="pro-price-num">{{iproduct.price}}</span>
          <span>元起</span>
        </div>
        <div class="pro-travel-time">旅行时间：{{iproduct.travelTime}}</div>
        <button>立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 0,
        chooseTab: [
          {
            title: '综合排序'
          },
          {
            title: '销量'
          },
          {
            title: '今日新品'
          }
        ],
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
    }
  }
</script>

<style>
  .store-list-left-container {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 2rem;
  }

  .product-description {
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
    height: 100%;
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
    color: black;
    font-weight: bold;
    margin-bottom: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .pro-des-property {
    color: rgb(180, 180, 180);
    float: left;
    margin-right: 0.5rem;
  }

  .pro-price {
    color: rgb(120, 120, 120);
    float: right;
    margin-top: 1.5rem;
  }

  .pro-price-num {
    color: rgb(253, 117, 107);
    font-size: 1.4rem;
    font-weight: bold;
  }

  .pro-travel-time {
    position: absolute;
    bottom: 0.6rem;
    color: #717171;
    font-size: 0.7rem;
    width: inherit;
  }

  .product-des-right button {
    float: right;
    position: absolute;
    bottom: 0.6rem;
    right: 3%;
    background-color: rgb(253, 117, 107);
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }
</style>

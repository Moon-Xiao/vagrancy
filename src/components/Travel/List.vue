<template>
  <div style="background-color: rgb(245, 245, 245); padding-top: 20px">
    <h2>热门游记</h2>
    <div class="store-type-choose-container">
      <div class="type-choose">
        <div class="type-choose-nav">


        </div>
        <div class="types-div">
          <div class="types-line">
            <span class="fixed-type">产品类型</span>
            <span @click="$emit('change-label', changeLabel(index, item.label))"
                  v-for="(item,index) in distincts[selected].types"
                  :class="['type-item',{active:choosen1===index}]">{{item.label}}</span>
          </div>
          <div class="types-line">
            <span class="fixed-type">出发地</span>
            <span @click="choosen2=index" v-for="(item,index) in distincts[selected].depatures"
                  :class="['type-item',{active:choosen2===index}]">{{item.label}}</span>
          </div>
          <div class="types-line">
            <span class="fixed-type">目的地</span>
            <span @click="choosen3=index" v-for="(item,index) in distincts[selected].destinations"
                  :class="['type-item',{active:choosen3===index}]">{{item.label}}</span>
          </div>
          <div class="types-line">
            <span class="fixed-type">旅行时间</span>
            <span @click="choosen4=index" v-for="(item,index) in distincts[selected].travelTimes"
                  :class="['type-item',{active:choosen4===index}]">{{item.label}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="country-content">
      <paginate-list certain-list="post" select="name intro photo" class-name="store-list-left-container">
        <template slot="list-item" scope="item">
          <!--<paginate-list certain-list="product" :certain-user="filter"-->
          <!--select="photo description label soldNum country price travelTime">-->
          <!--<template slot="list-item" scope="iproduct">-->
          <div class="product-description">
            <!--<img class="product-img" :src="baseUrl+'/'+iproduct.value.photo.path"/>-->
            <div :style="`float: left; display: inline-block;width: 200px; height: 100%; background-image: url('/${item.value.photo.path}'); background-size: cover; background-position: center`"></div>
            <div class="product-des-right">
              <div class="product-des-middle">
                <p class="pro-des-title">{{item.value.title}}</p>
              </div>
              <div class="product-des-top">
                <span>{{item.value.intro}}</span>
              </div>
              <b-btn variant="link" class="details-btn" to="/travel/travel">查看详情</b-btn>
            </div>
          </div>
        </template>
      </paginate-list>
      <!--</template>-->
      <!--</paginate-list>-->
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
  </div>
</template>

<script>
  import PaginateList from '../mixins/PaginateList.vue'
  export default {
    components: {
      PaginateList
    },
    data () {
      return {
        selected: 0,
        choosen1: 0,
        choosen2: 0,
        choosen3: 0,
        choosen4: 0,
        distincts: [
          {
            title: '机酒自由行',
            icon: 'plane',
            types: [
              {
                label: '全部'
              },
              {
                label: '美食'
              },
              {
                label: '购物'
              },
              {
                label: '景点'
              }
            ],
            depatures: [
              {
                label: '全部'
              },
              {
                label: '北京/天津'
              },
              {
                label: '上海/杭州'
              },
              {
                label: '成都/重庆'
              },
              {
                label: '广州/深圳'
              }
            ],
            destinations: [
              {
                label: '全部'
              },
              {
                label: '泰国'
              },
              {
                label: '日本'
              },
              {
                label: '中国'
              },
              {
                label: '马尔代夫'
              }
            ],
            travelTimes: [
              {
                label: '全部'
              },
              {
                label: '八月'
              },
              {
                label: '九月'
              },
              {
                label: '十月'
              }
            ]

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
        ],
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
    }
  }
</script>

<style>
  .country-content{
    background-color: rgb(245, 245, 245);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 150px;
  }

  .store-type-choose-container {
    padding: 20px 180px;

  }

  .type-choose {
    height: 18rem;
    width: 100%;
    border: solid 1px rgb(200, 200, 200);
    background-color: white;
  }

  .type-choose .type-choose-nav {
    height: 3rem;
    width: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .type-choose .type-choose-nav .choose-nav-item {
    flex: 1;
    color: #505050;
    font-size: 1.1rem;
    padding: 0.7rem 0.8rem;
    border-bottom: solid 1px rgb(200, 200, 200);
    border-right: solid 1px rgb(200, 200, 200);
  }

  .type-choose .type-choose-nav .active {
    color: #00b081;
    border-bottom: none;
  }

  .types-div {
    height: 80%;
    width: inherit;
    margin-top: 0.8rem;
  }

  .types-div .types-line {
    height: 25%;
    padding: 0.8rem 1rem;
  }

  .types-div .types-line .fixed-type {
    float: left;
    font-size: 1rem;
    width: 10%;
    color: #313131;
  }

  .types-div .types-line .type-item {
    font-size: 1rem;
    padding: 0 0.8rem;
    float: left;
    color: rgb(100, 100, 100);
  }

  .types-div .types-line .active {
    color: white;
    background-color: #00b081;
  }

  .types-div .types-line .active:hover {
    color: white !important;
    background-color: #00b081 !important;
  }

  .types-div .types-line .type-item:hover {
    color: #00b081;
  }

  .store-list-left-container {
    width: 100%;
    padding: 80px 90px;
    padding-right: 0;

    flex: 3;
  }

  .product-description {
    width: 100%;
    height: 11.5rem;
    background-color: white;
    min-width: 800px;
    /*float: left;*/
    margin: 1rem 0;
    position: relative;
    text-align: left!important;
  }

  .product-description .product-img {
    float: left;
    height: 100%;
  }

  .details-btn {
    float: right;
    margin: 30px 0;
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

  .pro-price-unit {
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
    margin: 80px 40px;

    background-color: white;
    flex: 1;
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

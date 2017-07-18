<template>
  <div class="store-fli-hotel-container">
    <div class="fli-hotel-top">
      <span class="store-home-common-title">机酒自由行</span>
      <span class="store-home-common-subtitle">精选全球最优质机票、酒店、邮轮等旅行产品</span>
      <div class="store-common-mini-nav"></div>
    </div>
    <div class="fli-hotel-bottom">
      <div class="row">
        <div class="col-md-6">
          <img :src="adItems[0].src"/>
          <div class="label-price">
            <div class="label">{{adItems[0].label}}</div>
            <div class="price">{{adItems[0].price}}<span>元起</span></div>
          </div>
          <div class="fli-hotel-description"><p>{{adItems[0].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img :src="adItems[1].src"/>
          <div class="label-price">
            <div class="label">{{adItems[1].label}}</div>
            <div class="price">{{adItems[1].price}}<span>元起</span></div>
          </div>
          <div class="fli-hotel-description"><p>{{adItems[1].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img :src="adItems[2].src"/>
          <div class="label-price">
            <div class="label">{{adItems[2].label}}</div>
            <div class="price">{{adItems[2].price}}<span>元起</span></div>
          </div>
          <div class="fli-hotel-description"><p>{{adItems[2].description}}</p></div>
        </div>
      </div>
      <div class="row second-line">
        <div class="col-md-3">
          <img :src="adItems[3].src"/>
          <div class="label-price">
            <div class="label">{{adItems[3].label}}</div>
            <div class="price">{{adItems[3].price}}<span>元起</span></div>
          </div>
          <div class="fli-hotel-description"><p>{{adItems[3].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img :src="adItems[4].src"/>
          <div class="label-price">
            <div class="label">{{adItems[4].label}}</div>
            <div class="price">{{adItems[4].price}}<span>元起</span></div>
          </div>
          <div class="fli-hotel-description"><p>{{adItems[4].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img :src="adItems[5].src"/>
          <div class="label-price">
            <div class="label">{{adItems[5].label}}</div>
            <div class="price">{{adItems[5].price}}<span>元起</span></div>
          </div>
          <div class="fli-hotel-description"><p>{{adItems[5].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img src="/static/images/store_temp/flihotelad.jpg"/>
          <div id="more">
            <p>查看更多</p>
            <p>机酒自由行商品</p>
          </div>
          <img id="next-icon" src="/static/images/store_temp/next.png"/>
          <div class="bottom-mini-bar">
            <router-link class="bar-link" to="/home">机票 </router-link>|
            <router-link class="bar-link" to="/home">酒店 </router-link>|
            <router-link class="bar-link" to="/home">机+酒 </router-link>|
            <router-link class="bar-link" to="/home">游轮</router-link>
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
          adItems: [
            {
              label: '机票',
              description: '香港/澳门直飞帕劳5-6天往返含税机票(秒杀+暑期直降2千元+太平洋优质包机航空+可订制酒店）',
              src: '/static/images/store_temp/Palau.jpg',
              price: '1999',
              travelTime: '2017/05-2017/09'
            },
            {
              label: '机+酒',
              description: '北京直飞柬埔寨吴哥5-6天自由行（赠送三日精华游）',
              src: '/static/images/store_temp/cambodia.jpg',
              price: '2399',
              travelTime: '2017/06-2017/11'
            },
            {
              label: '机票',
              description: '上海/杭州直飞香港4-5天往返含税机票（正点直飞航班）',
              src: '/static/images/store_temp/hongkong.jpg',
              price: '899',
              travelTime: '2017/05-2017/09'
            },
            {
              label: '机票',
              description: '北京直飞澳门7天往返含税机票',
              src: '/static/images/store_temp/aomen.jpg',
              price: '1500',
              travelTime: '2017/05-2017/09'
            },
            {
              label: '机票',
              description: '北京直飞加拿大卡尔加里3-30天往返含税机票(可配全国联运)',
              src: '/static/images/store_temp/canada.jpg',
              price: '4599',
              travelTime: '2017/05-2017/09'
            },
            {
              label: '机票',
              description: '【暑期甩尾】香港直飞长滩岛5-6天往返含税机票',
              src: '/static/images/store_temp/changdao.jpg',
              price: '2299',
              travelTime: '2017/05-2017/09'
            }
          ]
        }
      },
      methods: {
        remove: function () {
          window.$('.fli-hotel-description').find('p').each(function () {
            var maxwidth = 28
            if (window.$(this).text().length > maxwidth) {
              window.$(this).text(window.$(this).text().substring(0, maxwidth))
              window.$(this).html(window.$(this).html() + '...')
            }
          })
        }
      }
    }
</script>

<style scoped>
  .store-fli-hotel-container {
    height: 44rem;
    width: 100%;
    padding: 1rem 4rem;
    color: gray;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .fli-hotel-top {
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .fli-hotel-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .row{
    height: 18rem;
    margin-bottom: 1.5rem;
  }

  .col-md-6 img{
    width: 100%;
    height: 93%;
  }

  .col-md-6 .fli-hotel-description{
    padding: 1rem 0.5rem;
    color: white;
    font-size: 1rem;
    height: 28%;
    text-align: left;
    position: absolute;
    bottom: 7%;
    width: 94.9%;
    border: none;
    background: rgba(0,0,0,0.6);
  }

  .col-md-3 img{
    width: 100%;
    height: 65%;
  }

  .second-line .col-md-3:last-child img{
    //background-color: #33cea0;
    //background-image: linear-gradient(180deg, #61d482, #15cbb3);
    width: 100%;
    height: 93%;
  }

  .second-line .col-md-3:last-child i{
    color: white;
    font-size: 3rem;
    z-index: 2;
    position: absolute;
    top: 30%;
    left: 30%;
  }

  #more{
    position: absolute;
    top: 15%;
    left: 26%;
  }

  #next-icon{
    position: absolute;
    top: 39%;
    left: 35%;
    width: 26%;
    height: 27%;
  }

  #next-icon:hover{
    background: rgba(255,255,255,0.4);
    border-radius: 50%;
  }

  .second-line .col-md-3:last-child p{
    color: white;
    font-size: 1.2rem;
    z-index: 2;
  }

  .bottom-mini-bar{
    position: absolute;
    bottom: 20%;
    left: 20%;
    color: white;
    font-size: 0.9rem;
  }

  .bottom-mini-bar .bar-link{
    color: white;
    font-size: 0.9rem;
  }

  .bottom-mini-bar .bar-link:hover{
    color: gold;
  }

  .fli-hotel-description{
    border: solid 1px darkgray;
    border-top: none;
    padding: 1rem 0.5rem;
    color: black;
    font-size: 1rem;
    height: 28%;
    text-align: left;
  }

  .label-price{
    position: absolute;
    bottom: 35%;
  }

  .label{
    float: left;
    color: white;
    font-size: 1rem;
    height: 10%;
    text-align: center;
    padding: 0.2rem 0.7rem;
    background: rgba(0,0,0,0.6);
  }

  .price{
    float: left;
    color: white;
    font-size: 1rem;
    height: 10%;
    text-align: center;
    padding: 0.2rem 0.7rem;
    font-weight: 100;
    background: rgb(253,117,107);
  }

  .price span{
    font-size: 0.6rem;
    font-weight: bold;
  }

</style>


<template>
  <div class="store-theme-container">
    <div class="theme-top">
      <span class="store-home-common-title">主题推荐</span>
      <span class="store-home-common-subtitle">亲子、蜜月、个性玩法…你想要的这里都有</span>
      <div class="store-common-mini-nav"></div>
    </div>
    <div class="theme-bottom">
      <div class="row">
        <div class="col-md-6">
          <img :src="adItems[0].src"/>
          <div class="total-mask"></div>
          <div class="logo">亲子家庭</div>
          <div class="mask">
            <div><p>{{adItems[0].description}}</p></div>
            <div><span class="mask-price">{{adItems[0].price}}</span><span class="unit">元起</span></div>
          </div>
        </div>
        <div class="col-md-3">
          <img :src="adItems[1].src"/>
          <div class="label-price">
            <div class="label">{{adItems[1].label}}</div>
            <div class="price">{{adItems[1].price}}<span>元起</span></div>
          </div>
          <div class="theme-description"><p>{{adItems[1].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img :src="adItems[2].src"/>
          <div class="label-price">
            <div class="label">{{adItems[2].label}}</div>
            <div class="price">{{adItems[2].price}}<span>元起</span></div>
          </div>
          <div class="theme-description"><p>{{adItems[2].description}}</p></div>
        </div>
      </div>
      <div class="row second-line">
        <div class="col-md-3">
          <img :src="adItems[3].src"/>
          <div class="label-price">
            <div class="label">{{adItems[3].label}}</div>
            <div class="price">{{adItems[3].price}}<span>元起</span></div>
          </div>
          <div class="theme-description"><p>{{adItems[3].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img :src="adItems[4].src"/>
          <div class="label-price">
            <div class="label">{{adItems[4].label}}</div>
            <div class="price">{{adItems[4].price}}<span>元起</span></div>
          </div>
          <div class="theme-description"><p>{{adItems[4].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img :src="adItems[5].src"/>
          <div class="label-price">
            <div class="label">{{adItems[5].label}}</div>
            <div class="price">{{adItems[5].price}}<span>元起</span></div>
          </div>
          <div class="theme-description"><p>{{adItems[5].description}}</p></div>
        </div>
        <div class="col-md-3">
          <img src="/static/images/store_temp/purplebg.png"/>
          <div id="more">
            <p>查看更多</p>
            <p>主题推荐商品</p>
          </div>
          <img id="next-icon" src="/static/images/store_temp/next.png"/>
          <div class="bottom-mini-bar">
            <router-link class="bar-link" to="/home">亲自 </router-link>|
            <router-link class="bar-link" to="/home">情侣 </router-link>|
            <router-link class="bar-link" to="/home">海岛游 </router-link>|
            <router-link class="bar-link" to="/home">购物</router-link>
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
            src: '/static/images/store_temp/qinzi.jpg',
            price: '2599',
            travelTime: '2017/05-2017/09'
          },
          {
            label: '机+酒',
            description: '北京直飞柬埔寨吴哥5-6天自由行（赠送三日精华游）',
            src: '/static/images/store_temp/singapore.jpg',
            price: '2599',
            travelTime: '2017/06-2017/11'
          },
          {
            label: '机票',
            description: '上海/杭州直飞香港4-5天往返含税机票（正点直飞航班）',
            src: '/static/images/store_temp/shaba.jpg',
            price: '1799',
            travelTime: '2017/05-2017/09'
          },
          {
            label: '机票',
            description: '北京直飞澳门7天往返含税机票',
            src: '/static/images/store_temp/jiangang.jpg',
            price: '1580',
            travelTime: '2017/05-2017/09'
          },
          {
            label: '机票',
            description: '北京直飞加拿大卡尔加里3-30天往返含税机票(可配全国联运)',
            src: '/static/images/store_temp/daban.jpg',
            price: '1299',
            travelTime: '2017/05-2017/09'
          },
          {
            label: '机票',
            description: '【暑期甩尾】香港直飞长滩岛5-6天往返含税机票',
            src: '/static/images/store_temp/hongkong4g.jpg',
            price: '822',
            travelTime: '2017/05-2017/09'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .store-theme-container {
    height: 44rem;
    width: 100%;
    padding: 1rem 4rem;
    color: gray;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .theme-top {
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .theme-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .row{
    height: 18rem;
    margin-bottom: 1.5rem;
    margin: auto;
  }

  .col-md-6{
    padding-left: 0;
  }

  .col-md-6 img{
    width: 100%;
    height: 93%;
  }

  .col-md-6 .theme-description{
    padding: 1rem 0.5rem;
    color: white;
    font-size: 1rem;
    height: 28%;
    text-align: left;
    position: absolute;
    bottom: 7%;
    width: 97.4%;
    border: none;
    background: rgba(0,0,0,0.6);
  }

  .total-mask{
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    top: 0;
    width: 97.5%;
    height: 93%;
  }

  .logo{
    position: absolute;
    top: 20%;
    left: 40%;
    width: 7rem;
    height: 7rem;
    border-radius: 3.5rem;
    border: solid white 2px;
    color: white;
    font-size: 2rem;
    padding: 0.5rem;
  }

  .logo:hover{
    transform: scale(1.1);
    transition: 0.8s;
  }

  .mask {
    height: 20%;
    width: 97.5%;
    background-image: linear-gradient(180deg, transparent, #000);
    z-index: 4;
    position: absolute;
    padding-top: 0.8rem;
    margin-bottom: 1.25rem;
    bottom: 0;
  }

  .mask p{
    font-size: 1.1rem;
    padding-top: 0.3rem;
    padding-left: 0.5rem;
    color: white;
    float: left;
    width: 80%;
    height: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .mask .mask-price{
    padding-top: 0.3rem;
    color: rgb(253,117,107);
    font-weight: 100;
    font-size: 1.4rem;
  }

  .mask .unit{
    color: white;
    font-size: 0.8rem;
  }

  .col-md-3 img{
    width: 100%;
    height: 65%;
  }

  .second-line .col-md-3:first-child{
    padding-left: 0;
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
    left: 28%;
  }

  #next-icon{
    position: absolute;
    top: 39%;
    left: 36%;
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

  .theme-description{
    border: solid 1px darkgray;
    border-top: none;
    padding: 1rem 0.5rem;
    color: black;
    font-size: 1rem;
    height: 28%;
    text-align: left;
  }

  .theme-description p{
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
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


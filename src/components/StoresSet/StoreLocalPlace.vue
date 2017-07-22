<template>
  <div class="store-localplace-container">
    <div class="localplace-top">
      <span class="store-home-common-title">当地玩乐</span>
      <span class="store-home-common-subtitle">像当地人一样，体验最本土的吃喝玩乐</span>
    </div>
    <div class="localplace-bottom">
      <div class="row">
        <div class="col-md-4 col-sm-4 first-column">
          <div class="big-item">
            <img :src="localItems[0].src"/>
            <div class="mask">
              <p>{{localItems[0].description}}</p>
              <p id="fixed">城市玩乐</p>
              <div class="price-div tuijian-item">
                <span class="item-price">{{localItems[0].price}}</span>
                <span class="unit">元起</span>
              </div>
            </div>
          </div>
          <div class="normal-item">
            <img :src="localItems[1].src"/>
            <div class="normal-item-description">
              <p>{{localItems[1].description}}</p>
              <div class="price-div">
                <span class="item-price">{{localItems[1].price}}</span>
                <span class="unit">元起</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 second-column">
          <div class="normal-item">
            <img :src="localItems[2].src"/>
            <div class="normal-item-description">
              <p>{{localItems[2].description}}</p>
              <div class="price-div">
                <span class="item-price">{{localItems[2].price}}</span>
                <span class="unit">元起</span>
              </div>
            </div>
          </div>
          <div class="normal-item">
            <img :src="localItems[3].src"/>
            <div class="normal-item-description">
              <p>{{localItems[3].description}}</p>
              <div class="price-div">
                <span class="item-price">{{localItems[3].price}}</span>
                <span class="unit">元起</span>
              </div>
            </div>
          </div>
          <div class="normal-item">
            <img :src="localItems[4].src"/>
            <div class="normal-item-description">
              <p>{{localItems[4].description}}</p>
              <div class="price-div">
                <span class="item-price">{{localItems[4].price}}</span>
                <span class="unit">元起</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 last-column">
          <div class="normal-item">
            <img :src="localItems[5].src"/>
            <div class="normal-item-description">
              <p>{{localItems[5].description}}</p>
              <div class="price-div">
                <span class="item-price">{{localItems[5].price}}</span>
                <span class="unit">元起</span>
              </div>
            </div>
          </div>
          <div class="big-item">
            <p id="more-title">
              查看更多
              <br>
              当地玩乐产品
            </p>
            <img id="next-icon" src="/static/images/store_temp/next.png"/>
            <div class="bottom-mini-bar">
              <router-link class="bar-link" to="/home">机票 </router-link>
              |
              <router-link class="bar-link" to="/home">酒店 </router-link>
              |
              <router-link class="bar-link" to="/home">机+酒 </router-link>
              |
              <router-link class="bar-link" to="/home">游轮</router-link>
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
        localItems: [
          {
            description: '法国巴黎塞纳河Bateaux Parisiens游船法式晚餐体验(巴黎最美的时光)',
            src: '/static/images/store_temp/paris.jpg',
            price: '468'
          },
          {
            description: '【阿维尼翁旅游局推荐】法国普罗旺斯探寻梵高古罗马之路一日游(中文陪同，阿维尼翁往返)',
            src: '/static/images/store_temp/fangao.jpg',
            price: '645'
          },
          {
            description: '【深度体验】法国巴黎探索玛莱区徒步之旅',
            src: '/static/images/store_temp/malaiqu.jpg',
            price: '158'
          },
          {
            description: '【老牌餐厅推荐】法国巴黎Le Train Bleu蓝色火车餐厅午晚餐兑换券',
            src: '/static/images/store_temp/bluetrain.jpg',
            price: '408'
          },
          {
            description: '【经典日游】法国马赛卡西斯半日游（马赛往返）',
            src: '/static/images/store_temp/marseille.jpg',
            price: '618'
          },
          {
            description: '法国巴黎塞纳河La Marina游船赏夜景+烛光晚餐',
            src: '/static/images/store_temp/seine.jpg',
            price: '458'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .store-localplace-container {
    height: 33rem;
    width: 100%;
    padding: 1rem 4rem;
    color: gray;
    font-size: 0.9rem;
    font-weight: bold;
    background-color: rgb(241, 241, 241);
  }

  .localplace-top {
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .localplace-bottom {
    width: 100%;
    height: 95%;
  }

  .row {
    height: 100%;
    width: 100%;
    padding: 0;
  }

  .col-md-4, .col-sm-4 {
    width: 30%;
    height: 90%;
  }

  .col-md-4:last-child, .col-sm-4:last-child {
    padding-right: 0;
    margin-bottom: 0;
  }

  .big-item {
    width: 100%;
    height: 61%;
    margin-bottom: 1.28rem;
    position: relative;
  }

  .first-column .big-item .mask p {
    padding: 0.8rem 1rem;
    color: white;
    font-size: 1.1rem;
    text-align: left;
    height: 68%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .mask {
    height: 50%;
    width: 100%;
    background-image: linear-gradient(180deg, transparent, #000);
    z-index: 2;
    position: absolute;
    padding-top: 0.8rem;
    bottom: 0;
  }

  #fixed {
    color: darkgray;
    font-size: 0.9rem;
    padding-top: 0.3rem;
    width: 30%;
    float: left;
  }

  .tuijian-item {
    float: right;
    margin-right: 1.5rem;
  }

  .big-item img {
    width: 100%;
    height: 100%;
  }

  .last-column .big-item {
    background-color: #ff6a71;
    background-image: linear-gradient(180deg, #ff6476, #ff7467);
    color: white;
    font-size: 1.16rem;
    position: relative;
  }

  #more-title {
    position: relative;
    top: 13%;
  }

  .normal-item {
    width: 100%;
    height: 28%;
    margin-bottom: 1.28rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .normal-item img {
    float: left;
    height: 100%;
    flex: 1;
  }

  .normal-item-description {
    flex: 2;
    background-color: white;
    width: 66.2%;
    height: 100%;
    padding: 1rem 1rem;
    float: left;
    position: relative;
  }

  .normal-item-description p {
    color: #000;
    font-size: 1.1rem;
    text-align: left;
    font-weight: 100;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .normal-item .price-div {
    position: absolute;
    bottom: 8%;
    right: 10%;
  }

  .item-price {
    font-size: 1.4rem;
    color: rgb(253, 117, 107);
    font-weight: 100;
  }

  .unit {
    font-size: 0.9rem;
  }

  #next-icon {
    position: absolute;
    top: 39%;
    left: 37%;
    width: 24%;
    height: 34%;
  }

  #next-icon:hover {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }

  .bottom-mini-bar {
    position: absolute;
    bottom: 12%;
    left: 26.6%;
    color: white;
    font-size: 0.9rem;
  }

  .bottom-mini-bar .bar-link {
    color: white;
    font-size: 0.9rem;
  }

  .bottom-mini-bar .bar-link:hover {
    color: gold;
  }
</style>

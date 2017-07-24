<template>
  <div class="pro-order-container">
    <div class="pro-order-top">
      <advert-strip></advert-strip>
    </div>
    <div class="pro-order-content">
      <div class="pro-order-title">确认订单信息</div>
      <table class="pro-order-content-table">
        <tr>
          <th style="width: 25rem;text-align: center;border-bottom: solid 2px #00b081;line-height: 2rem">店铺宝贝</th>
          <th style="width: 12rem;text-align: center;border-bottom: solid 2px #00b081;line-height: 2rem">商品属性</th>
          <th style="width: 12rem;text-align: center;border-bottom: solid 2px #00b081;line-height: 2rem">单价</th>
          <th style="width: 10rem;text-align: center;border-bottom: solid 2px #00b081;line-height: 2rem">数量</th>
          <th style="width: 12rem;text-align: center;border-bottom: solid 2px #00b081;line-height: 2rem">小计</th>
        </tr>
        <p class="pro-title">店铺：{{productDetail.seller.nickname}}</p>
        <tr>
          <td style="width: 25rem;text-align: center">
            <div class="pro-brief-description">
              <img :src="baseUrl+'/'+productDetail.photo.path"/>
              <p class="pro-brief-description-text">{{productDetail.description}}</p>
            </div>
          </td>
          <td class="pro-order-normal" style="width: 12rem;text-align: center">
            <p>出发地：{{split (productDetail.departures)[choosen1]}}</p>
            <p>天数：{{split (productDetail.days)[choosen2]}}天</p>
            <p>航空公司：{{split (productDetail.airline)[choosen3]}}</p>
            <p>出发日期：{{split (productDetail.departureDates)[choosen4]}}</p>
          </td>
          <td class="pro-order-normal" style="width: 12rem;text-align: center">{{productDetail.price}}</td>
          <td class="pro-order-normal" style="width: 10rem;text-align: center">{{number}}</td>
          <td class="pro-order-normal total-price" style="width: 12rem;text-align: center">
            {{total = productDetail.price * number}}
          </td>
        </tr>
      </table>
    </div>
    <div class="pro-order-bottom">
      <div class="buy-it-div">
        <div class="buy-it-div-top">
          <p class="pro-price"><span>￥</span>{{total}}</p>
          <p class="contact-info">联系人：{{userInfo.nickname}}<br>联系电话：{{userInfo.phone}}</p>
        </div>
        <div class="buy-it-div-bottom">
          <router-link class="upload-button" to="/pay">提交订单</router-link>
        </div>
      </div>
    </div>
    <div class="pro-order-bot-ad">
      <img src="/static/images/store_temp/payorderbottom.jpg"/>
    </div>
  </div>
</template>

<script>
  import AdvertStrip from '../Home/AdvertStrip.vue'

  export default {
    components: {
      AdvertStrip
    },
    data () {
      return {
        total: 0,
        product: {
          storeName: '中国青年旅行社',
          label: '机票',
          description: '香港/澳门直飞帕劳5-6天往返含税机票(秒杀+暑期直降2千元+太平洋优质包机航空+可订制酒店）',
          src: '/static/images/store_temp/hongkong.jpg',
          price: '1999',
          travelTime: '2017/05-2017/09',
          soldNum: '134',
          id: '92536',
          departures: [
            {
              name: '上海'
            },
            {
              name: '北京'
            }
          ],
          days: [
            {
              time: '4'
            },
            {
              time: '7'
            }
          ],
          airplaneCompanys: [
            {
              name: '吉祥航空'
            },
            {
              name: '中国航空+电话卡'
            },
            {
              name: '吉祥航空+随身wifi+不包含电话卡'
            },
            {
              name: '中国航空'
            },
            {
              name: '吉祥航空'
            },
            {
              name: '中国航空'
            }
          ],
          departureDates: [
            {
              des: '2017/8/13'
            },
            {
              des: '2017/8/27'
            }
          ],
          journal: [
            {
              journalSrc: '/static/images/store_temp/journal1.png'
            },
            {
              journalSrc: '/static/images/store_temp/journal2.png'
            }
          ]
        }
      }
    },
    computed: {
      choosen1 () {
        return this.$route.query.choosen1
      },
      choosen2 () {
        return this.$route.query.choosen2
      },
      choosen3 () {
        return this.$route.query.choosen3
      },
      choosen4 () {
        return this.$route.query.choosen4
      },
      number () {
        return this.$route.query.number
      },
      productDetail () {
        return JSON.parse(this.$route.query.productDetail)
      }
    },
    methods: {
      split (str) {
        return (str || '').split(' ').map(s => s.trim()).filter(s => s !== '')
      }
    }
  }
</script>

<style>
  .pro-order-container {
    padding: 1rem;
  }

  .pro-order-top {
    width: 100%;
  }

  .pro-order-content {
    padding: 1rem 2.2rem;
  }

  .pro-order-title {
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    color: #444444;
    padding: 0.8rem 0;
  }

  .pro-order-content-table {
    color: #555555;
  }

  .pro-title {
    text-align: left;
    font-size: 0.8rem;
    line-height: 2rem;
    padding: 0.5rem 0 0.5rem 1rem;
  }

  .pro-brief-description {
    height: 5rem;
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .pro-brief-description img {
    flex: 1;
    height: 100%;
  }

  .pro-brief-description .pro-brief-description-text {
    flex: 3;
    height: 2.6rem;
    font-size: 0.8rem;
    text-align: left;
    color: #777777;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    padding-left: 0.3rem;
  }

  .pro-order-normal {
    font-size: 0.8rem;
    color: #444444;
  }

  .total-price {
    font-size: 0.9rem;
    color: rgb(253, 117, 107);
    font-weight: bold;
  }

  .pro-order-bottom {
    height: 14rem;
    width: 100%;
    padding: 2rem 3.5rem;
  }

  .buy-it-div {
    width: 22rem;
    height: 100%;
    float: right;
  }

  .buy-it-div-top {
    height: 75%;
    width: 100%;
    border: solid 2px rgb(253, 117, 107);
    box-shadow: 0 0 2px rgb(253, 117, 107);
  }

  .buy-it-div-bottom {
    width: 100%;
    height: 100%;
  }

  .buy-it-div-bottom .upload-button {
    background-color: rgb(253, 117, 107);
    font-size: 1rem;
    border: none;
    color: white !important;
    outline: none;
    box-shadow: 0 0 2px rgb(253, 117, 107);
    width: 7rem;
    float: right;
    height: 2rem;
    padding: 0.2rem 0;
  }

  .pro-price {
    text-align: right;
    font-size: 1.6rem;
    color: rgb(253, 117, 107);
    padding: 1rem 1rem 0 1rem;
  }

  .pro-price span {
    color: rgb(150, 150, 150);
  }

  .contact-info {
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: right;
    color: #777777;
    float: right;

  }
</style>

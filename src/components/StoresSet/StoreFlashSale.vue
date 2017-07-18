<template>
  <div class="store-flashsale-container">
    <div class="flashsale-top">
      <span class="store-home-common-title">限时特卖</span>
      <span class="store-home-common-subtitle">每日必看的特价精选</span>
      <div id="flashsale-change">
        <i class="fa fa-refresh"></i>
        <span>换一换</span>
      </div>
    </div>
    <div class="flashsale-bottom">
      <div class="flashsale-item" v-for="item in saleItems">
        <img :src="item.src"/>
        <div id="item-description">
          <p>{{item.description}}</p>
          <div id="price-div">
            <span id="item-price">{{item.price}}</span>
            <span id="unit">元起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable key-spacing */

  export default {
    data () {
      return {
        saleItems: [
          {
            description: '北京直飞巴厘岛7天往返含税机票 （优质航空）',
            src: '/static/images/store_temp/balidao.jpg',
            price: '2399'
          },
          {
            description: '【拒签全退】上海/杭州直飞日本多地4-30天往返含税机票(日航/全日空等,赠日上免税店打折券)',
            src: '/static/images/store_temp/japan.jpg',
            price: '1799'
          },
          {
            description: '【暑期】上海/南京直飞马尔代夫库达富士岛6-7天自由行（超高性价比+豪华五星+一价全包+三餐酒水+赠送30分钟SPA/出海活动+可升级水飞）',
            src: '/static/images/store_temp/maldives.jpg',
            price: '11499'
          }
          //          {
          //            description: '【拒签全退】北京/天津往返悉尼/墨尔本/布里斯班/珀斯/阿德莱德/奥克兰/基督城5-30天含税机票',
          //            src: 'heihei',
          //            price: '2399'
          //          },
          //          {
          //            description: '【暑期特惠】天津直飞大阪/东京6-7天往返含税机票(可选两点往返)',
          //            src: '香港 澳门 台湾 三亚',
          //            price: '1299'
          //          },
          //          {
          //            description: '[暑期/国庆热卖]上海直飞芽庄5-6天往返含税机票',
          //            src: '香港 澳门 台湾 三亚',
          //            price: '1999'
          //          }
        ]
      }
    },
    methods: {
      remove:function () {
        window.$('#item-description').find('p').each(function () {
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

<style>
  .store-flashsale-container {
    height: 16rem;
    width: 100%;
    padding: 1rem 4rem;
    display: flex;
    flex-direction: column;
    color: gray;
    font-size: 0.9rem;
    font-weight: bold;
    background-color: rgb(241,241,241);
  }

  .flashsale-top {
    flex: 1;
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: flex-start;
  }

  .store-home-common-title {
    color: black;
    font-size: 2.5rem;
    font-weight: 600;
    margin-right: 1rem;
  }

  .store-home-common-subtitle {
    float: left;
    text-align: left;
  }

  #flashsale-change{
    justify-self: flex-end;
    width: 72%;
    text-align: right;
  }

  #flashsale-change:hover {
    color: #00b081;
  }

  .flashsale-bottom {
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .flashsale-item {
    flex: 1;
    margin: 0 0.5rem;
  }

  .flashsale-item img{
    float: left;
    width: 7.5rem;
    height: 7.5rem;
    border-top: solid 0.3rem #717171;
  }

  .flashsale-item #item-description{
    border-top: solid 0.3rem rgb(253,117,107);
    color: black;
    position: relative;
    background-color: white;
    height: 7.5rem;
    float: left;
    width: 65%;
  }

  .flashsale-item #item-description p{
    padding-left: 0.5rem;
    padding-top: 0.3rem;
    height: 3.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    float: left;
  }

  .flashsale-item #price-div{
    position: absolute;
    bottom: 0.5rem;
    right: 0.8rem;
  }

  #price-div #item-price{
    color: rgb(253,117,107);
    font-size: 2rem;
    font-weight: 100;
  }

  #price-div #unit{
    color: #717171;
  }
</style>

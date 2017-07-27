<template>

  <div id="mainbanner" class="row">
    <swiper ref="horizontalSwiper" :options="horizontalOptions" class="banner-horizontal col-10">
      <swiper-slide v-for="banner in banners">
        <img :src="banner.image">
      </swiper-slide>
    </swiper>
    <swiper ref="verticalSwiper" :options="verticalOptions" class="banner-vertical col-2">
      <swiper-slide class="slider" style="background-size: cover; background-position: center;" :style="`background-image: url('${banner.image}')`" v-for="banner in banners">
      </swiper-slide>
    </swiper>
    <!-- carousel.vue -->
    <div id="search" class="kd-tourform" style="transform: translateY(0px);">
      <div class="search-wrapper">
        <div class="tab">
          <a v-for="(item, index) in searchItems" @click="selectedIndex=index+1"
             :class="{active:selectedIndex==index+1}">
            <i :class="'fa fa-'+item.icon"></i>
            <span>{{item.name}}</span>
          </a>
        </div>
        <div class="panel">
          <!-- <em class="arrow"></em> -->
          <div class="panel-inner" style="position: relative;">
            <div class="panel-cont">
              <div v-if="selectedIndex==1" class="place place_search_box">
                <div class="input-control">
                  <form class="place_search_form" target="_blank" method="post">
                    <input class="txt focus placesearch_txt" type="text" placeholder="荷兰" @focus="focused++"
                           @blur="focused--">
                    <button class="btn" type="submit" href="#">搜索</button>
                  </form>
                </div>
              </div>
              <div v-else-if="selectedIndex==2" class="plan">
                <p
                  style="margin-bottom:5px;fout:12px/1.5 Helvetica Neue,Helvetica,Arial;font-size: 24px;font-family: Hiragino Sans GB,Microsoft YaHei,SimHei,SimSun,sans-serif;color: #fff;">
                  一分钟搞定你的攻略
                </p>
                <a class="link"><i class="fa fa-plus"></i> 创建行程</a>
                <a class="link custom" style="background: linear-gradient(135deg,#44abe7,#0886ce);"><i
                  class="fa fa-plus"></i> 免费定制</a>
              </div>
              <div v-else-if="selectedIndex==3" class="z z_search_box">
                <div class="input-control">
                  <form class="z_search_form" target="_blank" method="get">
                    <input type="hidden" name="_type" value="search">
                    <input type="hidden" name="action" value="list">
                    <input type="hidden" name="zfrom" value="header">
                    <input class="txt focus zsearch_txt" type="text" placeholder="搜索目的地/折扣类型/关键词" @focus="focused=1"
                           @blur="focused=0">
                    <button class="btn" type="submit" href="#">搜索</button>
                  </form>
                </div>
              </div>
              <div v-else-if="selectedIndex==4" class="hotel hotel_search_box">
                <div class="input-control pr">
                  <form class="hotel_search_form" action="/" target="_blank">
                    <input class="txt focus hotelsearch_txt" type="text" placeholder="请输入目的地/酒店名" @focus="focused=1"
                           @blur="focused=0">
                    <button target="_blank" class="btn hotel_btn" type="submit">搜索酒店</button>
                    <Date-picker class="date-picker" :value="value1" format="yyyy年MM月dd日" type="daterange" placeholder="选择日期"></Date-picker>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedIndex === 1" v-bind:class="['q-layer' ,'q-layer-placesearch' ,{show:focused>0}]"
               @mouseleave="focused--" @mouseenter="focused++">
            <div class="placesearch_history_box"></div>
            <div class="history-title">
              <span>热门地区</span>
            </div>
            <div class="history-cont">
              <router-link style="color: #1baede" to="/destinations/country/59741ba28f037bab32d9a3b3">中国</router-link>
              <router-link style="color: #1baede" to="/destinations/country/5974a520da81a2b77db7618d">印度</router-link>
              <a href="#">香港</a>
              <a href="#">曼谷</a>
              <a href="#">东京</a>
              <a href="#">澳门</a>
              <a href="#">首尔</a>
              <a href="#">京都</a>
              <a href="#">大阪</a>
              <a href="#">台湾</a>
              <a href="#">巴黎</a>
              <a href="#">罗马</a>
              <a href="#">清迈</a>
              <a href="#">新加坡</a>
              <a href="#">台北</a>
              <a href="#">吉隆坡</a>
              <a href="#">威尼斯</a>
              <a href="#">普吉岛</a>
              <a href="#">佛罗伦萨</a>
              <a href="#">洛杉矶</a>
              <a href="#">米兰</a>
              <a href="#">奈良</a>
            </div>
          </div>
          <div v-else-if="selectedIndex === 3" v-bind:class="['q-layer','q-layer-zsearch',{show:focused>0}]"
               @mouseleave="focused--" @mouseenter="focused++">
            <div class="zsearch_history_box"></div>
            <div class="history-title">
              <span>热门搜索</span>
            </div>
            <div class="history-cont">
              <a href="#">【Vagrancy 独家】清迈厨艺学校体验</a>
              <a href="#">日本 城市</a>
              <a href="#">清迈 门票/一日游</a>
              <a href="#">瑞士铁路通票</a>
              <a href="#">巴黎卢浮宫</a>
              <a href="#">沙巴 玩乐</a>
              <a href="#">普吉岛 出海游</a>
              <a href="#">新加坡 机票</a>
              <a href="#">巴黎 机票</a>
              <a href="#">台湾 高铁票</a>
              <a href="#">韩国 自由行</a>
              <a href="#">WIFI/电话卡</a>
              <a href="#">日韩邮轮</a>
              <a href="#">美国 交通卡</a>
              <a href="#">日本JR PASS</a>
              <a href="#">Vagrancy CITYWALK</a>
            </div>
          </div>
          <div v-else-if="selectedIndex === 4" v-bind:class="['q-layer', 'q-layer-hotelsearch',{show:focused>0}]"
               @mouseleave="focused--" @mouseenter="focused++">
            <div class="hotelsearch_history_box"></div>
            <div class="history-title">
              <span>热门搜索</span>
            </div>
            <div class="history-cont">
              <a href="#">香港</a>
              <a href="#">曼谷</a>
              <a href="#">澳门</a>
              <a href="#">巴黎</a>
              <a href="#">台湾</a>
              <a href="#">首尔</a>
              <a href="#">东京</a>
              <a href="#">罗马</a>
              <a href="#">吉隆坡</a>
              <a href="#">新加坡</a>
              <a href="#">威尼斯</a>
              <a href="#">京都</a>
              <a href="#">佛罗伦萨</a>
              <a href="#">大阪</a>
              <a href="#">清迈</a>
              <a href="#">普吉岛</a>
              <a href="#">台北</a>
              <a href="#">米兰</a>
              <a href="#">巴塞罗那</a>
              <a href="#">洛杉矶</a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import DatePicker from 'iview/src/components/date-picker'

  export default {
    components: {
      swiper,
      swiperSlide,
      DatePicker
    },
    data () {
      return {
        searchItems: [
          {
            name: '目的地',
            icon: 'map-marker',
            tab: 'place'
          },
          {
            name: '做行程',
            icon: 'calendar-check-o',
            tab: 'plan'
          },
          {
            name: '买折扣',
            icon: 'level-down',
            tab: 'sale'
          },
          {
            name: '酒店',
            icon: 'building',
            tab: 'hotel'
          }
        ],
        banners: [
          {
            image: './static/images/banner3.jpg'
          },
          {
            image: './static/images/banner2.jpg'
          },
          {
            image: './static/images/banner4.jpg'
          }
        ],
        selectedIndex: 1,
        focused: 0
      }
    },
    computed: {
      horizontalOptions () {
        return {
          loop: true
        }
      },
      verticalOptions () {
        return {
          direction: 'vertical',
          slidesPerView: 2,
          autoplay: 3500,
          loop: true,
          onSlideChangeStart: (swiper) => {
            this.horizontalSwiper.slideTo(swiper.activeIndex)
          }
        }
      },
      horizontalSwiper () {
        return this.$refs.horizontalSwiper.swiper
      },
      verticalSwiper () {
        return this.$refs.verticalSwiper.swiper
      }
    }
  }
</script>

<style type="less" scoped="">
  @import './style.less';

  .row {
    margin: 0;
  }

  .banner-horizontal {
    z-index: 0;
    height: 420px;
    padding: 0;
  }

  .banner-vertical {
    z-index: 0;
    height: 420px;
    padding: 0;
  }

  .banner-horizontal img {
    width: 100%;
  }

  .banner-vertical img {
    height: 100%;
  }

  .banner-vertical .slider {
    height: 33%;
  }

  .place_search_form, .z_search_form {
    height: 40px;
  }

</style>
<style>
  .date-picker .ivu-input{
    height: 38px;
    width: 200px
  }
  .date-picker .ivu-icon {
    width: 38px;
    height: 38px;
  }
</style>
<style>

  #mainbanner {
    font-family: Arial;
    position: relative;
    width: 100%;
    min-width: 800px;
  }

  .carousel-item {
    height: 420px;
  }

  .kd-tourform#search {
    position: absolute;
    bottom: 30px;
    left: 25%;
    width: 42%;
    height: 165px;
  }

  .search-wrapper {
    /*padding-top: 10px;*/
    border-radius: 4px;
    background: rgba(0, 0, 0, .5);
  }

  .search-wrapper .tab {
    height: 40px;
  }

  .search-wrapper .tab a {
    padding-top: 10px;
    float: left !important;
    _display: inline;
    width: 25%;
    line-height: 30px;
    font-size: 19px;
    font-family: 'Hiragino Sans GB', 'Microsoft YaHei', SimHei, SimSun, sans-serif;
    color: #fff;
    font-weight: 700;
    text-align: center;
    -webkit-transition: text-shadow .2s ease-in-out;
    transition: text-shadow .2s ease-in-out;
  }

  .search-wrapper .tab a:hover {

    color: #fff;
    text-shadow: 0 0 16px hsla(0, 0%, 100%, .5);
  }

  .search-wrapper .tab .active {
    color: #ec971f;
  }

  .search-wrapper .tab a.active:hover {
    color: #ec971f;
  }

  .search-wrapper .panel {
    padding: 10px;
    transition: height 200ms;
  }

  .search-wrapper .panel {
    width: 100%;
    text-align: center
  }

  .search-wrapper .panel .panel-cont .input-control .txt {
    float: left !important;
    _display: inline;
    border-radius: 3px 0 0 3px;
    padding: 0 10px;
    width: 80%;
    height: 38px;
    line-height: 38px;
    border: 1px solid transparent;
    border-right: 0;
    color: #323232;
    font-size: 16px;
    font-family: 'Hiragino Sans GB', 'Microsoft YaHei', SimHei, SimSun, sans-serif;
  }

  .search-wrapper .panel .panel-cont .input-control .hotelsearch_txt {
    border-radius: 3px 0 0 3px;
    width: 35%;
    margin-right: 3px;
  }

  .search-wrapper .panel .panel-cont .input-control .date_in {
    border-radius: 0px;
    width: 22%;
    margin-right: 3px;
  }

  .search-wrapper .panel .panel-cont .input-control .date_out {
    border-radius: 0 3px 3px 0;
    width: 22%;
    margin-right: 3px;
  }

  .search-wrapper .panel .panel-cont .input-control .focus:focus {
    border-color: #10A251;
  }

  .search-wrapper .panel .panel-cont .input-control .btn {
    float: left !important;
    _display: inline;
    border-radius: 0 3px 3px 0;
    border: 0;
    width: 90px;
    height: 38px;
    /*line-height: 38px;*/
    text-align: center;
    text-decoration: none !important;
    font-size: 16px;
    font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
    color: #fff;
    font-weight: 700;
    background: #2dd382;
    background: -webkit-linear-gradient(315deg, #2ed685, #10a251);
    background: linear-gradient(135deg, #2ed685, #10a251);
    cursor: pointer;
  }

  .panel .panel-cont .plan .link {
    display: inline-block;
    margin: 6px 10px;
    width: 140px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
    border-radius: 3px;
    background: #2dd382;
    background: -webkit-linear-gradient(315deg, #2ed685, #10a251);
    background: linear-gradient(135deg, #2ed685, #10a251);
  }

  .q-layer {
    padding: 10px;
    width: 486px;
    top: 96px;
    left: 10px;
    display: none;
    position: absolute;
    z-index: 200;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .1);
    text-align: left;
  }

  .q-layer.show {
    display: block;
    -webkit-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
    -webkit-animation: showTopSlideIn .2s ease-in-out;
    animation: showTopSlideIn .2s ease-in-out;
  }

  .show {
    display: block;
    -webkit-animation: show .2s ease-in-out 0s forwards;
    animation: show .2s ease-in-out 0s forwards;
    -webkit-animation: show .2s ease-in-out;
    animation: show .2s ease-in-out;
  }

  .history-title {
    padding: 0 10px;
    height: 36px;
    line-height: 36px;
    border-radius: 3px;
    font-size: 16px;
    font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
    color: #ec971f;
    background: #f5f5f5;
  }

  .history-cont {
    padding-top: 4px;
  }

  .q-layer .history-cont a {
    display: inline-block;
    margin-top: 6px;
    padding: 0 10px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    border-radius: 3px;
    color: #636363;
    white-space: nowrap;
  }

</style>

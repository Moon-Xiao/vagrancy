<template>
  <div id="store-slides">
    <div class="store-home-category" id="homeCategory">
      <ul class="store-home-category-list">
        <li class="store-home-category-item" v-for="item in category">
          <i :class="'fa fa-'+item.icon" class="left-icon fa-fw"></i>
          <div class="right-part">
            <p id="item-title">{{item.place}}</p>
            <p id="item-subtitle">{{item.subplace}}</p>
          </div>
          <span>&gt;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        category: [
          {
            place: '港澳台 国内',
            subplace: '香港 澳门 台湾 三亚',
            icon: 'star-half-o'
          },
          {
            place: '日本 韩国',
            subplace: '东京 大阪 冲绳 北海道',
            icon: 'star-half-o'
          },
          {
            place: '东南亚 南亚',
            subplace: '普吉 清迈 沙巴 巴厘岛 马尔代夫',
            icon: 'star-half-o'
          },
          {
            place: '欧洲 美洲',
            subplace: '法国 意大利 土耳其 英国 荷兰',
            icon: 'globe'
          },
          {
            place: '澳新 中东非',
            subplace: '悉尼 新西兰 迪拜 肯尼亚',
            icon: 'star-half-o'
          },
          {
            place: '个性推荐',
            subplace: '私人定制 亲自 情侣 海岛游 购物',
            icon: 'star-half-o'
          },
          {
            place: '出行必备',
            subplace: 'WIFI 电话卡 接送机 保险',
            icon: 'wifi'
          }
        ]
      }
    }
  }
</script>

<style>
  #store-slides {
    width: 100%;
    height: 26rem;
    background: url("/static/images/store_temp/slide.png") no-repeat;
    background-size: 120% 100%;
    background-position: center;
    padding: 0 4rem;
  }

  .left-icon{
    float: left;
    line-height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  .store-home-category {
    float: left;
    height: 100%;
    width: 22rem;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.5rem 0;
  }

  .right-part{
    float: left;
  }

  .right-part p{
    text-align: left;
  }

  .right-part #item-title{
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
  }

  .right-part #item-subtitle{
    color: gainsboro;
    font-size: 0.9rem;
  }

  .store-home-category-list {
    list-style: none;
    color: white;
    height: 100%;
    font-size: 1.2rem;
  }

  .store-home-category-item{
    border-bottom: solid white 1px;
    height: 3.64rem;
    padding: 0.3rem 0;
  }

  .store-home-category-item span{
    float: right;
    margin-right: 1rem;
    line-height: 3rem;
  }


</style>

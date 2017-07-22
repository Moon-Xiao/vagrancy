<template>
  <div class="plcContainer">
    <div class="qyWrap">
      <h2 class="bigname fontYaHei">{{listTitle}}</h2>
      <div class="plcHotCityContent">
        <div class="plcHotCityLists">
          <!-- 6个样式 before -->
          <ul class="plcHotCityList clearfix" style="position: absolute; left: 0px;">
            <li v-for="(city,index) in cities">
              <p class="top">
                <a href="#"><span class="number">{{index}}</span>
                  <img :src="city.img" class="photo lazy" style="display: block;"></a>
              </p>
              <div class="bottom">
                <h3 class="name fontYaHei">
                  <a href="#">{{city.name}}</a></h3>
                <div class="info pois">
                  <a v-for="city in city.spots" href="#" target="_blank">{{city}}></a>
                </div>
              </div>
            </li>
          </ul>
          <!-- 6个样式 end -->
          <!-- 6个样式 before -->
          <ul class="plcHotCityList clearfix" style="position: absolute; left: 100%;">
            <li v-for="(city,index) in cities">
              <p class="top">
                <a href="#"><span class="number">{{index}}</span>
                  <img :src="city.img" class="photo lazy" style="display: block;"></a>
              </p>
              <div class="bottom">
                <h3 class="name fontYaHei">
                  <a href="#">{{city.name}}</a></h3>
                <div class="info pois">
                  <a v-for="city in city.spots" href="#" target="_blank">{{city}}></a>
                </div>
              </div>
            </li>
          </ul>
          <!-- 6个样式 end -->
        </div>
        <p class="plcHotCityPage prev disabled" data-bn-ipg="place-country-hotcity-pre"></p>
        <p class="plcHotCityPage next" data-bn-ipg="place-country-hotcity-next"></p>
      </div>
      <p class="plcHotCityAll">
        <a href="#" class="bigBtnViewAll fontYaHei" target="_blank">查看全部城市（41）</a></p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        nowPage: 0,
        listTitle: '热门地点',
        cities: [
          {
            img: '/static/images/des/country/chinalist1.jpg',
            name: '沈阳市',
            spots: ['沈阳故宫', '大帅府', '方特', '棋盘山', '沈阳植物园', '918纪念馆', '中街']
          },
          {
            img: '/static/images/des/country/chinalist2.jpg',
            name: '澳门',
            spots: ['澳门', '大炮台', '议事亭前地', '玫瑰堂', '妈阁庙', '氹仔岛', '澳門威尼斯人', '官也']
          },
          {
            img: '/static/images/des/country/chinalist3.jpg',
            name: '台湾',
            spots: ['台北101大楼', '国立故宫博物院', '国父纪念馆', '中正纪念堂', '垦丁大', '西门町', '鹅銮鼻公园']
          },
          {
            img: '/static/images/des/country/chinalist4.jpg',
            name: '台北',
            spots: ['台北101大楼', '国立故宫博物院', '西门町', '中正纪念堂', '国父纪念馆', '士林夜市', '士林官邸']
          },
          {
            img: '/static/images/des/country/chinalist5.jpg',
            name: '高雄市',
            spots: ['高雄捷运美丽岛站', '六合夜市', '打狗英国领事馆', '爱河', '西子湾风景区', '驳二艺术']
          },
          {
            img: '/static/images/des/country/chinalist6.jpg',
            name: '香港',
            spots: ['星光大道', '太平山', '维多利亚港', '香港海洋公园', '香港迪士尼乐园', '金紫荆广场', '尖沙咀', '弥敦道']
          },
          //
          {
            img: '/static/images/des/country/chinalist1.jpg',
            name: '沈阳市',
            spots: ['沈阳故宫', '大帅府', '方特', '棋盘山', '沈阳植物园', '918纪念馆', '中街']
          },
          {
            img: '/static/images/des/country/chinalist2.jpg',
            name: '澳门',
            spots: ['澳门', '大炮台', '议事亭前地', '玫瑰堂', '妈阁庙', '氹仔岛', '澳門威尼斯人', '官也']
          },
          {
            img: '/static/images/des/country/chinalist3.jpg',
            name: '台湾',
            spots: ['台北101大楼', '国立故宫博物院', '国父纪念馆', '中正纪念堂', '垦丁大', '西门町', '鹅銮鼻公园']
          },
          {
            img: '/static/images/des/country/chinalist4.jpg',
            name: '台北',
            spots: ['台北101大楼', '国立故宫博物院', '西门町', '中正纪念堂', '国父纪念馆', '士林夜市', '士林官邸']
          },
          {
            img: '/static/images/des/country/chinalist5.jpg',
            name: '高雄市',
            spots: ['高雄捷运美丽岛站', '六合夜市', '打狗英国领事馆', '爱河', '西子湾风景区', '驳二艺术']
          },
          {
            img: '/static/images/des/country/chinalist6.jpg',
            name: '香港',
            spots: ['星光大道', '太平山', '维多利亚港', '香港海洋公园', '香港迪士尼乐园', '金紫荆广场', '尖沙咀', '弥敦道']
          }
        ]
      }
    }
  }
</script>
<style>
  .plcHotCityLists {
    height: 664px;
    overflow: hidden;
  }
  .plcHotCityList {
    width: 1005px;
    margin-left: -25px;
  }
  .plcHotCityList li {
    position: relative;
    float: left;
    width: 310px;
    margin: 30px 0 0 25px;
    background-color: #fff;
  }
  .plcHotCityList .top {
    position: relative;
    overflow: hidden;
  }
  .plcHotCityList li:nth-child(1) .number {
    background-color: #e8634f;
  }
  .plcHotCityList .number {
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    background-color: #5cad77;
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
  }
  .plcHotCityList .photo {
    display: block;
    width: 100%;
    height: 200px;
    -webkit-transition: all 1.2s;
    transition: all 1.2s;
  }
  .plcHotCityList .bottom {
    height: 100px;
    border: 1px solid #ececec;
    border-top-width: 0;
    padding: 0 20px;
  }
  .plcHotCityList .title {
    width: 100%;
    padding-top: 4px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    color: #636363;
  }
  .plcHotCityList .info {
    width: 100%;
    height: 40px;
    overflow: hidden;
    line-height: 20px;
    color: #636363;
  }
  .plcHotCityList .info.pois a {
    color: #636363;
  }
</style>

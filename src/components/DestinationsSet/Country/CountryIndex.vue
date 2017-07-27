<template>
  <div class="country-index">
    <country-index-info :des="country"></country-index-info>

    <div class="plcContainer">
      <div class="qyWrap">
        <h2 class="bigTitle fontYaHei">热门城市</h2>

        <div class="plcHotCityContent">
          <div class="plcHotCityLists">
            <ul class="plcHotCityList clearfix">
              <li v-for="city in country.cities">
                <p class="top">
                  <router-link to="/destinations/city">
                    <span class="number">1</span>
                    <img :src="'/'+city.img" class="photo lazy" style="display: block;"></router-link></p>
                <div class="bottom">
                  <h3 class="title fontYaHei"><a href="#">{{city.name}}</a></h3>
                  <div class="info pois">
                    <a >{{city.info}}</a>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p class="plcHotCityAll"><a href="#" class="bigBtnViewAll fontYaHei" target="_blank">查看全部城市（41）</a></p>
      </div>
    </div>
    <travel-list></travel-list>

    <div class="plcContainer">
      <div class="qyWrap">
        <h2 class="plcRouteTitle bigTitle fontYaHei" style="margin-bottom: 20px">出发去{{country.name}}</h2>
        <div class="flightServiceV2 flightServiceV2-wrap">
          <ul class="flightServiceV2-ul ">
            <!--行前必备-->
            <li class="fsBox fs-prepare">
              <h3 class="fsTitle">
                <a class="normalText fontYaHei">行前准备</a>
              </h3>
              <div class="listBox">
                <ul class="list" style="padding:0 20px;">
                  <li>
                    <span class="icon visa"></span>
                    <a target="_blank" href="#" class="name fontYaHei">国家签证</a>
                    <span class="tag">必备</span>
                  </li>
                  <li>
                    <span class="icon insurance"></span>
                    <a target="_blank" href="#" class="name fontYaHei">出境保险</a>
                    <span class="tag">必备</span>
                  </li>
                  <li>
                    <span class="icon wifi"></span>
                    <a target="_blank" href="#" class="name fontYaHei">WI-FI / 电话卡</a>
                    <span class="tag">随身</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="fsBox">
              <h3 class="fsTitle">
                <a data-bn-ipg="Place-country-lm-cheapflights" href="javascript:void(0)" class="normalText fontYaHei">
                  {{country.name}}特价机票
                </a>
              </h3>
              <div class="fsList fsList2">
                <h4 class="fsTitle2"><span class="fontYaHei">低价机票</span></h4>
                <ul class="fsListBox_1">
                  <li class="itemNormal">
                    <a data-bn-ipg="Place-country-lm-cheapflights1" href="//z.qyer.com/deal/59852/" target="_blank"
                       class="fsListType2">
                      <div class="fsTitle1">
                        <span class="tag">最热销</span>
                        <span class="text fontYaHei">上海直飞台北/高雄单程含税机票(可自由搭配回程票)</span>
                      </div>
                      <div class="fsInfo1">
                        <span class="discount fontYaHei"><em>7</em>折</span>
                        <span class="price"><em>699</em>元起</span>
                      </div>
                    </a>
                  </li>
                </ul>
                <h4 class="fsTitle2">
                  <span class="fontYaHei">低价亚洲其他机票</span>
                </h4>
                <ul class="fsListBox_1 border_naked">
                  <li class="itemNormal">
                    <a data-bn-ipg="Place-country-lm-cheapflights2" href="//z.qyer.com/deal/54168/" target="_blank"
                       class="fsListType2">
                      <div class="fsTitle1">
                        <span class="tag">最热销</span>
                        <span class="text fontYaHei">【拒签全退】上海/杭州直飞日本多地4-30天往返含税机票(日航/全日空等,赠日上免税店打折券)</span>
                      </div>
                      <div class="fsInfo1">
                        <span class="discount fontYaHei"><em>4.2</em>折</span>
                        <span class="price"><em>1799</em>元起</span>
                      </div>
                    </a>
                  </li>
                </ul>
                <a href="//z.qyer.com/?ptype=cruise&amp;subptype=all&amp;country=11&amp;turn=1#SX" target="_blank"
                   class="fsAdvertise">
                  <img src="//place.qyerstatic.com/project/images/flightService/picture-hotel1.png">
                </a>
              </div>
            </li>
            <li class="fsBox">
              <h3 class="fsTitle">
                <a href="" class="normalText fontYaHei">中国自由行必备</a>
              </h3>
              <div class="fsList">
                <ul class="fsListBox_4">
                  <li class="itemNormal">
                    <a data-bn-ipg="Place-country-lm-itravel1" href="//z.qyer.com/deal/59358/" target="_blank"
                       class="fsListType1">
                      <div class="fsCover1">
                        <img src="//pic.qyer.com/lastminute/library/2014/12/26/1419562603/120x120">
                        <span class="tag">自由行</span>
                      </div>
                      <div class="fsTitle1 fontYaHei">【暑假】上海直飞香港4天自由行(地铁商圈附近酒店+多套优质航班)</div>
                      <div class="selled">699人已购</div>
                      <div class="fsInfo1">
                        <span class="discount fontYaHei"><em>4.2</em>折</span>
                        <span class="price"><em>1400</em>元起</span>
                      </div>
                    </a>
                  </li>
                  <li class="itemNormal">
                    <a data-bn-ipg="Place-country-lm-itravel2" href="//z.qyer.com/deal/59359/" target="_blank"
                       class="fsListType1">
                      <div class="fsCover1">
                        <img src="//pic.qyer.com/lastminute/library/2015/06/09/5576b44f2e7db.jpg/120x120">
                        <span class="tag">自由行</span>
                      </div>
                      <div class="fsTitle1 fontYaHei">【暑假】上海直飞澳门3天2晚自由行(可选喜来登/葡京酒店)</div>
                      <div class="selled">533人已购</div>
                      <div class="fsInfo1">
                        <span class="discount fontYaHei"><em>5.4</em>折</span>
                        <span class="price"><em>1661</em>元起</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <p class="plcHotCityAll">
          <a class="bigBtnViewAll fontYaHei">查看更多优选</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import CountryIndexInfo from '../Common/IndexInfo.vue'
  import TravelList from '../Common/TravelList.vue'
  export default {
    components: {CountryIndexInfo, TravelList},
    data () {
    },
    props: {
      country: Object
    }
  }
</script>
<style>
  .plcContainer {
    width: 100%;
    min-width: 980px;
    padding: 40px 0;
    background-color: #fff;
  }

  .qyWrap {
    width: 1020px;
    margin: 0 auto;
  }

  .bigTitle {
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.058823;
    color: #636363;
  }

  .plcHotCityLists {
    height: 664px;
    overflow: hidden;
  }

  .plcHotCityList {
    margin: 0 auto;
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

  .plcHotCityList .bottom {
    height: 100px;
    border: 1px solid #ececec;
    border-top-width: 0;
    padding: 0 20px;
  }

  .plcHotCityList li:nth-child(1) .number {
    background-color: #e8634f;
  }

  .plcHotCityList li:nth-child(2) .number {
    background-color: #f48a37;
  }

  .plcHotCityList li:nth-child(3) .number {
    background-color: #f0b500;
  }

  .plcHotCityList .title a:hover {
    color: #0073b6;
  }

  .plcHotCityList a:hover {
    text-decoration: none;
  }

  .plcHotCityList li:hover .photo {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  .plcHotCityList .photo {
    display: block;
    width: 100%;
    height: 200px;
    -webkit-transition: all 1.2s;
    transition: all 1.2s;
  }

  .plcHotCityList .title a {
    font-size: 20px;
    font-family: "Microsoft YaHei";
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #323232;
    vertical-align: middle;
  }

  .plcHotCityList .bottom {
    height: 100px;
    border: 1px solid #ececec;
    border-top-width: 0;
    padding: 0 20px;
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

  .plcHotCityAll {
    padding-top: 30px;
    text-align: center;
  }

  .bigBtnViewAll {
    display: inline-block;
    min-width: 220px;
    height: 48px;
    padding: 0 15px;
    border: 1px solid #ececec;
    background-color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    color: #959595;
  }

  a.bigBtnViewAll:hover {
    color: white;
    background-color: #ec971f;
  }
</style>
<style scoped>
  .fsBox {
    text-align: left;
  }
  .fsBox a{
    color: #555555;
  }
  .flightServiceV2-wrap {
    overflow: hidden;
    height: 370px;
    width: 980px;
    position: relative;
  }

  .flightServiceV2-ul {
    position: absolute;
    left: 0;
    top: 0;
    width: 1010px;
    height: 370px;
  }

  .flightServiceV2-ul li.fs-prepare {
    border: none;
  }

  .flightServiceV2-ul .fsBox {
    background-color: #fff;
    float: left;
    width: 308px;
    height: 368px;
    margin-right: 25px;
    border: solid 1px #ececec;
    position: relative;
  }

  .flightServiceV2-ul .fs-prepare .fsTitle {
    border: 1px solid #ececec;
  }

  .flightServiceV2 .fsTitle {
    height: 40px;
    position: relative;
    border-bottom: solid 1px #ececec;
  }

  .flightServiceV2 .fsTitle .normalText, .flightServiceV2 .fsTitle .hoverText {
    display: block;
    height: 40px;
    line-height: 40px;
    text-indent: 19px;
    color: #636363;
    background-color: #f5f5f5;
    text-decoration: none;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .flightServiceV2 .listBox:last-child {
    background-color: #fff;
  }

  .flightServiceV2-ul .fs-prepare .list {
    border: 1px solid #ececec;
    border-top: none;
  }

  .listBox .list {
    background-color: #fff;
    border-bottom: 1px solid #ececec;
  }

  .flightServiceV2 .listBox .list li {
    height: 63px;
    line-height: 64px;
  }

  .listBox .visa {
    background-position: -40px -51px;
  }

  .listBox .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(/static/images/icon/icon_hotel.png);
    background-repeat: no-repeat;
  }

  .listBox .insurance {
    background-position: -83px -55px;
    position: relative;
    top: 1px;
  }

  .listBox .wifi {
    background-position: -125px -50px;
  }

  .listBox .name {
    font-size: 16px;
    margin-left: 8px;
    color: #323232;
    text-decoration: none;
  }

  .flightServiceV2 .listBox .tag {
    border: none;
  }

  .listBox .tag {
    color: silver;
    font-size: 14px;
    font-family: Hiragino Sans GB, Microsoft YaHei, \9ED1\4F53, \5b8b\4f53, sans-serif;
    position: absolute;
    right: 0;
    top: 0;
  }

  .flightServiceV2 .fsList {
    padding: 19px 19px 0 19px;
  }
  .flightServiceV2 .fsListBox_1 .itemNormal {
    margin-bottom: 16px;
    padding-bottom: 10px;
  }
  .flightServiceV2 .fsList2 .fsListType2 {
    height: 42px;
    padding-bottom: 35px;
  }
  .flightServiceV2 .fsList .tag {
    display: inline-block;
    padding: 0 6px;
    border: solid 1px #5cad77;
    height: 16px;
    border-radius: 2px;
    color: #5cad77;
    margin-right: 4px;
    font-size: 12px;
    font-weight: normal;
  }
  .flightServiceV2 .fsListType2 .fsTitle1 .text {
    height: auto;
    white-space: normal;
    line-height: 24px;
  }
  .flightServiceV2 .fsListType2 .tag {
    position: relative;
    top: 2px;
    line-height: 12px;
  }

  .flightServiceV2 .fsListType2 .fsInfo1 {
    margin: 5px 0 0 0;
  }
  .flightServiceV2 .fsListBox_4 .fsInfo1 {
    margin: 7px 0 0 0;
  }
  .flightServiceV2 .fsCover1 .tag {
    position: absolute;
    left: 5px;
    bottom: 5px;
    background-color: rgba(61,176,65,0.75);
    border: none;
    color: #fff;
    height: 18px;
    line-height: 20px;
    border-radius: 2px;
  }
  .flightServiceV2 .fsListBox_4 .fsListType1 {
    height: 141px;
  }
  .flightServiceV2 .fsListBox_4 .fsCover1 {
    float: left;
    width: 120px;
    height: 120px;
    margin-right: 10px;
  }
  .flightServiceV2 .fsListBox_4 .selled {
    color: #959595;
    height: 14px;
    line-height: 12px;
    margin-bottom: 5px;
  }
  .flightServiceV2 .fsListBox_4 .itemNormal {
    margin: 0 0 19px;
    padding: 2px 0 0;
  }

  .flightServiceV2 .itemNormal {
    padding: 0;
    border-bottom: solid 1px #ececec;
  }
  .flightServiceV2 .fsCover1 {
    height: 125px;
    position: relative;
    overflow: hidden;
  }
  .flightServiceV2 .fsListType1 {
    display: block;
    height: 85px;
    text-decoration: none;
    overflow: hidden;
  }
  .flightServiceV2 .fsInfo1 {
    height: 20px;
    line-height: 20px;
    position: relative;
    margin: 14px 0 0 0;
  }
  .flightServiceV2 .fsInfo1 .discount {
    float: left;
    font-size: 14px;
    color: #959595;
  }

  .flightServiceV2 .fsList2 .fsTitle2 {
    margin: 0 0 5px;
  }

  .flightServiceV2 .fsList .fsTitle2 {
    color: #959595;
    font-size: 16px;
    position: relative;
    height: 18px;
    line-height: 18px;
  }

  .flightServiceV2 .fsInfo1 .discount em {
    font-size: 16px;
    color: #ff7466;
  }

  .flightServiceV2 .fsInfo1 {
    height: 20px;
    line-height: 20px;
    position: relative;
    margin: 14px 0 0 0;
  }

  .flightServiceV2 .price {
    position: absolute;
    right: 0;
    top: 0px;
    font-size: 12px;
    color: #959595;
  }

  .flightServiceV2 .price em {
    font-size: 16px;
    color: #ff7466;
    padding-right: 5px;
  }

  .flightServiceV2 .price {
    position: absolute;
    right: 0;
    top: 0px;
    font-size: 12px;
    color: #959595;
  }
  .listBox li {
    text-align: left;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ececec;
    position: relative;
  }

  .flightServiceV2-ul .fs-prepare .list {
    border: 1px solid #ececec;
    border-top: none;
  }
  .flightServiceV2 .fsList2 .itemNormal:last-child {
    border-bottom: solid 1px #ececec;
  }
</style>

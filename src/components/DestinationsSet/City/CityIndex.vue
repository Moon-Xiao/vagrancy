<template>
  <div class="city-index">
    <city-index-info :des="city"></city-index-info>

    <div class="hot-des">
      <div class="plcContainer">
        <div class="qyWrap">
          <h2 class="bigTitle fontYaHei">热门景区</h2>

          <div class="plcHotCityContent">
            <div class="plcHotCityLists">
              <ul class="plcHotCityList clearfix">
                <li v-for="(scenic,index) in city.scenics">
                  <p class="top">
                    <a href="#" target="_blank">
                      <span class="number">{{index+1}}</span>
                      <img :src="scenic.img" class="photo lazy" style="display: block;"></a></p>
                  <div class="bottom">
                    <h3 class="title fontYaHei"><a href="#">{{scenic.name}}</a></h3>
                    <div class="info pois">
                      <a>{{scenic.info}}</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p class="plcHotCityAll"><a href="#" class="bigBtnViewAll fontYaHei" target="_blank">查看全部景区（41）</a></p>
        </div>
      </div>
    </div>
    <travel-list></travel-list>
  </div>
</template>
<script>
  import CityIndexInfo from '../Common/IndexInfo.vue'
  import TravelList from '../Common/TravelList.vue'
  export default {
    components: {CityIndexInfo, TravelList},
    data () {
      return {}
    },
    props: {
      city: Object
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

  .fsBox a {
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
    background-color: rgba(61, 176, 65, 0.75);
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


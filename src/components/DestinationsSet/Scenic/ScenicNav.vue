<template>
  <div>
    <div class="plcMenuBarHolder placeNavBar">
      <div class="plcMenuBars">
        <div class="plcMenuBar countryBar">
          <ul class="placeNav clearfix fontYaHei">
            <li class="menu">
              <router-link to="/destinations/scenic/index" class="text">城市指南</router-link>
              <span class="tab"></span>
              <div class="menuList">
                <div class="poiMenuBarLay">
                  <div class="layContent">
                    <ul class="guideList">
                      <li class="list_overview">
                        <em class="tit">
                          <a href="#">目的地概况</a>
                        </em>
                        <p class="txt">
                          <a href="#">目的地速写</a><span>｜</span>
                          <a href="#">当地人生活</a><span>｜</span>
                          <a href="#">信仰与禁忌</a><span>｜</span>
                          <a href="#">文化</a><span>｜</span>
                          <a href="#">环境</a><span>｜</span>
                          <a href="#">书籍推荐</a><span>｜</span>
                          <a href="#">电影推荐</a><span>｜</span>
                          <a href="#">语言帮助</a><span>｜</span>
                          <a href="#">文字标识</a>
                        </p>
                      </li>
                      <li class="list_traffic">
                        <em class="tit">
                          <a href="#">城际交通</a>
                        </em>
                        <p class="txt">
                          <a href="#">飞机</a>
                          <span>｜</span>
                          <a href="#">火车</a>

                          <span>｜</span>
                          <a href="#">长途汽车</a>

                          <span>｜</span>
                        </p>
                      </li>
                      <li class="list_domestic_traffic">
                        <em class="tit">
                          <a href="#">市内交通</a>
                        </em>
                        <p class="txt">
                          <a href="#">市内交通概述</a>

                          <span>｜</span>
                        </p>
                      </li>
                      <li class="list_season">
                        <em class="tit">
                          <a href="#">旅行日历</a>
                        </em>
                        <p class="txt">
                          <a href="#">旅行季节</a>

                          <span>｜</span>
                          <a href="#">当地节日</a>
                        </p>
                      </li>
                      <li class="list_currency">
                        <em class="tit">
                          <a href="#">货币与花费</a>
                        </em>
                        <p class="txt">
                          <a href="#">消费水平</a>

                          <span>｜</span>
                          <a href="#">货币兑换</a>

                          <span>｜</span>
                          <a href="#">银联</a>

                          <span>｜</span>
                          <a href="#">信用卡</a>

                          <span>｜</span>
                          <a href="#">小费</a>

                          <span>｜</span>
                        </p>
                      </li>
                      <li class="list_information">
                        <em class="tit">
                          <a href="#">实用信息</a>
                        </em>
                        <p class="txt">
                          <a href="#">信息中心</a>

                          <span>｜</span>
                          <a href="#">城市地图获取</a>

                          <span>｜</span>
                          <a href="#">网络</a>

                          <span>｜</span>
                          <a href="#">邮局</a>

                          <span>｜</span>
                        </p>
                      </li>
                      <li class="list_notice">
                        <em class="tit">
                          <a href="#">旅行须知</a>
                        </em>
                        <p class="txt">
                          <a href="#">穷游er忠告</a>

                          <span>｜</span>
                          <a href="#">安全</a>

                          <span>｜</span>
                          <a href="#">紧急电话</a>

                          <span>｜</span>
                          <a href="#">医疗</a>

                          <span>｜</span>
                          <a href="#">中国驻该城市使领馆</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="menu">
              <router-link to="/destinations/scenic/index" class="text">景点玩乐</router-link>
              <span class="tab"></span>
              <ul class="menuList menuNormal">
                <li class="normalItem">
                  <a target="_blank" href="#">景点观光(12)</a>
                </li>
                <li class="normalItem">
                  <a target="_blank" href="#">购物(5)</a>
                </li>
                <li class="normalItem">
                  <a target="_blank" href="#">休闲娱乐(8)</a>
                </li>
                <li class="normalItem">
                  <a target="_blank" href="#">特色主题推荐(6)</a>
                </li>
                <li class="normalItem">
                  <a target="_blank" href="#">一日游/当地团(4)</a>
                </li>
              </ul>
            </li>
            <li class="normal zIndex">
              <a href="#">美食</a>
            </li>
            <li class="normal place-nav-zindex">  <span class="place-nav-bubble">
                    <span class="bubble-text">每日特惠</span>
                </span>
              <a href="#">酒店</a>
            </li>

            <li class="menu">
              <a href="#" class="text">旅行商城</a>
              <span class="tab"></span>
              <ul class="menuList menuNormal">
                <li class="normalItem">
                  <a href="#">
                    签证服务(3)
                  </a>
                </li>
                <li class="normalItem">
                  <a href="#">
                    接送机/包车/拼车(1)
                  </a>
                </li>
                <li class="normalItem">
                  <a href="#">
                    WIFI/电话卡(5)
                  </a>
                </li>
                <li class="normalItem">
                  <a href="#">
                    城市玩乐(3)
                  </a>
                </li>
              </ul>
            </li>
            <li class="line"></li>
            <li class="normal">
              <a href="#">游记攻略</a>
            </li>

            <li class="menu">
              <a href="#" class="text"> 行程路线</a>
              <span class="tab"></span>
              <ul class="menuList menuNormal">
                <li class="normalItem">
                  <a href="#">
                    推荐路线
                  </a>
                </li>
                <li class="normalItem">
                  <a href="#">
                    免费定制
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu">
              <a href="#" class="text"> 问答结伴</a>
              <span class="tab"></span>
              <ul class="menuList menuNormal">
                <li class="normalItem">
                  <a href="#">
                    瓦拉纳西结伴
                  </a>
                </li>
                <li class="normalItem">
                  <a href="#">
                    旅行问答
                  </a>
                </li>
                <li class="normalItem">
                  <a href="#">
                    瓦拉纳西照片
                  </a>
                </li>
              </ul>
            </li>

            <li class="line"></li>

            <li class="normal place-nav-zindex">

                <span id="js-nav-bubble" class="place-nav-bubble bubble-green">
                    <span target="_blank" class="bubble-text">NEW</span>
                </span>
              <a href="#">
                地图
              </a>
            </li>

            <li class="normal">
              <a href="#">
                点评
              </a>
            </li>

            <li class="menu rightFix menuStyle_1 menuDead" id="poiNavSearchMenu">
                <span class="poiNavSearchIcon">
                    <img src="//static.qyer.com/models/project/poi/images/poiNav-search.png" alt="">
                </span>
              <form action="" id="poiNavSearchForm" method="post" target="_blank">
                <input type="text" name="poiNavSearchBox" id="poiNavSearchBox" class="poiNavSearch ui3_input"
                       autocomplete="off" placeholder="搜索国家/城市/目的地">
              </form>
              <span class="tab" id="poiNavSearchBg"></span>
              <ul class="menuList multipleList" id="poiNavSearchContainer">
                <li class="tip">
                  请输入搜索信息...
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view :scenic="scenic"></router-view>
  </div>
</template>
<script>
  export default {
    props: {
      scenic: Array
    }
  }
</script>
<style>
  .placeNavBar {
    min-height: 61px;
    margin-top: 10px;
  }

  .plcMenuBarHolder {
    width: 100%;
    height: 50px;
  }

  .plcMenuBars {
    width: 100%;
    min-width: 1200px;
    border-bottom: 1px solid #d7d7d7;
    background-color: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .05);
    min-height: 60px;
  }

  .placeNavBar .plcMenuBar.countryBar {
    z-index: 6;
  }

  .plcMenuBar {
    position: relative;
    width: 85%;
    margin: 0 auto;
    border-top: 1px solid #f5f5f5;
  }

  .placeNavBar .placeNav {
    width: 90%;
    top: 0;
    height: 59px;
    display: table;
  }

  .fontYaHei {
    font-family: Hiragino Sans GB, Microsoft YaHei, \9ED1\4F53, \5b8b\4f53, sans-serif;
  }

  .placeNav > li {
    /*height: 59px;*/
    list-style: none;
    position: relative;
    /*line-height: 59px;*/
    z-index: 2;
    display: table-cell;
    vertical-align: middle;
  }

  .zIndex {
    z-index: 99 !important;
  }

  .place-nav-zindex {
    z-index: 99 !important;
  }

  .placeNav a.text {
    color: #323232;
    font-size: 15px;
    text-decoration: none;
    display: block;
    height: 100%;
    position: relative;
    z-index: 3;
    text-align: center;
    line-height: 64px;
  }

  .placeNav .text:hover {
    color: #147850;
  }

  .placeNav .tab, .placeNav .tab:after {
    position: absolute;
    width: 100%;
    background: #fff;
  }

  .placeNav .tab {
    height: 50px;
    border: 1px solid #d7d7d7;
    top: 5px;
    left: -1px;
    box-shadow: 0 0 4px rgba(0, 0, 0, .15);
    z-index: 2;
    display: none;
  }

  .placeNav .tab:after {
    content: "";
    left: 0;
    bottom: -3px;
    height: 8px;
    padding-right: 3px;
  }

  .placeNav .poiMenuBarLay {
    width: 600px;
    padding-left: 10px;
    position: relative;
    left: 0;
    top: 0;
    float: none;
  }

  .placeNav .poiMenuBarLay .layContent {
    position: relative;
    border: none;
    background-color: #fff;
    padding: 0;
    box-shadow: none;
  }

  .placeNav .guideList {
    font-size: 14px;
    line-height: 24px;
  }

  .placeNav .guideList > li {
    padding: 8px 10px 8px 120px;
    min-height: 24px;
    margin-right: 10px;
  }

  .placeNav .guideList .tit {
    float: left;
    margin-left: -110px;
    width: 94px;
    white-space: nowrap;
    overflow: hidden;

  }

  .placeNav .guideList .txt {
    font-size: 12px;
    text-align: left;
  }

  .placeNav .menu:hover .menuList, .placeNav .menu:hover .tab, .placeNav .menuHover .menuList, .placeNav .menuHover .tab {
    display: block;
  }

  .menu:hover .menu > a.text {
    color: #ec971f;
  }

  .placeNav .menuList {
    position: absolute;
    z-index: 1;
    left: -1px;
    top: 56px;
    border: 1px solid #d7d7d7;
    animation: myfirst .3s;
    -moz-animation: myfirst .3s;
    -webkit-animation: myfirst .3s;
    -o-animation: myfirst .3s;
    transform-origin: left top;
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    -moz-transform-origin: left top;
    -o-transform-origin: left top;
    box-shadow: 0 0 4px rgba(0, 0, 0, .15);
    padding: 10px 3px 10px 0;
    background: #fff;
    display: none;
    min-width: 140px;
  }

  .placeNav .normalItem:hover {
    background: #f5f5f5;
    border-radius: 3px;
  }

  .placeNav .normalItem {
    margin: 0 7px 0 10px;
    height: 34px;
    line-height: 34px;
    text-indent: 6px;
  }

  .place-nav-bubble {
    position: absolute;
    left: -3px;
    top: 3px;
    width: auto;
    white-space: nowrap;
    background-color: #f96956;
    z-index: 99;
  }

  .place-nav-bubble .bubble-text {
    display: block;
    width: auto !important;
    color: #fff;
    font-size: 12px;
    padding: 0 8px;
    height: 17px;
    line-height: 17px;
    font-smoothing: subpixel-antialiased;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .place-nav-bubble:after {
    content: '';
    position: absolute;
    left: 0;
    top: 17px;
    height: 0;
    width: 0;
    border: 4px solid #b8372f;
    border-left: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
</style>

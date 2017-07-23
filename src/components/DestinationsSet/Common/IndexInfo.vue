<template>
  <div class="plcFirstModule">
    <div class="plcFirstModuleWrap clearfix" style="background-color: white">
      <!-- 左侧焦点图 before -->
      <div class="plcFocusPhoto" id="focusPhoto">
        <ul class="plcFocusPhotoList">
          <li v-for="(img,index) in des.mainImgs" style="position: absolute;"
              :style="nowImgIndex===index?'left: 0;':'left: 100%;'">
            <a href="#"><img :src="img" width="680" height="400"></a>
          </li>
        </ul>
        <p class="prev" title="上一张" @click="nowImgIndex= nowImgIndex>0?nowImgIndex-1:des.mainImgs.length-1"></p>
        <p class="next" title="下一张" @click="nowImgIndex= nowImgIndex<des.mainImgs.length-1?nowImgIndex+1:0"></p>
        <p class="photoMore"><a href="#" style="color: #fff;">5180张照片</a></p>
      </div>
      <!-- 左侧焦点图 end -->
      <div class="plcFocusOperate">
        <!-- 右侧足迹 before -->
        <div class="plcFootprint" id="js-plcFootPrint">
          <ul class="place-userbehavior place-exClass">
            <li class="planto fontYaHei plcZIndex">
              <div v-bind:class="['planto-icon','icon',{is:isPlanto===1}]" @click="isPlanto= isPlanto===1?0:1"></div>
              <span class="fonts">想去</span>
              <div class="poiLikeSmallTip poiLikeHoverShow" id="poiLikeSmallTip">收藏至“我的想去”，随时查看最新信息</div>
            </li>
            <li class="beento fontYaHei">
              <div v-bind:class="['beento-icon','icon',{is:isBeento===1}]" @click="isBeento= isBeento===1?0:1"></div>
              <span class="fonts">去过</span>
            </li>
            <li class="lived fontYaHei">
              <div v-bind:class="['lived-icon','icon',{is:isLived===1}]" @click="isLived= isLived===1?0:1"></div>
              <span class="fonts">生活过</span>
            </li>
          </ul>
        </div>
        <!-- 右侧足迹 end -->
        <!-- 分享城市经验 before -->
        <!-- 城市首页 右侧评论 -->
        <div class="plcShareExp" id="expScrollModule">
          <div class="plcShareExpTitle">经验</div>
          <div class="plcShareExpContent">
            <ul class="plcShareExpList">
              <li v-for="(exp,index) in des.experiences" style="position: absolute;"
                  :style="nowExpIndex===index?'left: 0;':'left: -100%;'">
                <p><a href="#">{{exp.author}}:</a>{{exp.content}}</p>
              </li>
            </ul>
          </div>
          <div class="plcShareExpNavigation">
            <span class="prev" title="上一个"
                  @click="nowExpIndex= nowExpIndex>0?nowExpIndex-1:des.experiences.length-1"></span>
            <span class="next" title="下一个"
                  @click="nowExpIndex= nowExpIndex<des.experiences.length-1?nowExpIndex+1:0"></span></div>
          <div class="plcShareExpBottom">
            <p class="allShare"><a href="#" style="color: steelblue;font-size: 12px">查看全部经验</a></p>
            <p class="share"><a href="#" style="color: steelblue;font-size: 12px">+ 分享我的经验</a></p>
          </div>
        </div>
        <div class="plcQYGuide" id="qyGuide">
          <div class="plcShareExpTitle">经典游记</div>
          <ul class="plcQYGuideContent">
            <li data-id="92" style="text-align: left">
              <p class="cover">
                <a href="#">
                  <img :src="des.mainTravel.img" width="60" height="90">
                </a>
              </p>
              <p class="title fontYaHei">
                <a href="#">{{des.travels.title}}
                </a>
              </p>
              <p class="info">作者：{{des.travels.author}}<br>
                下载次数：{{des.travels.amount}}</p>
              <p class="download">
                <a href="#" class="ui-buttonA" style="color: white;">免费下载</a>
              </p>
            </li>
          </ul>
        </div>
        <!-- 经典游记 end -->
      </div>
      <div class="clear"></div>
    </div>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        isPlanto: 0,
        isBeento: 0,
        isLived: 0,
        nowImgIndex: 0,
        nowExpIndex: 0
      }
    },
    props: {
      des: Object
    }
  }
</script>
<style>

  .plcFirstModule {
    width: 100%;
    min-width: 980px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ececec;
    padding: 30px 0;
    text-align: left !important;
  }

  .plcFirstModuleWrap {
    width: 980px;
    margin: 0 auto;
    background-color: #fff;
  }

  .plcFocusPhoto {
    position: relative;
    float: left;
    width: 680px;
  }

  .plcFocusOperate {
    float: right;
    width: 299px;
    height: 398px;
    border: 1px solid #ececec;
    border-left: none;
  }

  .plcFocusPhotoList {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  .plcShareExpList {
    position: relative;
    height: 60px;
    overflow: hidden;
  }
  .plcShareExpList li {
    width: 100%;
  }


  .plcFootprint {
    padding: 10px 0;
  }

  .place-exClass {
    position: relative;
  }

  .plcShareExp {
    position: relative;
    margin: 0 19px 0 20px;
    border-top: 1px solid #f5f5f5;
  }

  .plcShareExp:hover .allShare {
    display: block;
  }

  .place-userbehavior > li {
    width: 30%;
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    z-index: 1;
  }

  .plcZIndex {
    z-index: 2 !important;
  }

  .place-userbehavior {
    display: table;
    width: 100%;
    box-sizing: border-box;
  }

  plcShareExpTitle {
    text-align: left;
    padding: 5px 0 2px;
    font-size: 14px;
    line-height: 34px;
    color: #959595;
  }

  .poiLikeSmallTip {
    font-size: 10px;
    width: 234px;
    height: 32px;
    display: none;
    background: url('/static/images/icon/poiLikeSmallTip.png') no-repeat left top;
    background-size: 234px 32px;
    position: absolute;
    left: 50%;
    top: 43px;
    margin-left: -117px;
    line-height: 36px;
    color: #959595 !important;
  }

  .planto:hover .poiLikeSmallTip {
    display: block;
  }

  .plcFootprint .icon {
    margin: 10px auto;
    width: 30px;
    height: 30px;
  }

  .planto-icon {
    background: url('/static/images/icon/poiV3-sprite6.png') no-repeat -230px 0;
  }

  .is.planto-icon {
    background-position: -260px 0;
  }

  .planto:hover .planto-icon {
    background-position: -260px 0;
  }

  .beento-icon {
    background: url('/static/images/icon/poiV3-sprite6.png') no-repeat -230px -30px;
  }

  .is.beento-icon {
    background-position: -260px -30px;
  }

  .beento:hover .beento-icon {
    background-position: -260px -30px;
  }

  .lived-icon {
    background: url('/static/images/icon/poiV3-sprite6.png') no-repeat -230px -60px;
  }

  .is.lived-icon {
    background-position: -260px -60px;
  }

  .lived:hover .lived-icon {
    background-position: -260px -60px;
  }

  .plcFocusPhoto .prev {
    left: 18px;
    background: url('/static/images/icon/icon-left.png') no-repeat;
  }

  .plcFocusPhoto .next, .plcFocusPhoto .prev {
    opacity: 0;
    position: absolute;
    top: 180px;
    width: 25px;
    height: 35px;
  }

  .plcFocusPhoto .next {
    right: 18px;
    background: url('/static/images/icon/icon-right.png') no-repeat;
  }

  .plcFocusPhoto:hover .next, .plcFocusPhoto:hover .prev {
    opacity: 1;
  }

  .plcFocusPhoto .photoMore {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }

  .plcFocusPhoto .photoMore a:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, .7);
  }

  .plcFocusPhoto .photoMore a {
    display: block;
    padding: 0 15px;
    border-radius: 5px;
    background-color: #000;
    background-color: rgba(0, 0, 0, .4);
    font-size: 14px;
    line-height: 28px;
  }

  .plcShareExpBottom .allShare {
    display: none;
    float: left;
  }

  .plcShareExpTitle {
    padding: 5px 0 2px;
    font-size: 14px;
    line-height: 34px;
    color: #959595;
  }

  .plcShareExpNavigation {
    position: absolute;
    top: 15px;
    right: -9px;
    color: #959595;
  }
  .plcShareExpNavigation span {
    position: relative;
    float: left;
    width: 18px;
    height: 18px;
    background-color: #fff;
    cursor: pointer;
  }

  .plcShareExpNavigation span.prev:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-right-color: #959595;
  }
  .plcShareExpNavigation span.next:before {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-left-color: #959595;
  }
  .plcShareExpBottom {
    width: 100%;
    padding: 5px 0 10px;
    overflow: hidden;
  }

  .plcQYGuide {
    position: relative;
    margin: 0 19px 0 20px;
    border-top: 1px solid #f5f5f5;
  }

  .plcShareExpList {
    position: relative;
    height: 60px;
    overflow: hidden;
  }

  .plcShareExp:hover .allShare {
    display: block;
  }

  .plcShareExpBottom .allShare {
    display: none;
    float: left;
  }

  .plcShareExpBottom .share {
    float: right;
  }

  .plcQYGuideContent {
    position: relative;
    width: 100%;
    height: 98px;
    overflow: hidden;
  }

  .plcQYGuideContent li {
    float: left;
    padding-left: 88px;
  }

  .plcQYGuideContent .cover {
    float: left;
    margin-left: -88px;
  }

  .plcQYGuideContent .title {
    font-size: 16px;
    line-height: 1.125;
  }

  .fontYaHei {
    font-family: Hiragino Sans GB, Microsoft YaHei, \9ED1\4F53, \5b8b\4f53, sans-serif;
  }

  .plcQYGuideContent .info {
    margin-top: 10px;
    font-size: 11px;
    color: #636363;
  }

  .plcQYGuideContent .download {
    margin-top: 6px;
  }

  .ui-buttonA {
    width: 100%;
    padding: 0;
  }

  .download {
    background-color: #1995dd;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, .2);
  }

  .download:hover {
    background-color: #3ba5e2;
    color: #fff;
    text-decoration: none;
  }

  .ui-buttonA {
    display: inline-block;
    height: 28px;
    padding: 0 15px;
    border: none;
    border-radius: 3px;
    overflow: visible;
    font-size: 14px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
</style>

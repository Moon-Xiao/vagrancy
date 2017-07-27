<template>
  <div class="plcContainer odd">
    <div class="qyWrap">
      <h2 class="plcMguideTitle bigTitle fontYaHei">热门游记</h2>
      <div class="plcMguideContent">
        <div class="plcMguideLists" id="mguideLists">
          <ul class="plcMguideList" style="width: 4020px; left: 0px;">
            <li v-for="travel in travels">
              <a href="#" title="如果在香港遇见了你" target="_blank">
                <p class="photo">
                  <img :src="'/'+travel.img" width="310" height="200" alt="" class="lazy" style="display: block;"></p>
                <p class="photoMask"></p>
                <p class="pois">12</p>
                <div class="content">
                  <p class="face">
                    <img :src="'/'+travel.authorImg" width="80" height="80" alt=""></p>
                  <p class="userName">{{travel.author}}</p>
                  <h3 class="title fontYaHei">{{travel.title}}</h3>
                  <blockquote class="text">{{travel.info}}</blockquote>
                </div>
                <div class="bottom"></div>
              </a>
            </li>
          </ul>
        </div>
        <p class="plcMguidePage prev disabled" id="mguidePagePrev"></p>
        <p class="plcMguidePage next" id="mguidePageNext"></p>
      </div>
      <div class="plcMguideAll">
        <a class="bigBtnViewAll fontYaHei" href="#">查看全部游记（384）</a></div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        //        travels: [
        //          {
        //            img: '/static/images/travels/travel1.jpg',
        //            title: '成都美食',
        //            author: 'cddddd',
        //            authorImg: '/static/images/travels/author1.jpg',
        //            info: '生活之城，休闲之都。成都人无论走得多远，一顿火锅，一道麻辣川菜，就能轻易唤起她的思乡之情。成都美食，可以串联起几乎所有关于成都的记忆与故事。成都美食也有一段传奇的成长经历。'
        //          },
        //          {
        //            img: '/static/images/travels/travel2.jpg',
        //            title: '一起去厦门看海吧',
        //            author: 'weiweimo',
        //            authorImg: '/static/images/travels/author2.jpg',
        //            info: '每次在夜里降落这座城市，满目灯火如繁星闪耀，也会觉得这片水泥森林好像是个浪漫的地方。世人皆语此地纸醉金迷，欲望杂生，但也总有一些小细节会让人看到简单爱情的影子。所以，如果有一天，你在香港遇见了TA。'
        //          },
        //          {
        //            img: '/static/images/travels/travel3.jpg',
        //            title: '如果在香港遇见了你',
        //            author: '香港观光局',
        //            authorImg: '/static/images/travels/author3.jpg',
        //            info: '每次在夜里降落这座城市，满目灯火如繁星闪耀，也会觉得这片水泥森林好像是个浪漫的地方。世人皆语此地纸醉金迷，欲望杂生，但也总有一些小细节会让人看到简单爱情的影子。所以，如果有一天，你在香港遇见了TA。'
        //          }
        //        ]
      }
    },
    props: {//      travels: Array
      travels: Array
    }
  }
</script>
<style scoped>
  .plcContainer.odd {
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    background-color: #f5f5f5;
  }
  .plcContainer {
    width: 100%;
    min-width: 980px;
    padding: 40px 0;
    background-color: #fff;
  }

  .qyWrap {
    width: 980px;
    margin-left: auto;
    margin-right: auto;
  }

  .plcMguideTitle {
    margin-bottom: 20px;
  }

  .bigTitle {
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.058823;
    color: #636363;
  }

  .plcMguideContent {
    position: relative;
  }

  .plcMguideLists {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  .plcMguideList {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
  }

  .plcMguideList li:first-child {
    margin-left: 0;
  }

  .plcMguideList li {
    position: relative;
    float: left;
    margin-left: 25px;
    width: 310px;
    height: 399px;
    border-bottom: 1px solid #ececec;
    overflow: hidden;
  }
  .plcMguideList a {
    display: block;
  }

  .plcMguideList .photoMask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 200px;
    -webkit-transition: background-color .5s;
    transition: background-color .5s;
  }

  .plcMguideList .pois {
    position: absolute;
    left: 17px;
    top: 17px;
    height: 30px;
    padding-left: 27px;
    font: 28px/30px helvetica, arial, sans-serif;
    color: #fff;
    text-shadow: 0 0 2px rgba(0, 0, 0, .6);
  }
  .plcMguideList a:hover .content {
    top: 82px;
  }
  .plcMguideList .face img {
    display: block;
    border-radius: 50%;
    border: 2px solid #fff;
  }

  .plcMguideList .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 200px;
    height: 300px;
    border-left: 1px solid #ececec;
    border-right: 1px solid #ececec;
    padding: 0 20px;
    background-color: #fff;
    line-height: 20px;
    -webkit-transition: top .5s;
    transition: top .5s;
  }

  .plcMguideList .content:before {
    content: '';
    position: absolute;
    left: -1px;
    right: -1px;
    top: 0;
    display: block;
    border-top: 2px solid #71b087;
  }

  .plcMguideList .face {
    position: absolute;
    left: 50%;
    top: -42px;
    margin-left: -42px;
  }

  .plcMguideList .userName {
    padding-top: 47px;
    text-align: center;
    color: #959595;
  }

  .plcMguideList .title {
    padding-top: 12px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #323232;
  }

  .plcMguideList .text {
    padding-top: 10px;
    color: #636363;
  }

  .plcMguideList .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 26px;
    border-left: 1px solid #ececec;
    border-right: 1px solid #ececec;
    background: #fff;
  }

  .plcMguideList li:nth-child(3n-1) .content:before {
    border-top-color: #eb9175;
  }

  .plcMguideList li:nth-child(3n) .content:before {
    border-top-color: #63aacf;
  }
  .plcMguideAll {
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
</style>

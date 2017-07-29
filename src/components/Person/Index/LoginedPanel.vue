<template>
  <div id="logined-panel" :style="'background-image:url('+backImg+')'" style="clear: both">
    <div class="info-nav">
      <div class="info-nav-left">
        <div class="info-top">
          <div class="info-img" :style="'background-image:url('+img+')'"></div>
          <p class="info-name">{{name}}
            <embed :src="sex" height="16px"></embed>
          </p>
        </div>
        <div class="info-bottom">
          <span class="bottom-item"><span style="margin-right: 6px">{{fans}}</span><span>粉丝</span></span>
          <span class="bottom-item"><span style="margin-right: 6px">{{attentions}}</span><span>关注</span></span>
        </div>
        <div class="info-signature">
          <p>{{signature}}</p>
        </div>
      </div>
      <div class="info-nav-right">

        <!--<template>-->
        <!--<embed align="middle" src="/static/img/person/svg/sign.svg" width="30px"></embed>-->
        <!--<span style="font-size: 12px;display: block;text-align: center">签到</span>-->
        <!--</template>-->

        <template>
          <div style="height: 22px; width: 56px;border:solid 1px #fff;border-radius: 1px;display: flex;justify-content: center;align-items: center">
            <embed src="/static/img/person/svg/attention.svg" height="16px"></embed>
            <span style="font-size: 12px;">关注</span>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        backImg: '/static/img/person/img/backImg.png',
        img: '/static/img/person/img/person.jpeg',
        name: 'moon_xiao',
        sex: '/static/img/person/svg/male.svg',
        fans: 0,
        attentions: 0,
        signature: '啦啦啦~浪起来'
      }
    },
    props: {},
    components: {},
    methods: {}
  }
</script>
<style lang="less">
  @height: 240px;
  #logined-panel {
    background-size: cover;
    background: no-repeat center center;
    height: @height;
    width: 100%;
    .info-nav {
      height: 120px;
      width: 100%;
      padding-top: 65px;
      box-sizing: content-box;
      position: relative;
      > .info-nav-left {
        margin-left: 20px;
        > .info-top {
          display: flex;
          align-items: center;
          > .info-img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-size: cover;
          }
          > .info-name {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            margin-left: 20px;
          }
        }
        > .info-bottom {
          margin-top: 10px;
          color: white;
          > .bottom-item {
            margin: 0 6px;
          }
        }
        > .info-signature {
          margin-top: 40px;
          color: white;
        }
      }
      > .info-nav-right {
        position: absolute;
        top: 40%;
        right: 5%;
        color: white;
      }
    }
  }
</style>

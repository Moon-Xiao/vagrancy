<template>
  <div id="setting">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">设置
      </div>
    </nav-header>
    <div>
      <h4>个人设置</h4>
      <nav-strip class="strip-style">
        <div slot="left" class="icon-style" style="background-image: url('/static/img/person/svg/p1.svg')"></div>
        <div slot="middle" class="middle-style">账号密码</div>
        <div slot="right" class="icon-style right-img-style">
          <span class="img-style" :style="'background-image:url('+img+')'"></span>
          <span>&gt</span>
        </div>
      </nav-strip>
      <nav-strip class="strip-style" v-for="item in personSetting">
        <div :style="'background-image: url('+item.icon+')'" slot="left" class="icon-style"></div>
        <div slot="middle" class="middle-style">{{item.info}}</div>
        <div slot="right" class="icon-style">&gt</div>
      </nav-strip>
    </div>
    <div>
      <h4>应用相关</h4>
      <nav-strip class="strip-style" v-for="item in applicationSetting">
        <div :style="'background-image: url('+item.icon+')'" slot="left" class="icon-style"></div>
        <div slot="middle" class="middle-style">{{item.info}}</div>
      </nav-strip>
    </div>
  </div>
</template>
<script>
  import NavHeader from '../Comment/NavHeader.vue'
  import NavStrip from '../Comment/NavStrip.vue'

  export default {
    data () {
      return {
        img: '/static/img/person/img/person.jpeg',
        personSetting: [
          {icon: '/static/img/person/svg/p2.svg', info: '个人信息'},
          {icon: '/static/img/person/svg/p3.svg', info: '常用信息'},
          {icon: '/static/img/person/svg/p4.svg', info: '推送设置'},
          {icon: '/static/img/person/svg/p5.svg', info: '清除缓存'}
        ],
        applicationSetting: [
          {icon: '/static/img/person/svg/a1.svg', info: '意见反馈'},
          {icon: '/static/img/person/svg/a2.svg', info: '评价穷游'},
          {icon: '/static/img/person/svg/a3.svg', info: '分享穷游'},
          {icon: '/static/img/person/svg/a4.svg', info: '关于穷游'},
          {icon: '/static/img/person/svg/a5.svg', info: '检测最新版本'}
        ]
      }
    },
    props: {},
    components: {
      NavStrip,
      NavHeader
    },
    methods: {}
  }
</script>
<style lang="less">
  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }

  #setting {
    width: 100%;
    color: #333;
    padding-bottom: 50px;
    .back {
      width: 100%;
      height: 100%;
      background-size: 40% 40%;
      background-image: url("/static/img/person/svg/back.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
    .header-style {
      background-color: #7dd67f;
      z-index: 1;
    }
    h4 {
      width: 96%;
      margin: 20px auto;
      color: #ced1d5;
      font-weight: 100;
    }
    .strip-style {
      width: 96%;
      margin: 0 auto;
      border-bottom: 1px solid #eee;
      .right-img-style {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        > .img-style {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: inline-block;
          line-height: 40px;
          margin-right: 10px;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      .icon-style {
        color: #ced1d5;
        height: 100%;
        width: 100%;
        background-size: 40% 40%;
        background-repeat: no-repeat;
        background-position: center;
      }
      .middle-style {
        margin-left: 10px;
      }
    }
  }
</style>

<template>
  <div id="person">
    <nav-header class="person-header">
      <div slot="left" class="back"></div>
      <template slot="right">
        <!--<embed src="/static/img/person/svg/tip.svg" height="20px" width="20px" style="margin-right: 15px"></embed>-->
        <!--<embed src="/static/img/person/svg/setting.svg" height="20px" width="20px" style="margin-right: 15px"></embed>-->
        <span class="my-icon" style="display: inline-block;background-image: url('/static/img/person/svg/tip.svg')"></span>
        <span class="my-icon" style="display: inline-block;background-image: url('/static/img/person/svg/setting.svg')""></span>
      </template>
    </nav-header>
    <!--<top-panel></top-panel>-->
    <logined-panel></logined-panel>
    <div class="icons">
      <nav-icon v-for="i in icons" :info="i.info" :icon="i.icon"></nav-icon>
    </div>
    <div class="nav-discount">
      <nav-strip v-for="i in discounts" :info="i.info" :icon="i.icon"></nav-strip>
    </div>
    <div class="nav-feet">
      <nav-strip v-for="i in feet" :info="i.info" :icon="i.icon"></nav-strip>
    </div>
    <div class="nav-answer">
      <nav-strip v-for="i in answers" :info="i.info" :icon="i.icon"></nav-strip>
    </div>
  </div>
</template>

<script>
  import navHeader from './Comment/NavHeader.vue'
  import TopPanel from './Index/TopPanel.vue'
  import LoginedPanel from './Index/LoginedPanel.vue'
  import NavIcon from './Index/NavIcon.vue'
  import NavStrip from './Index/NavStrip.vue'

  export default {
    data () {
      return {
        icons: [
          {icon: '/static/img/person/svg/bag.svg', info: '我的收藏'},
          {icon: '/static/img/person/svg/bag.svg', info: '下载的锦囊'},
          {icon: '/static/img/person/svg/bag.svg', info: '我的行程'}
        ],
        discounts: [
          {icon: '/static/img/person/svg/discount1.svg', info: '我的折扣订单'},
          {icon: '/static/img/person/svg/discount2.svg', info: '我的酒店订单'},
          {icon: '/static/img/person/svg/discount3.svg', info: '我的折扣优惠券'}
        ],
        feet: [
          {icon: '/static/img/person/svg/feet1.svg', info: '我的足迹'},
          {icon: '/static/img/person/svg/feet2.svg', info: '等待我点评的目的地'}
        ],
        answers: [
          {icon: '/static/img/person/svg/answer1.svg', info: '我的发布的帖子'},
          {icon: '/static/img/person/svg/answer2.svg', info: '我的问答'},
          {icon: '/static/img/person/svg/answer3.svg', info: '我的结伴'}
        ]
      }
    },
    components: {
      navHeader,
      TopPanel,
      LoginedPanel,
      NavIcon,
      NavStrip
    },
    methods: {}
  }
</script>

<style lang="less">
  body {
    padding: 0;
    margin: 0;
    background-color: #ececec;
  }

  #person {
    > .person-header {
      position: fixed;
      z-index: 1;
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
      .back {
        width: 100%;
        height: 100%;
        background-size: 40% 40%;
        background-image: url("/static/img/person/svg/back.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
      .my-icon{
        width: 50px;
        height: 100%;
        background-size: 40% 40%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    > .icons {
      box-sizing: border-box;
      -moz-box-sizing: border-box; /* Firefox */
      -webkit-box-sizing: border-box; /* Safari */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: white;
      padding: 18px 0;
    }
    > .nav-discount, > .nav-feet {
      margin: 10px 0;
      /*border: 1px solid black;*/
      > nav-strip {
        border-bottom: 1px solid #ced1d5;
      }
      > nav-strip:last-child {
        border-bottom: none;
      }
    }
  }
</style>

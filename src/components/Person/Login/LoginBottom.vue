<template>
  <div class="loginBottom">
    <h3>第三方账号登录</h3>
    <div class="accounts">
      <div class="account" v-for="img in accountImgs" :style="'background-image: url('+img+')'"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        accountImgs: ['/static/img/person/svg/wechat.svg', '/static/img/person/svg/QQ.svg', 'static/img/person/svg/sina.svg']
      }
    },
    props: {},
    components: {},
    methods: {}
  }
</script>
<style lang="less">
  .loginBottom {
    width: 100%;
    h3 {
      color: white;
      text-align: center;
      padding-bottom: 10px;
      font-size: 20px;
      font-weight: 500;
    }
    > .accounts{
      /*border: 1px solid black;*/
      height: 70px;
      text-align: center;
      > .account{
        height: 70px;
        width: 70px;
        border-radius: 50%;
        border: 1px solid white;
        display: inline-block;
        margin: 0 10px;
        background-size: 35px 35px;
        background-repeat: no-repeat;
        background-position: center;
      }
    }

  }
</style>

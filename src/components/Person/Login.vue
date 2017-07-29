<template>
  <div id="login">
    <nav-header>
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">账号密码</div>
      <div slot="right">
        <button class="register-btn">注册</button>
      </div>
    </nav-header>
    <login-table style="margin-top: 60px"></login-table>
    <login-bottom style="position: fixed;bottom: 6%"></login-bottom>
  </div>
</template>
<script>
  import navHeader from './Comment/NavHeader.vue'
  import loginTable from './Login/LoginTable.vue'
  import loginBottom from './Login/LoginBottom.vue'

  export default {
    data () {
      return {}
    },
    props: {},
    components: {
      navHeader,
      loginTable,
      loginBottom
    },
    methods: {}
  }
</script>
<style lang="less">
  body {
    background-color: #7dd67f;
    margin: 0;
    padding: 0;
  }

  #login {
    a {
      text-decoration: none;
    }
    .back {
      width: 100%;
      height: 100%;
      background-size: 40% 40%;
      background-image: url("/static/img/person/svg/back.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
    .register-btn {
      padding: 5px 8px;
      border-radius: 3px;
      border: 1px solid white;
      color: white;
      margin: auto 12px;
    }
  }
</style>

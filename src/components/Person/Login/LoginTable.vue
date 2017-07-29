<template>
  <div>
    <form class="login-form">
      <div class="login-info" :style="'margin-left:'+marginLeft+'px'">
        <div class="input-lists">
          <input type="text" placeholder="输入邮箱/用户名"/>
          <input type="password" placeholder="输入密码"/>
        </div>
        <div class="input-lists">
          <div class="input-phone">
            <span style="display: inline-block;color: white;">+86<span style="color: white">&blacktriangledown;</span></span>
            <input type="text" placeholder="输入手机"/>
          </div>
          <input type="password" placeholder="输入密码"/>
        </div>
      </div>
      <a class="forget-pass" href="#"><p>忘记密码？</p></a>
      <div class="form-submit">
        <button type="submit">登录</button>
        <p @click="changeMethod()">{{loginTip}}</p>
      </div>

    </form>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        loginTip: '手机号登录',
        tips: ['手机号登录', '邮箱/用户名登录'],
        marginLeft: 0,
        speed: 1,
        timer: null,
        user: '',
        pass: ''
      }
    },
    props: {},
    components: {},
    methods: {
      changeMethod: function () {
        let info = document.getElementsByClassName('login-info')[0]
        let width = info.clientWidth
        clearInterval(this.timer)
        this.speed = -this.speed
        this.loginTip = this.tips[(this.speed + 1) / 2]
        this.timer = setInterval(() => {
          this.marginLeft += this.speed * width / 100
          if (this.marginLeft <= -width / 2) {
            this.marginLeft = -width / 2
            clearInterval(this.timer)
          } else if (this.marginLeft >= 0) {
            this.marginLeft = 0
            clearInterval(this.timer)
          }
        }, 10)
      }
    }
  }
</script>
<style lang="less">
  .login-form {
    a {
      text-decoration: none;
    }
    > .login-info {
      position: relative;
      width: 203%;
      overflow: hidden;
      > .input-lists {
        display: inline-block;
        width: 49%;
        > .input-phone {
          width: 90%;
          margin: 0 auto;
          padding: 15px 5px;
          border: none;
          border-bottom: 1px solid #fff;
          > input {
            display: inline-block;
            width: 80%;
            border: none;
            color: white;
            background-color: #7dd67f;
          }
          > input::placeholder {
            color: white;
          }
        }
        > input {
          display: block;
          width: 90%;
          margin: 0 auto;
          padding: 15px 5px;
          border: none;
          color: white;
          border-bottom: 1px solid #fff;
          background-color: #7dd67f;
        }
        > input::placeholder {
          color: white;
        }
      }
    }
    > .forget-pass {
      margin-top: 20px;
      margin-bottom: 50px;
      width: 100%;
      text-align: center;
      display: block;
      color: honeydew;
      > p {
        text-decoration: underline;
      }
    }
    > .form-submit {
      width: 100%;
      text-align: center;
      > button {
        padding: 10px 50px;
        margin: 0 auto;
        text-align: center;
        background-color: white;
        color: #7dd67f;
        border-radius: 3px;
      }
      > p {
        padding: 10px 20px;
        margin: 10px auto 0 auto;
        text-align: center;
        background-color: #7dd67f;
        color: white;
      }
    }
  }
</style>

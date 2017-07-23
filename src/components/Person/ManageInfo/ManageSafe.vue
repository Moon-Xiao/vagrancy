<template>
  <div id="safe">
    <div class="item">
      <div class="item-name">
        <span>密码:</span>
      </div>
      <div class="item-info">
        <b-btn v-b-modal.changePass>修改密码</b-btn>
      </div>
    </div>
    <div class="item">
      <div class="item-name">
        <span>绑定邮箱:</span>
      </div>
      <div class="item-info">
        <b-btn v-b-modal.changeEmail>设置邮箱</b-btn>
      </div>
    </div>
    <div class="item">
      <div class="item-name">
        <span>绑定手机:</span>
      </div>
      <div class="item-info">
        <span>{{userInfo.phone}}</span><span class="bind-style" v-show="isShow"><i class="fa fa-mobile"></i>已绑定</span>
        <b-btn v-b-modal.changePhone>更换号码</b-btn>
      </div>
    </div>


    <b-modal id="changePass" ref="changePass" title="修改密码" :hide-footer="true">

      <form class="safe-form">
        <div class="form-item">
          <p>密&nbsp;&nbsp;码：</p>
          <div class="input-style">
            <b-form-input type="text" v-model="password" placeholder="请输入密码"></b-form-input>
          </div>
        </div>

        <div class="form-item">
          <p>确认密码：</p>
          <div class="input-style">
            <b-form-input type="text" v-model="validate" placeholder="请再次输入密码"></b-form-input>
          </div>
        </div>
        <div class="submit-btn">
          <button class="btn btn-primary" @click="changePass">提交</button>
        </div>
      </form>

    </b-modal>

    <b-modal id="changeEmail" ref="changeEmail" title="修改邮箱" :hide-footer="true">

      <form class="safe-form">
        <div class="form-item">
          <p>邮&nbsp;&nbsp;箱：</p>
          <div class="input-style">
            <b-form-input type="text" v-model="email" placeholder="请输入邮箱"></b-form-input>
          </div>
        </div>
        <div class="submit-btn">
          <button class="btn btn-primary" @click="changeEmail">提交</button>
        </div>
      </form>

    </b-modal>

    <b-modal id="changePhone" ref="changePhone" title="修改手机号" :hide-footer="true">

      <form class="safe-form">
        <div class="form-item">
          <p>手&nbsp;机&nbsp;号：</p>
          <div class="input-style">
            <b-form-input type="text" placeholder="请输入手机号" v-model="phone"></b-form-input>
          </div>
        </div>
        <div class="submit-btn">
          <button class="btn btn-primary" @click="changePhone">提交</button>
        </div>
      </form>

    </b-modal>


  </div>
</template>
<script>
  export default {
    data () {
      return {
        isShow: false,
        validate: '',
        password: '',
        email: '',
        phone: '15702493293'
      }
    },
    mounted: function () {
      this.showPhone()
    },
    methods: {
      async changePass () {
        try {
          if (this.validate === this.password) {
            await this.updateInfo({password: this.password})
            window.alert('保存成功')
            this.$refs.changePass.hide()
          } else {
            window.alert('两次密码不一致')
          }
        } catch (error) {
          window.alert('保存失败 - ' + error.toLocaleString())
        }
      },
      async changeEmail () {
        try {
          let re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
          if (re.test(this.email)) {
            await this.updateInfo({email: this.email})
            window.alert('保存成功')
            this.$refs.changeEmail.hide()
          } else {
            window.alert('邮箱格式错误')
          }
        } catch (error) {
          window.alert('保存失败 - ' + error.toLocaleString())
        }
      },
      async changePhone () {
        let re = /^1\d{10}$/
        try {
          if (re.test(this.phone)) {
            await this.updateInfo({phone: this.phone})
            window.alert('保存成功')
            this.isShow = true
            this.$refs.changePhone.hide()
          } else {
            window.alert('手机号格式错误')
          }
        } catch (error) {
          window.alert('保存失败 - ' + error.toLocaleString())
        }
      },
      showPhone: function () {
        if (this.phone === '') {
          this.isShow = false
        } else {
          this.isShow = true
        }
      }
    }
  }
</script>
<style>
  #safe {
    padding: 1rem;
    color: black;
  }

  #safe .item {
    display: flex;
  }

  #safe .item .item-name {
    color: #999999;
    flex: 1;
    text-align: right;
    padding: 0.5rem;
    line-height: 2.3rem;
  }

  #safe .item .item-info {
    flex: 8;
    text-align: left;
    padding: 0.5rem;
  }

  #safe .item .item-info .bind-style {
    font-size: 12px;
    color: #999;
  }

  #safe .item .item-info .bind-style i {
    font-size: 14px;
    color: cornflowerblue;
    margin-right: 0.1rem;
  }

  #safe .item .item-info span {
    margin-right: 0.5rem;
  }

  #safe .safe-form .form-item {
    margin: 2rem 1rem;
    display: flex;
    height: 2.6rem;
  }

  #safe .safe-form .form-item p {
    width: 6rem;
    text-align: center;
    line-height: 2.6rem;
    color: black;
  }

  #safe .safe-form .form-item .input-style {
    flex: 4;
    margin-left: 1rem;
  }

  #safe .safe-form .submit-btn {
    margin: 1rem;
    text-align: right;
  }
</style>

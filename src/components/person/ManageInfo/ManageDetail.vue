<template>
  <div id="detail">
    <form class="form">
      <div class="form-group row">
        <label for="name" class="col-2 col-form-label">姓名:</label>
        <div class="col-4">
          <input class="form-control" v-model="nickname" type="text" id="name">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">性别:</label>
        <div class="col-4 check-box">
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              男
            </label>
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">女
            </label>
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"
                     checked> 保密
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="city"  class="col-2 col-form-label">居住城市:</label>
        <div class="col-4">
          <input class="form-control" type="text" v-model="location" id="city">
        </div>
      </div>
      <div class="form-group row">
        <label for="intro" class="col-2 col-form-label">个人简介:</label>
        <div class="col-5">
          <textarea class="form-control" rows="3" id="intro"  v-model="intro"></textarea>
        </div>
      </div>
      <div class="item-operation col-7">
        <b-btn class="btn btn-operation" @click="onUpdate">保存修改</b-btn>
      </div>

    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        nickname: '',
        sex: '',
        location: '',
        intro: ''
      }
    },
    methods: {
      async onUpdate () {
        let {nickname, sex, location, intro} = this
        try {
          await this.updateInfo({nickname, sex, location, intro})
          window.alert('保存成功')
        } catch (error) {
          window.alert('保存失败 - ' + error.toLocaleString())
        }
      }
    },
    mounted () {
      let {nickname, sex, location, intro} = this.userInfo
      this.nickname = nickname
      this.sex = sex
      this.intro = intro
      this.location = location
    }
  }
</script>
<style>
  #detail {
    padding: 1rem;
    color: black;
  }

  #detail .form .row {
  }

  #detail .form div > label {
    text-align: right;
  }

  #detail .form .check-box {
    text-align: left;
  }
  #detail .item-operation {
    padding-top: 1.3rem;
    text-align: right;
    margin-right: 2.2rem;
  }

  #detail .item-operation .btn-operation {
    color: #fff;
    background-color: #a1e452;
    border-color: #55d25a;
  }

  #detail .item-operation .btn-operation:hover {
    background-color: #55d25a;
  }
</style>

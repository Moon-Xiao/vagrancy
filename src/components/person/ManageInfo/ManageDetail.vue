<template>
  <div id="detail">
    <form class="form">
      <div class="form-group row">
        <label for="name" class="col-2 col-form-label">姓名:</label>
        <div class="col-4">
          <input class="form-control" type="text" id="name">
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
        <label for="city" class="col-2 col-form-label">居住城市:</label>
        <div class="col-4">
          <input class="form-control" type="text" id="city">
        </div>
      </div>
      <div class="form-group row">
        <label for="birth" class="col-2 col-form-label">出生日期:</label>
        <div class="col-4">
          <input class="form-control" type="text" id="birth">
        </div>
      </div>
      <div class="form-group row">
        <label for="intro" class="col-2 col-form-label">个人简介:</label>
        <div class="col-6">
          <textarea class="form-control" rows="6" id="intro"></textarea>
        </div>
      </div>
      <button class="btn btn-warning" style="text-align: right">提交</button>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        mName: '',
        mSex: '',
        mCity: '',
        mBirth: '',
        mIntro: ''
      }
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
</style>

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
        <b-btn v-b-modal.changePass>设置邮箱</b-btn>
      </div>
    </div>
    <div class="item">
      <div class="item-name">
        <span>绑定手机:</span>
      </div>
      <div class="item-info">
        <span>157****3296</span><span class="bind-style"><i class="fa fa-mobile"></i>已绑定</span><b-btn v-b-modal.changePass>更换号码</b-btn>
      </div>
    </div>


    <b-modal id="changePass" title="修改密码" hide-footer="true">

      <form class="safe-form">
        <div class="form-item">
          <p>输入密码：</p>
          <div class="input-style">
            <b-form-input type="text" placeholder="请输入密码"></b-form-input>
          </div>
        </div>

        <div class="form-item">
          <p>确认密码：</p>
          <div class="input-style">
            <b-form-input type="text" placeholder="请再次输入密码"></b-form-input>
          </div>
        </div>
        <div class="submit-btn">
          <button class="btn btn-primary">提交</button>
        </div>
      </form>

    </b-modal>
  </div>
</template>
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
  #safe .item .item-info .bind-style{
    font-size: 12px;
    color: #999;
  }
  #safe .item .item-info .bind-style i{
    font-size: 14px;
    color: cornflowerblue;
    margin-right: 0.1rem;
  }
  #safe .item .item-info span{
    margin-right: 0.5rem;
  }
  #safe .safe-form .form-item{
    margin: 2rem 1rem;
    display: flex;
    height: 2.6rem;
  }
  #safe .safe-form .form-item p{
    flex: 1;
    text-align: center;
    line-height: 2.6rem;
    color: black;
  }
  #safe .safe-form .form-item .input-style{
    flex: 4;
    margin-left: 1rem;
  }
  #safe .safe-form .submit-btn{
    margin:1rem;
    text-align: right;
  }
</style>

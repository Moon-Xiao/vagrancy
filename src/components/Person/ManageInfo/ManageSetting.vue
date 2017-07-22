<template>
  <div id="setting">
    <div class="left">
      <p class="tip">好东西就要与朋友们分享，97% 的蜂蜂正在将精彩内容分享给朋友们</p>

      <!--<template v-for="settingItem in settingList">-->
      <!--<div class="item">-->
      <!--<div class="item-left">-->
      <!--<div class="item-img" :style="'background-image: url('+settingItem.img+')'"></div>-->
      <!--</div>-->
      <!--<div class="item-right">-->
      <!--<div class="item-info">-->
      <!--<p>-->
      <!--我的{{settingItem.name}}账户<span class="band-style">未绑定</span>-->
      <!--</p>-->
      <!--<p><span class="percent-style">{{settingItem.percent}}</span>的驴友正在分享</p>-->
      <!--</div>-->
      <!--<div class="item-operation">-->
      <!--<button class="btn btn-operation" v-b-modal.bandWeiXin>现在绑定</button>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</template>-->

      <div class="item">
        <div class="item-left">
          <div class="item-img" style="background-image: url(/static/images/person/weixin.png)"></div>
        </div>
        <div class="item-right">
          <div class="item-info">
            <p>
              我的微信账户<span class="band-style">未绑定</span>
            </p>
            <p><span class="percent-style">95%</span>的驴友正在分享</p>
          </div>
          <div class="item-operation">
            <b-btn class="btn btn-operation" v-b-modal.bandWeiXin>现在绑定</b-btn>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="item-left">
          <div class="item-img" style="background-image: url(/static/images/person/sina.png)"></div>
        </div>
        <div class="item-right">
          <div class="item-info">
            <p>
              我的新浪账户<span class="band-style">未绑定</span>
            </p>
            <p><span class="percent-style">90%</span>的驴友正在分享</p>
          </div>
          <div class="item-operation">
            <b-btn class="btn btn-operation" v-b-modal.bandSina>现在绑定</b-btn>
          </div>
        </div>
      </div>

    </div>
    <div class="right">
      <div class="right-card">
        <div class="qr-code"></div>
        <div class="info">
          <p>关注<strong>Vagrancy</strong></p>
          <div class="info-detail">
            <p>第一时间</p>
            <p>获取最新驴友动态</p>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="bandWeiXin" title="绑定微信" :hide-footer="true">

      <form class="safe-form">
        <div class="form-item">
          <p>微信账号：</p>
          <div class="input-style">
            <b-form-input type="text" placeholder="请输入微信账号"></b-form-input>
          </div>
        </div>
        <div class="submit-btn">
          <button class="btn btn-primary">提交验证</button>
        </div>
      </form>

    </b-modal>

    <b-modal id="bandSina" title="绑定新浪" :hide-footer="true">

      <form class="safe-form">
        <div class="form-item">
          <p>新浪账号：</p>
          <div class="input-style">
            <b-form-input type="text" placeholder="请输入新浪账号"></b-form-input>
          </div>
        </div>
        <div class="submit-btn">
          <button class="btn btn-primary">提交验证</button>
        </div>
      </form>

    </b-modal>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        weixin: '',
        sina: '',
        settingList: [
          {img: '/static/images/person/weixin.png', name: '微信', percent: '95%'},
          {img: '/static/images/person/sina.png', name: '新浪', percent: '80%'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', percent: '90%'}
        ]
      }
    },
    methods: {}
  }
</script>
<style>
  #setting {
    padding: 1rem;
    color: black;
    display: flex;
  }

  #setting .tip {
    color: #999;
    font-size: 14px;
    text-align: left;
  }

  #setting .left {
    margin-top: 0.5rem;
    flex: 3;
  }

  #setting .right {
    flex: 2;
  }

  #setting .left .item {
    border-bottom: 1px dashed #ccc;
    text-align: left;
    display: flex;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  #setting .left .item:last-child {
    border-bottom: none;
  }

  #setting .left .item .item-left {
    flex: 1;
    margin-top: 0.4rem;
  }

  #setting .left .item .item-left .item-img {
    margin: 0 auto;
    width: 3rem;
    height: 3rem;
    background: no-repeat;
    background-size: cover;
    border-radius: 0.6rem;
    box-shadow: -0.2rem -0.2rem 0.15rem #eee;
  }

  #setting .left .item .item-right {
    flex: 4;
  }

  #setting .left .item .item-right .band-style {
    margin-left: 1rem;
    font-size: 12px;
    color: #aaa;
  }

  #setting .left .item .item-right .percent-style {
    margin-right: .5rem;
    color: #7188ff;
    font-size: 28px;
  }

  #setting .left .item .item-right .item-operation {
    padding-top: 1.3rem;
    text-align: right;
    margin-right: 2.2rem;
  }

  #setting .left .item .item-right .item-operation .btn-operation {
    color: #fff;
    background-color: #a1e452;
    border-color: #55d25a;
  }

  #setting .left .item .item-right .item-operation .btn-operation:hover {
    background-color: #55d25a;
  }

  #setting .right .right-card {
    padding: 1rem;
    width: 13rem;
    height: 18.5rem;
    margin: 0 auto;
    box-shadow: 0 0 0.3rem #aaa;
    border-radius: 0.3rem;
  }

  #setting .right .right-card .qr-code {
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    background-color: pink;
  }

  #setting .right .right-card .info {
    margin-top: 1rem;
    color: #aaa;
    font-size: 16px;
  }

  #setting .right .right-card .info strong {
    margin-left: .5rem;
  }

  #setting .right .right-card .info .info-detail {
    margin-top: .8rem;
    color: #b6c8f9;
    font-size: 15px;
  }

  /*model*/
  .form-item {
    margin: 2rem 1rem;
    display: flex;
    height: 2.6rem;
  }

  .safe-form .form-item p {
    flex: 1;
    text-align: center;
    line-height: 2.6rem;
    color: black;
  }

  .safe-form .form-item .input-style {
    flex: 4;
    margin-left: 1rem;
  }

  .safe-form .submit-btn {
    margin: 1rem;
    text-align: right;
  }
</style>

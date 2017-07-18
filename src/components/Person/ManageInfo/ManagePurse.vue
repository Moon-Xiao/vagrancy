<template>
  <div id="purse">
    <div class="header">
      <div class="left">
        <p><span>现金余额：</span><span class="money"><i class="fa fa-rmb"></i>0.00</span><span class="mobile"><i class="fa fa-mobile"></i>已绑定手机</span></p>
        <p><span>V币余额：</span><span class="money"><i class="fa fa-heart"></i>0</span></p>
      </div>
      <div class="right">
        <button class="btn btn-pull">提现</button>
      </div>
    </div>
  </div>
</template>
<style>
  #purse {
    padding: 1rem;
    color: #aaa;
  }
  #purse .header{
    display: flex;
  }
  #purse .header .left{
    flex: 1;
    text-align: left;
  }
  #purse .header .left span{
    margin-right: 1rem;
  }
  #purse .header .left .money{
    font-size: 26px;
  }
  #purse .header .left .money i{
    font-size: 14px;
    margin-right: 0.5rem;
    color:#ff1c0b;
  }
  #purse .header .left .mobile{
    background-color: #fff6e5;
    padding: 0.2rem 0.4rem;
    font-size: 12px;
    color: #ff9d00;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.1rem #ffd99f;
  }
  #purse .header .left .mobile i{
    margin-right: 0.3rem;
  }
  #purse .header .right{
    flex: 1;
    text-align: center;
    margin-top: 1.2rem;
  }
  #purse .header .right .btn-pull{
    width: 10rem;
    color: white;
    background-color: #999999;
  }
  #purse .header .right .btn-pull:hover {
    color: white;
    background-color: #7188ff;
  }
  #purse .header .right .btn-pull:active{
  color: white;
  background-color: #ff8f3a;
  }
</style>

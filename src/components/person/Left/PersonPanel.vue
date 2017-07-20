<template>
  <div id="per">
    <div id="personImg">
      <img src="/static/images/person/person.jpeg">
      <router-link to="/manage-info/manage-photo" class="moveUp">
        <i class="fa fa-camera moveIcon"></i>
      </router-link>
    </div>
    <div class="per-nav">
      <router-link to="manage-info" class="name-style">{{name}}
        <i class="fa fa-edit"></i>
      </router-link>
      <div class="tip">
        <b-badge pill v-for="character in characterList">{{character}}</b-badge>
      </div>
      <div class="rate">
        <span>等级：</span>
        <span style="color: red">{{rank}}</span>
      </div>
      <!--signature-->
      <button v-if="signature===''" v-show="isShow" @click="writeSign" class="sign-btn">简单介绍下自己吧</button>
      <!--write input-->
      <div id="write-sign" class="sign-write" v-show="isWriteShow">
        <textarea @blur="signShow" v-model="signature" placeholder="介绍介绍寄几吧(￣▽￣)"></textarea>
        <button class="btn btn-primary" @click="signShow">保存</button>
      </div>
      <!--show input-->
      <div id="signature" class="sign" v-if="signature!=''" v-show="isSignShow" @click="writeAgain">
        <p style="white-space: pre-line">{{ signature }}</p>
      </div>
      <!---->

      <div class="bottom-bar row">
        <!--<span v-for="(item, index) in bottomList">-->
        <!--<div>{{item.num}}</div>-->
        <!--<i :class="'fa fa-'+item.icon" @click="index==2　&& (item.num+=1)"></i>-->
        <!--{{item.name}}-->
        <!--</span>-->
        <div class="bottom-item col-md-4">
            <div>{{concernNum}}</div>
            <i class="fa fa-eye" style="color: cornflowerblue"></i>
            <span>关注</span>
        </div>
        <div class="bottom-item col-md-4">
            <div>{{fansNum}}</div>
            <i class="fa fa-heart" style="color: #ff6942"></i>
            <span>粉丝</span>
        </div>
        <div class="bottom-item col-md-4">
            <div>{{saveNum}}</div>
            <i class="fa fa-star save" @click="saveNum+=1"></i>
            <span>收藏</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'personPanel',
    data () {
      return {
        name: 'Moon',
        characterList: ['爱读书', '爱旅行', '爱美食'],
        rank: 'Lv.1',
        signature: '',
        isShow: true,
        isWriteShow: false,
        isSignShow: false,
        concernNum: 20,
        fansNum: 80,
        saveNum: 18
      }
    },
    methods: {
      writeSign: function (e) {
        this.isShow = false
        this.isWriteShow = !this.isWriteShow
      },
      signShow: function (e) {
        this.isWriteShow = false
        if (this.signature !== '') {
          this.isSignShow = !this.isSignShow
        } else {
          this.isShow = true
        }
      },
      writeAgain: function (e) {
        this.isSignShow = false
        this.isWriteShow = !this.isWriteShow
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #per {
    position: relative;
    width: 19rem;
    min-height: 20rem;
    color: black;
    /*border: 1px solid lightgray;*/
  }

  #personImg {
    position: relative;
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    border: 1px solid lightgray;
    margin: 0 auto;
  }

  #personImg img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
  }

  #per .moveUp {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 20;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    line-height: 8rem;
    left: 0;
  }

  #per .moveUp .moveIcon {
    display: none
  }

  #per .moveUp:hover .moveIcon {
    display: inline-block;
  }

  #per .moveUp:before, .moveUp:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%
  }

  #per .moveUp:before {
    transform: scale(0);
    transition: transform .3s ease-out 0s;
    -webkit-transform: scale(0);
    -webkit-transition: -webkit-transform .3s ease-out 0s
  }

  #per .moveUp:after {
    background-color: #dbdbdb;
    transform: scale(1);
    -webkit-transform: scale(1);
    display: none
  }

  #per .moveUp:hover:before {
    transform: scale(1);
    transition: none;
    -webkit-transform: scale(1);
    -webkit-transition: none
  }

  #per .moveUp:hover:after {
    display: block;
    -webkit-animation: scaledown .3s ease-out 0s 1 forwards;
    -moz-animation: scaledown .3s ease-out 0s 1 forwards;
    -o-animation: scaledown .3s ease-out 0s 1 forwards;
    animation: scaledown .3s ease-out 0s 1 forwards
  }

  @keyframes scaledown {
    0% {
      transform: scale(1)
    }
    100% {
      transform: scale(0)
    }
  }

  @-webkit-keyframes scaledown {
    0% {
      -webkit-transform: scale(1)
    }
    100% {
      -webkit-transform: scale(0)
    }
  }

  @-moz-keyframes scaledown {
    0% {
      -moz-transform: scale(1)
    }
    100% {
      -moz-transform: scale(0)
    }
  }

  @-o-keyframes scaledown {
    0% {
      -o-transform: scale(1)
    }
    100% {
      -o-transform: scale(0)
    }
  }

  /*per-nav*/
  .per-nav {
    margin-top: 1rem;
    border: 1px dotted #5f9afa;
    box-shadow: 0 0 0.3rem #eee;
    border-radius: 0.3rem;
    padding: 1rem 0;
  }

  .per-nav .name-style {
    font-size: 28px;
  }

  /*tip*/
  #per .tip span {
    margin: 0.6rem 0;
    font-size: 14px;
    background-color: cornflowerblue;
  }
  #per .tip span:first-child {
    margin-right: 0.6rem;
  }
  #per .tip span:nth-child(2){
    margin-right: 0.6rem;
  }
  #per .sign-btn {
    width: 90%;
    margin: 0.8rem auto;
    color: white;
    background-color: cornflowerblue;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border-radius: 0.3rem;
    font-size: 18px;
    /*border: 1px solid lightgrey;*/
  }

  #per .sign-write {
    width: 100%;
    margin: 0.8rem auto;
    /*border: 1px solid lightgrey;*/
    border-radius: 0.3rem;
  }

  #per .sign-write > textarea {
    width: 92%;
    border-radius: 0.2rem;
    font-size: 16px;
    /*background-color: lightyellow;*/
  }

  #per .sign-write > button {
    font-size: 18px;
    width: 92%;
    background-color: #5c83d3;
    border-color: honeydew;
  }

  #per .sign-write > button:hover{
    background-color: #3a3dd3;
    -webkit-box-shadow: 0 0 0.1rem #b9cbfa; ;
    -moz-box-shadow: 0 0 0.1rem #b9cbfa; ;
    box-shadow: 0 0 0.1rem #b9cbfa;
  }

  #per .sign {
    width: 95%;
    margin: 0.5rem auto;
    border: 1px solid honeydew;
    border-radius: 0.3rem;
    font-size: 20px;
    color: #666;
    background-color: #ffffff;
    height: 2.2rem;
    line-height: 2.2rem;
  }
/*rate*/
  #per .rate{
    margin: 0.5rem auto;
    font-size: 18px;
  }
  /*bottom-bar*/
  #per .bottom-bar{
    margin: .5rem 0;
    height: 4rem;
    color: #666;
    border: none;
  }
  #per .bottom-bar .bottom-item {
    display: inline-block;
    height: 100%;
    padding: 0;
    margin: .05rem 0 0;
  }
  #per .bottom-bar .bottom-item > div{
    margin-bottom: 0.2rem;
    font-size: 24px;
  }
  #per .bottom-bar .bottom-item>i{
    font-size: 15px;
  }
  #per .bottom-bar .bottom-item>span{
    font-size: 15px;
  }
  #per .bottom-bar .bottom-item .save{
    color: #ffff00;
  }
  #per .bottom-bar .bottom-item .save:hover {
    box-shadow: 0 0 .2rem #ffff00;
    border-radius: 0.5rem;
  }

</style>

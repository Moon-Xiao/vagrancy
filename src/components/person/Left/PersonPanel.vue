<template>
  <div id="per">
    <div id="personImg">
      <img src="/static/images/person/person.jpeg">
      <a href="#/person/manage-info/manage-photo" class="moveUp">
        <i class="fa fa-camera moveIcon"></i>
      </a>
    </div>
    <div class="per-nav">
      <a href="#/person/manage-info/manage-detail">{{name}}
        <i class="fa fa-edit"></i>
      </a>
      <div class="tip">
        <b-badge pill v-for="character in characterList">{{character}}</b-badge>
      </div>
      <div>
        <span>等级：</span>
        <span style="color: red">{{rank}}</span>
      </div>
      <!--signature-->
      <button v-if="signature===''" v-show="isShow" @click="writeSign" class="sign-btn">简单介绍下自己吧</button>
      <!--write input-->
      <div id="write-sign" class="sign-write" v-show="isWriteShow">
        <textarea v-model="signature" placeholder="你想说点啥~~~"></textarea>
        <button class="btn btn-primary" @click="signShow">保存</button>
      </div>
      <!--show input-->
      <div id="signature" class="sign" v-if="signature!=''" v-show="isSignShow" @click="writeAgain">
        <p style="white-space: pre-line">{{ signature }}</p>
      </div>
      <!---->

      <div class="bottom-bar">
        <!--<span v-for="(item, index) in bottomList">-->
        <!--<div>{{item.num}}</div>-->
        <!--<i :class="'fa fa-'+item.icon" @click="index==2　&& (item.num+=1)"></i>-->
        <!--{{item.name}}-->
        <!--</span>-->
        <span class="bottom-item">
            <div>{{concernNum}}</div>
            <i class="fa fa-eye"></i>
            <span>关注</span>
        </span>
        <span class="bottom-item">
            <div>{{fansNum}}</div>
            <i class="fa fa-heart-o"></i>
            <span>粉丝</span>
        </span>
        <span class="bottom-item">
            <div>{{saveNum}}</div>
            <i class="fa fa-star-o" @click="saveNum+=1"></i>
            <span>收藏</span>
        </span>
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
        saveNum: 18,
        bottomList: [
          {name: '关注', icon: 'eye', num: 20},
          {name: '粉丝', icon: 'heart-o', num: 80},
          {name: '收藏', icon: 'star-o', num: 18}]
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
    width: 15rem;
    min-height: 20rem;
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

  .moveUp {
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

  .moveUp .moveIcon {
    display: none
  }

  .moveUp:hover .moveIcon {
    display: inline-block;
  }

  .moveUp:before, .moveUp:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%
  }

  .moveUp:before {
    transform: scale(0);
    transition: transform .3s ease-out 0s;
    -webkit-transform: scale(0);
    -webkit-transition: -webkit-transform .3s ease-out 0s
  }

  .moveUp:after {
    background-color: #dbdbdb;
    transform: scale(1);
    -webkit-transform: scale(1);
    display: none
  }

  .moveUp:hover:before {
    transform: scale(1);
    transition: none;
    -webkit-transform: scale(1);
    -webkit-transition: none
  }

  .moveUp:hover:after {
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
    border: 1px solid lightgray;
  }

  .per-nav > a {
    font-size: 24px;
  }

  /*tip*/
  .tip span:first-child, .tip span:nth-child(2) {
    margin-right: 0.6rem;
  }

  .tip span {
    background-color: cornflowerblue;
  }

  .sign-btn {
    width: 90%;
    margin: 0.5rem auto;
    color: white;
    background-color: cornflowerblue;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border-radius: 0.3rem;
    /*border: 1px solid lightgrey;*/
  }

  .sign-write {
    width: 100%;
    margin: 0.5rem auto;
    border: 1px solid lightgrey;
    border-radius: 0.3rem;
  }

  .sign-write > textarea {
    width: 95%;
    border-radius: 0.2rem;
    background-color: lightyellow;
  }

  .sign-write > button {
    width: 95%;
    background-color: cornflowerblue;
    border-color: honeydew;
  }

  .sign {
    width: 95%;
    margin: 0.5rem auto;
    border: 1px solid honeydew;
    border-radius: 0.3rem;
    font-size: 18px;
    background-color: lightyellow;
  }

  /*bottom-bar*/
  .bottom-bar .bottom-item {
    width: 32%;
    display: inline-block;
    height: 4rem;
    border: 1px solid lightgray;
    padding-top: .5rem;
  }
</style>

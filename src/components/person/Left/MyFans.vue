<template>
  <div id="fans">

    <h3>我的粉丝</h3>

    <!--<section class="container">-->
    <!--<div ref="fans" class="companies">-->
    <!--<img v-for="item in imgList" :src="item.img">-->
    <!--</div>-->
    <!--</section>-->

    <section class="container">
      <div ref="fans" class="fans-items">
        <a v-for="item in fansList" :href="item.link">
          <div class="fans-img" :style="'background-image: url('+item.img+')'"></div>
          <p class="fans-name">{{item.name}}</p>
        </a>
      </div>
    </section>

    <div style="height: 3rem;line-height: 3rem;padding:0.5rem 0;text-align: center">
      <span class="fa fa-chevron-left" style="color: #ddd;"></span>
      <span style="height: 2rem;width: 2rem;display:inline-block;border-radius:50%;border: 1px outset #ddd">{{fansPageNum}}</span>
      <span class="fa fa-chevron-right" style="color: #ddd;"></span>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'MyConcern',
    data () {
      return {
        fansPageNum: '0',
        fansList: [
          {img: '/static/images/person/weixin.png', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/sina.png', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/weixin.png', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/sina.png', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/weixin.png', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/sina.png', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/weixin.png', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/sina.png', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'}
        ]
      }
    }
  }
</script>
<style scoped>
  #fans {
    position: relative;
    width: 18rem;
    height: 14rem;
    border: 1px dotted #5f9afa;
    box-shadow: 0 0 0.3rem #eee;
    border-radius: 0.3rem;
    padding: 1rem 0.3rem;
  }

  #fans h3 {
    margin-top: 1rem;
    font-size: 26px;
    color: #0275d8;
  }

  #fans .container {
    height: 6rem;
    overflow: hidden;
    margin: 1rem 0;
  }

  #fans .fans-items {
    overflow: hidden;
    height: 100%;
    white-space: nowrap;
    position: absolute;
    animation: nfans-items 10s infinite;
    -moz-animation: nfans-items 10s infinite; /* Firefox */
    -webkit-animation: nfans-items 10s infinite; /* Safari and Chrome */
    -o-animation: nfans-items 10s infinite; /* Opera */
    animation-direction: alternate;
    -webkit-animation-direction: alternate;
  }

  #fans .fans-items a {
    display: inline-block;
  }

  @keyframes nfans-items {
    0% {
      left: 0;
    }
    100% {
      left: -500px;
    }
  }

  @-webkit-keyframes nfans-items /* Safari and Chrome */
  {
    0% {
      left: 0;
    }
    100% {
      left: -500px;
    }
  }

  #fans .fans-items .fans-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    border: 1px solid lightgray;
    margin: 0 0.5rem;
  }

  #fans .fans-items .fans-name {
    font-size: 14px;
    margin-top: .8rem;
    color: #aaa;
  }

  #fans .companies {
    overflow: hidden;
    height: 80px;
    white-space: nowrap;
    position: absolute;
    animation: ncompanie 10s infinite;
    -moz-animation: ncompanie 10s infinite; /* Firefox */
    -webkit-animation: ncompanie 10s infinite; /* Safari and Chrome */
    -o-animation: ncompanie 10s infinite; /* Opera */
    animation-direction: alternate;
    -webkit-animation-direction: alternate;
  }

  @keyframes ncompanie {
    0% {
      left: 0px;
    }
    100% {
      left: -800px;
    }
  }

  @-webkit-keyframes ncompanie /* Safari and Chrome */
  {
    0% {
      left: 0px;
    }
    100% {
      left: -800px;
    }
  }

  #fans .companies img {
    padding: 15px;
    height: 100%;
  }
</style>

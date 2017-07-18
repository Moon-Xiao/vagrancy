<template>
  <div id="group">
    <h3>我的“团”</h3>
    <div class="row">
      <template v-for="item in imgList"></template>
      <div class="col-md-4">
        <a>
          <div class="back-img" :style="'background-image: url('+item.link+')'"></div>
          <p>驴友小组</p>
        </a>
      </div>
      <div class="col-md-4">
        <a>
          <div class="back-img"></div>
          <p>蜂窝广场</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyGroup',
    data () {
      return {
        imgList: [
          {img: '/static/images/person/weixin.png', name: '微信'},
          {img: '/static/images/person/sina.png', name: '新浪'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间'}
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  #group {
    width: 15rem;
    height: 10rem;
    border: 1px solid lightgray;
  }

  #group h3 {
    font-size: 24px;
  }

  #group .row{
    padding:0;
    margin: 0;
  }

  #group .row .back-img{
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    width: 100%;
  }
</style>

<template>
  <div>
    my concern
    <div id="flipbook">
      <div class="hard"> Turn.js</div>
      <div class="hard"></div>
      <div v-for="item in imgList" :style="'background:url('+item.img+')'"></div>
      <div class="hard"></div>
      <div class="hard"></div>
    </div>
  </div>
</template>

<script>
  import '../../../../static/js/turn.min'
  export default {
    components: {},
    mounted: function () {
      this.loadApp()
    },
    data  () {
      return {
        imgList: [
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
    },
    methods: {
      loadApp: function () {
        window.$('#flipbook').turn({
          width: 400,
          height: 300,
          elevation: 50,
          gradients: true,
          autoCenter: true
        })
      }
    }
  }
</script>
<style>
</style>

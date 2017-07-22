<template>
  <div id="MemorializeAlbum">
    <div class="photo-top">
      <b-dropdown right text="查看模式">
        <b-dropdown-item to="/show-album">经典模式</b-dropdown-item>
        <b-dropdown-item to="/memoir-album">回忆录式</b-dropdown-item>
      </b-dropdown>
    </div>

    <div id="flipbook">
      <div class="hard" style="background-color: cornflowerblue"><p class="book-title">{{imgBookName}}</p></div>
      <div class="hard" style="background-color: #eee"></div>
      <div class="img-style" v-for="item in imgBookList" :style="'background-image:url('+item.img+')'"></div>
      <div class="hard" style="background-color: #eee"></div>
      <div class="hard" style="background-color: cornflowerblue"></div>
    </div>
  </div>
</template>

<script>
  import '../../../../../static/js/turn.min'
  export default {
    components: {},
    mounted: function () {
      this.loadApp()
    },
    data  () {
      return {
        imgBookName: '广袤大沙漠',
        imgBookList: [
          {
            img: '/static/images/person/album2/8.jpg',
            title: '广袤大沙漠',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '1'
          },
          {
            img: '/static/images/person/album2/1.jpg',
            title: 'Skulls are nice2',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '2'
          },
          {
            img: '/static/images/person/album2/2.jpg',
            title: 'Skulls are nice3',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '3'
          },
          {
            img: '/static/images/person/album2/3.jpg',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '4'
          },
          {
            img: '/static/images/person/album2/4.jpg',
            title: 'Skulls are nice1',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '5'
          },
          {
            img: '/static/images/person/album2/5.jpg',
            title: 'Skulls are nice2',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '6'
          },
          {
            img: '/static/images/person/album2/6.jpg',
            title: 'Skulls are nice3',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '7'
          },
          {
            img: '/static/images/person/album2/7.jpg',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '8'
          },
          {
            img: '/static/images/person/album2/8.jpg',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '9'
          },
          {
            img: '/static/images/person/album2/6.jpg',
            title: 'Skulls are nice3',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '10'
          },
          {
            img: '/static/images/person/album2/7.jpg',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '11'
          },
          {
            img: '/static/images/person/album2/8.jpg',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '12'
          }
        ]
      }
    },
    methods: {
      loadApp: function () {
        window.$('#flipbook').turn({
          width: 1200,
          height: 375,
          elevation: 50,
          gradients: true,
          autoCenter: true
        })
      }
    }
  }
</script>
<style>
  #MemorializeAlbum {
    position: relative;
    margin: 2rem auto 6rem 100px;
  }

  #MemorializeAlbum .photo-top {
    height: 4rem;
    width: 100%;
    /* float: right; */
    text-align: right;
    padding-right: 4rem;
    line-height: 4rem;
    margin-bottom: 2rem;
  }

  #MemorializeAlbum .photo-top .top-btn span {
    margin-left: .5rem;
  }

  #MemorializeAlbum .photo-top .btn-group > .btn {
    height: 2.55rem;
    display: inline-block;
    text-align: right;
  }

  #MemorializeAlbum .photo-top .dropdown-menu {
    min-width: 3rem;
    line-height: 2.5rem;
    padding: 0;
  }

  #MemorializeAlbum .photo-top .dropdown-menu > a:first-child {
    margin-bottom: 0.3rem;
  }

  #MemorializeAlbum .dropdown-item.active {
    color: #fff;
    text-decoration: none;
    background-color: cornflowerblue;
    border-radius: 0.2rem;
  }

  /*book-style*/
  #MemorializeAlbum .book-title {
    line-height: 375px;
    font-size: 24px;
    color: white;
  }

  #MemorializeAlbum .img-style {
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
  }

  #flipbook .page {
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  #flipbook .shadow {
    -webkit-transition: -webkit-box-shadow 0.5s;
    -moz-transition: -moz-box-shadow 0.5s;
    -o-transition: -webkit-box-shadow 0.5s;
    -ms-transition: -ms-box-shadow 0.5s;

    -webkit-box-shadow: 0 0 20px #ccc;
    -moz-box-shadow: 0 0 20px #ccc;
    -o-box-shadow: 0 0 20px #ccc;
    -ms-box-shadow: 0 0 20px #ccc;
    box-shadow: 0 0 20px #ccc;
  }
</style>

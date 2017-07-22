<!--<template>-->
<!--<div id="myAlbum" v-for="item in imgList">-->
<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="album">

    <div class="album-top">
      <router-link to="/create-album">
        <button class="top-btn btn">
          <i class="fa fa-plus"></i><span>创建相册</span>
        </button>
      </router-link>
      <button class="top-btn btn" @click="isShowEdit">
        <i class="fa fa-picture-o"></i><span>删除相册</span>
      </button>
    </div>
    <div class="row">
      <!-- With image -->
      <div class="col-md-4 col-sm-6 col-xs-12" v-for="(item,index) in albumList">
        <span @click='remove($event)' class="remove-style">
          <i v-show="showEdit" class="fa fa-times-circle"></i>
        </span>
        <router-link to="/show-album">
          <div class="row-item">
            <div class="item-img" :style="'background-image: url('+item.img+')'"></div>
            <div :style="'background-color:'+colors[index%colors.length]">
              <h3>{{item.title}}</h3>
            </div>
            <p :style="'color:'+textColors[index%textColors.length]">{{item.id}}{{item.detail}}</p>
          </div>
        </router-link>
      </div>
    </div>

    <div style="height: 3rem;padding:0.5rem 0;text-align: center;position: relative;clear: both;">
      <span title="previous" class="fa fa-chevron-left"
            style="color: rgb(221, 221, 221);position: absolute;font-size: 16px;margin-top: 0.5rem;margin-left: -0.9rem;"></span>
      <span
        style="height: 2rem;width: 2rem;display:inline-block;border-radius:50%;border: 1px solid #ddd;box-shadow:0 0 1px #eee;text-align: center;line-height: 2rem">{{albumPageNum}}</span>
      <span title="next" class="fa fa-chevron-right"
            style="color: rgb(221, 221, 221);position: absolute;font-size: 16px;margin-top: 0.5rem;margin-left: 0.2rem;"></span>
    </div>


    <!--&lt;!&ndash;createAlbum&ndash;&gt;-->

    <!--<b-modal siz="lg" ref="createAlbum" id="createAlbum" :hide-footer="isHideFooter" title="创建相册">-->
    <!--<create-album></create-album>-->
    <!--</b-modal>-->

  </div>
</template>
<!--</div>-->
<!--</template>-->

<script>
  export default {
    data () {
      return {
        showEdit: false,
        colors: ['rgba(33, 150, 243, 0.29)', 'rgba(76, 175, 80, 0.35)', 'rgba(0, 0, 255, 0.17)'],
        textColors: ['rgba(33, 150, 243, 0.8)', 'rgba(0, 150, 136, 0.73)', ' rgba(103, 58, 183, 0.69)'],
        albumPageNum: '0',
        albumList: [
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
      isShowAlbum: function () {
        this.$refs.modal1.show()
      },
      isShowCreateAlbum: function () {
        this.$refs.createAlbum.show()
      },
      isShowEdit: function () {
        this.showEdit = !this.showEdit
      },
      showModal: function () {
        this.$refs.modal1.show()
      },
      hideModal: function () {
        this.$refs.modal1.hide()
      },
      remove: function (event) {
        window.$(event.srcElement).parent().parent().remove()
      }
    }
  }
</script>

<!-- modal.vue -->

<style>
  #album {
  }

  #album .album-top {
    height: 4rem;
    text-align: right;
    margin-right: -0.6rem;
  }

  #album .album-top .top-btn {
    margin-top: 0.7rem;
    height: 2.5rem;
    margin-right: 1rem;
    padding: 0.5rem;
    background-color: cornflowerblue;
    color: white;
  }

  #album .album-top .top-btn:hover{
    background-color: #4548ff;
    box-shadow: 0 0 8px rgba(100, 149, 237, 0.77);
  }

  #album .album-top .top-btn span {
    margin-left: .5rem;
  }

  /*photos*/
  #album .row {
    top: 4rem;
    padding: 0.5rem;
  }

  #album .col-md-4 {
    padding: 0.7rem;
  }

  #album .col-ms-6 {
    padding: 1rem;
  }

  #album .remove-style {
    float: right;
    margin-top: -0.6rem;
    margin-right: -0.4rem;
    background: none;
    vertical-align: middle;
  }

  #album .remove-style > i {
    color: white;
    background-color: rgba(41, 133, 255, 0.83);
    font-size: 14px;
    box-shadow: 2px 1px 3px rgba(57, 128, 255, 0.67);
    border-radius: 50%;
    overflow: hidden;
  }

  #album .remove-style > i:hover {
    color: cornflowerblue;
    background-color: white;
    box-shadow: none;
  }

  #album .row-item {
    box-shadow: 0 0 0.1rem cornflowerblue;
    padding-bottom: 1rem;
    padding-top: 0.25rem;
  }

  /*#album .row-item div {*/
  /*height: 11rem;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*background-origin: content-box;*/
  /*width: 100%;*/
  /*padding: 0.5rem;*/
  /*}*/

  #album .row .row-item .item-img {
    height: 15rem;
    padding: 1rem;
    margin: 0.5rem;
    background: no-repeat center;
    background-size: 100% 100%;
    transition: background-size 1.5s;
  }

  #album .row .row-item .item-img:hover {
    background-size: 130% 130%;
  }

  #album .row-item div {
    height: 3rem;
    background-color: rgba(33, 150, 243, 0.45);
  }

  #album .row-item h3 {
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #717171;
    line-height: 3rem;
    /*margin: 0.9rem auto;*/
  }

  #album .row-item p {
    width: 100%;
    padding: 0 1rem;
    font-size: 14px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-top: 1rem;
    text-decoration: none;
    color: rgba(33, 150, 243, 0.8);
  }

  /*photos*/
  #album.photos .modal-header {
    width: 100%;
    height: 100%;
    background: url(/static/images/person/overlay.png) rgba(0, 0, 0, 0.2) repeat;
    border-bottom: 0.2rem solid rgba(255, 255, 255, 0.2);
  }

  #album.photos .modal-title {
    line-height: 2rem;
    font-size: 28px;
    color: black;
  }

  #album.photo-top {
    height: 4rem;
    /*border: 1px solid lightgrey;*/
    width: 100%;
  }

  #album.photo-top .top-btns {
    width: 38%;
    float: right
  }

  #album.photo-top .top-btn {
    height: 2.5rem;
    margin-right: 1rem;
    padding: 0.5rem;
    color: white;
  }

  #album.photo-top .top-btn span {
    margin-left: .5rem;
  }

  #album.photo-top .btn-group > .btn {
    height: 2.55rem;
    display: inline-block;
    text-align: right;
  }

  /*remove*/
  #album.photo-nav .remove-style {
    float: right;
    margin-top: -.3rem;
    margin-right: -0.08rem;
    z-index: 5;
  }

  #album.photo-nav .remove-style > i {
    font-size: 0.83rem;
  }

  #album.photo-nav .row-item > div {
    height: 10rem !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    width: 100%;
    /*border: 1px solid black;*/
    padding: 0.2rem !important;
  }

  .photo-nav .row-item > h3 {
    width: 100%;
    text-align: center;
    /*border: 1px solid black;*/
    font-size: 18px !important;
    margin: .2rem auto;
  }

  .photo-nav .row-item > p {
    width: 100%;
    /*border: 1px solid black;*/
    margin: .5rem auto;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    font-size: 14px;
    height: 4rem !important;
    text-align: left;
  }

  .photo-top .top-btn {
    margin-right: .6rem;
  }

  .photo-top .top-btns {
    width: 55%;
  }
</style>

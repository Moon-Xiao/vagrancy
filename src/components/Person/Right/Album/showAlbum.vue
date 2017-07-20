<template>
  <div id="showAlbum">
    <div class="row">
      <div class="photo-top">
        <div class="top-btns">
          <button class="top-btn btn btn-primary">
            <i class="fa fa-image"></i><span>添加相片</span>
          </button>

          <button class="top-btn btn btn-primary" @click="isShowDelete">
            <i class="fa fa-trash"></i><span>编辑相片</span>
          </button>

          <b-dropdown right text="查看模式">
            <b-dropdown-item to="#">经典模式</b-dropdown-item>
            <b-dropdown-item to="#">回忆录式</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <!-- With image -->
      <div class="col-md-2 col-sm-3 col-xs-4  photo-nav" v-for="item in albumList">
        <span @click='remove($event)' class="remove-style">
        <i v-show="showDelete" class="fa fa-times-circle"></i>
        </span>
        <div class="row-item">
          <div :style="'background-image: url('+item.link+')'"></div>
          <h3>{{item.title}}</h3>
          <p>{{item.id}}{{item.detail}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showDelete: false,
        pageNum: 0,
        title: '浪在大草原',
        albumList: [
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '广袤大沙漠',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '1'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/1',
            title: 'Skulls are nice2',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '2'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/2',
            title: 'Skulls are nice3',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '3'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/3',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '4'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: 'Skulls are nice1',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '5'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/1',
            title: 'Skulls are nice2',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '6'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/2',
            title: 'Skulls are nice3',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '7'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/3',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '8'
          }
        ]
      }
    },
    methods: {
      isShowDelete: function () {
        this.showDelete = !this.showDelete
      },
      remove: function (event) {
        window.$(event.srcElement).parent().parent().remove()
      }
    }
  }
</script>
<style>
  /*photos*/
  #showAlbum .photos .modal-header {
    width: 100%;
    height: 100%;
    background: url(/static/images/person/overlay.png) rgba(0, 0, 0, 0.2) repeat;
    border-bottom: 0.2rem solid rgba(255, 255, 255, 0.2);
  }

  #showAlbum .photos .modal-title {
    line-height: 2rem;
    font-size: 28px;
    color: black;
  }

  #showAlbum .photo-top {
    height: 4rem;
    /*border: 1px solid lightgrey;*/
    width: 100%;
  }

  #showAlbum .photo-top .top-btns {
    width: 38%;
    float: right
  }

  #showAlbum .photo-top .top-btn {
    height: 2.5rem;
    margin-right: 1rem;
    padding: 0.5rem;
    color: white;
  }

  #showAlbum .photo-top .top-btn span {
    margin-left: .5rem;
  }

  #showAlbum .photo-top .btn-group > .btn {
    height: 2.55rem;
    display: inline-block;
    text-align: right;
  }

  #showAlbum .photo-top .dropdown-menu {
    min-width: 7rem;
  }

  #showAlbum .photo-top .dropdown-menu > a:first-child {
    margin-bottom: 0.3rem;
  }

  /*remove*/
  #showAlbum .photo-nav .remove-style {
    float: right;
    margin-top: -.3rem;
    margin-right: -0.08rem;
    z-index: 5;
  }

  #showAlbum .photo-nav .remove-style > i {
    font-size: 0.83rem;
  }

  #showAlbum .photo-nav .row-item > div {
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
  /*photo-nav*/

</style>

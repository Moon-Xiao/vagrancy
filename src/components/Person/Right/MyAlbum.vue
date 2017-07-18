<!--<template>-->
<!--<div id="myAlbum" v-for="item in imgList">-->
<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>

    <div class="album-top">
      <button class="top-btn btn" @click="">
        <i class="fa fa-plus"></i><span>添加相册</span>
      </button>
    </div>
    <div class="row">
      <!-- With image -->
      <div class="col-md-3 col-sm-4 col-xs-6" v-for="item in imgList">
        <span @click='remove($event)' class="remove-style">
          <i class="fa fa-remove"></i>
        </span>
        <div class="row-item" @click="showModal">
          <div :style="'background-image: url('+item.link+')'"></div>
          <h3>{{item.title}}</h3>
          <p>{{item.id}}</p>
        </div>
      </div>
    </div>


    <!--<div class="row">-->
    <!--<div @click="showModal" class="col-md-3 row-item">-->
    <!--<img src="http://placeskull.com/200/200/ABABAB/-1/0">-->
    <!--<h3>标题</h3>-->
    <!--<p>简介</p>-->
    <!--</div>-->

    <!--<div @click="showModal" class="col-md-3 row-item">-->
    <!--<img src="http://placeskull.com/200/200/ABABAB/-1/0">-->
    <!--<h3>标题</h3>-->
    <!--<p>简介This is my opinion :)</p>-->
    <!--</div>-->
    <!--<div @click="showModal" class="col-md-3 row-item">-->
    <!--<img src="http://placeskull.com/200/200/ABABAB/-1/0">-->
    <!--<h3>标题</h3>-->
    <!--<p>简介</p>-->
    <!--</div>-->
    <!--<div @click="showModal" class="col-md-3 row-item">-->
    <!--<img src="http://placeskull.com/200/200/ABABAB/-1/0">-->
    <!--<h3>标题</h3>-->
    <!--<p>简介This is my opinion :)</p>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="row">-->
    <!--<div @click="showModal" class="col-md-3 row-item">-->
    <!--<img src="http://placeskull.com/200/200/ABABAB/-1/0">-->
    <!--<h3>标题</h3>-->
    <!--<p>简介</p>-->
    <!--</div>-->
    <!--<div @click="showModal" class="col-md-3 row-item">-->
    <!--<img src="http://placeskull.com/200/200/ABABAB/-1/0">-->
    <!--<h3>标题</h3>-->
    <!--<p>简介This is my opinion :)</p>-->
    <!--</div>-->
    <!--<div @click="showModal" class="col-md-3 row-item">-->
    <!--<img src="http://placeskull.com/200/200/ABABAB/-1/0">-->
    <!--<h3>标题</h3>-->
    <!--<p>简介</p>-->
    <!--</div>-->
    <!--<div @click="showModal" class="col-md-3 row-item">-->
    <!--<img src="http://placeskull.com/200/200/ABABAB/-1/0">-->
    <!--<h3>标题</h3>-->
    <!--<p>简介This is my opinion :)</p>-->
    <!--</div>-->
    <!--</div>-->


    <b-modal size="lg" :ref="id" :id="id" :title="title" class="photos">
      <div class="row">
        <div class="photo-top">
          <div class="top-btns">
            <button class="top-btn btn btn-primary">
              <i class="fa fa-image"></i><span>添加相片</span>
            </button>

            <button class="top-btn btn btn-primary">
              <i class="fa fa-trash"></i><span>删除相片</span>
            </button>

            <b-dropdown text="查看模式">

              <b-dropdown-item to="#">经典模式</b-dropdown-item>
              <b-dropdown-item to="#">回忆录式</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>

        <section id="photo-book" class="viewBlock">
          <div class="bookBox">
            <a class="lastBtn" @click="lastPage">
              <
            </a>
            <a class="nextBtn" @click="nextPage">
              >
            </a>
            <!--<div class="bookPage frist">-->
            <!--<img src="/static/images/banner1.jpg" />-->
            <!--<div class="bookWord">-->
            <!--<span>Ocean</span>nts for only 2%.</span>-->
            <!--<span class="pageNumber">1</span>-->
            <!--</div>-->
            <!--</div>-->
            <div class="bookPage first">
              <div class="bookWord">
                <span>Glacier</span> red in the glacier.
                <span class="pageNumber">1</span>
              </div>
              <img src="/static/images/banner2.jpg"/>
            </div>
            <div class="bookPage runPage">
              <div class="bookWord">
                <span>Surface</span> water supply, the .
                <span class="pageNumber">2</span>
              </div>
              <img src="/static/images/banner3.jpg"/>
            </div>
            <div class="bookPage runPage">
              <div class="bookWord">
                <span>Surface</span> water supply, the .
                <span class="pageNumber">3</span>
              </div>
              <img src="/static/images/banner3.jpg"/>
            </div>
            <div class="bookPage runPage">
              <div class="bookWord">
                <span>Surface</span> water supply, the .
                <span class="pageNumber">4</span>
              </div>
              <img src="/static/images/banner3.jpg"/>
            </div>
            <div class="bookPage runPage">
              <div class="bookWord">
                <span>Surface</span> water supply, the .
                <span class="pageNumber">5</span>
              </div>
              <img src="/static/images/banner3.jpg"/>
            </div>
            <div class="bookPage runPage">
              <div class="bookWord">
                <span>Surface</span> water supply, the .
                <span class="pageNumber">6</span>
              </div>
              <img src="/static/images/banner3.jpg"/>
            </div>
            <div class="bookPage runPage">
              <div class="bookWord">
                <span>Surface</span> water supply, the .
                <span class="pageNumber">7</span>
              </div>
              <img src="/static/images/banner3.jpg"/>
            </div>
            <div class="bookPage runPage">
              <div class="bookWord">
                <span>Groundwater</span>itions, good .
                <span class="pageNumber">8</span>
              </div>
              <img src="/static/images/banner4.jpg"/>
            </div>
            <div class="bookPage last">
              <img src="/static/images/banner4.jpg"/>
              <div class="bookWord">
                <span>Ocean</span>nts for only 2%.</span>
                <span class="pageNumber">9</span>
              </div>
            </div>
          </div>
        </section>

        <div class="photo-book">

        </div>

        <!--&lt;!&ndash; With image &ndash;&gt;-->
        <!--<div class="col-md-2 col-sm-3 col-xs-4  photo-nav" v-for="item in imgList">-->
        <!--<span @click='remove($event)' class="remove-style">-->
        <!--<i class="fa fa-remove"></i>-->
        <!--</span>-->
        <!--<div class="row-item" @click="showModal">-->
        <!--<div :style="'background-image: url('+item.link+')'"></div>-->
        <!--<h3>{{item.title}}</h3>-->
        <!--<p>{{item.id}}</p>-->
        <!--</div>-->
        <!--</div>-->

      </div>
      <!--{{item.detail}}-->
      <!--<form @submit.stop.prevent="submit">-->
      <!--<b-form-input type="text" placeholder="Enter your name" v-model="name"></b-form-input>-->
      <!--</form>-->
    </b-modal>

  </div>
</template>
<!--</div>-->
<!--</template>-->

<script>
  export default {
    data () {
      return {
        pageNum: 0,
        id: 'modal1',
        title: '浪在大草原',
        imgList: [
          {link: 'http://placeskull.com/200/200/ABABAB/-1/0', title: 'Skulls are nice1', id: '1'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/1', title: 'Skulls are nice2', id: '2'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: 'Skulls are nice3', id: '3'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'Skulls are nice4', id: '4'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/0', title: 'Skulls are nice1', id: '5'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/1', title: 'Skulls are nice2', id: '6'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: 'Skulls are nice3', id: '7'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'Skulls are nice4', id: '8'}
        ]
      }
    },
    methods: {
      showModal: function () {
        this.$refs.modal1.show()
      },
      hideModal: function () {
        this.$refs.modal1.hide()
      },
      remove: function (event) {
        window.$(event.srcElement).parent().parent().remove()
      },
      loadAlbum: function () {
        for (var i = 0; i < window.$('.runPage').length; i++) {
          window.$('.runPage').eq(i).css('z-index', 7 - 2 * i)
          window.$('.runPage').eq(i).children('div').css('z-index', 7 - 2 * i)
          window.$('.runPage').eq(i).children('img').css('z-index', 6 - 2 * i)
        }
      },
      runNext: function (index) {
        window.$('.runPage').eq(index).addClass('runClass')
        this.zIndexNext(index, window.$('.runPage').eq(index))
      },
      zIndexNext: function (index, element) {
        if (index >= 1) {
          element.css('z-index', 3 + 2 * index)
        }
        setTimeout(function () {
          if (index === 0) {
            element.css('z-index', 3 + 2 * index)
          }
          element.children('div').css('z-index', 2 + 2 * index)
          element.children('img').css('z-index', 3 + 2 * index)
        }, 1000)
      },
      runLast: function (index) {
        window.$('.runPage').eq(index).removeClass('runClass')
        this.zIndexLast(index, window.$('.runPage').eq(index))
      },
      zIndexLast: function (index, element) {
        if (index === 0) {
          element.css('z-index', 7 - 2 * index)
        }
        setTimeout(function () {
          element.css('z-index', 7 - 2 * index)
          element.children('div').css('z-index', 7 - 2 * index)
          element.children('img').css('z-index', 6 - 2 * index)
        }, 1000)
      },
      nextPage: function () {
        if (this.pageNum <= 2) {
          this.runNext(this.pageNum)
          this.pageNum += 1
        }
        console.log(this.pageNum)
      },
      lastPage: function () {
        if (this.pageNum >= 1) {
          this.runLast(this.pageNum)
          this.pageNum -= 1
        }
        console.log(this.pageNum)
      }
    }
  }
</script>

<!-- modal.vue -->

<style>
  @import '/static/css/default.css';
  @import '/static/css/bookblock.css';
  @import '/static/css/demo1.css';

  .album-top {
    height: 4rem;
    border: 1px solid lightgrey;
  }

  .album-top .top-btn {
    margin-top: 0.7rem;
    height: 2.5rem;
    float: right;
    margin-right: 1rem;
    padding: 0.5rem;
    background-color: cornflowerblue;
    color: white;
  }

  .album-top .top-btn span {
    margin-left: .5rem;
  }

  /*photos*/
  .row {
    margin: 0.5rem;
    border: 1px solid lightgrey;
    padding: 0.5rem;
  }

  .col-md-3 {
    padding: 0.3rem;
  }

  .remove-style {
    width: 1.1rem;
    height: 1.1rem;
    line-height: 1.0rem;
    border-radius: 50%;
    border: 1px solid lightgrey;
    float: right;
    margin-top: -.6rem;
    margin-right: -.6rem;
    color: black;
    font-weight: 200;
  }

  .remove-style > i {
    font-size: 0.9rem;
  }

  .remove-style:hover {
    background-color: cornflowerblue;
    color: white;
  }

  .row-item {
    border: 1px solid lightgrey;
  }

  .row-item div {
    height: 13rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    width: 100%;
    /*border: 1px solid black;*/
    padding: 0.5rem;
  }

  .row-item h3 {
    width: 100%;
    text-align: center;
    /*border: 1px solid black;*/
    font-size: 24px;
    margin: .5rem auto;
  }

  .row-item p {
    width: 100%;
    /*border: 1px solid black;*/
    margin: .5rem auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 18px;
    height: 5rem;
    text-align: left;
  }

  /*photos*/
  .photos .modal-header {
    width: 100%;
    height: 100%;
    background: url(/static/images/person/overlay.png) rgba(0, 0, 0, 0.2) repeat;
    border-bottom: 0.2rem solid rgba(255, 255, 255, 0.2);
  }

  .photos .modal-title {
    line-height: 2rem;
    font-size: 28px;
    /*color: #99abff;*/
    color: black;
  }

  .photo-top {
    height: 4rem;
    border: 1px solid lightgrey;
    width: 100%;
  }

  .photo-top .top-btns {
    width: 38%;
    float: right
  }

  .photo-top .top-btn {
    height: 2.5rem;
    margin-right: 1rem;
    padding: 0.5rem;
    color: white;
  }

  .photo-top .top-btn span {
    margin-left: .5rem;
  }

  .photo-top .btn-group > .btn {
    height: 2.55rem;
    display: inline-block;
    text-align: right;
  }

  .photo-top .btn:hover {
    /*border: 2px solid #f9ff9d;*/
    /*box-shadow: 2px 2px 2px 1px #f9ff9d;*/
  }

  /*.photo-top .btn-secondary:{*/
  /*font-size: 18px;*/
  /*}*/

  /*.photo-top .btn-secondary:hover {*/
  /*background-color: #428bca;*/
  /*border-color: #357ebd;*/
  /*color:white;*/
  /*}*/

  .photo-top .dropdown-menu {
    min-width: 7rem;
  }

  .photo-top .dropdown-menu > a:first-child {
    margin-bottom: 0.3rem;
  }

  /*.photo-top .dropdown-menu .dropdown-item {*/
  /*color: blue;*/
  /*border-radius: 0.2rem;*/
  /*}*/

  /*.photo-top .dropdown-menu .dropdown-item:focus {*/
  /*color: #fff !important;*/
  /*text-decoration: none;*/
  /*background-color: cornflowerblue;*/
  /*}*/

  /*photo-nav*/
  .photo-nav .row-item {
    border: 1px solid lightgrey;
  }

  .col-md-2 {
    padding: 0.1rem;
  }

  /*remove*/
  .photo-nav .remove-style {
    width: 0.9rem;
    height: 0.9rem;
    line-height: 0.75rem;
    border-radius: 50%;
    border: 1px solid lightgrey;
    float: right;
    margin-top: -.45rem;
    margin-right: -.45rem;
    color: black;
    font-weight: 200;
    z-index: 5;
  }

  .photo-nav .remove-style > i {
    font-size: 0.8rem;
  }

  .remove-style:hover {
    background-color: cornflowerblue;
    color: white;
  }

  .photo-nav .row-item > div {
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

  /*photo-book*/
  a, a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }

  ::-moz-selection {
    background: #338FFF;
    color: #fff;
  }

  ::selection {
    background: #338FFF;
    color: #fff;
  }

  .clear::after {
    content: "";
    display: block;
    height: 0px;
    clear: both;
    visibility: hidden;
  }

  .response-img {
    display: block;
    max-width: 100%;
  }

  .text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #knowledge {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 40px 0;
  }

  .bookBox {
    width: 1000px;
    height: 600px;
    position: relative;
    margin: 30px auto;
    -webkit-perspective-origin: 50% 60%;
    perspective-origin: 50% 60%;
    -webkit-perspective: 1500px;
    perspective: 1500px;
    background: url(/static/images/person/bookBg.png) no-repeat 0 0;
    background-size: 100% 100%;
  }

  .bookBox:hover .lastBtn {
    display: block;
  }

  .bookBox:hover .nextBtn {
    display: block;
  }

  /*书的高度*/
  .bookPage {
    position: absolute;
    width: 500px;
    height: 580px;
    top: 0;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all linear 2s;
    -moz-transition: all linear 2s;
    -ms-transition: all linear 2s;
    -o-transition: all linear 2s;
    transition: all linear 2s;
    background: url(/static/images/person/bookLeft.png) no-repeat;
    background-size: 479.26px 780px;
    background-position: 20.74px 8.3px;
  }

  .bookPage img {
    position: absolute;
    top: 50px;
    left: 50px;
    display: inline-block;
    width: 400px;
  }

  .bookWord {
    position: absolute;
    top: 65%;
    left: 50px;
    display: inline-block;
    width: 360px;
    padding: 20px;
    font-size: 20px;
    line-height: 27px;
    backface-visibility: visible;
    background-color: #f0f0f0;
    word-break: break-all;
    -webkit-column-count: 2;
    -webkit-column-gap: 40px;
    -moz-column-count: 2;
    -moz-column-gap: 40px;
    -ms-column-count: 2;
    -ms-column-gap: 40px;
    column-count: 2;
    column-gap: 40px;
  }

  .bookWord span {
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
  }

  .frist {
    left: 0;
    z-index: 1;
  }

  .frist img {
    z-index: 1;
  }

  .last {
    right: 0;
    z-index: 1;
  }

  .last p {
    z-index: 1;
  }

  .runPage {
    right: 0;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  /*书的高度*/
  .runPage,
  .bookPage:last-child {
    background: url(/static/images/person/bookRight.png) no-repeat;
    background-size: 479.26px 780px;
    background-position: 0 8.3px;
  }

  .runClass {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }

  .lastBtn,
  .nextBtn {
    display: none;
    position: absolute;
    top: 300px;
    cursor: pointer;
    z-index: 999;
    font-size: 50px;
    line-height: 100px;
    color: #fff;
    text-decoration: none;
    background-color: rgba(0, 0, 0, .5);
  }

  .lastBtn {
    left: 0;
  }

  .nextBtn {
    right: 0;
  }

  .canvasBox {
    display: block;
    width: 158px;
    height: 158px;
  }

  /*页序号*/
  .pageNumber {
    position: absolute;
    bottom: -40px;
    right: 0;
    font-size: 20px !important;
    line-height: 30px;
  }

  /*photo-book*/

  .modal-lg {
    width: 1100px;

  }

  @media (min-width: 992px) {
    .modal-lg {
      max-width: 1100px !important;
    }

    .photo-top .top-btns {
      width: 36.5% !important;
    }
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 750px;
    }

    .photo-top .top-btn {
      margin-right: .6rem;
    }

    .photo-top .top-btns {
      width: 55%;
    }
  }


</style>

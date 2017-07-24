<template>

  <div id="showAlbum">

    <div class="photo-top">
      <div class="top-btns">
        <b-btn class="top-btn btn" v-b-modal.addPhoto>
          <i class="fa fa-image"></i><span>添加相片</span>
        </b-btn>

        <b-btn class="top-btn btn" @click="isShowDelete">
          <i class="fa fa-trash"></i><span>删除相片</span>
        </b-btn>

        <b-dropdown right text="查看模式">
          <b-dropdown-item :to="'/show-album/'+$route.params.id">经典模式</b-dropdown-item>
          <b-dropdown-item :to="'/memorialize-album/'+$route.params.id">回忆录式</b-dropdown-item>
        </b-dropdown>

      </div>
    </div>

    <paginate-list certain-list="photo" :certain-user="{album: $route.params.id}" select="name intro photo"
                   class-name="row">
      <template slot="list-item" scope="item">
        <!-- With image -->
        <div class="col-md-2 col-sm-3 col-xs-4">
        <span @click='remove($event, item.value._id)' class="remove-style">
        <i v-show="showDelete" class="fa fa-times-circle"></i>
        </span>
          <div class="row-item">
            <div class="item-img" :style="`background-image: url('${baseUrl}/${item.value.photo.path}')`"></div>
            <div>
              <h3>{{item.value.name}}</h3>
            </div>
            <p>{{item.value.intro}}</p>
          </div>
        </div>

      </template>

      <div style="height: 3rem;padding:0.5rem 0;text-align: center;position: relative;width: 100%;margin: 1rem auto">
        <span title="previous" class="fa fa-chevron-left"
              style="color: rgb(221, 221, 221);position: absolute;font-size: 16px;margin-top: 0.5rem;margin-left: -0.9rem;"></span>
        <span
          style="height: 2rem;width: 2rem;display:inline-block;border-radius:50%;border: 1px solid #ddd;box-shadow:0 0 1px #eee;text-align: center;line-height: 2rem">{{imgPageNum}}</span>
        <span title="next" class="fa fa-chevron-right"
              style="color: rgb(221, 221, 221);position: absolute;font-size: 16px;margin-top: 0.5rem;margin-left: 0.2rem;"></span>
      </div>
    </paginate-list>

    <!--add photo-->
    <b-modal ref="addPhoto" id="addPhoto" :hide-footer="true" title="添加照片">
      <!--<add-photo @success="this.$refs.addPhoto.hide()"></add-photo>-->
      <template>
        <div id="addPhoto">
          <form class="photo-form">
            <div class="form-nav">
              <div class="img-back">
                <div title="点我选择图片" id="photo-img" class="img-style">
                  <input style="width: 100%;height: 100%;opacity: 0" @change="addFile" type="file"
                         accept="image/jpeg, image/png, image/gif"/>
                </div>
              </div>
              <div class="img-info">
                <input type="text" placeholder="相片名" v-model="photoTitle"/>
                <textarea rows="4" placeholder="相片描述" v-model="photoInfo"></textarea>
              </div>
            </div>
            <div class="btn-bottom">
              <button type="button" class="btn btn-primary" style="text-align: right" @click="createAlbum">保存修改</button>
            </div>
          </form>
        </div>
      </template>
    </b-modal>

  </div>
</template>
<script>
  import AddPhoto from './AddPhoto.vue'
  import PaginateList from '../../../mixins/PaginateList.vue'
  import Item from '../../../mixins/Item.vue'
  export default {
    components: {
      AddPhoto, PaginateList, Item
    },
    data () {
      return {
        showDelete: false,
        imageType: /image.*/,
        photo: '',
        photoTitle: '',
        photoInfo: '',
        title: '浪在大草原',
        imgPageNum: '0',
        imgList: [
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
      isShowDelete: function () {
        this.showDelete = !this.showDelete
      },
      remove: async function (event, id) {
        try {
          await this.deleteItem('photos', id)
          window.$(event.srcElement).parent().parent().remove()
        } catch (error) {
          window.alert(error)
        }
      },
      addFile: function (e) {
        this.photo = e.srcElement.files[0]
        if (this.photo.type.match(this.imageType)) {
          let reader = new FileReader()
          reader.onload = (function (aDiv) {
            return function (e) {
              aDiv.css('background', 'url(' + e.target.result + ') no-repeat center')
              aDiv.css('background-size', 'cover')
            }
          })(window.$('#photo-img'))
          reader.readAsDataURL(this.photo)
        }
      },
      async createAlbum () {
        try {
          let data = {name: this.photoTitle, intro: this.photoInfo, photo: this.photo, album: this.$route.params.id}
          await this.createItem('photos', data)
          window.alert('创建成功')
          this.$refs.addPhoto.hide()
        } catch (error) {
          window.alert(error)
        }
      }
    }
  }
</script>
<style>
  /*photo-top*/
  #showAlbum {
    min-width: 1200px;
  }

  #showAlbum .photo-top {
    height: 4rem;
    margin: 1rem auto;
    width: 100%;
  }

  #showAlbum .photo-top .top-btns {
    width: 100%;
    /* float: right; */
    text-align: right;
    padding-right: 2.5rem;
    line-height: 4rem;
  }

  #showAlbum .photo-top .top-btn {
    height: 2.55rem;
    margin-right: 1rem;
    padding: 0.5rem;
    background-color: rgba(195, 100, 211, 0.7);
    color: white;
  }

  #showAlbum .photo-top .top-btn:hover {
    background-color: rgba(195, 100, 211, 0.9);
    box-shadow: 0 0 8px rgba(156, 39, 176, 0.42)
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
    min-width: 3rem;
    line-height: 2.5rem;
    padding: 0;
  }

  #showAlbum .photo-top .dropdown-menu > a:first-child {
    margin-bottom: 0.3rem;
  }

  /*photos*/
  #showAlbum .row {
    top: 4rem;
    padding: 0.5rem 3rem;
  }

  #showAlbum .col-md-2 {
    padding: 0.3rem;
  }

  #showAlbum .col-xs-4 {
    padding: 0.5rem;
  }

  #showAlbum .remove-style {
    float: right;
    margin-top: -0.6rem;
    margin-right: -0.4rem;
    background: none;
    vertical-align: middle;
  }

  #showAlbum .remove-style > i {
    color: white;
    background-color: rgba(41, 133, 255, 0.83);
    font-size: 12px;
    box-shadow: 2px 1px 3px rgba(57, 128, 255, 0.67);
    border-radius: 50%;
    overflow: hidden;
  }

  #showAlbum .remove-style > i:hover {
    color: cornflowerblue;
    background-color: white;
    box-shadow: none;
  }

  #showAlbum .row-item {
    box-shadow: 0 0 0.1rem cornflowerblue;
    padding-bottom: 1rem;
    padding-top: 0.25rem;
  }

  /*#showAlbum .row-item div {*/
  /*height: 11rem;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*background-origin: content-box;*/
  /*width: 100%;*/
  /*padding: 0.5rem;*/
  /*}*/

  #showAlbum .row .row-item .item-img {
    height: 10rem;
    padding: 1rem;
    margin: 0.5rem;
    background: no-repeat center;
    background-size: 100% 100%;
    transition: background-size 1.5s;
  }

  #showAlbum .row .row-item .item-img:hover {
    background-size: 130% 130%;
  }

  #showAlbum .row-item div {
    height: 2.8rem;
    background-color: rgba(33, 150, 243, 0.45);
  }

  #showAlbum .row-item h3 {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #717171;
    line-height: 2.8rem;
    /*margin: 0.9rem auto;*/
  }

  #showAlbum .row-item p {
    width: 100%;
    padding: 0 1rem;
    font-size: 12px;
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

  /*addphoto model*/
  #showAlbum .modal-header {
    font-size: 18px;
    color: cornflowerblue;
  }

  #showAlbum .form-nav {
    margin: 0 auto;
    border: none !important;
    box-shadow: none !important;
    width: 100% !important;
    height: 22rem !important;
  }

  #showAlbum .form-nav .img-back {
    margin: 0 auto;
  }

  #showAlbum .form-nav .img-info {
    margin: 0 auto 1rem;
    width: 100% !important;
  }

  #showAlbum .form-nav .img-info input {
    width: 18rem !important;
  }

  #showAlbum .form-nav .img-info textarea {
    width: 18rem !important;
  }

  /*#showAlbum .btn-bottom .btn{*/
  /*margin: 0 auto;*/
  /*}*/
  /*addPhoto*/
  #addPhoto .form-nav {
    height: 20.5rem;
    text-align: center;
    width: 13.5rem;
    padding: 1rem;
    box-shadow: 0 0 3px rgba(33, 150, 243, 0.61);
    border: 1px dotted rgba(100, 149, 237, 0.81);
    border-radius: 0.3rem;
  }

  #addPhoto .photo-form .img-info {
    width: 11rem;
    text-align: center
  }

  #addPhoto .photo-form .img-info input {
    font-size: 18px;
    border-radius: 0.2rem;
    border: 1px solid #eee;
    width: 100%;
    margin: 1rem auto;
    line-height: 2rem;
    padding: 0 0.5rem;
  }

  #addPhoto .photo-form .img-info textarea {
    width: 100%;
    resize: none;
    border-radius: 0.2rem;
    border: 1px solid #eee;
    font-size: 14px;
    margin: 0 auto;
    padding: 0 0.5rem;
  }

  #addPhoto .img-back {
    position: relative;
    width: 11rem;
    height: 11rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  #addPhoto .img-style {
    border-radius: 0.3rem;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(/static/images/person/addImages.jpg) no-repeat;
    background-size: cover;
    opacity: 1;
  }

  #addPhoto .img-style:before {
    content: '';
    background-color: black;
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s;
  }

  #photo .img-style:hover:before {
    opacity: 0.2;
  }

  /*#addPhoto .img-mask {*/
  /*border-radius: 0.3rem;*/
  /*position: absolute;*/
  /*background: black;*/
  /*opacity: 0;*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*transition: opacity 0.5s;*/
  /*}*/

  /*#addPhoto .img-mask:hover {*/
  /*opacity: 0.2;*/
  /*}*/

  #addPhoto .btn-bottom {
    margin: 1.5rem 0;
  }

  #addPhoto .btn-bottom .btn {
    margin: 0 auto;
    width: 11rem;
    text-align: center !important;
  }
</style>

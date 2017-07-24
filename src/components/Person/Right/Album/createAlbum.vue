<template>
  <div id="createAlbum">
    <form class="photo-form">
      <div class="form-nav">
        <div class="img-back">
          <div title="点我选择图片" id="photo-img" class="img-style">
            <input style="width: 100%;height: 100%;opacity: 0" @change="addFile" type="file"
                   accept="image/jpeg, image/png, image/gif"/>
          </div>
        </div>
        <input type="text" placeholder="相片名" v-model="albumTitle" />
        <textarea rows="4" placeholder="相片描述" v-model="albumInfo"></textarea>
      </div>
      <b-btn class="btn btn-bottom" @click="createAlbum">添加照片</b-btn>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        photo: '',
        albumTitle: '',
        albumInfo: ''
      }
    },
    methods: {
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
          let data = {name: this.albumTitle, intro: this.albumInfo, avatar: this.photo}
          await this.createItem('albums', data)
          window.alert('创建成功')
        } catch (error) {
          window.alert(error)
        }
      }
    }
  }
</script>
<style>
  #createAlbum {

  }
  #createAlbum .form-nav{
    margin: 3rem auto 3rem;
    height: 26rem;
    width: 25rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 0 3px rgba(33, 150, 243, 0.61);
    border: 1px dotted rgba(100, 149, 237, 0.81);
    border-radius: 0.3rem;
  }

  #createAlbum .img-back {
    position: relative;
    width: 12rem;
    height: 12rem;
    border-radius: 0.3rem;
    cursor: pointer;
    margin: 0.5rem auto;
  }

  #createAlbum .img-style {
    border-radius: 0.3rem;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(/static/images/person/add.jpg) no-repeat;
    background-size: cover;
    opacity: 1;
  }

  #createAlbum .img-style:before {
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

  #createAlbum .img-style:hover:before {
    opacity: 0.2;
  }

  #createAlbum .photo-form input{
    font-size: 16px;
    border-radius: 0.2rem;
    border: 1px solid #eee;
    width: 90%;
    margin: 1rem 0 1.5rem;
    line-height: 2rem;
  }
  #createAlbum .photo-form textarea{
    width: 90%;
    resize: none;
    border-radius: 0.2rem;
    border: 1px solid #eee;
    font-size: 12px;
  }

  #createAlbum .btn-bottom {
    margin: 0 auto 8rem;
    width: 21rem;
    text-align: center !important;
    color: white;
    background-color: cornflowerblue;
  }
  #createAlbum .btn-bottom:hover{
    background-color: #4548ff;
    box-shadow: 0 0 8px rgba(100, 149, 237, 0.77);
  }
</style>


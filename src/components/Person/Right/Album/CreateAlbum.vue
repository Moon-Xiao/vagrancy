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
      <div class="img-info" style="width: 11rem;text-align: left">
        <input type="text" placeholder="相片名" />
        <textarea rows="2" placeholder="相片描述"></textarea>
      </div>
      </div>
      <div class="btn-bottom">
        <button class="btn btn-primary" style="text-align: right">保存修改</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        imageType: /image.*/,
        photo: '',
        photoTitle: '',
        photoInfo: ''
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
      }
    }
  }
</script>
<style>
  #createAlbum {

  }
 #createAlbum .form-nav{
   height: 20.5rem;
   width: 13.5rem;
   padding: 1rem;
   text-align: center;
   box-shadow: 0 0 3px rgba(33, 150, 243, 0.61);
   border: 1px dotted rgba(100, 149, 237, 0.81);
   border-radius: 0.3rem;
 }

 #createAlbum .photo-form .img-info input{
   font-size: 18px;
   border-radius: 0.2rem;
   border: 1px solid #eee;
   width: 100%;
   margin: 1rem 0;
   line-height: 2rem;
 }
  #createAlbum .photo-form .img-info textarea{
    width: 100%;
    resize: none;
    border-radius: 0.2rem;
    border: 1px solid #eee;
    font-size: 14px;
  }
  #createAlbum .img-back {
    position: relative;
    width: 11rem;
    height: 11rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  #createAlbum .img-style {
    border-radius: 0.3rem;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(/static/images/person/addImages.jpg) no-repeat;
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

  #photo .img-style:hover:before {
    opacity: 0.2;
  }

  /*#createAlbum .img-mask {*/
  /*border-radius: 0.3rem;*/
  /*position: absolute;*/
  /*background: black;*/
  /*opacity: 0;*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*transition: opacity 0.5s;*/
  /*}*/

  /*#createAlbum .img-mask:hover {*/
  /*opacity: 0.2;*/
  /*}*/

  #createAlbum .btn-bottom {
    margin: 1.5rem 0;
    text-align: left;
  }

  #createAlbum .btn-bottom .btn {
    margin-left: 1.5rem;
    width: 11rem;
    text-align: center !important;
  }
</style>


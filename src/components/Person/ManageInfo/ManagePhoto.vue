<template>
  <div id="photo">
    <form>
      <div class="img-back">
        <div id="photo-img" class="img-style" :style="`background-image:url(${baseUrl}/${userInfo.avatar.path})`">
          <input style="width: 100%;height: 100%;opacity: 0" @change="addFile" type="file"
                 accept="image/jpeg, image/png, image/gif"/>
        </div>
        <!--<div title="点我选择图片"  class="img-mask">-->

        <!--</div>-->
      </div>
      <div class="btn-bottom">
        <button class="btn btn-warning" type="button" style="text-align: right" @click="updatePhoto()">保存修改</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        imageType: /image.*/,
        mImg: '/static/images/person/person.jpeg'
      }
    },
    methods: {
      addFile: function (e) {
        this.mImg = e.srcElement.files[0]
        console.log(this.mImg)
        if (this.mImg.type.match(this.imageType)) {
          let reader = new FileReader()
          reader.onload = (function (aDiv) {
            return function (e) {
              aDiv.css('background', 'url(' + e.target.result + ') no-repeat center')
              aDiv.css('background-size', 'cover')
            }
          })(window.$('#photo-img'))
          reader.readAsDataURL(this.mImg)
        }
      },
      updatePhoto: function () {
        try {
          this.updateInfo({avatar: this.mImg})
          window.alert('修改成功')
        } catch (error) {
          window.alert('修改失败' + error)
        }
      }
    }
  }
</script>
<style>
  #photo {

  }

  #photo .img-back {
    position: relative;
    width: 11rem;
    height: 11rem;
    border-radius: 0.3rem;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
  }

  #photo .img-style {
    border-radius: 0.3rem;
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    opacity: 1;
    background-repeat: no-repeat;
  }

  #photo .img-style:before {
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

  #photo .btn-bottom {
    margin: 1.5rem 0;
    text-align: left;
  }

  #photo .btn-bottom .btn {
    margin-left: 1.5rem;
    width: 11rem;
    text-align: center !important;
  }
</style>

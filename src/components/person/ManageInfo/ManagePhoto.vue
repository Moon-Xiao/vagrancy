<template>
  <div id="photo">
    <form>
      <div class="img-back">
        <div id="photo-img" class="img-style">
          <input style="width: 100%;height: 100%;opacity: 0" @change="addFile" type="file"
                 accept="image/jpeg, image/png, image/gif"/>
        </div>
        <div title="点我选择图片"  class="img-mask">

        </div>
      </div>
      <div class="btn-bottom">
        <button class="btn btn-warning" style="text-align: right">保存修改</button>
      </div>
    </form>
  </div>
</template>
<script>
  import '../../../../static/js/picjs'
  export default {
    data () {
      return {
        imageType: /image.*/,
        mImg: ''
      }
    },
    methods: {
      addFile: function (e) {
        let file = e.srcElement.files[0]
        if (file.type.match(this.imageType)) {
          let reader = new FileReader()
          reader.onload = (function (aDiv) {
            return function (e) {
              aDiv.css('background', 'url(' + e.target.result + ') no-repeat center')
              aDiv.css('background-size', 'cover')
            }
          })(window.$('#photo-img'))
          reader.readAsDataURL(file)
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
    background: url(/static/images/person/person.jpeg) no-repeat;
    background-size: cover;
    opacity: 1;
  }

  #photo .img-mask {
    border-radius: 0.3rem;
    position: absolute;
    background: black;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s;
  }
  #photo .img-mask:hover{
    opacity: 0.2;
  }
  #photo .btn-bottom{
    margin: 1.5rem 0;
    text-align: left;
  }
  #photo .btn-bottom .btn{
    margin-left: 1.5rem;
    width: 11rem;
    text-align: center !important;
  }
</style>

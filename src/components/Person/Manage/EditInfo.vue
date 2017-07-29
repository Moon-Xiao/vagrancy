<template>
  <div id="edit-info">
    <nav-header class="header-style">
      <div slot="left" class="back"></div>
      <div slot="middle" style="color: white">编辑个人信息</div>
    </nav-header>
    <form class="info-table">
      <div class="info-img" title="点我更换头像">
        <input style="width: 100%;height: 100%;opacity: 0" @change="addFile" type="file"
               accept="image/jpeg, image/png, image/gif"/>
      </div>
      <div class="input-lists">
        <input type="text" placeholder="修改用户名"/>
        <input type="text" placeholder="修改住址"/>
        <input type="text" placeholder="修改手机号"/>
        <input type="text" placeholder="修改个性签名"/>
      </div>
      <div class="form-submit">
        <button type="submit" class="submit-btn">保存修改</button>
      </div>
    </form>
  </div>
</template>
<script>
  import NavHeader from '../Comment/NavHeader.vue'

  export default {
    data () {
      return {
        imageType: /image.*/,
        img: ''
      }
    },
    props: {},
    components: {
      NavHeader
    },
    methods: {
      addFile: function (e) {
        this.img = e.srcElement.files[0]
        if (this.img.type.match(this.imageType)) {
          let reader = new FileReader()
          reader.onload = (function (aDiv) {
            return function (e) {
              aDiv.css('background', 'url(' + e.target.result + ') no-repeat center')
              aDiv.css('background-size', 'cover')
            }
          })(window.$('#photo-img'))
          reader.readAsDataURL(this.img)
        }
      }
    }
  }
</script>
<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }

  #edit-info {
    width: 100%;
    .back {
      width: 100%;
      height: 100%;
      background-size: 40% 40%;
      background-image: url("/static/img/person/svg/back.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
    .header-style {
      background-color: #7dd67f;
      z-index: 1;
    }
    > .info-table {
      width: 100%;
      margin-top: 60px;
      .info-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 50px auto;
        background: url(/static/img/person/img/person.jpeg) no-repeat;
        background-size: cover;
        box-shadow: 0 0 5px #eee;
        opacity: 1;
      }
      > .input-lists {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        > input {
          width: 100%;
          padding: 20px 0 20px 10px;
          display: inline-block;
          border: none;
          color: #7dd67f;
          border-bottom: 1px solid #7dd67f;
        }
        > input::placeholder {
          color: #7dd67f;
        }
      }
      > .form-submit {
        margin-top: 60px;
        width: 100%;
        text-align: center;
        > button {
          padding: 10px 50px;
          width: 50%;
          margin: 0 auto;
          text-align: center;
          background-color: white;
          color: #7dd67f;
          border: 1px solid #7dd67f;
          border-radius: 3px;
        }
      }
    }
  }
</style>

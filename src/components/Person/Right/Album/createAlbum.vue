<template>
  <div id="createAlbum">
    <div class="card input-img">
      <div class="card-header"><input class="name-style" type="text" placeholder="相册名" v-model="newAlbumName"></div>
      <div class="card-block text-center">
        <form autocomplete="off">
          <div class="file_item">
            <input type="file" @change="newAlbumImgList=$event.target.files">
          </div>
        </form>
        <div class="info-style">
          <textarea placeholder="说说其中的故事吧O(∩_∩)O" v-model="newAlbumInfo"></textarea>
        </div>
      </div>
      <div class="card-footer" style="text-align: right">
        <button class="btn btn-submit">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  import '../../../../../static/js/picjs'
  export default {
    data () {
      return {
        newAlbumName: '',
        newAlbumImgList: '',
        newAlbumInfo: ''
      }
    }
  }
</script>
<style>
  #createAlbum {
    padding: 1rem;
  }

  #createAlbum .card {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    background-color: #fff;
    /* border: 1px solid rgba(0, 0, 0, 0.125); */
    box-shadow: 0 0 2px #609eff !important;
    border: none;
    border-radius: 0;
  }

  #createAlbum .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    color: #717171;
    font-size: 20px;
    margin-left: 0.75rem;
    user-select: text;
    cursor: auto;
    padding: 1px;
    border: none !important;
  }

  #createAlbum .card-header {
    padding: 1rem 1.25rem;
    margin: 0 2rem;
    background: none;
    border-bottom: 1px outset rgba(33, 160, 243, 0.12);
  }

  #createAlbum .card-header > input {
    font-size: 22px;
  }

  #createAlbum .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  #createAlbum .card-footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(33, 150, 243, 0.89);
    border-top: 1px solid rgba(3, 169, 244, 0.2);
  }

  #createAlbum .name-style {
    border-radius: 0.2rem;
  }

  #createAlbum .info-style > textarea {
    resize: vertical;
    width: 100%;
    box-shadow: 0 0 1px rgba(33, 150, 243, 0.78);
    border-radius: 0.2rem;
    border: none;
    font-size: 16px;
    margin: 1.5rem auto 0;
  }

  #createAlbum .btn-submit {
    background-color: white;
    font-size: 16px;
    width: 5rem;
    color: #2196F3;
  }

  #createAlbum .btn-submit:hover {
    background-color: bisque;
    color: coral;
    box-shadow: 0 0 2px #ffd99f;
  }

  #createAlbum .input-img {
    width: 100%;
  }

  #createAlbum .file_item {
    position: relative;
    float: left;
    margin: 10px;
    width: 110px;
    height: 110px;
    background: url("/static/images/person/add.jpg") no-repeat center;
    background-size: 100% 100%;
    border-radius: 10px;
  }

  #createAlbum .file_item input {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  #createAlbum .file_item .file_head {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    transition: height 0.5s;
  }

  #createAlbum .file_item:hover .file_head {
    height: 27px;
  }

  #createAlbum .file_item .file_foot {
    position: absolute;
    overflow: hidden;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #ffffff;
    text-align: center;
    bottom: 0px;
    width: 100%;
    height: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: height 0.5s;
  }

  #createAlbum .file_item:hover .file_foot {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  #createAlbum .cancel {
    margin-top: 6px;
    margin-right: 5px;
    display: inline-block;
    height: 15px;
    width: 15px;
    cursor: pointer;
    float: right;
    background: url("/static/images/person/delete1.png");
    background-size: 100%;
  }

  #createAlbum .cancel:hover {
    background: url("/static/images/person/delete2.png");
    background-size: 100%;
  }

  #createAlbum .user_icon {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    background: url("/static/images/person/add.jpg") no-repeat center;
    background-size: cover;
  }
</style>

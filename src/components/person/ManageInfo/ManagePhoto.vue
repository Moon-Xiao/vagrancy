<template>
  <div id="photo">
    <div class="card input-img">
      <div class="card-header">上传图片</div>
      <div class="card-block text-center">
        <form autocomplete="off">
          <div class="file_item">
            <input type="file">
          </div>
        </form>
      </div>
      <div class="card-footer" style="text-align: right">
        <button class="btn btn-primary">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  import '../../../../static/js/picjs'
</script>
<style>
  #photo {
    padding: 1rem;
  }
  #photo .input-img{
    width: 60%;
  }
  #photo #card-header{

  }
  #photo .file_item {
    position: relative;
    float: left;
    margin: 10px;
    width: 110px;
    height: 110px;
    background: url("/static/images/person/add.jpg") no-repeat center;
    background-size: 100% 100%;
    border-radius: 10px;
  }

  #photo .file_item input {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  #photo .file_item .file_head {
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

  #photo .file_item:hover .file_head {
    height: 27px;
  }

  #photo .file_item .file_foot {
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

  #photo .file_item:hover .file_foot {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  #photo .cancel {
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

  #photo .cancel:hover {
    background: url("/static/images/person/delete2.png");
    background-size: 100%;
  }

  #photo .user_icon {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    background: url("/static/images/person/add.jpg") no-repeat center;
    background-size: cover;
  }
</style>

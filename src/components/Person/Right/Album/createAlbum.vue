<template>
  <div id="createAlbum">
    <form class="photo-form">
      <div class="form-nav">
        <input type="text" placeholder="相片名" />
        <textarea rows="4" placeholder="相片描述"></textarea>
      </div>
      <b-btn class="btn btn-bottom" to="/show-album">添加照片</b-btn>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        albumTitle: '',
        albumInfo: ''
      }
    },
    methods: {}
  }
</script>
<style>
  #createAlbum {

  }
 #createAlbum .form-nav{
   margin: 8rem auto 5rem;
   height: 13rem;
   width: 25rem;
   padding: 1rem;
   text-align: center;
   box-shadow: 0 0 3px rgba(33, 150, 243, 0.61);
   border: 1px dotted rgba(100, 149, 237, 0.81);
   border-radius: 0.3rem;
 }

 #createAlbum .photo-form input{
   font-size: 18px;
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
    font-size: 14px;
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


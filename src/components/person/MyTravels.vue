<template>
  <div>
    <div>
      <div class="travel-top" style="width: 100%;position: relative">
        <div class="top-nav">
          <div class="top-item">
            <span>10</span>
            </br>
            <span>游记</span>
          </div>
          <div class="top-item">
            <span>1000</span></br>
            <span>总阅读人数</span>
          </div>
          <div class="top-item">
            <button class="btn top-btn btn-warning"><i class="fa fa-edit"></i>写游记</button>
          </div>
        </div>
      </div>
    </div>


    <div class="travels-nav" style="clear: both">
      <div class="row" v-for="item in articleList">
        <div class="col-md-3">
          <div class="article-img" :style="'background-image: url('+item.link+')'"></div>
        </div>
        <div class="col-md-9">
          <h3 class="article-title">{{item.title}}</h3>
          <p class="article-nav">{{item.id}}哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：
            我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼... </p>
          <div class="article-bottom">
            <span><i class="fa fa-globe"></i>撒哈拉</span>
            <span><i class="fa fa-eye"></i>9999</span>
            <span><i class="fa fa-thumbs-up"></i>666</span>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        articleList: [
          {link: 'http://placeskull.com/200/200/ABABAB/-1/0', title: '美丽的大沙漠', id: '1'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/1', title: '美丽的大沙漠', id: '2'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: '美丽的大沙漠', id: '3'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: '美丽的大沙漠', id: '4'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/0', title: '美丽的大沙漠', id: '5'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/1', title: '美丽的大沙漠', id: '6'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: '美丽的大沙漠', id: '7'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: '美丽的大沙漠', id: '8'}
        ]
      }
    }
  }
</script>

<style>
  /*top*/
  .top-nav {
    display: flex;
    width: 40%;
    height: 4.2rem;
    padding: .3rem;
    float: right;
    border: 1px solid grey;
    margin-bottom: 1rem;
  }

  .top-item {
    flex: 1;
    /*width: 33.33%;*/
    height: 100%;
    font-size: 18px;
    color: black;
    border-right: 1px solid ghostwhite;
    /*line-height: 5rem;*/
    /*display: inline-block;*/
  }

  .top-item:last-child {
    line-height: 3.6rem;
  }
/*travel-nav*/
  .row{
    border: 1px solid lightgrey;
    margin:0;
    padding: 0;
    height: 14rem;
  }
  .travels-nav .article-title{
    font-size: 24px;
    color: black;
    text-align: left;
    margin: 0.6rem auto;
  }
  .travels-nav .article-nav{
    font-size: 16px;
    color: black;
    text-align: left;
    height: 9rem;
    position: relative;
  }
  .article-img {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    width: 100%;
    /*border: 1px solid black;*/
    padding: 0.5rem;
  }
  /*nav-bottom*/
  .article-bottom{
    display: flex;
    width: 30%;
    right: 0;
    bottom: 2%;
    position: absolute;
  }
  .article-bottom span{
    flex: 1;
  }
  .article-bottom span i{
    margin-right:.5rem;
  }
</style>

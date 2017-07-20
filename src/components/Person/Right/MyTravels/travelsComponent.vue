<template>
  <div class="travels-nav">
    <div class="row" v-for="item in articleList">
      <a :href="item.link" class="row">
        <div class="col-md-3">
          <div class="article-img" :style="'background-image: url('+item.img+')'"></div>
        </div>
        <div class="col-md-9">
          <h3 class="article-title">{{item.title}}</h3>
          <p class="article-nav">{{item.id}}{{item.info}} </p>
          <div class="article-bottom">
            <span><i class="fa fa-map-marker"></i>{{item.place}}</span>
            <span><i class="fa fa-eye"></i>{{item.saveNum}}</span>
            <span><i class="fa fa-thumbs-up"></i>{{item.heartNum}}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        articleList: [
          {
            link: '/manage-info',
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '1',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '2',
            place: '天涯海角',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '3',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '4',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '5',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '6',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '7',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '8',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          }
        ]
      }
    }
  }
</script>

<style>

  /*travel-nav*/
  .row {
    box-shadow: 0 0 0.2rem #eee;
    border-radius: 0.2rem;
    margin: 0 0 0.8rem;
    padding: 0;
    height: 13rem;
  }

  .row .col-md-3 {
    padding: 0;
    margin: 0;
  }

  .row .col-md-9 {
    padding: 0 1rem;
    margin: 0;
  }

  .article-img {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    width: 100%;
    /*border: 1px solid black;*/
    padding: 1.2rem;
  }

  .travels-nav .article-title {
    font-size: 28px;
    color: #717171;
    text-align: left;
    margin: 1.2rem auto;
  }

  .travels-nav .article-nav {
    font-size: 16px;
    color: rgba(51, 51, 51, 0.72);
    text-align: left;
    position: relative;
    height: 6rem;
    width: 100%;
    overflow: hidden;
    /*white-space: nowrap;*/
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  /*nav-bottom*/
  .article-bottom {
    display: flex;
    width: 40%;
    right: 2%;
    bottom: 2%;
    position: absolute;
  }

  .article-bottom span {
    font-size: 14px;
    color: #999999;
    margin-right: 0.5rem;
  }

  .article-bottom span:first-child {
    flex: 2;
  }

  .article-bottom span:nth-child(2) {
    flex: 1;
  }

  .article-bottom span:last-child {
    flex: 1;
  }

  .article-bottom span i {
    margin-right: .5rem;
    font-size: 14px;
    color: cornflowerblue;
  }
</style>

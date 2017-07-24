<template>
  <div id="travels">
    <div>
      <div class="travel-top" style="width: 100%;position: relative">
        <div class="top-name">游记列表</div>
        <div class="top-nav">
          <div class="top-item" style="width: 5rem;">
            <span>{{travlesNum}}</span>
            </br>
            <span>游记</span>
          </div>
          <div class="top-item">
            <span>{{readPeopleNum}}</span></br>
            <span>总阅读人数</span>
          </div>
        </div>
      </div>
    </div>


    <div class="travels-nav" style="clear: both">
      <paginate-list ref="list" certainList="post" :certainUser="{author: info._id}"
                     select="photo title intro visited footprint favor_count modifiedDate" :perPage="1">
        <template scope="item" slot="list-item">
          <travels-component :item="item"></travels-component>
        </template>
        <template slot="no-content">
          <p>No content</p>
        </template>
        <template slot="pager" scope="pager">
          <paging :page="pager.page" :per-page="pager.perPage" :total="pager.total" :pages="pager.pages"
                  @switch="$refs.list.changePage(pager.page+$event)"
          ></paging>
        </template>
      </paginate-list>
      <!--<paging></paging>-->
    </div>

  </div>

</template>

<script>
  import Paging from '../Bottom/Paging.vue'
  import TravelsComponent from '../Right/MyTravels/travelsComponent.vue'
  import PaginateList from '../../mixins/PaginateList.vue'
  export default {
    components: {
      Paging,
      TravelsComponent,
      PaginateList
    },
    props: {
      info: Object
    },
    data () {
      return {
        travlesNum: 10,
        readPeopleNum: 666,
        articleList: [
          {
            link: '/manage-info',
            img: '/static/images/person/travels/1.jpg',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '1',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: '/static/images/person/travels/2.jpg',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '2',
            place: '天涯海角',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: '/static/images/person/travels/3.jpg',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '3',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: '/static/images/person/travels/4.jpg',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '4',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: '/static/images/person/travels/5.jpg',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '5',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: '/static/images/person/travels/6.jpg',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '6',
            place: '爱琴海',
            saveNum: '999',
            heartNum: '666'
          },
          {
            link: '/manage-info',
            img: '/static/images/person/travels/7.jpg',
            title: '美丽的大沙漠',
            info: '哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼。哈喽，大噶猴呀～ 按照书里的情节，故事开始前要先交代主人公：我认识我妞儿是在高中时期，那年我们都15岁。以“妞儿”这个字眼来称呼彼此，是在20岁的时候，然后一直到现在，我们依然称呼',
            id: '7',
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
  /*top*/
  #travels .top-nav {
    display: flex;
    height: 4.2rem;
    padding: .3rem;
    float: right;
    /*border: 1px solid grey;*/
    margin-bottom: 1rem;
  }

  #travels .top-name {
    float: left;
    margin-left: 1rem;
    line-height: 3.5rem;
    font-size: 20px;
    color: rgba(76, 175, 80, 0.69);
  }

  #travels .top-item {
    height: 100%;
    font-size: 14px;
    color: #717171;
    border-right: 1px inset #eee;
  }

  #travels .top-item:last-child {
    border: none;
    width: 8rem;
  }

  #travels .btn-warning {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #f0ad4e;
    font-size: 14px;
  }
</style>

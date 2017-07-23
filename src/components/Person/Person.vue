<template>
  <div id="per-nav">
    <div class="nav-top">
      <b-navbar toggleable type="inverse" variant="success">
        <b-nav is-nav-bar>
          <template v-if="link.path==='/person'" v-for="link in links">
            <template v-for="item in link.children">
              <b-nav-item :to="item.path">{{item.name}}</b-nav-item>
            </template>
          </template>
        </b-nav>
      </b-navbar>
      <p>{{$route.params.id}}</p>
      <!--<ul>-->
      <!--<li style="display: inline-block;width: 6rem;" v-for="item in list">-->
      <!--{{item.name}}-->
      <!--</li>-->
      <!--</ul>-->
    </div>
    <div class="center-nav">
      <div class="nav-left">
        <per-panel class="per-panel"></per-panel>
        <my-group class="group-panel"></my-group>
        <my-concern class="concern-panel"></my-concern>
        <message-board class="message-panel"></message-board>
      </div>
      <div class="nav-right">
        <router-view></router-view>
      </div>

    </div>
  </div>

</template>

<script>
  import PerPanel from './Left/PersonPanel.vue'
  import MyGroup from './Left/MyGroup.vue'
  import MyConcern from './Left/MyFans.vue'
  import MessageBoard from './Left/MessageBoard.vue'
  import {links} from '../../router/index.js'
  export default {
    components: {
      PerPanel,
      MyGroup,
      MyConcern,
      MessageBoard
    },
    data () {
      return {
        links: links,
        //        list: [
        //          {name: `我的窝`, link: 'MyNest'},
        //          {name: '我的游记', link: 'MyTravels'},
        //          {name: '我的点评', link: 'MyComments'},
        //          {name: '我的相册', link: 'MyAlbum'}
        //        ]
        // Left
        // personpanel
        name: 'Moon',
        characterList: ['爱读书', '爱旅行', '爱美食'],
        rank: 'Lv.1',
        signature: '',
        isShow: true,
        isWriteShow: false,
        isSignShow: false,
        concernNum: 20,
        fansNum: 80,
        saveNum: 18,
        // myfans
        fansList: [
          {img: '/static/images/person/weixin.png', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/sina.png', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/weixin.png', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/sina.png', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/weixin.png', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/sina.png', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/weixin.png', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/sina.png', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/QQspace.png', name: 'QQ空间', link: 'manage-info'}
        ],
        // mygroup
        groupList: [
          {img: '/static/images/person/person.jpeg', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/person.jpeg', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/person.jpeg', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/person.jpeg', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/person.jpeg', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/person.jpeg', name: 'QQ空间', link: 'manage-info'}
        ],
        // messageBoard
        leaveMessage: '',
        message: [
          {
            name: 'moon-xiao',
            img: '/static/images/person/weixin.png',
            time: '2017-08-11 01:22:22',
            info: 'sfdghjdghdsjhmgftgdgfbgnbbvcadsfghjdaxdfsghdasfghdhgfsmfnmd'
          },
          {
            name: 'moon-xiao',
            img: '/static/images/person/weixin.png',
            time: '2017-08-11 01:22:22',
            info: 'sfdghjdghdsjhmgfdhgfsmfnmd'
          },
          {
            name: 'moon-xiao',
            img: '/static/images/person/weixin.png',
            time: '2017-08-11 01:22:22',
            info: 'sfdghjdghdsjhmgfdhgfsmfnmd'
          },
          {
            name: 'moon-xiao',
            img: '/static/images/person/weixin.png',
            time: '2017-08-11 01:22:22',
            info: 'sfdghjdghdsjhmgfdhgfsmfnmd'
          }
        ],
        // ManageInfo
        infoFinish: '',
        // ManageDetail
        mName: '',
        mSex: '',
        mCity: '',
        mBirth: '',
        mIntro: '',
        // ManagePhoto
        mImg: '',
        // ManageSet
        weixin: '',
        sina: '',
        // ManageSafe
        mPhone: '',
        mEmail: '',
        mPass: '',
        // ManagePurse
        money: '',
        vMoney: '',
        // MyTravels
        travlesNum: 10,
        readPeopleNum: 666,
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
        ],
        // MyAlbum
        albumPageNum: 0,
        albumList: [
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: '广袤大沙漠',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '1'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/1',
            title: 'Skulls are nice2',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '2'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/2',
            title: 'Skulls are nice3',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '3'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/3',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '4'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/0',
            title: 'Skulls are nice1',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '5'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/1',
            title: 'Skulls are nice2',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '6'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/2',
            title: 'Skulls are nice3',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '7'
          },
          {
            img: 'http://placeskull.com/200/200/ABABAB/-1/3',
            title: 'Skulls are nice4',
            detail: '浩瀚的星空，一望无垠的金色细沙，加上一群浪到飞起的驴友~~~',
            id: '8'
          }],
        // createAlbum
        newAlbumName: '',
        newAlbumImgList: '',
        newAlbumInfo: ''
        // create
      }
    }
  }
</script>

<!-- tabs.vue -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #per-nav {
    margin-top: 0;
    min-width: 1200px;
    color: black;
    background: white;
  }

  #per-nav .nav-top {
    height: 3rem;
    width: 100%;
    border: 1px solid lightgray;
    background-color: cornflowerblue;
    z-index: 1;
  }

  /*navbar*/
  #per-nav .navbar {
    z-index: 1;
    font-size: 15px;
  }

  #per-nav .navbar-nav {
    margin-left: 22.4rem;
  }

  #per-nav .bg-success {
    background-color: #5f9afa !important;
  }

  #per-nav .navbar .nav.navbar-nav li > a {
    position: relative;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    color: white;
    -webkit-transition: 0.5s background-color;
    transition: 0.5s background-color;
  }

  #per-nav .navbar .nav.navbar-nav li > a.active {
    background-color: #5f9afa !important;
  }

  /*nav*/
  #per-nav .center-nav {
    display: flex;
    margin-top: 60px;
    padding: 0 1.8rem;
    background: white;
  }

  /*nav-left*/
  #per-nav .center-nav .nav-left {
    /*border: 1px inset #94c0fa;*/
    box-shadow: 0 0 0.2rem #eee;
    flex: 1;
    z-index: 10;
  }

  #per-nav .center-nav .nav-left .per-panel {
    margin: -6rem 1rem 0;
    padding: 0 .5rem;
  }

  #per-nav .center-nav .nav-left .group-panel {
    margin: 2rem 1.5rem 0;
    padding: 0 .3rem;
  }

  #per-nav .center-nav .nav-left .concern-panel {
    margin: 2rem 1.5rem 0;
    padding: 0 .3rem;
  }

  #per-nav .center-nav .nav-left .message-panel {
    margin: 2rem 1.5rem 0;
    padding: 0 .3rem;
  }

  #per-nav .center-nav .nav-right {
    flex: 4;
    box-shadow: 0 0 0.2rem #eee;
    margin-left: 1rem;
    padding: 1.3rem 1.5rem;
  }
</style>

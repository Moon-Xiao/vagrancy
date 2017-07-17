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
      <!--<ul>-->
      <!--<li style="display: inline-block;width: 6rem;" v-for="item in list">-->
      <!--{{item.name}}-->
      <!--</li>-->
      <!--</ul>-->
    </div>
    <div class="nav">
      <div class="nav-left">
        <per-panel class="per-panel"></per-panel>
        <my-group class="group-panel"></my-group>
        <my-concern class="concern-panel"></my-concern>
      </div>
      <div class="nav-right">
        <router-view></router-view>
      </div>

    </div>
  </div>
  </div>

  </div>
</template>

<script>
  import PerPanel from './Left/PersonPanel.vue'
  import MyGroup from './Left/MyGroup.vue'
  import MyConcern from './Left/MyFans.vue'
  import {links} from '../../router/index.js'
  export default {
    components: {
      PerPanel,
      MyGroup,
      MyConcern
    },
    data () {
      return {
        links: links,
        list: [
          {name: '我的窝', link: 'MyNest'},
          {name: '我的游记', link: 'MyTravels'},
          {name: '我的点评', link: 'MyComments'},
          {name: '我的相册', link: 'MyAlbum'}
        ]
      }
    },
    methods: {}
  }
</script>

<!-- tabs.vue -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    color: black;
  }
  #per-nav {
    margin-top: 0;
    min-width: 1200px;
  }

  .nav-top {
    height: 3rem;
    width: 100%;
    border: 1px solid lightgray;
    background-color: cornflowerblue;
    z-index: 1;
  }
  /*navbar*/
  #per-nav .navbar{
    z-index: 1;
  }
  #per-nav .navbar-nav {
    margin-left: 17rem;
  }
  #per-nav .bg-success{
    background-color: #5f9afa !important;
  }
  #per-nav .navbar .nav.navbar-nav li > a {
    position: relative;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    color: black;
    -webkit-transition: 0.5s background-color;
    transition: 0.5s background-color;
  }
  #per-nav .navbar .nav.navbar-nav li > a.active{
    background-color: #5f9afa !important;
  }
  /*nav*/
  .nav {
    display: flex;
    margin-top: 60px;
  }
/*nav-left*/
  .nav-left {
    border: 1px solid lightgray;
    flex: 1;
    z-index:10;
  }

  .per-panel {
    margin: -6rem auto 0;
    padding: 0 .5rem;
  }

  .group-panel{
    margin: 3rem auto 0;
    padding: 0 .5rem;
  }

  .concern-panel{
    margin: 3rem auto 0;
    padding: 0 .5rem;
  }
  .nav-right {
    flex: 4;
    border: 1px solid lightgray;
  }
</style>

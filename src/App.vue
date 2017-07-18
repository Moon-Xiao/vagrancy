<template>
  <div id="app" style="padding-top: 60px">
    <b-navbar fixed="top" toggleable type="inverse">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="#">
        <img src="../static/images/logo.png" alt="datas logo" class="navbar-logo">
      </b-link>

      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <template v-for="link in links" v-if="link.name">
            <b-nav-item v-if="!link.dropdown" :to="link.path">{{link.name}}</b-nav-item>
            <b-nav-item-dropdown v-else :text="link.name" :to="link.path">
              <b-dropdown-item v-for="item in link.dropdown" :to="item.path">{{item.name}}</b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
        </b-nav>

        <b-nav is-nav-bar class="ml-auto">

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item to="#">EN</b-dropdown-item>
            <b-dropdown-item to="#">ES</b-dropdown-item>
            <b-dropdown-item to="#">RU</b-dropdown-item>
            <b-dropdown-item to="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>

            <!-- Using button-content slot -->
            <template slot="button-content">
              <span style="font-weight: bold;">User</span>
            </template>

            <b-dropdown-item to="#">Profile</b-dropdown-item>
            <b-dropdown-item to="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>
      </b-collapse>
    </b-navbar>
    <!-- navbar.vue -->
    <router-view></router-view>
    <div class="footer">
      <div class="container row">
        <div class="col-md-3">
          <h5>中国领先的自由行服务平台</h5>
          <div>覆盖全球200多个国家和地区<br/>
            100,000,000 位旅行者<br/>
            920,000 家国际酒店<br/>
            21,000,000 条真实点评<br/>
            382,000,000 次攻略下载<br/>
            中国旅游行业第一部“玩法”
          </div>
        </div>
        <div class="col-md-3">
          <h5>关于我们</h5>
          <div>
            关于蚂蜂窝<br/>
            网络信息侵权通知指引<br/>
            隐私政策<br/>
            服务协议<br/>
            联系我们<br/>
            加入蚂蜂窝
          </div>
        </div>

        <div class="col-md-3">
          <h5>旅行服务</h5>
          <div>旅游攻略
            酒店预订 旅游特价<br/>
            国际租车 旅游问答<br/>
            旅游保险 旅游指南<br/>
            订火车票 旅游资讯<br/>
            A全球供应商入驻<br/>
            关注我们
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {links} from './router/index.js'
  export default {
    name: 'app',
    data () {
      return {
        links: links
      }
    }
  }
</script>
<style>
  #app {
    min-width: 800px;
  }

  .section {
    padding: 2.5em 0 0 0;
  }

  #app .navbar {
    z-index: 50;
  }

  #app ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: dimgray;
  }

  #app ul.inline-ul > li {
    display: inline-block;
    margin: 10px;
  }

  #app a {
    text-decoration: none;
  }

  #app .subtitle {
    margin-top: 14px;
    height: 48px;
    font-size: 16px;
    font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
    overflow: hidden;
  }

  article, aside, blockquote, body, button, code, dd, details, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, input, legend, li, menu, nav, ol, p, pre, section, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    outline: none;
  }

  .box-shadow-container {
    padding: 2em 2em 0 2em;
    background-color: #fff;
    box-shadow: 0px 1px 12px 0px rgba(50, 50, 50, 0.18);
  }
</style>
<style>
  #app {
    font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1c4587;
    /*margin-top: 60px;*/
  }

  .navbar {
    padding: 0;
    border: none;
    background-color: #f8f8f8;
    z-index: 10000;
    -webkit-transition: background-color 0.5s linear;
    transition: background-color 0.5s linear;
    height: 60px;
  }

  .navbar-bg {
    background-color: rgba(41, 60, 85, 0.4);
  }

  .navbar .navbar-logo {
    height: 35px;
    margin-top: -6px;
    margin-left: -2px;
  }

  .navbar .nav.navbar-nav li > a {
    position: relative;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    color: #1c4587;
    -webkit-transition: 0.5s background-color;
    transition: 0.5s background-color;
  }

  .navbar .navbar-nav li ul a.nav-link:before {
    display: none;
  }

  .navbar .navbar-nav li a.nav-link:hover:before,
  .navbar .navbar-nav li a.nav-link:focus:before {
    left: 0;
    right: 0;
  }

  @media only screen and (min-width: 768px ) {
    .navbar .navbar-nav li a.nav-link:before {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      top: 0;
      background: #ec971f;
      height: 4px;
      -webkit-transition-property: left, right;
      transition-property: left, right;
      -webkit-transition-duration: .3s;
      transition-duration: .3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
  }

  .navbar .nav.navbar-nav .nav-item:hover .nav-link {
    color: #ec971f;
    -webkit-transition: 0.5s background-color;
    transition: 0.5s background-color;
  }

  .navbar .nav.navbar-nav .nav-item:hover .nav-link.active {
    color: #f8f8f8;
  }

  .navbar .nav.navbar-nav li > a.active {

    box-sizing: border-box;
    color: #f8f8f8;
    background-color: #ec971f;
    -webkit-transition: 0.5s background-color;
    transition: 0.5s background-color;
  }

  .dropdown-menu {
    margin: 0;
    border: 0;
  }

  .footer {
    font-size: 10px;
    background-color: #3c3c3c;
    color: #c2c2c2;
  }

  .footer .row {
    margin: 0 auto;
    padding: 30px 0;
    text-align: left;
  }

  .footer h5 {
    font-size: 18px;
  }
</style>

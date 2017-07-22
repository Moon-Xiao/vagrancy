<template>
  <div id="info">
    <b-list-group class="info-left">
      <template v-if="link.path==='/manage-info'" v-for="link in links">
        <template v-for="item in link.children">
          <b-list-group-item :to="item.path" class="list-group-item" center>
            <div>
              <i :class="'fa fa-'+item.icon"></i>
              <span>{{item.name}}</span>
            </div>
          </b-list-group-item>
        </template>
      </template>
    </b-list-group>

    <!-- list-group.vue -->

    <div class="info-right">
      <div class="right-top">
        <span>{{$route.name}}</span>
        <span style="font-size: 15px">资料完善度</span>
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" :style="'width: '+infoFinish" :aria-valuenow="infoFinish"
               aria-valuemin="0" aria-valuemax="100">{{infoFinish}}
          </div>
        </div>
      </div>
      <hr>
      <!--<div class="right-top">-->
      <!--<h3>{{$route.name}}</h3>-->
      <!--<p>资料完善度</p>-->
      <!--<p>进度条</p>-->
      <!--</div>-->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import {links} from '../../router/index.js'
  export default {
    components: {},
    data () {
      return {
        links: links,
        infoFinish: '90%'
      }
    }
  }
</script>
<style>
  #info {
    display: flex;
    background-color:white;
    font-size: 18px;
    min-width:1200px;
  }

  #info .info-left {
    flex: 1;
    padding: 2rem 1rem;
    margin-top: 0.25rem;
  }

  #info .info-left .list-group-item {
    margin: 0.2rem;
    border-radius: .25rem;
  }

  #info .info-left .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #0275d8;
    border-color: #0275d8;
  }

  #info .info-left .list-group-item-action {
    width: 100%;
    color: #717171;
  }

  #info .info-left .list-group-item > div {
    margin-left: 1rem;
  }

  #info .info-left i {
    margin-right: 1rem;
  }

  #info .info-right {
    flex: 4;
    padding: 1rem 2rem;
  }

  #info .info-right .right-top {
    padding: 1rem;
    text-align: left;
    color: black;
  }

  #info .info-right .right-top span {
    display: inline-block;
  }

  #info .info-right .right-top span:first-child {
    font-size: 28px;
    margin-right: 0.8rem;
  }

  #info .info-right .right-top span:nth-child(2) {
    margin-right: 0.5rem;
    color: #717171;
  }

  #info .info-right .right-top .progress {
    display: inline-block;
    width: 20%;
  }

  #info .info-right .right-top > h3 {
    flex: 1;
  }

  #info .info-right .right-top p {
    flex: 1;
  }
</style>

<template>
  <div id="per-nav">
    <div class="nav-top">
      <b-navbar toggleable type="inverse" variant="success">
        <b-nav is-nav-bar>
        </b-nav>
      </b-navbar>
    </div>

    <item class="center-nav" certain-list="user" :certain-id="$route.params.id">
      <template scope="item" slot="item">
        <div class="nav-left">
          <per-panel class="per-panel"  :info="item.value"></per-panel>
          <my-group class="group-panel" :info="item.value"></my-group>
          <message-board class="message-panel"></message-board>
        </div>
        <div class="nav-right">
          <travels  :info="item.value"></travels>
        </div>
      </template>
    </item>

    <!--<div class="center-nav">-->
      <!--<div class="nav-left">-->
        <!--<per-panel class="per-panel"></per-panel>-->
        <!--<my-group class="group-panel"></my-group>-->
        <!--<message-board class="message-panel"></message-board>-->
      <!--</div>-->
      <!--<div class="nav-right">-->
        <!--<travels></travels>-->
      <!--</div>-->
    <!--</div>-->

  </div>

</template>

<script>
  import PerPanel from './Others/PersonPanel.vue'
  import MyGroup from './Others/MyGroup.vue'
  import MessageBoard from './Others/MessageBoard.vue'
  import Travels from './Others/travels.vue'
  import Item from '../mixins/Item.vue'
  export default {
    components: {
      PerPanel,
      MyGroup,
      MessageBoard,
      Travels,
      Item
    },
    data () {
      return {}
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

<template>
  <div>
    <store-common-top></store-common-top>
    <div class="others-nav">
      <template v-if="link.path==='/stores'" v-for="link in links">
        <template v-if="item.name!==''" v-for="(item,index) in link.children">
          <div @mouseenter="selected=index+1" @mouseleave="selected=2"
               :class="['barnav-item',{active:selected===index+1}]">
            <router-link class="barnav-item-link" :to="item.path">{{item.name}}</router-link>
          </div>
        </template>
      </template>
    </div>
    <div class="fli-hotel-container">
      <store-type-choose @change-label="label=$event"></store-type-choose>
      <layout>
        <store-lists-left slot="left-content" :label="label"></store-lists-left>
        <store-lists-right slot="right-sidebar" class="store-right" v-if="showRight"
                           @close="showRight = false"></store-lists-right>
      </layout>
    </div>
  </div>
</template>

<script>
  import Layout from '../common/Layout.vue'
  import StoreCommonTop from './StoreCommonTop.vue'
  import StoreTypeChoose from './StoreTypeChoose.vue'
  import StoreListsLeft from './StoreListsLeft.vue'
  import StoreListsRight from './StoreListsRight.vue'
  import {links} from '../../router/index.js'

  export default {
    components: {
      Layout,
      StoreCommonTop,
      StoreTypeChoose,
      StoreListsLeft,
      StoreListsRight
    },
    data () {
      return {
        selected: 0,
        links: links,
        showRight: true,
        label: undefined
      }
    }
  }
</script>
<style>
  .others-nav {
    height: 4rem;
    width: 100%;
    border-bottom: solid 2px #00b081;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1.3rem 3.5rem 0 3rem;
    background-color: white;
  }

  .others-nav .barnav-item {
    flex: 1;
    font-size: 1.1rem;
    height: 100%;
  }

  .others-nav .active {
    color: #00b081;
    border-bottom: solid 2px #00b081;
  }

  .others-nav .barnav-item .barnav-item-link {
    color: #232323;
  }

  .others-nav .barnav-item .barnav-item-link:hover {
    color: #00b081;
  }

  .fli-hotel-container {
    background-color: rgb(245, 245, 245);
  }

  .store-right {
    padding: 4.9rem 2rem 1rem 1.2rem;
  }
</style>

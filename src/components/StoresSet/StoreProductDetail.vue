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
    <item certain-list="product" :certain-id="$route.params.id">
      <template slot="item" scope="item">
        <product-brief :productDetail="item.value"></product-brief>
        <product-intro-type :productDetail="item.value" @choosen-changed=""></product-intro-type>
        <product-detail :productDetail="item.value"></product-detail>
      </template>
    </item>

  </div>

</template>

<script>
  import StoreCommonTop from './StoreCommonTop.vue'
  import {links} from '../../router/index.js'
  import ProductBrief from './Product/ProductBrief.vue'
  import ProductIntroType from './Product/ProductIntroType.vue'
  import ProductDetail from './Product/ProductDetail.vue'
  import Item from '../mixins/Item.vue'
  export default {
    components: {
      StoreCommonTop,
      ProductBrief,
      ProductIntroType,
      ProductDetail,
      Item
    },
    data () {
      return {
        selected: 0,
        links: links,
        product: {
          label: '机票',
          description: '香港/澳门直飞帕劳5-6天往返含税机票(秒杀+暑期直降2千元+太平洋优质包机航空+可订制酒店）',
          src: '/static/images/store_temp/hongkong.jpg',
          price: '1999',
          travelTime: '2017/05-2017/09',
          soldNum: '134',
          id: '92536',
          departures: [
            {
              name: '上海'
            },
            {
              name: '北京'
            }
          ],
          days: [
            {
              time: '4'
            },
            {
              time: '7'
            }
          ],
          airplaneCompanys: [
            {
              name: '吉祥航空'
            },
            {
              name: '中国航空+电话卡'
            },
            {
              name: '吉祥航空+随身wifi+不包含电话卡'
            },
            {
              name: '中国航空'
            },
            {
              name: '吉祥航空'
            },
            {
              name: '中国航空'
            }
          ],
          departureDates: [
            {
              des: '2017/8/13',
              price: '3398'
            },
            {
              des: '2017/8/27',
              price: '3098'
            }
          ],
          journal: [
            {
              journalSrc: '/static/images/store_temp/journal1.png'
            },
            {
              journalSrc: '/static/images/store_temp/journal2.png'
            }
          ]
        }
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
</style>

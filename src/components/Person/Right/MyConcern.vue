<template>
  <div id="concern">
    <paginate-list class-name="row" certainList="user" :certainRef="{id: userInfo._id, field: 'follow'}"
                   select="avatar nickname level intro">
      <template slot="list-item" scope="item">
        <div class="col-4" style="cursor: pointer">
          <router-link :to="'/others/'+item.value._id">
            <div class="concern-card" :style="'background-color:'+colors[item.index%colors.length]">
              <div v-if="item.value.avatar" class="card-icon"
                   :style="`background-image:url('${baseUrl}/${item.value.avatar.path}')`">
              </div>
              <div class="card-info" style="border-top-right-radius:0.3rem ">
                <div class="info-items">
                  <div class="info-item"><span>姓名：</span><span>{{item.value.nickname}}</span></div>
                  <div class="info-item"><span>等级：</span><span>{{item.value.level}}</span></div>
                  <div class="info-item"><span>个性：</span><span>{{item.value.intro}}</span></div>
                  <!--<div style="color: #999999;font-size: 14px; padding-top:0.3rem;padding-bottom: 0.6rem">你们共同关注了{{item.sameFansNum}}个对象</div>-->
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </paginate-list>
  </div>
</template>

<script>
  import PaginateList from '../../mixins/PaginateList.vue'
  export default {
    components: {
      PaginateList
    },
    data  () {
      return {
        colors: ['rgba(33, 150, 243, 0.29)', 'rgba(76, 175, 80, 0.35)', 'rgba(0, 0, 255, 0.17)'],
        concernItems: [
          {
            img: '/static/images/person/weixin.png',
            name: 'Moon-Xiao',
            rate: 'Lv.1',
            tip: '两次元逗比',
            sameFansNum: '100'
          },
          {img: '/static/images/person/weixin.png', name: '', rate: '', tipList: [], sameFansNum: ''},
          {img: '/static/images/person/weixin.png', name: '', rate: '', tipList: [], sameFansNum: ''},
          {img: '/static/images/person/weixin.png', name: '', rate: '', tipList: [], sameFansNum: ''},
          {
            img: '/static/images/person/weixin.png',
            name: '',
            rate: '',
            tipList: [],
            sameFansNum: ''
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style>
  #concern {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  #concern .row {
    margin: 0;
    padding: 0;
  }

  #concern .row .col-4 {
    margin: 0;
    padding: 1rem;
  }

  #concern .row .concern-card {
    height: 10rem;
    width: 100%;
    border-radius: 0.3rem;
  }

  #concern .row .concern-card .card-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: absolute;
    left: -0.3rem;
    top: -0.3rem;
    z-index: 2;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.12), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 20px 0 rgba(0, 0, 0, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.6);
  }

  #concern .row .concern-card .card-info {
    background-color: #eee;
    width: 100%;
    vertical-align: middle;
    box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  }

  #concern .row .concern-card .card-info .info-items {
    font-size: 16px;
    color: #717171;
    background-color: #fcfcfc;
    border-top-right-radius: 0.3rem;
    padding-top: 0.8rem;
    /*border: 1px solid #eeeeee;*/
  }

  #concern .row .concern-card .card-info .info-items .info-item {
    padding: 0.3rem 0;
    text-align: left;
    margin-left: 3rem;
  }
</style>

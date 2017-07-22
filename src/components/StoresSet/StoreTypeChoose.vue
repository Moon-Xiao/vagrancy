<template>
  <div class="store-type-choose-container">
    <div class="type-choose">
      <div class="type-choose-nav">
        <div @click="selected=index" :class="['choose-nav-item',{active:selected===index}]"
             v-for="(idistinct,index) in distincts">
          <i :class="'fa fa-'+idistinct.icon"></i>
          {{idistinct.title}}
        </div>
      </div>
      <div class="types-div">
        <div class="types-line">
          <span class="fixed-type">产品类型</span>
          <span @click="choosen1=index+1" v-for="(item,index) in distincts[selected].types"
                :class="['type-item',{active:choosen1===index+1}]">{{item.name}}</span>
        </div>
        <div class="types-line">
          <span class="fixed-type">出发地</span>
          <span @click="choosen2=index+1" v-for="(item,index) in distincts[selected].depatures"
                :class="['type-item',{active:choosen2===index+1}]">{{item.name}}</span>
        </div>
        <div class="types-line">
          <span class="fixed-type">目的地</span>
          <span @click="choosen3=index+1" v-for="(item,index) in distincts[selected].destinations"
                :class="['type-item',{active:choosen3===index+1}]">{{item.name}}</span>
        </div>
        <div class="types-line">
          <span class="fixed-type">旅行时间</span>
          <span @click="choosen4=index+1" v-for="(item,index) in distincts[selected].travelTimes"
                :class="['type-item',{active:choosen4===index+1}]">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 0,
        choosen1: 1,
        choosen2: 1,
        choosen3: 1,
        choosen4: 1,
        distincts: [
          {
            title: '机酒自由行',
            icon: 'plane',
            types: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '自由行',
                label: 'free'
              },
              {
                name: '机票',
                label: 'flight'
              },
              {
                name: '酒店',
                label: 'hotel'
              }
            ],
            depatures: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '北京/天津',
                label: 'bt'
              },
              {
                name: '上海/杭州',
                label: 'sh'
              },
              {
                name: '成都/重庆',
                label: 'cc'
              },
              {
                name: '广州/深圳',
                label: 'gs'
              }
            ],
            destinations: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '泰国',
                label: 'Tailand'
              },
              {
                name: '日本',
                label: 'Japan'
              },
              {
                name: '中国',
                label: 'China'
              },
              {
                name: '马尔代夫',
                label: 'Maldives'
              }
            ],
            travelTimes: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '八月',
                label: 'aug'
              },
              {
                name: '九月',
                label: 'sem'
              },
              {
                name: '十月',
                label: 'oct'
              }
            ]

          },
          {
            title: '当地玩乐',
            icon: 'heart',
            types: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '自由行',
                label: 'free'
              },
              {
                name: '机票',
                label: 'flight'
              },
              {
                name: '酒店',
                label: 'hotel'
              }
            ],
            depatures: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '北京/天津',
                label: 'bt'
              },
              {
                name: '上海/杭州',
                label: 'sh'
              },
              {
                name: '成都/重庆',
                label: 'cc'
              },
              {
                name: '广州/深圳',
                label: 'gs'
              }
            ],
            destinations: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '泰国',
                label: 'Tailand'
              },
              {
                name: '日本',
                label: 'Japan'
              },
              {
                name: '中国',
                label: 'China'
              },
              {
                name: '马尔代夫',
                label: 'Maldives'
              }
            ],
            travelTimes: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '八月',
                label: 'aug'
              },
              {
                name: '九月',
                label: 'sem'
              },
              {
                name: '十月',
                label: 'oct'
              }
            ]

          },
          {
            title: '当地参团',
            icon: 'heart',
            types: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '自由行',
                label: 'free'
              },
              {
                name: '机票',
                label: 'flight'
              },
              {
                name: '酒店',
                label: 'hotel'
              }
            ],
            depatures: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '北京/天津',
                label: 'bt'
              },
              {
                name: '上海/杭州',
                label: 'sh'
              },
              {
                name: '成都/重庆',
                label: 'cc'
              },
              {
                name: '广州/深圳',
                label: 'gs'
              }
            ],
            destinations: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '泰国',
                label: 'Tailand'
              },
              {
                name: '日本',
                label: 'Japan'
              },
              {
                name: '中国',
                label: 'China'
              },
              {
                name: '马尔代夫',
                label: 'Maldives'
              }
            ],
            travelTimes: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '八月',
                label: 'aug'
              },
              {
                name: '九月',
                label: 'sem'
              },
              {
                name: '十月',
                label: 'oct'
              }
            ]

          },
          {
            title: '签证',
            icon: 'heart',
            types: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '自由行',
                label: 'free'
              },
              {
                name: '机票',
                label: 'flight'
              },
              {
                name: '酒店',
                label: 'hotel'
              }
            ],
            depatures: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '北京/天津',
                label: 'bt'
              },
              {
                name: '上海/杭州',
                label: 'sh'
              },
              {
                name: '成都/重庆',
                label: 'cc'
              },
              {
                name: '广州/深圳',
                label: 'gs'
              }
            ],
            destinations: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '泰国',
                label: 'Tailand'
              },
              {
                name: '日本',
                label: 'Japan'
              },
              {
                name: '中国',
                label: 'China'
              },
              {
                name: '马尔代夫',
                label: 'Maldives'
              }
            ],
            travelTimes: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '八月',
                label: 'aug'
              },
              {
                name: '九月',
                label: 'sem'
              },
              {
                name: '十月',
                label: 'oct'
              }
            ]

          },
          {
            title: 'WIFI/电话卡',
            icon: 'heart',
            types: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '自由行',
                label: 'free'
              },
              {
                name: '机票',
                label: 'flight'
              },
              {
                name: '酒店',
                label: 'hotel'
              }
            ],
            depatures: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '北京/天津',
                label: 'bt'
              },
              {
                name: '上海/杭州',
                label: 'sh'
              },
              {
                name: '成都/重庆',
                label: 'cc'
              },
              {
                name: '广州/深圳',
                label: 'gs'
              }
            ],
            destinations: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '泰国',
                label: 'Tailand'
              },
              {
                name: '日本',
                label: 'Japan'
              },
              {
                name: '中国',
                label: 'China'
              },
              {
                name: '马尔代夫',
                label: 'Maldives'
              }
            ],
            travelTimes: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '八月',
                label: 'aug'
              },
              {
                name: '九月',
                label: 'sem'
              },
              {
                name: '十月',
                label: 'oct'
              }
            ]

          },
          {
            title: '交通接送',
            icon: 'heart',
            types: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '自由行',
                label: 'free'
              },
              {
                name: '机票',
                label: 'flight'
              },
              {
                name: '酒店',
                label: 'hotel'
              }
            ],
            depatures: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '北京/天津',
                label: 'bt'
              },
              {
                name: '上海/杭州',
                label: 'sh'
              },
              {
                name: '成都/重庆',
                label: 'cc'
              },
              {
                name: '广州/深圳',
                label: 'gs'
              }
            ],
            destinations: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '泰国',
                label: 'Tailand'
              },
              {
                name: '日本',
                label: 'Japan'
              },
              {
                name: '中国',
                label: 'China'
              },
              {
                name: '马尔代夫',
                label: 'Maldives'
              }
            ],
            travelTimes: [
              {
                name: '全部',
                label: 'all'
              },
              {
                name: '八月',
                label: 'aug'
              },
              {
                name: '九月',
                label: 'sem'
              },
              {
                name: '十月',
                label: 'oct'
              }
            ]

          }
        ]
      }
    }
  }
</script>

<style>
  .store-type-choose-container {
    padding: 3rem 3.5rem 2rem 3.5rem;
  }

  .type-choose {
    height: 18rem;
    width: 100%;
    border: solid 1px rgb(200, 200, 200);
    background-color: white;
  }

  .type-choose .type-choose-nav {
    height: 3rem;
    width: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .type-choose .type-choose-nav .choose-nav-item {
    flex: 1;
    color: #505050;
    font-size: 1.1rem;
    padding: 0.7rem 0.8rem;
    border-bottom: solid 1px rgb(200, 200, 200);
    border-right: solid 1px rgb(200, 200, 200);
  }

  .type-choose .type-choose-nav .active {
    color: #00b081;
    border-bottom: none;
  }

  .types-div {
    height: 80%;
    width: inherit;
    margin-top: 0.8rem;
  }

  .types-div .types-line {
    height: 25%;
    padding: 0.8rem 1rem;
  }

  .types-div .types-line .fixed-type {
    float: left;
    font-size: 1rem;
    width: 10%;
    color: #313131;
  }

  .types-div .types-line .type-item {
    font-size: 1rem;
    padding: 0 0.8rem;
    float: left;
    color: rgb(100,100,100);
  }

  .types-div .types-line .active {
    color: white;
    background-color: #00b081;
  }

  .types-div .types-line .active:hover{
    color: white!important;
    background-color: #00b081!important;
  }

  .types-div .types-line .type-item:hover{
    color: #00b081;
  }
</style>

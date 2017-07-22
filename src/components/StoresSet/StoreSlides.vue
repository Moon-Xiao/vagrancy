<template>
  <div id="store-slides">
    <div class="store-home-category" id="homeCategory">
      <ul class="store-home-category-list">
        <li class="store-home-category-item" @mouseenter.stop="showDetail(index)" @mouseleave.stop="hideDetail"
            v-for="(item,index) in category">
          <i :class="'fa fa-'+item.icon" class="left-icon fa-fw"></i>
          <div class="right-part">
            <p class="item-title">{{item.place}}</p>
            <p class="item-subtitle">{{item.subplace}}</p>
          </div>
          <span>&gt;</span>
        </li>
      </ul>
    </div>
    <div v-if="category[showingIndex]" v-show="seen" class="category-detail">
      <div class="category-detail-content">
        <div class="row">
          <div class="col-md-6">
            <div class="detail-distinct">
              <div class="distinct-title">{{category[showingIndex].distinct1.title}}</div>
              <template v-for="place in category[showingIndex].distinct1.places" class="distinct-places">
                <div class="places-span">
                  <router-link to="/home">{{place.pcontent}}</router-link>
                </div>
              </template>
            </div>
            <div class="detail-distinct">
              <div class="distinct-title">{{category[showingIndex] && category[showingIndex].distinct2.title}}</div>
              <template v-for="place in category[showingIndex].distinct2.places" class="distinct-places">
                <div class="places-span">
                  <router-link to="/home">{{place.pcontent}}</router-link>
                </div>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-distinct">
              <div class="distinct-title">{{category[showingIndex].distinct3.title}}</div>
              <template v-for="place in category[showingIndex].distinct3.places" class="distinct-places">
                <div class="places-span">
                  <router-link to="/home">{{place.pcontent}}</router-link>
                </div>
              </template>
              <img class="imageAd" :src="category[showingIndex].imageAd"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        seen: false,
        category: [
          {
            place: '港澳台 国内',
            subplace: '香港 澳门 台湾 三亚',
            icon: 'leaf',
            distinct1: {
              title: '香港 澳门',
              places: [
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                }
              ]
            },
            distinct2: {
              title: '台湾',
              places: [
                {
                  hot: true,
                  pcontent: '台北',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '高雄',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '花莲',
                  plink: '/home'
                }
              ]
            },
            distinct3: {
              title: '国内',
              places: [
                {
                  hot: false,
                  pcontent: '三亚',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '厦门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '丽江',
                  plink: '/home'
                }
              ]
            },
            imageAd: '/static/images/store_temp/wanwan.jpg'
          },
          {
            place: '日本 韩国',
            subplace: '东京 大阪 冲绳 北海道',
            icon: 'university',
            distinct1: {
              title: '香港 澳门',
              places: [
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                }
              ]
            },
            distinct2: {
              title: '台湾',
              places: [
                {
                  hot: true,
                  pcontent: '台北',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '高雄',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '花莲',
                  plink: '/home'
                }
              ]
            },
            distinct3: {
              title: '国内',
              places: [
                {
                  hot: false,
                  pcontent: '三亚',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '厦门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '丽江',
                  plink: '/home'
                }
              ]
            },
            imageAd: '/static/images/store_temp/wanwan.jpg'
          },
          {
            place: '东南亚 南亚',
            subplace: '普吉 清迈 沙巴 巴厘岛 马尔代夫',
            icon: 'fire',
            distinct1: {
              title: '香港 澳门',
              places: [
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                }
              ]
            },
            distinct2: {
              title: '台湾',
              places: [
                {
                  hot: true,
                  pcontent: '台北',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '高雄',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '花莲',
                  plink: '/home'
                }
              ]
            },
            distinct3: {
              title: '国内',
              places: [
                {
                  hot: false,
                  pcontent: '三亚',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '厦门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '丽江',
                  plink: '/home'
                }
              ]
            },
            imageAd: '/static/images/store_temp/wanwan.jpg'
          },
          {
            place: '欧洲 美洲',
            subplace: '法国 意大利 土耳其 英国 荷兰',
            icon: 'globe',
            distinct1: {
              title: '香港 澳门',
              places: [
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                }
              ]
            },
            distinct2: {
              title: '台湾',
              places: [
                {
                  hot: true,
                  pcontent: '台北',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '高雄',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '花莲',
                  plink: '/home'
                }
              ]
            },
            distinct3: {
              title: '国内',
              places: [
                {
                  hot: false,
                  pcontent: '三亚',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '厦门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '丽江',
                  plink: '/home'
                }
              ]
            },
            imageAd: '/static/images/store_temp/wanwan.jpg'
          },
          {
            place: '澳新 中东非',
            subplace: '悉尼 新西兰 迪拜 肯尼亚',
            icon: 'futbol-o',
            distinct1: {
              title: '香港 澳门',
              places: [
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                }
              ]
            },
            distinct2: {
              title: '台湾',
              places: [
                {
                  hot: true,
                  pcontent: '台北',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '高雄',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '花莲',
                  plink: '/home'
                }
              ]
            },
            distinct3: {
              title: '国内',
              places: [
                {
                  hot: false,
                  pcontent: '三亚',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '厦门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '丽江',
                  plink: '/home'
                }
              ]
            },
            imageAd: '/static/images/store_temp/wanwan.jpg'
          },
          {
            place: '个性推荐',
            subplace: '私人定制 亲自 情侣 海岛游 购物',
            icon: 'star-half-o',
            distinct1: {
              title: '香港 澳门',
              places: [
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                }
              ]
            },
            distinct2: {
              title: '台湾',
              places: [
                {
                  hot: true,
                  pcontent: '台北',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '高雄',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '花莲',
                  plink: '/home'
                }
              ]
            },
            distinct3: {
              title: '国内',
              places: [
                {
                  hot: false,
                  pcontent: '三亚',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '厦门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '丽江',
                  plink: '/home'
                }
              ]
            },
            imageAd: '/static/images/store_temp/wanwan.jpg'
          },
          {
            place: '出行必备',
            subplace: 'WIFI 电话卡 接送机 保险',
            icon: 'wifi',
            distinct1: {
              title: '香港 澳门',
              places: [
                {
                  hot: false,
                  pcontent: '香港',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '澳门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '香港迪士尼',
                  plink: '/home'
                }
              ]
            },
            distinct2: {
              title: '台湾',
              places: [
                {
                  hot: true,
                  pcontent: '台北',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '高雄',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '花莲',
                  plink: '/home'
                }
              ]
            },
            distinct3: {
              title: '国内',
              places: [
                {
                  hot: false,
                  pcontent: '三亚',
                  plink: '/home'
                },
                {
                  hot: false,
                  pcontent: '厦门',
                  plink: '/home'
                },
                {
                  hot: true,
                  pcontent: '丽江',
                  plink: '/home'
                }
              ]
            },
            imageAd: '/static/images/store_temp/wanwan.jpg'
          }
        ],
        showingIndex: null
      }
    },
    methods: {
      showDetail: function (index) {
        this.seen = true
        this.showingIndex = index
      },
      hideDetail: function () {
        this.seen = false
      }
    }
  }
</script>

<style scoped>
  #store-slides {
    width: 100%;
    height: 26rem;
    background: url("/static/images/store_temp/slide.png") no-repeat;
    background-size: 120% 100%;
    background-position: center;
    padding: 0 4rem;
  }

  .left-icon {
    float: left;
    line-height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  .store-home-category {
    float: left;
    height: 100%;
    width: 22rem;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.8rem 0;
  }

  .right-part {
    float: left;
  }

  .right-part p {
    text-align: left;
  }

  .right-part .item-title {
    font-size: 1.15rem;
    color: white;
  }

  .right-part .item-subtitle {
    color: darkgray;
    font-size: 0.9rem;
  }

  .store-home-category-list {
    list-style: none;
    height: 100%;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .store-home-category-item {
    flex: 1;
    border-bottom: solid white 1px;
    padding: 0.3rem 0;
  }

  .store-home-category-item:last-child {
    border: none;
  }

  .store-home-category-item span {
    float: right;
    margin-right: 1rem;
    line-height: 3rem;
  }

  .store-home-category-item i {
    color: rgb(26, 175, 130);
  }

  .store-home-category-item:hover {
    background-color: white;
    color: black;
  }

  .store-home-category-item:hover .item-title {
    color: black;
  }

  .category-detail {
    height: 98.5%;
    width: 50%;
    padding: 1rem 1.5rem;
    float: left;
    background-color: white;
    margin: 0.2rem 0;
  }

  .category-detail-content {
    height: 100%;
    padding: 0.5rem 0.8rem;
  }

  .col-md-6 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .distinct-title {
    text-align: left;
    color: #323232;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 0.4rem 0.3rem;
    border-bottom: solid gainsboro 1px;
  }

  .places-span {
    padding: 0.2rem;
    float: left;
  }

  .imageAd {
    width: 100%;
  }

</style>

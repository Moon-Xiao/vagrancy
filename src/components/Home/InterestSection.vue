<template>
  <div class="section interest">
    <div class="wrapper">
      <h2>猜你感兴趣</h2>
      <div class="interest-inner">
        <ul class="inline-ul" style="width: 100%;">
          <li v-for="col in scenics">
            <div class="interest-item">
              <div class="img">
                <a>
                  <img :src="col.img" style="width: 100%">
                </a>
              </div>
              <div class="info">
                <router-link to="" class="none-d-a">
                  <div class="subtitle">
                    <p class="ellipsis">{{col.title}}</p>
                    <p class="ellipsis"><span>{{col.info}}</span></p>
                  </div>
                  <div class="bottom">
                    <span class="fr">{{col.count}}个人去过这里</span>
                    <span class="f14">{{col.city}}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Sticker from '../../../static/js/sticker.js'

  export default {
    components: {Sticker},
    data () {
      return {
        scenics: [
          {
            title: '蒂卡普湖',
            city: '新西兰城市',
            info: 'Lake tekapo',
            count: 9526,
            img: '/static/images/services1.jpg'
          },
          {
            title: '张弼士故居',
            city: '槟城景点',
            info: 'Cheong Fatt Tze Mansion',
            count: 9526,
            img: '/static/images/services2.jpg'
          },
          {
            title: '尼泊尔',
            city: '薇薇安在旅途',
            info: '在色彩的王国体味春天的气息',
            count: 9526,
            img: '/static/images/services3.jpg'
          },
          {
            title: '巴黎',
            city: '法国最大城市',
            info: '拍的就是这种Freestyle~',
            count: 9526,
            img: '/static/images/services4.jpg'
          },

          {
            title: '蒂卡普湖',
            city: '新西兰城市',
            info: 'Lake tekapo',
            count: 9526,
            img: '/static/images/services1.jpg'
          },
          {
            title: '张弼士故居',
            city: '槟城景点',
            info: 'Cheong Fatt Tze Mansion',
            count: 9526,
            img: '/static/images/services2.jpg'
          },
          {
            title: '尼泊尔',
            city: '薇薇安在旅途',
            info: '在色彩的王国体味春天的气息',
            count: 9526,
            img: '/static/images/services3.jpg'
          },
          {
            title: '巴黎',
            city: '法国最大城市',
            info: '拍的就是这种Freestyle~',
            count: 9526,
            img: '/static/images/services4.jpg'
          }

        ]
      }
    },
    mounted () {
      Sticker.init('.sticker')
    }

  }
</script>


<style scoped>

  .interest .wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .interest ul li .interest-item {
    border: 1px gainsboro solid;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  .interest ul li .interest-item .info {
    border: 1px solid #ececec;
    border-top: 0;
    padding: 0 18px;
    height: 114px;
    line-height: 24px;
    overflow: hidden;
  }

  .interest ul li .interest-item p.ellipsis {
    color: #222222;
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .interest-inner {
    margin: 20px auto;
  }

  @media (min-width: 480px ) {
    .inline-ul > li {
      width: 20%;
    }
  }

  @media (min-width: 960px) {
    .inline-ul > li {
      width: 23%;
    }
  }

  .interest ul li .interest-item .info .bottom {
    margin-top: 16px;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #636363;
  }

  .interest ul li .interest-item .info .bottom .fr {
    color: #959595;
  }

  .fr {
    float: right !important;
    font-size: 10px;
  }

  .f14 {
    color: #636363;
    max-width: 55%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

</style>

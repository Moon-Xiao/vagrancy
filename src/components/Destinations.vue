<template>
  <div id="destinations">
    <!--<destinations-banner></destinations-banner>-->
    <des-banner></des-banner>
    <des-hot-des :tab_title="'热门目的地'" :tabs="allDesTabs" class="des-tabs all-des-tabs">
      <ul v-for="(all,i) in allDesTabs" :slot="`content-${i}`" class="row" >
        <li v-for="sub in all.subtabs" class="all-sub-li row col-6">
          <a class="sub-title col-4">{{sub.subtitle}}</a>
          <div class="sub-list-ul col-8">
            <a v-for="list in sub.deslist" style="margin-right: 5px">{{list}}</a>
          </div>
        </li>
      </ul>
    </des-hot-des>
    <des-hot-des :tab_title="'当季推荐'" :tabs="monthsTabs" class="des-tabs months-des-tabs">
      <ul v-for="(all,i) in monthsTabs" :slot="`content-${i}`" class="row">
        <li v-for="sub in all.subtabs" class="all-sub-li row">
          <div class="sub-title">{{sub.subtitle}}</div>
          <img :src="sub.img"/>
        </li>
      </ul>
    </des-hot-des>
    <des-hot-des :tab_title="'主题精选'" :tabs="themesTabs" class="des-tabs months-des-tabs">
      <ul v-for="(all,i) in themesTabs" :slot="`content-${i}`" class="row">
        <li v-for="sub in all.subtabs" class="all-sub-li row">
          <div class="sub-title">{{sub.subtitle}}</div>
          <img :src="sub.img"/>
        </li>
      </ul>
    </des-hot-des>
  </div>
</template>
<script>
  import DestinationsBanner from './DestinationsSet/DesitinationsBanner.vue'
  import DesBanner from './DestinationsSet/DesBanner.vue'
  import DesHotDes from './DestinationsSet/DesHotDes.vue'
  export default{
    components: {
      DestinationsBanner,
      DesBanner,
      DesHotDes
    },
    data () {
      return {
        allDesTabs: [
          {
            title: '国内',
            subtabs: [
              {
                subtitle: '直辖市',
                deslist: ['北京', '上海', '重庆', '天津']
              },
              {
                subtitle: '港澳台',
                deslist: ['台北', '高雄', '台中', '澳门', '香港']
              },
              {
                subtitle: '东北 内蒙古',
                deslist: ['沈阳', '大连', '丹东', '盘锦', '呼伦贝尔', '阿尔山', '哈尔滨', '漠河', '雪乡']
              },
              {
                subtitle: '湖南 湖北',
                deslist: ['张家界', '凤凰', '郴州', '武汉', '恩施', '神农架']
              },
              {
                subtitle: '西藏 贵州',
                deslist: ['拉萨', '阿里', '黔东南', '镇远', '西江', '黄果树']
              },
              {
                subtitle: '海南 福建',
                deslist: ['三亚', '厦门', '鼓浪屿', '武夷山', '霞浦', '泉州']
              },
              {
                subtitle: '广东 广西',
                deslist: ['广州', '深圳', '珠海', '汕头', '桂林', '阳朔', '北海']
              }
            ]
          },
          {
            title: '亚洲',
            subtabs: [
              {
                subtitle: '日本',
                deslist: ['东京', '大阪', '京都', '冲绳', '北海道', '札幌', '奈良', '名古屋', '福冈', '神户']
              },
              {
                subtitle: '韩国',
                deslist: ['济州岛', '首尔', '釜山']
              },
              {
                subtitle: '泰国',
                deslist: ['普吉岛', '清迈', '曼谷', '苏梅岛', '甲米', '芭提雅', '象岛']
              },
              {
                subtitle: '新加坡 印尼 越南',
                deslist: ['新加坡', '巴厘岛', '民丹岛', '芽庄', '岘港', '美奈', '大叻']
              },
              {
                subtitle: '马来西亚 菲律宾',
                deslist: [' 长滩岛', '杜马盖地', '薄荷岛', '宿雾', '文莱']
              }
            ]
          },
          {
            title: '欧洲',
            subtabs: [
              {
                subtitle: '意大利',
                deslist: ['罗马', '威尼斯', '佛罗伦萨', '米兰', '五渔村']
              },
              {
                subtitle: '法国 瑞士',
                deslist: ['巴黎', '普罗旺斯', '卢塞恩', '苏黎世', '因特拉肯', '日内瓦']
              },
              {
                subtitle: '英国 爱尔兰',
                deslist: ['伦敦', '爱丁堡', '剑桥', '牛津', '约克', '都柏林']
              },
              {
                subtitle: '德国 奥地利',
                deslist: ['慕尼黑', '法兰克福', '柏林', '科隆', '福森', '维也纳', '哈尔施塔']
              },
              {
                subtitle: '希腊 土耳其',
                deslist: ['圣托里尼', '雅典', '伊斯坦布尔', '棉花堡', '卡帕多奇亚']
              },
              {
                subtitle: '俄罗斯',
                deslist: ['莫斯科 贝加尔湖 圣彼得堡 海参崴']
              },
              {
                subtitle: '荷兰 比利时',
                deslist: ['阿姆斯特丹 鹿特丹 羊角村 布鲁塞尔 布鲁日']
              },
              {
                subtitle: '欧洲其他',
                deslist: ['芬兰 挪威 丹麦 瑞典 塞尔维亚 克罗地亚']
              }
            ]
          },
          {
            title: '美洲',
            subtabs: [
              {
                subtitle: '美国',
                deslist: ['洛杉矶', '旧金山', '纽约', '塞班岛', '夏威夷', '西雅图', '华盛顿', '波士顿', '奥兰多', '迈阿密', '芝加哥', '阿拉斯加']
              },
              {
                subtitle: '美洲其他',
                deslist: ['加拿大', '巴西', '古巴', '墨西哥', '秘鲁']
              }
            ]
          }
        ],
        monthsTabs: [
          {
            title: '1月',
            subtabs: [
              {subtitle: 'amsterdam', img: '/static/images/des/amsterdam.jpg'},
              {subtitle: 'bali', img: '/static/images/des/bali.jpg'},
              {subtitle: 'barcelona', img: '/static/images/des/barcelona.jpg'},
              {subtitle: 'chiang-mai', img: '/static/images/des/chiang-mai.jpg'},
              {subtitle: 'dubai', img: '/static/images/des/dubai.jpg'},
              {subtitle: 'ko-samui', img: '/static/images/des/ko-samui.jpg'},
              {subtitle: 'kuala-lumpur', img: '/static/images/des/kuala-lumpur.jpg'},
              {subtitle: 'kyoto', img: '/static/images/des/kyoto.jpg'}
            ]
          },
          {
            title: '2月',
            subtabs: [
              {subtitle: 'nepal', img: '/static/images/des/nepal.png'},
              {subtitle: 'paris', img: '/static/images/des/paris.png'},
              {subtitle: 'san-francisco', img: '/static/images/des/san-francisco.png'},
              {subtitle: 'seoul', img: '/static/images/des/seoul.png'},
              {subtitle: 'los-angeles', img: '/static/images/des/los-angeles.png'},
              {subtitle: 'macau', img: '/static/images/des/macau.png'},
              {subtitle: 'maldives', img: '/static/images/des/maldives.png'},
              {subtitle: 'mauritius', img: '/static/images/des/mauritius.png'}
            ]
          },
          {
            title: '3月',
            subtabs: [
              {subtitle: 'seminyak', img: '/static/images/des/seminyak.jpg'},
              {subtitle: 'singapore', img: '/static/images/des/singapore.jpg'},
              {subtitle: 'boracay', img: '/static/images/des/boracay.png'},
              {subtitle: 'denpasar', img: '/static/images/des/denpasar.png'},
              {subtitle: 'hong-kong', img: '/static/images/des/hong-kong.png'},
              {subtitle: 'istanbul', img: '/static/images/des/istanbul.png'},
              {subtitle: 'kenya', img: '/static/images/des/kenya.png'},
              {subtitle: 'london', img: '/static/images/des/london.png'}
            ]
          },
          {
            title: '4月',
            subtabs: [
              {subtitle: 'phuket', img: '/static/images/des/phuket.jpg'},
              {subtitle: 'rome', img: '/static/images/des/rome.jpg'},
              {subtitle: 'boracay', img: '/static/images/des/boracay.png'},
              {subtitle: 'istanbul', img: '/static/images/des/istanbul.png'},
              {subtitle: 'kenya', img: '/static/images/des/kenya.png'},
              {subtitle: 'london', img: '/static/images/des/london.png'},
              {subtitle: 'denpasar', img: '/static/images/des/denpasar.png'},
              {subtitle: 'hong-kong', img: '/static/images/des/hong-kong.png'}
            ]
          },
          {
            title: '5月',
            subtabs: [
              {subtitle: 'amsterdam', img: '/static/images/des/amsterdam.jpg'},
              {subtitle: 'bali', img: '/static/images/des/bali.jpg'},
              {subtitle: 'barcelona', img: '/static/images/des/barcelona.jpg'},
              {subtitle: 'chiang-mai', img: '/static/images/des/chiang-mai.jpg'},
              {subtitle: 'dubai', img: '/static/images/des/dubai.jpg'},
              {subtitle: 'ko-samui', img: '/static/images/des/ko-samui.jpg'},
              {subtitle: 'kuala-lumpur', img: '/static/images/des/kuala-lumpur.jpg'},
              {subtitle: 'kyoto', img: '/static/images/des/kyoto.jpg'}
            ]
          },
          {
            title: '6月',
            subtabs: [
              {subtitle: 'nepal', img: '/static/images/des/nepal.png'},
              {subtitle: 'paris', img: '/static/images/des/paris.png'},
              {subtitle: 'san-francisco', img: '/static/images/des/san-francisco.png'},
              {subtitle: 'seoul', img: '/static/images/des/seoul.png'},
              {subtitle: 'los-angeles', img: '/static/images/des/los-angeles.png'},
              {subtitle: 'macau', img: '/static/images/des/macau.png'},
              {subtitle: 'maldives', img: '/static/images/des/maldives.png'},
              {subtitle: 'mauritius', img: '/static/images/des/mauritius.png'}
            ]
          },
          {
            title: '7月',
            subtabs: [
              {subtitle: 'seminyak', img: '/static/images/des/seminyak.jpg'},
              {subtitle: 'singapore', img: '/static/images/des/singapore.jpg'},
              {subtitle: 'boracay', img: '/static/images/des/boracay.png'},
              {subtitle: 'denpasar', img: '/static/images/des/denpasar.png'},
              {subtitle: 'hong-kong', img: '/static/images/des/hong-kong.png'},
              {subtitle: 'istanbul', img: '/static/images/des/istanbul.png'},
              {subtitle: 'kenya', img: '/static/images/des/kenya.png'},
              {subtitle: 'london', img: '/static/images/des/london.png'}
            ]
          },
          {
            title: '8月',
            subtabs: [
              {subtitle: 'phuket', img: '/static/images/des/phuket.jpg'},
              {subtitle: 'rome', img: '/static/images/des/rome.jpg'},
              {subtitle: 'boracay', img: '/static/images/des/boracay.png'},
              {subtitle: 'istanbul', img: '/static/images/des/istanbul.png'},
              {subtitle: 'kenya', img: '/static/images/des/kenya.png'},
              {subtitle: 'london', img: '/static/images/des/london.png'},
              {subtitle: 'denpasar', img: '/static/images/des/denpasar.png'},
              {subtitle: 'hong-kong', img: '/static/images/des/hong-kong.png'}
            ]
          },
          {
            title: '9月',
            subtabs: [
              {subtitle: 'amsterdam', img: '/static/images/des/amsterdam.jpg'},
              {subtitle: 'bali', img: '/static/images/des/bali.jpg'},
              {subtitle: 'barcelona', img: '/static/images/des/barcelona.jpg'},
              {subtitle: 'chiang-mai', img: '/static/images/des/chiang-mai.jpg'},
              {subtitle: 'dubai', img: '/static/images/des/dubai.jpg'},
              {subtitle: 'ko-samui', img: '/static/images/des/ko-samui.jpg'},
              {subtitle: 'kuala-lumpur', img: '/static/images/des/kuala-lumpur.jpg'},
              {subtitle: 'kyoto', img: '/static/images/des/kyoto.jpg'}
            ]
          },
          {
            title: '10月',
            subtabs: [
              {subtitle: 'nepal', img: '/static/images/des/nepal.png'},
              {subtitle: 'paris', img: '/static/images/des/paris.png'},
              {subtitle: 'san-francisco', img: '/static/images/des/san-francisco.png'},
              {subtitle: 'seoul', img: '/static/images/des/seoul.png'},
              {subtitle: 'los-angeles', img: '/static/images/des/los-angeles.png'},
              {subtitle: 'macau', img: '/static/images/des/macau.png'},
              {subtitle: 'maldives', img: '/static/images/des/maldives.png'},
              {subtitle: 'mauritius', img: '/static/images/des/mauritius.png'}
            ]
          },
          {
            title: '11月',
            subtabs: [
              {subtitle: 'seminyak', img: '/static/images/des/seminyak.jpg'},
              {subtitle: 'singapore', img: '/static/images/des/singapore.jpg'},
              {subtitle: 'boracay', img: '/static/images/des/boracay.png'},
              {subtitle: 'denpasar', img: '/static/images/des/denpasar.png'},
              {subtitle: 'hong-kong', img: '/static/images/des/hong-kong.png'},
              {subtitle: 'istanbul', img: '/static/images/des/istanbul.png'},
              {subtitle: 'kenya', img: '/static/images/des/kenya.png'},
              {subtitle: 'london', img: '/static/images/des/london.png'}
            ]
          },
          {
            title: '12月',
            subtabs: [
              {subtitle: 'phuket', img: '/static/images/des/phuket.jpg'},
              {subtitle: 'rome', img: '/static/images/des/rome.jpg'},
              {subtitle: 'boracay', img: '/static/images/des/boracay.png'},
              {subtitle: 'istanbul', img: '/static/images/des/istanbul.png'},
              {subtitle: 'kenya', img: '/static/images/des/kenya.png'},
              {subtitle: 'london', img: '/static/images/des/london.png'},
              {subtitle: 'denpasar', img: '/static/images/des/denpasar.png'},
              {subtitle: 'hong-kong', img: '/static/images/des/hong-kong.png'}
            ]
          }
        ],
        themesTabs: [
          {
            title: '摄影',
            subtabs: [
              {subtitle: 'amsterdam', img: '/static/images/des/amsterdam.jpg'},
              {subtitle: 'bali', img: '/static/images/des/bali.jpg'},
              {subtitle: 'barcelona', img: '/static/images/des/barcelona.jpg'},
              {subtitle: 'chiang-mai', img: '/static/images/des/chiang-mai.jpg'},
              {subtitle: 'dubai', img: '/static/images/des/dubai.jpg'},
              {subtitle: 'ko-samui', img: '/static/images/des/ko-samui.jpg'},
              {subtitle: 'kuala-lumpur', img: '/static/images/des/kuala-lumpur.jpg'},
              {subtitle: 'kyoto', img: '/static/images/des/kyoto.jpg'}
            ]
          },
          {
            title: '美食',
            subtabs: [
              {subtitle: 'nepal', img: '/static/images/des/nepal.png'},
              {subtitle: 'paris', img: '/static/images/des/paris.png'},
              {subtitle: 'san-francisco', img: '/static/images/des/san-francisco.png'},
              {subtitle: 'seoul', img: '/static/images/des/seoul.png'},
              {subtitle: 'los-angeles', img: '/static/images/des/los-angeles.png'},
              {subtitle: 'macau', img: '/static/images/des/macau.png'},
              {subtitle: 'maldives', img: '/static/images/des/maldives.png'},
              {subtitle: 'mauritius', img: '/static/images/des/mauritius.png'}
            ]
          },
          {
            title: '博物馆',
            subtabs: [
              {subtitle: 'seminyak', img: '/static/images/des/seminyak.jpg'},
              {subtitle: 'singapore', img: '/static/images/des/singapore.jpg'},
              {subtitle: 'boracay', img: '/static/images/des/boracay.png'},
              {subtitle: 'denpasar', img: '/static/images/des/denpasar.png'},
              {subtitle: 'hong-kong', img: '/static/images/des/hong-kong.png'},
              {subtitle: 'istanbul', img: '/static/images/des/istanbul.png'},
              {subtitle: 'kenya', img: '/static/images/des/kenya.png'},
              {subtitle: 'london', img: '/static/images/des/london.png'}
            ]
          },
          {
            title: '购物',
            subtabs: [
              {subtitle: 'phuket', img: '/static/images/des/phuket.jpg'},
              {subtitle: 'rome', img: '/static/images/des/rome.jpg'},
              {subtitle: 'boracay', img: '/static/images/des/boracay.png'},
              {subtitle: 'istanbul', img: '/static/images/des/istanbul.png'},
              {subtitle: 'kenya', img: '/static/images/des/kenya.png'},
              {subtitle: 'london', img: '/static/images/des/london.png'},
              {subtitle: 'denpasar', img: '/static/images/des/denpasar.png'},
              {subtitle: 'hong-kong', img: '/static/images/des/hong-kong.png'}
            ]
          },
          {
            title: '探险',
            subtabs: [
              {subtitle: 'amsterdam', img: '/static/images/des/amsterdam.jpg'},
              {subtitle: 'bali', img: '/static/images/des/bali.jpg'},
              {subtitle: 'barcelona', img: '/static/images/des/barcelona.jpg'},
              {subtitle: 'chiang-mai', img: '/static/images/des/chiang-mai.jpg'},
              {subtitle: 'dubai', img: '/static/images/des/dubai.jpg'},
              {subtitle: 'ko-samui', img: '/static/images/des/ko-samui.jpg'},
              {subtitle: 'kuala-lumpur', img: '/static/images/des/kuala-lumpur.jpg'},
              {subtitle: 'kyoto', img: '/static/images/des/kyoto.jpg'}
            ]
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .all-des-tabs  li.all-sub-li {
    margin-right: 10px;
    padding: 16px 0;
    text-align: left;
    border-bottom: 1px dashed #eee;;
  }
  .nav-list-li {
    margin: 0 50px;
  }
  .months-des-tabs .all-sub-li{
    width: 23%;
    margin-left:3px;
    margin-right:3px;
    margin-top: 5px;
    position: relative;
  }

  li.all-sub-li a.sub-title {
    color: #333333!important;
  }
  li.all-sub-li:hover {

  }
  li.all-sub-li:hover .sub-title{
    color: white!important;
    flex-direction: column;
  }

</style>
<style>
  .months-des-tabs img{
    width: 100%;
    height: 100%;
  }
  .months-des-tabs .all-sub-li {
    display: inline-block;
  }
  .months-des-tabs .sub-title{
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 10px;
  }

</style>

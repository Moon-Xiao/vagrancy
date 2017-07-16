<template>
  <div class="store-section">
    <div class="container">
      <div class="">
        <div class="head-section text-center">
          <h2>商店</h2><span> </span>
        </div>
        <ul id="filters" class="clearfix">
          <li><span class="filter" data-filter="`${lables[0]} ${lables[1]} ${lables[2] ${lables[3]}}`">全部</span></li>
          <li><span class="filter" :data-filter="label[0]">旅店</span></li>
          <li><span class="filter" :data-filter="label[3]">装备</span></li>
          <li><span class="filter" :data-filter="label[2]">团购</span></li>
          <li><span class="filter" :data-filter="label[1]">特产</span></li>
        </ul>
        <div id="store-list" class="clearfix">
          <div v-for="(store,index) in stores" class="`portfolio ${lables[0]} ${lables[1]} ${lables[2] ${lables[3]}}`"
               data-wow-delay="0.4s" :data-cat="store.lable" style="display: inline-block; opacity: 1;">
            <div class="portfolio-wrapper grid_box">
              <a href="`/static/images/temp/pic-${index}.jpg`" :class="store.lable" title="Image Title">
                <img src="`/static/images/temp/pic-${index}.jpg`" class="img-responsive" alt="">
                <span class="zoom-icon"> </span> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Mixitup from '../../../static/js/jquery.mixitup.min'
  export default {
    comonents: {Mixitup},
    data () {
      return {
        lables: [
          'inn',
          'local-product',
          'equip',
          'tour-group'
        ],
        stores: [
          {
            name: '旅店1',
            img: '',
            intro: '深圳观澜湖硬石酒店开业了,预订可享受低至8折优惠,还有6项开业特别优惠.',
            lable: 'inn'
          },
          {
            name: '旅店2',
            img: '',
            intro: '去TripAdvisor看1500万旅友对酒店介绍首尔的真实评论,超过4000万条',
            lable: 'inn'
          },
          {
            name: '旅店3',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            lable: 'inn'
          },
          {
            name: '旅店4',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            lable: 'inn'
          },
          {
            name: '团购1',
            img: '',
            intro: '营口仙人岛宾馆位于辽宁省营口仙人岛国家森林公园之中,是一座集度假、会议、住宿、餐饮、娱乐、温泉洗浴等多功能为一体的园林别墅',
            lable: 'tour-group'
          },
          {
            name: '特产1',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择',
            lable: 'local-product'
          },
          {
            name: '特产2',
            img: '',
            intro: '营口仙人岛宾馆位于辽宁省营口仙人岛国家森林公园之中,是一座集度假、会议、住宿、餐饮、娱乐、温泉洗浴等多功能为一体的园林别墅',
            lable: 'local-product'
          },
          {
            name: '特产3',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            lable: 'local-product'
          },
          {
            name: '特产4',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            lable: 'local-product'
          },
          {
            name: '装备1',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择',
            lable: 'equip'
          },
          {
            name: '装备2',
            img: '',
            intro: '营口仙人岛宾馆位于辽宁省营口仙人岛国家森林公园之中,是一座集度假、会议、住宿、餐饮、娱乐、温泉洗浴等多功能为一体的园林别墅',
            lable: 'equip'
          },
          {
            name: '装备3',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            lable: 'equip'
          }
        ]
      }
    },
    mounted () {
      var filterList = {
        init: function () {
          // MixItUp plugin
          $('#portfoliolist').mixitup({
            targetSelector: '.portfolio',
            filterSelector: '.filter',
            effects: ['fade'],
            easing: 'snap',
            // call the hover effect
            onMixEnd: filterList.hoverEffect()
          })
        },
        hoverEffect: function () {
          // Simple parallax effect
          $('#portfoliolist .portfolio').hover(
            function () {
              $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad')
              $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad')
            },
            function () {
              $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad')
              $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad')
            }
          )
        }
      }
      // Run the show!
      filterList.init()
    }
  }
</script>

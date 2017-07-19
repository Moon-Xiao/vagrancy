<template>
  <div class="store-section">
    <div class="container">
      <div class="">
        <div class="head-section text-center">
          <h2>商店</h2><span> </span>
        </div>
        <ul id="filters" class="clearfix inline-ul">
          <li><span class="filter" >全部</span></li>
          <li><span class="filter" >旅店</span></li>
          <li><span class="filter" >装备</span></li>
          <li><span class="filter" >团购</span></li>
          <li><span class="filter" >特产</span></li>
        </ul>
        <div id="portfoliolist" class="clearfix row">
          <div v-for="(store,index) in stores" class="col-3" style="display: inline-block; opacity: 1;height: 180px">
            <div class="portfolio-wrapper grid_box">
              <a :href="`/static/images/temp/des-${index+1}.jpg`" :class="store.label" title="Image Title">
                <div :style="`width: 100%; height: 100%; background-image: url('/static/images/temp/des-${index+1}.jpg')`" class="img-responsive" alt=""></div>
                <span class="zoom-icon"> </span> </a>
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
        labels: [
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
            label: 'inn'
          },
          {
            name: '旅店2',
            img: '',
            intro: '去TripAdvisor看1500万旅友对酒店介绍首尔的真实评论,超过4000万条',
            label: 'inn'
          },
          {
            name: '旅店3',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            label: 'inn'
          },
          {
            name: '旅店4',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            label: 'inn'
          },
          {
            name: '团购1',
            img: '',
            intro: '营口仙人岛宾馆位于辽宁省营口仙人岛国家森林公园之中,是一座集度假、会议、住宿、餐饮、娱乐、温泉洗浴等多功能为一体的园林别墅',
            label: 'tour-group'
          },
          {
            name: '特产1',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择',
            label: 'local-product'
          },
          {
            name: '特产2',
            img: '',
            intro: '营口仙人岛宾馆位于辽宁省营口仙人岛国家森林公园之中,是一座集度假、会议、住宿、餐饮、娱乐、温泉洗浴等多功能为一体的园林别墅',
            label: 'local-product'
          },
          {
            name: '特产3',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            label: 'local-product'
          },
          {
            name: '特产4',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            label: 'local-product'
          },
          {
            name: '装备1',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择',
            label: 'equip'
          },
          {
            name: '装备2',
            img: '',
            intro: '营口仙人岛宾馆位于辽宁省营口仙人岛国家森林公园之中,是一座集度假、会议、住宿、餐饮、娱乐、温泉洗浴等多功能为一体的园林别墅',
            label: 'equip'
          },
          {
            name: '装备3',
            img: '',
            intro: '10年良好稳健发展,覆盖400多座城市,2500多家酒店,5000多万商旅客人选择!',
            label: 'equip'
          }
        ]
      }
    }
  }
</script>
<style>
  #filters {
    margin: 3% 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  #filters li span{
    display: block;
    padding: 6px 25px;
    text-decoration: none;
    color: #008ABC;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 400;
    margin:0 0.3em;
    border:1px solid #008ABC;
  }
  #filters li span.active {
    background: #008ABC;
    color: #fff;
    font-weight: 400;
  }
  #filters li span.filter:hover{
    background: #008ABC;
    color: #fff;
    font-weight: 400;
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
  }
  .portfolio-wrapper {
    overflow: hidden;
    position: relative !important;
    cursor: pointer;
  }
  #portfoliolist .portfolio {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    width: 25%;
    display: none;
    float: left;
    overflow: hidden;
    margin: 0;
  }
  .portfolio-wrapper {
    width: 100%;
    height: 100%;
  }
  .store-section .portfolio-wrapper img {
    max-width: 100%;
    max-height: 100%;
  }
  .portfolio-wrapper>a{
    width: 100%;
    height: 100%;
  }
 </style>


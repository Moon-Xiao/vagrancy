<template>
  <!--// Page Section //-->
  <div class="travels section "
       style=" padding: 50px 0px; background: url(/static/images/travels0.jpg); background-size: cover; ">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="kd-modrentitle thememargin">
            <h3>游记</h3>
            <div class="kd-divider">
              <div class="short-seprator"><span><i class="fa fa-globe"></i></span></div>
            </div>
            <br>
            <p></p>
          </div>
        </div>
        <div col-md-12>
          <div class="kd-package-list">
            <div class="row">
              <article v-for="travel in travels" class="col-md-4" style="margin-bottom: 30px;">
                <figure>
                  <a href="#"><img :src="travel.img" clss="travel-img"></a>
                  <figcaption>
                    <span class="package-price thbg-color">{{travel.cost}}</span>
                    <div class="kd-bottomelement">
                      <h5>
                        <router-link to="">{{travel.title}}</router-link>
                      </h5>
                      <div class="days-counter">
                        {{travel.daycounter}}<br/>天
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </article>
              <div class="kd-loadsection" style="margin: 10px auto;">
                <router-link to="" class="kd-loadmorebtn">
                  更 多
                </router-link>
              </div>
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
        travels: [
          {
            cost: 18920,
            daycounter: '15',
            country: '法国',
            scenic: '巴黎',
            img: '/static/images/travels1.jpg',
            title: '拍的就是这种Freestyle~'
          },
          {
            cost: 1150,
            daycounter: '5',
            country: '中国',
            scenic: '香港',
            img: '/static/images/travels2.jpg',
            title: '东西方文化碰撞出的小世界'
          },
          {
            cost: 2920,
            daycounter: '5',
            country: '中国',
            scenic: '九寨沟',
            img: '/static/images/travels3.jpg',
            title: '在色彩的王国体味春天的气息'
          }
        ]
      }
    }
  }
</script>
<style>
  .short-seprator {
    display: inline-block;
    min-width: 164px;
    overflow: hidden;
  }

  .kd-divider span {
    display: inline-block;
    font-size: 30px;
  }

  .kd-divider span:after {
    content: '';
    left: auto;
    right: 100%;
    margin-left: 0px;
    margin-right: 10px;
  }

  figure {
    margin-bottom: 6px;
    position: relative;
  }

  .kd-package-list figure .package-price {
    position: absolute;
    left: -16px;
    top: 20px;
    padding: 4px 12px 5px 12px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    background-color: #087dc2 !important;
  }

  .kd-package-list figure img {
    width: 100%;
    border-radius: 6px;
  }

  .kd-package-list figure .kd-bottomelement {
    position: absolute;
    text-align: left;
    width: 100%;
    bottom: 30px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 12px 15px;
  }

  .kd-package-list figure .kd-bottomelement a {
    color: white;
  }

  .kd-package-list figure .kd-bottomelement .days-counter {
    position: absolute;
    text-align: center;
    right: 13px;
    bottom: -10px;
    height: 70px;
    width: 70px;
    background-color: #FFA500;
    color: white;
    border: 2px solid #ffffff;
    border-radius: 100%;
  }

  .kd-package-list article figure figcaption {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
  }

  .kd-package-list article:hover figcaption {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .kd-package-list article:hover .days-counter {
    transform: scale(1.2);
    transition: 1s;
  }


  .kd-loadmorebtn {
    font-weight: bold;
    color: #fff;
    padding: 10px 20px;
    background-color: #FFA500;
  }

  .kd-loadsection:hover .kd-loadmorebtn {

    color: #FFFFA1;
    background-color: #087dc2;
    transition: .5s;
  }
</style>

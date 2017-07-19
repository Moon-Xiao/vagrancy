<template>
  <div class="Count">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <!--// Count Section //-->
          <div class="kd-Count">
            <ul class="row">
              <li class="col-md-3" style="color:#fff;">
                <i class="fa fa-plane fa-3x" ></i>
                <span class="word-count" ref="count">{{travelerCount}}</span>
                <small>旅客</small>
              </li>
              <li class="col-md-3"style="color:#fff;">
                <i class="fa fa-plane fa-3x" ></i>
                <span class="word-count" ref="count">{{travelCount}}</span>
                <small>游记/攻略</small>
              </li>
              <li class="col-md-3" style="color:#fff;">
                <i class="fa fa-plane fa-3x" ></i>
                <span class="word-count" ref="count">{{flightCount}}</span>
                <small>航班</small>
              </li>
              <li class="col-md-3"style="color:#fff;">
                <i class="fa fa-plane fa-3x" ></i>
                <span class="word-count">{{storeCount}}</span>
                <small>商店</small>
              </li>
            </ul>
          </div>
          <!--// Count Section //-->

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  //  import Waypoints from '../../../static/js/waypoints-min.js'
  export default {
    //    components: {Waypoints},
    data () {
      return {
        travelerCount: 10521,
        travelCount: 8500,
        flightCount: 1500,
        storeCount: 500
      }
    },
    ready () {
      //      Waypoints.init('.word-count')
    }
  }
</script>
<style scoped>
  .Count {
    margin-top: 30px;
    padding: 55px;
    background-color: #008ABC;
    color: #ffffff;
  }

  small {
    font-size: 26px;
  }

  .word-count {
    display: block;
    font-size: 36px;
    font-weight: bold;
    /*padding: 0px 0px 16px 0px;*/
    position: relative;
    margin-bottom: 5px;
  }

  .word-count:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 30%;
    width: 40%;
    height: 3px;
    border-bottom: 2px #fff solid;
  }

  /*@media screen and (max-width: 768px) {*/
  /*.word-count {*/
  /*display: block;*/
  /*font-size: 36px;*/
  /*}*/
  /*}*/
  /*@media (min-width: 576px) {*/
  /*.word-count {*/
  /*display: block;*/
  /*font-size: 25px;*/
  /*}*/
  /*}*/


</style>

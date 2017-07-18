<template>
  <div class="destinations-banner">
    <div class="header-animate">
      <ul id="ul_container">
        <li id="p1" style="z-index: 2">
          <img class="J_imgLazyload" src="/static/images/des-ban-p1.png"/>
        </li>
        <li id="p2" style="z-index: 3">
          <img class="J_imgLazyload" src="/static/images/des-ban-p2.png"/>
        </li>
        <li id="p3" style="z-index: 4">
          <img class="J_imgLazyload" src="/static/images/des-ban-p3.png"/>
        </li>
        <li id="p4" style="z-index: 5">
          <img class="J_imgLazyload" src="/static/images/des-ban-p4.png"/>
        </li>
        <li id="p5" style="z-index: 6">
          <img class="J_imgLazyload" src="/static/images/des-ban-p5.png"/>
        </li>
        <li id="p6" style="z-index: 7">
          <img class="J_imgLazyload" src="/static/images/des-ban-p6.png"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      var oUl = document.getElementById('ul_container')
      var w = oUl.offsetWidth / 2
      var h = oUl.offsetHeight / 2
      var aLi = document.getElementsByTagName('li')
      oUl.onmousemove = function (ev) {
        var oEvent = ev || event
        var iL = oEvent.clientX
        var iT = oEvent.clientY
        for (let i = 0; i < aLi.length; i++) {
          aLi[i].style.marginLeft = (iL - w) / 100 * aLi[i].style.zIndex + 'px'
          aLi[i].style.marginTop = (iT - h) / 70 * aLi[i].style.zIndex + 'px'
        }
      }
    }
  }
</script>
<style>
  #ul_container {
    width: 100%;
    height: 455px;
    overflow: hidden;
    position: relative;
    background: url('/static/images/des-ban-bg.png') left top no-repeat;
    background-size: cover;
    background-position: center;
  }

  #ul_container li {
    position: absolute;
    list-style: none;
  }

  #p1 {
    left: 30%;
    top: 32%;
  }

  #p2 {
    left: 42%;
    top: 42%;
  }

  #p3 {
    left: 62%;
    top: 10%;
  }

  #p4 {

    left: 63%;
    top: 48%;
  }

  #p5 {
    left: 70%;
    top: 5%;
  }

  #p6 {
    left: 0;
    top: 0;
  }

  #p6 img {
    width: 100%;
  }
</style>

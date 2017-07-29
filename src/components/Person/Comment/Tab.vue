<template>
  <div class="tab">
    <ul class="tab-header">
      <li v-for="(item,index) in tabs" @click="tabActive(index)" :class="{active: index === currentIndex}">
        {{item.title}}
      </li>
    </ul>
    <div class="strip-wrapper">
      <div class="strip" :style="'width:'+(100/tabs.length)+'%;'+'margin-left:'+stripOffset+'px;'"></div>
    </div>
    <div class="tab-nav" @touchmove="tabMove($event)" @touchstart="tabStart($event)" @touchend="tabEnd()"
         :style="'margin-left:'+navOffset+'px;width:'+(tabs.length*100)+'%;'">
      <template v-for="(item,index) in tabs">
        <slot :name="`nav-${index}`" class="nav-slot"></slot>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentIndex: 0,
        stripOffset: 0,
        navOffset: 0,
        tabWidth: 0,
        navWidth: 0,
        timer: null,
        tabClientX: 0
      }
    },
    mounted: function () {
      this.tabWidth = document.getElementsByClassName('tab-header')[0].clientWidth
      this.navWidth = this.tabWidth * this.tabs.length
      // 挂载 保证适配屏幕
      window.onresize = () => {
        return (() => {
          let currentWidth = document.getElementsByClassName('tab-header')[0].clientWidth
          let rate = currentWidth / this.tabWidth
          this.navOffset *= rate
          this.stripOffset *= rate
          this.tabWidth = currentWidth
          this.navWidth = this.tabWidth * this.tabs.length
        })()
      }
    },
    props: {
      tabs: Array
    },
    components: {},
    methods: {
      tabActive: function (index) {
        // 防止用户频繁切换，清除之前动画，开始现在动画
        clearInterval(this.timer)
        let desStripMarginLeft = index * this.tabWidth / this.tabs.length
        let stripOffset = this.stripOffset - desStripMarginLeft
        let desNavMarginLeft = index * this.tabWidth * -1
        let navOffset = this.navOffset - desNavMarginLeft
        this.timer = setInterval(() => {
          this.stripOffset += -stripOffset / 100
          this.navOffset += -navOffset / 100
          // 防止右移越界
          if (stripOffset <= 0 && this.stripOffset >= desStripMarginLeft) {
            this.stripOffset = desStripMarginLeft
            this.navOffset = desNavMarginLeft
            this.currentIndex = index
            clearInterval(this.timer)
          }
          // 防止左移越界
          if (stripOffset >= 0 && this.stripOffset <= desStripMarginLeft) {
            this.stripOffset = desStripMarginLeft
            this.navOffset = desNavMarginLeft
            this.currentIndex = index
            clearInterval(this.timer)
          }
        }, 1)
      },
      tabStart: function (event) {
        this.tabClientX = event.touches[0].clientX
      },
      tabMove: function (event) {
        clearInterval(this.timer)
        let currentClientX = event.touches[0].clientX
        if (currentClientX >= 0 && currentClientX <= this.tabWidth) {
          let dx = this.tabClientX - currentClientX
          let stripMin = 0
          let stripMax = this.tabWidth / this.tabs.length * (this.tabs.length - 1)
          let navMin = this.tabWidth * (this.tabs.length - 1) * -1
          let navMax = 0
          this.stripOffset += dx / this.tabs.length
          this.navOffset -= dx
          if (stripMin > this.stripOffset) {
            this.stripOffset = stripMin
            this.navOffset = navMax
          }
          if (this.stripOffset > stripMax) {
            this.stripOffset = stripMax
            this.navOffset = navMin
          }
          this.tabClientX = currentClientX
        } else {
          this.autoReset()
        }
      },
      tabEnd: function () {
        this.autoReset()
      },
      autoReset: function () {
        let lastMarginLeft = this.currentIndex * this.tabWidth * -1
        let offset = this.navOffset - lastMarginLeft
        let index = (Math.abs(offset) >= this.tabWidth * 2 / 3) ? (offset > 0 ? -1 : 1) : 0
        this.tabActive(this.currentIndex + index)
      }
    }
  }
</script>
<style lang="less">
  .tab {
    width: 100%;
    overflow: hidden;
    > .tab-header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      > li {
        flex: 1;
        text-align: center;
        border: 1px solid #eee;
      }
      > .active {
        color: red;
      }
    }
    > .strip-wrapper {
      height: 2px;
      > .strip {
        height: 100%;
        background-color: #000000;
      }
    }
    > .tab-nav {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      .nav-slot {
        flex: 1;
      }
    }
  }
</style>

<template>
  <div id="group">
    <h3>我的“团”</h3>
    <div class="group-items">
      <div class="pre-item" @click="preItem"><span class="fa fa-chevron-left"></span></div>
      <div class="next-item" @click="nextItem"><span class="fa fa-chevron-right"></span></div>
      <template v-for="item in groupList">
        <div class="item">
          <a :href="item.link">
            <div class="back-img" :style="'background-image: url('+item.img+')'"></div>
            <p>{{item.name}}</p>
          </a>
        </div>
      </template>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyGroup',
    mounted: function () {
      this.init()
    },
    data () {
      return {
        currentIndex: 0,
        len: 0,
        flag: true,
        groupList: [
          {img: '/static/images/person/person.jpeg', name: '微信', link: '/manage-info'},
          {img: '/static/images/person/person.jpeg', name: '新浪', link: 'manage-info'},
          {img: '/static/images/person/person.jpeg', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/person.jpeg', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/person.jpeg', name: 'QQ空间', link: 'manage-info'},
          {img: '/static/images/person/person.jpeg', name: 'QQ空间', link: 'manage-info'}
        ]
      }
    },
    methods: {
      init: function () {
        let groupItems = window.$('.group-items')
        let items = window.$('.item')
        this.len = items.length
        if (this.len > 0) {
          let width = groupItems.width()
          let itemWidth = window.$(items[0]).width()
          let offset = (width - 3 * itemWidth) / 4
          for (let i = 0; i < this.len && i < 3; i++) {
            window.$(items[i]).css('left', (i + 1) * offset + i * itemWidth + 'px')
          }
          for (let i = 3; i < this.len; i++) {
            window.$(items[i]).css('left', 4 * offset + 3 * itemWidth + 'px')
          }
        }
      },
      preItem: function () {
        console.log('pre')
        if (this.currentIndex < this.len - 3 && this.currentIndex + 2 < this.len && this.flag) {
          this.flag = false
          let items = window.$('.item')
          let groupItems = window.$('.group-items')
          let width = groupItems.width()
          let itemWidth = window.$(items[0]).width()
          let offset = (width - 3 * itemWidth) / 4
          for (let i = 0; i < 4; i++) {
            window.$(items[this.currentIndex + i]).animate({
              left: '-=' + (itemWidth + offset)
            }, 500, () => {
              this.flag = true
            })
          }
          this.currentIndex += 1
        }
      },
      nextItem: function () {
        console.log('next')
        if (this.currentIndex > 0 && this.flag) {
          this.flag = false
          let items = window.$('.item')
          let groupItems = window.$('.group-items')
          let width = groupItems.width()
          let itemWidth = window.$(items[0]).width()
          let offset = (width - 3 * itemWidth) / 4
          for (let i = -1; i < 3; i++) {
            window.$(items[this.currentIndex + i]).animate({
              left: '+=' + (itemWidth + offset)
            }, 500, () => {
              this.flag = true
            })
          }
          this.currentIndex -= 1
        }
      }
    }
  }
</script>

<style scoped>
  #group {
    width: 18rem;
    color: black;
    border: 1px dotted #5f9afa;
    box-shadow: 0 0 0.3rem #eee;
    border-radius: 0.3rem;
  }

  #group h3 {
    font-size: 26px;
    margin-top: 1rem;
    color: #0275d8;
  }

  #group .group-items {
    padding: 0;
    margin-top: 1.3rem;
    border: none;
    position: relative;
    height: 6.2rem;
    overflow: hidden;
  }

  #group .group-items .pre-item {
    position: absolute;
    width: 10%;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 1;

  }
  #group .group-items .pre-item span{
    text-align: left;
    display: block;
    line-height: 3.5rem;
    margin-left: -.16rem;
    color: #bbb;
    font-size: 14px;
  }

  #group .group-items .next-item {
    position: absolute;
    width: 50%;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 1;
  }

  #group .group-items .next-item span{
    text-align: right;
    display: block;
    line-height: 3.5rem;
    margin-right: -.16rem;
    color: #bbb;
    font-size: 14px;
  }

  #group .group-items .item {
    padding: 0;
    position: absolute;
    font-size: 12px;
  }

  #group .group-items .item .back-img {
    height: 3.5rem;
    width: 3.5rem;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #group .group-items .item p {
    margin-top: 0.5rem;
    color: #aaa;
    font-size: 14px;
  }
</style>

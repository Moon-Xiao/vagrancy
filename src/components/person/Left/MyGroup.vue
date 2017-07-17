<template>
  <div id="group">
    <h3>我的“团”</h3>
    <div class="items">
      <div class="item">
        <a>
          <img src="/static/images/person/group2.jpg">
          <p>旅行指南</p>
        </a>
      </div>
      <div class="item">
        <a>
          <img src="/static/images/person/group1.png">
          <p>驴友小组</p>
        </a>
      </div>
      <div class="item">
        <a>
          <img src="/static/images/person/group.jpg">
          <p>蜂窝广场</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyGroup',
    data () {
      return {
        imgList: [
          {link: 'http://placeskull.com/200/200/ABABAB/-1/0', title: 'Skulls are nice1', detail: '1'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/1', title: 'Skulls are nice2', detail: '2'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: 'Skulls are nice3', detail: '3'},
          {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'Skulls are nice4', detail: '4'}
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  #group {
    width: 15rem;
    height: 10rem;
    border: 1px solid lightgray;
  }

  h3 {
    font-size: 24px;
  }

  .items {
    margin-top: 1rem;
    width: 100%;
  }

  .item {
    width: 32%;
    display: inline-block;
  }

  .item img {
    width: 100%;
    height: 100%;
  }

  .item p {
    margin-top: .5rem;
  }

</style>

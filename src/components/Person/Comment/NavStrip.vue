<template>
  <div class="nav-strip">
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <div class="header-middle">
      <slot name="middle"></slot>
    </div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
    <div style="clear: both"></div>
  </div>
</template>
<script>
  export default {
    name: 'NavStrip',
    data () {
      return {}
    },
    props: {},
    components: {},
    methods: {}
  }
</script>
<style lang="less">
  @height: 50px;
  .nav-strip {
    width: 100%;
    height: @height;
    position: relative;
    > .header-left {
      height: 100%;
      line-height: @height;
      text-align: center;
      width: @height;
      vertical-align: top;
      display: inline-block;
    }
    > .header-middle {
      height: 100%;
      vertical-align: top;
      display: inline-block;
      line-height: @height;
    }
    > .header-right {
      position: absolute;
      vertical-align: top; /*渲染基准*/
      top: 0;
      right: 0;
      height: 100%;
      line-height: @height;
      color: white;
      /*background-color: #6495ed;*/
    }
  }
</style>

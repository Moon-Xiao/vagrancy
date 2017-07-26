<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script>
  export default {}
</script>

<style lang="less">

  ul.list {
    margin: 0;
    padding: 16px 0;
    list-style: none;
    background: #EFEFF4;
    box-sizing: border-box;
  }

  .sidebar > ul.list {
    height: 100%;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

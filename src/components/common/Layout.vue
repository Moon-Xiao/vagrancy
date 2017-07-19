<template>
  <div class="layout-content">
    <div class="content-wrap">
      <div class="content">
        <slot :name="left-content"></slot>
      </div>
    </div>
    <aside class="sidebar">
      <slot :name="right-sidebar"></slot>
    </aside>
    <div class="clearfix"></div>
  </div>
</template>
<script>
</script>
<style>
  .layout-content {
    max-width: 1226px;
    margin: 0 auto;
    text-align: left;
    position: relative;
    margin-bottom: 10px;
    margin-top: 2em;
  }
  .content-wrap {
    width: 100%;
    float: left;
  }
  .content {
    margin-right: 370px;
  }
  .sidebar {
    float: left;
    margin-left: -360px;
    width: 360px;
    position: relative;
  }
</style>

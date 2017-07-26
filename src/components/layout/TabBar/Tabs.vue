<template>
  <nav class="tabs">
    <ul>
      <li class="item" :class="{active: tab.active}" v-for="tab in tabs">
        {{tab.title}}
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      tabs: Array,
      required: true
    }
  }
</script>

<style lang="less">
  @tabbar-height: 44px;

  nav.tabs {
    height: @tabbar-height;

    & > ul {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      & > li.item {
        display: block;
        padding: 8px 16px;
        box-sizing: border-box;
        position: relative;

        &:after {
          content: "";
          width: 100%;
          position: absolute;
          border-bottom: 2px solid transparent;
          left: 0;
          bottom: 0;
        }

        &.active:after {
          border-bottom-color: blueviolet;
        }

      }
    }
  }
</style>

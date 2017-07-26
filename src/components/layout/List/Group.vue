<template>
  <li class="list-group">
    <p v-if="header" class="header" v-text="header"></p>
    <slot v-else name="header"></slot>
    <ul class="list">
      <slot></slot>
    </ul>
    <p v-if="footer" class="footer" v-text="footer"></p>
    <slot v-else name="footer"></slot>
  </li>
</template>

<script>
  export default {
    props: {
      header: String,
      footer: String
    }
  }
</script>

<style lang="less">
  @height: 40px;

  li.list-group {
    margin-top: 8px;
    margin-bottom: 8px;

    height: @height - 2 * 8px;

    > ul {
      margin: 0;
      padding: 0;
      list-style: none;

      .child {

      }
    }

    > p.header {
      color: #6D6D72;
      font-size: 13px;
      padding: 8px 16px;
    }

    > p.footer {
      color: #6D6D72;
      font-size: 13px;
      padding: 8px 16px;
    }

  }
</style>

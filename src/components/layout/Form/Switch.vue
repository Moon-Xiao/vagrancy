<template>
    <div class="form-switch">
      <div class="switch"></div>
    </div>
</template>

<script>
  export default {
    props: {
      value: Boolean
    }
  }
</script>

<style lang="less">
  div.form-switch {
    display: inline-block;
    width: 50px;
    height: 30px;
    border-radius: 15px;
    background: #44DB5E;
    padding: 1px;
    & div.switch {
      width: 28px;
      height: 28px;
      border-radius: 14px;
      background: white;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 3px 1px 0 rgba(0,0,0,0.05)
    }

  }
</style>

<template>
  <div class="navIcon">
    <div :style="'background-image:url('+icon+')'"></div>
    <p>{{info}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      icon: String,
      info: String
    },
    components: {},
    methods: {}
  }
</script>

<style lang="less">
  @height:40px;
  .navIcon {
    text-align: center;
    flex: 1;
    > div {
      height: @height;
      color: white;
      text-align: center;
      line-height:  @height;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 80% 80%;
    }
    > p {
      margin: 10px 0 0 0;
      padding: 0;
      color: #7dd67f;
    }
  }
</style>

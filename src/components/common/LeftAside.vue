<template>
  <div class="aside">
    <div class="wrapper wiki-wrapper clearfix">
      <div class="wiki-aside">
        <ul class="wiki-nav">
          <li v-for="(item,index) in tabs" v-on:mouseenter="nowIndex = index" :class="{on: index === nowIndex}">
            {{item}}
          </li>
        </ul>
      </div>
      <ul class="nav-list-ul wiki-cont">
        <li v-for="(item,index) in tabs" v-if="index === nowIndex" class="nav-list-li">
          <slot :name="`content-${index}`"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        nowIndex: 0
      }
    },
    props: {
      tabs: Array
    }
  }
</script>
<style scoped>
  .wrapper {
    width: 1000px;
    margin: 0 auto;
  }

  .clearfix {
  }

  .wiki-aside {
    float: left;
    width: 20%;
  }

  .wiki-nav {
    line-height: 20px;
    font-size: 18px;
    color: #333;
  }

  .wiki-nav li.on {
    color: #ec971f;
    border-left: 4px #ec971f solid;
  }

  .wiki-nav li {
    padding: 20px 10px;
    border-bottom: 1px solid #f1f1f1;
  }

  .wiki-nav a {
    display: block;
    height: 20px;
    width: 210px;
    padding-left: 20px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wiki-cont {
    float: right;
    width: 70%;
    padding-top: 10px;
  }

</style>

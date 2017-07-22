<template>
  <div class="des-hot">
    <div class="wrapper" style="width: 90%;margin: 0 auto" >
      <div class="title">
        <h2>{{tab_title}}</h2>
      </div>
      <ul class="tab-nav inline-ul">
        <li v-for="(item,index) in tabs"  v-on:mouseenter="nowIndex = index" :class="{active: index === nowIndex}">{{item.title}}</li>
      </ul>
      <ul class="nav-list-ul">
        <li v-for="(item,index) in tabs" v-if="index === nowIndex" class="nav-list-li">
          <slot :name="`content-${index}`"></slot>
        </li>
      </ul>
      <div>
      </div>
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
      tabs: Array,
      tab_title: String
    }

  }
</script>
<style>

  .des-hot {
    margin-top: 20px;
  }
  .tab-nav li {
    font-size: 18px;
  }
  .tab-nav .active {
    color: #ec971f;
    border-bottom: 2px #ec971f solid;
  }
  .nav-list-li {
    width: 100%;
  }

</style>

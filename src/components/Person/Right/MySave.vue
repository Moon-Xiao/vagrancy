<template>
  <div id="save">
    <div class="save-top">
      <div class="top-item">
        在路上
      </div>
    </div>
    <travels-component></travels-component>
    <paging></paging>
  </div>
</template>

<script>
  import travelsComponent from './MyTravels/travelsComponent.vue'
  import Paging from '../Bottom/Paging.vue'
  export default {
    components: {
      Paging,
      travelsComponent
    },
    data () {
      return {}
    }
  }
</script>

<style>
  #save .save-top{
    margin: 1rem 0;
    height: 3rem;
    position: relative;
  }
  #save .save-top .top-item{
    position: absolute;
    font-size: 24px;
    width: 8rem;
    color: #717171;
    text-align: left;
    border-bottom: 0.25rem outset rgba(33, 78, 243, 0.14);
  }
</style>

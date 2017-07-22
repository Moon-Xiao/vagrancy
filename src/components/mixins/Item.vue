<template>
  <div :class="className||''">
    <slot name="item" :value="state.originInfo"></slot>
  </div>
</template>

<script>
  import ItemList from './store/ItemMixin'
  export default {
    mixins: [ItemList],
    props: {
      certainList: String,
      certainId: String,
      className: String
    },
    mounted () {
    },
    watch: {
      'state.originInfo' () {
        console.log(this.state)
      }
    }
  }
</script>

<template>
  <div :class="className||''">
    <slot v-if="Object.keys(state.originInfo||{}).length>0" name="item" :value="state.originInfo"></slot>
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
    watch: {
      certainId () {
        this.configItem()
      }
    }
  }
</script>

<template>
  <div >
    <transition name="mask">
      <div v-if="value" class="sidebar-mask" @click="touchMask" @touchmove.prevent>
      </div>
    </transition>
    <transition name="sidebar">
      <div v-show="value" class="sidebar" :class="position">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      value: Boolean,
      position: {
        type: String,
        default: 'left'
      }
    },
    methods: {
      touchMask () {
        this.$emit('input', false)
      }
    },
    computed: {
      body () {
        return document.body
      },
      html () {
        return document.documentElement
      }
    }
  }
</script>

<style lang="less">

  @sidebar-width: 70%;

  div.sidebar {
    position: fixed;
    height: 100%;
    width: @sidebar-width;
    box-sizing: border-box;
    background: white;
    overflow: hidden;

    &.left {
      left: 0;
      top: 0;
      box-shadow: rgba(0,0,0,0.5) 2px 2px 80px 1px;
      &.sidebar-enter-active, &.sidebar-leave-active {
        transition: transfrom 300ms, box-shadow 300ms;
      }
      &.sidebar-enter, &.sidebar-leave-to
      {
        transform: translateX(-100%);
        box-shadow: rgba(0,0,0,0.3) 0 0 0 0;
      }
    }

    &.right {
      right: 0;
      top: 0;
      box-shadow: rgba(0,0,0,0.5) -2px 2px 80px 1px;
      &.sidebar-enter-active, &.sidebar-leave-active {
        transition: transfrom 300ms, box-shadow 300ms;
      }
      &.sidebar-enter, &.sidebar-leave-to
      {
        transform: translateX(100%);
        box-shadow: rgba(0,0,0,0.3) 0 0 0 0;
      }
    }

  }

  div.sidebar-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    &.sidebar-mask.mask-enter-active, &.sidebar-mask.mask-leave-active {
      transition: opacity 300ms;
    }
    &.sidebar-mask.mask-enter, &.sidebar-mask.mask-leave-to {
      opacity: 0;
    }
  }

</style>

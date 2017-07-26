<template>
    <nav class="navbar">
      <div class="navbar-component left">
        <slot name="left"></slot>
      </div>
      <div class="navbar-component title">
        <slot name="title"></slot>
      </div>
      <div class="navbar-component right">
        <slot name="right"></slot>
      </div>
    </nav>
</template>

<script>
  export default {}
</script>

<style>
  /* Common Defines */
  /* height: 50px */
  /* margin: 8px */

  nav.navbar {
    width: 100%;
    height: 50px;
    padding: 8px;
    display: flex;
    box-sizing: border-box;
    border: 1px solid red;
  }

  nav.navbar > div.navbar-component {
    flex: 1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  nav.navbar > div.navbar-component.left {
    justify-content: flex-start;
  }

  nav.navbar > div.navbar-component.right {
    justify-content: flex-end;
  }

  nav.navbar > div.navbar-component.title {
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
  }

  nav.navbar > div.navbar-component.title {
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
  }

</style>

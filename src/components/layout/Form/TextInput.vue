<template>
    <input class="form-input" :placeholder="placeholder" :value="value" @input="$emit('input', $event)"/>
</template>

<script>
  export default {
    props: {
      value: String,
      placeholder: String
    }
  }
</script>

<style lang="less">
  input.form-input {
    border: none;
    font-size: 17px;
    padding: 0;
    margin: 0;
    width: 100%;

    &::placeholder {
      font-size: 17px;
      color: #C7C7CD;
    }
  }
</style>

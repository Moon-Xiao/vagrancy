<template>
  <div style="height: 2rem;text-align: center;position: relative;clear: both">
    <span title="previous" @click="$emit('switch', -1)" class="fa fa-chevron-left"
          style="color: rgb(221, 221, 221);position: absolute;font-size: 16px;margin-top: 0.5rem;margin-left: -0.9rem;"></span>
    <span
      style="height: 2rem;width: 2rem;display:inline-block;border-radius:50%;border: 1px solid #ddd;box-shadow:0 0 1px #eee;text-align: center;line-height: 2rem">{{page}}</span>
    <span title="next" @click="$emit('switch', 1)" class="fa fa-chevron-right"
          style="color: rgb(221, 221, 221);position: absolute;font-size: 16px;margin-top: 0.5rem;margin-left: 0.2rem;"></span>
  </div>
</template>

<script>
  export default{
    name: 'Paging',
    props: {
      page: Number,
      perPage: Number,
      total: Number,
      pages: Number
    }
  }
</script>

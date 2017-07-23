<template>
    <div>
      <item certain-list="post" :certain-id="$route.params.id">
        <template slot="item" scope="item">
          <h2>{{item.value.title}}</h2>
          <pre>{{item.value.author.nickname}}</pre>
          <div v-html="item.value.content"></div>
        </template>
      </item>
      <!--{{state.originInfo}}-->

    </div>
</template>

<script>
  import Item from '../../../mixins/Item.vue'
  export default {
    components: {Item}
  }
</script>

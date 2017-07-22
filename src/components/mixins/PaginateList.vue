<template>
  <div>
    <div :class="className||''">
      <slot v-for="i in state.buffer" name="list-item" :value="i"></slot>
      <slot v-if="state.buffer.length === 0" name="no-content"></slot>
      <slot name="pager" :page="state.page" :total="state.total" :perPage="state.perPage" :pages="pages"></slot>
    </div>

  </div>
</template>

<script>
  import ListsMixin from './store/ListsMixin'

  export default {
    props: {
      certainList: String,
      certainUser: String,
      perPage: Number,
      className: String
    },
    mixins: [ListsMixin],
    mounted () {
      console.log('c', this.certainList, this.certainUser)
      setTimeout(() => {
        console.log('hi', this.state)
        this.switchPage({page: 1, perPage: this.perPage || 8})
      }, 1000)
    },
    methods: {
      changePage (page) {
        this.switchPage({page, perPage: this.state.perPage})
      }
    },
    computed: {
      pages () {
        return Math.floor(this.state.total / this.state.perPage)
      }
    }
  }
</script>

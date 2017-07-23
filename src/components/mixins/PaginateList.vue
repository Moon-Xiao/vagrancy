<template>
  <div>
    <div :class="className||''">
      <slot v-if="ready" v-for="(i,index) in state.buffer" name="list-item" :value="i" :index="index"></slot>
      <slot v-if="ready && state.buffer.length === 0" name="no-content"></slot>
      <slot v-if="ready" name="pager" :page="state.page" :total="state.total" :perPage="state.perPage"
            :pages="pages"></slot>
    </div>

  </div>
</template>

<script>
  import ListsMixin from './store/ListsMixin'

  export default {
    props: {
      certainList: String,
      certainUser: Object,
      certainRef: Object,
      perPage: Number,
      className: String,
      select: String
    },
    mixins: [ListsMixin],
    methods: {
      changePage (page) {
        this.switchPage({page, perPage: this.state.perPage, select: this.select, ref: this.ref})
      }
    },
    watch: {
      ready () {
        console.log('aweewvfwef', this.certainRef, this.select)
        this.switchPage({page: 1, perPage: this.perPage || 8, select: this.select, ref: this.ref})
      }
    },
    computed: {
      pages () {
        return Math.floor(this.state.total / this.state.perPage)
      },
      ref () {
        return this.certainRef
      }
    }
  }
</script>

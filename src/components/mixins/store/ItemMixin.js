import {generator} from './BufferedMixin'

export default {
  mixins: [generator('items')],
  computed: {
    fetching () {
      return this.$store.state[this.storePath].fetching
    },
    id () {
      return this.certainId
    }
  },
  watch: {
    ready () {
      this.configItem()
    }
  },
  methods: {
    async configItem () {
      if (this.id === 'create') {
        await this.storeDispatch('create')
      } else {
        await this.storeDispatch('fetch', this)
      }
    }
  }
}

/**
 * certainList: 'user'
 * certainId:   this.$route.params.id     "/person/:id" | "me"
 * state.originInfo:
 */

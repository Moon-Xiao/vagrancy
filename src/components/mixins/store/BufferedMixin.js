import CommonMixin from './CommonMixin'

export function generator (type) {
  return {
    data () {
      return {
        bufferId: null,
        ready: false
      }
    },
    props: {
      kept: String
    },
    mixins: [CommonMixin],
    computed: {
      state () {
        return this.$store.state[this.storePath] || {}
      },
      storePath () {
        if (this.kept) {
          return `${type}/${this.kept}`
        } else if (typeof this.bufferId === 'number') {
          return `${type}/${this.bufferId}` || {}
        }
      }
    },
    methods: {
      storeDispatch (action, ...args) {
        return this.$store.dispatch(`${this.storePath}/${action}`, ...args)
      }
    },
    async created () {
      if (!this.kept) {
        this.bufferId = await this.$store.dispatch(`${type}/createBuffer`)
      }
      this.storeDispatch('initialize', this)
      this.ready = true
    },
    beforeDestroy () {
      if (!this.kept) {
        this.$store.dispatch(`${type}/destroyBuffer`, {id: this.bufferId})
        this.bufferId = undefined
      }
    }
  }
}

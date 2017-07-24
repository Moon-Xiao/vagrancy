import {generator} from './BufferedMixin'

export default {
  data () {
    return {
      _activated: false
    }
  },
  props: {
    where: {
      type: Object
    },
    filterField: {
      type: String
    }
  },
  mixins: [generator('lists')],
  computed: {
    fetching () {
      return this.state && this.state.fetching
    }
  },
  methods: {
    switchPage ({page, perPage, ...rest}) {
      if (Object.keys(rest).length === 0 && page === this.page && perPage === this.perPage) {
        return
      }
      let {where} = this
      if (this.certainUser) {
        where = this.certainUser
      }
      this.storeDispatch('switchPage', {
        page: page || parseInt(this.$route.query.page) || 1,
        perPage: perPage || parseInt(this.$route.query.per_page) || 10,
        ...(where ? {where} : {}),
        ...rest
      })
    }
  },
  async mounted () {
    if (this.selecting) {
      this.selectedItems = this.initial.slice()
    }
  },
  async activated () {
    this._activated && this.switchPage({})
    this._activated = true
  }
}

/**
 *
 * certainList: 'user'
 * certainUser?: {
 *  [path]: this.userInfo._id
 * }
 *
 * switchPage({page: 1, perPage: 3, select: 'nickname email', sort: 'mark -total', search:''})
 * state.buffer: Array
 * state.*
 */

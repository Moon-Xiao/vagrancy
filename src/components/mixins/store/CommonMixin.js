import {mapState} from 'vuex'

export default {
  props: {
    tempList: {
      type: [String, Object]
    }
  },
  computed: {
    ...mapState('lists', {
      lists: 'details'
    }),
    list () {
      if (this.certainList) {
        const listName = this.certainList
        return this.lists.find(detail => detail.singular === listName || detail.name === listName)
      } else if (this.tempList) {
        if (typeof this.tempList === 'object') {
          return this.tempList
        } else {
          const listName = this.tempList
          return this.lists.find(detail => detail.singular === listName || detail.name === listName)
        }
      } else {
        const listName = this.$route.params.list
        return this.lists.find(detail => detail.singular === listName || detail.name === listName)
      }
    },
    allFields () {
      const result = {}
      for (let group of this.list.fields) {
        for (let field of group.fields) {
          result[field.name] = field
        }
      }
      return result
    }
  }
}

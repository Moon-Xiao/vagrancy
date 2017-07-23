import api from '../../../api/index'
const state = function () {
  return {
    buffer: [],
    page: 0,
    perPage: 0,
    total: 0,
    fields: [],
    ref: null,
    list: null,
    where: null,
    search: null,
    sort: null,
    select: null,
    fetching: false
  }
}

const actions = {

  initialize ({commit}, {list}) {
    commit('init', {list})
  },

  async fetchSome ({commit, state}) {
    commit('startFetching')
    let {page, perPage, where, list, ref, search, sort, select} = state
    const params = {page, per_page: perPage}
    if (where && typeof where === 'object') {
      params.where = JSON.stringify(where)
    }
    if (search && typeof search === 'string') {
      params.search = search
    }
    if (sort && typeof sort === 'string') {
      params.sort = sort
    }
    if (select && typeof select === 'string') {
      params.select = select
    }
    let result
    if (ref) {
      result = await api.getListItemField(list, ref.id, ref.field, list, {params})
    } else {
      result = await api.getListItems(list, {params})
    }
    result.perPage = result.limit
    commit('paginate', result)
    commit('bufferingSome', result)
    commit('stopFetching')
  },

  async switchPage ({commit, dispatch}, {page, perPage, where, search, sort, select, ref}) {
    commit('paginate', {page, perPage, where, search, sort, select, ref})
    await dispatch('fetchSome')
  }
}

const getters = {

  nameList (state) {
    const {list, buffer} = state
    const nameField = list.nameField || '_id'
    return buffer.map(item => item[nameField])
  }

}

const mutations = {

  init (state, {list}) {
    state.buffer = []
    state.page = 0
    state.perPage = 0
    state.total = 0
    state.fields = []
    state.list = list
  },

  paginate (state, {page, perPage, where, total, search, sort, select, ref}) {
    state.page = page || state.page
    state.perPage = perPage || state.perPage
    state.total = total || state.total
    state.where = where || state.where
    state.select = typeof select === 'string' ? select : state.select
    state.search = typeof search === 'string' ? search : state.search
    state.sort = typeof sort === 'string' ? sort : state.sort
    state.ref = typeof ref === 'object' ? ref : state.ref
    console.log('xxxxxxxxx', ref)
  },

  bufferingSome (state, {docs, fields, total} = {docs: [], fields: []}) {
    state.buffer = docs.slice()
    if (state.fields.slice().sort().toString() !== fields.slice().sort().toString()) {
      state.fields = fields.slice()
    }
  },

  startFetching () {
    state.fetching = true
  },

  stopFetching () {
    state.fetching = false
  }

}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

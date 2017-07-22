import api from '../../../api/index'
import item from './list'
import store from '../../index'
import {multipleStore} from '../mixins'

let module = multipleStore('lists', item)

const state = {
  details: [],
  ...module.state
}

const getters = {

}

const actions = {
  async fetchDetails ({commit}, {query} = {}) {
    commit('update', {details: await api.getLists(query)})
  },
  ...module.actions
}

const modules = {
  // $temp: item
}

const mutations = {
  update (state, {details}) {
    // TODO: Compare and reload, not just replace
    state.details = details.slice()
    for (let list of details) {
      const path = `lists/${list.singular}`
      store.registerModule(path, item)
      store.commit(`${path}/init`, {list})
    }
  },
  ...module.mutations
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  modules,
  mutations
}

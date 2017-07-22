import api from '../../../api/index'

export function state () {
  return {
    originInfo: {},
    unsavedInfo: {},
    list: null,
    id: null,
    updated: false
  }
}

export const actions = {

  initialize ({commit}, {list}) {
    commit('init', {list})
  },

  create ({state, commit}) {
    commit('create')
  },

  async fetch ({state, commit}, {id}) {
    let info = await api.getListItem(state.list, id || state.id)
    commit('resetOriginal', {info, id})
  },

  update ({commit}, {path, value}) {
    commit('updateUnsaved', {path, value})
  },

  async upload ({commit, state, dispatch}) {
    const {list, unsavedInfo, id} = state
    const formData = new FormData()
    const data = {}
    for (let path of Object.keys(unsavedInfo)) {
      let value = state.unsavedInfo[path]
      if (value instanceof File) {
        formData.append(path, value)
      } else {
        data[path] = value
      }
    }
    formData.append('$data', JSON.stringify(data))
    const commonData = {headers: {'Content-Type': 'multipart/form-data'}}
    if (id !== 'create') {
      await api.updateItem(list, id, formData, commonData)
      await dispatch('fetch', {id})
    } else {
      const originInfo = await api.createItem(list, formData, commonData)
      commit('clearUnsaved', {originInfo})
    }
    // await dispatch('fetchSome')
  },

  async removeItem ({commit, state}) {
    const {list, id} = state
    await api.deleteItem(list, id)
    commit('init')
    // await dispatch('fetchSome')
  }
}

export const mutations = {

  init (state, {list}) {
    state.list = list
    state.originInfo = {}
    state.unsavedInfo = {}
    state.updated = false
  },

  create (state) {
    state.originInfo = {}
    state.unsavedInfo = {}
    state.id = 'create'
    state.updated = false
  },

  resetOriginal (state, {info, id}) {
    state.originInfo = {...info}
    state.unsavedInfo = {}
    state.id = id
    state.updated = false
  },

  clearUnsaved (state, {originInfo}) {
    state.unsavedInfo = {}
    if (originInfo) {
      state.originInfo = {...originInfo}
    }
    state.updated = false
  },

  updateUnsaved (state, {path, value}) {
    state.unsavedInfo[path] = value
    state.updated = true
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

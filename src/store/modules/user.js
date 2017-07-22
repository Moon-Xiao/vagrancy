import api from '../../api'

const state = {
  logged: false,
  info: {},
  types: {}
}

const actions = {

  async getUserInfo ({commit}) {
    let result = await api.getUserState()
    if (result.logged) {
      console.log('login', result)
      commit('login', result)
    }
  },

  async init ({commit}) {
    let types = await api.getLoginTypes()
    commit('prepare', {types})
  },

  async login ({commit}, loginData) {
    let result = await api.loginUser(loginData)
    if (result.logged) {
      commit('login', result)
    }
  },

  async logout ({commit}) {
    await api.logoutUser()
    commit('logout')
  }

}

const mutations = {

  prepare (state, {types}) {
    state.types = {...types}
  },

  login (state, {info}) {
    state.logged = true
    state.info = {...info}
  },

  logout (state) {
    state.logged = false
    state.info = {}
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

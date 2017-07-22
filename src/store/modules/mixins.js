import store from '../index'

export function multipleStore (thisPath, module) {
  const state = {
    maxBufferId: 0
  }

  const actions = {
    createBuffer ({commit, state}) {
      commit('registerBuffer')
      return state.maxBufferId - 1
    },
    destroyBuffer ({commit}, {id}) {
      commit(`unregisterBuffer`, {id})
    }
  }

  const mutations = {
    registerBuffer (state) {
      store.registerModule(`${thisPath}/${state.maxBufferId++}`, module)
    },
    unregisterBuffer (state, {id}) {
      store.unregisterModule(`${thisPath}/${id}`)
    }
  }

  return {
    namespaced: true,
    state,
    actions,
    mutations
  }
}

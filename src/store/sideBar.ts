import { createStore } from 'vuex'

export default createStore({
  state: {
    isActive: false
  },
  getters: {
    getIsActive: function(state) {
        return state.isActive;
    },
  },
  mutations: {
    SHOW_SIDEBAR(state, isActive) {
        state.isActive = isActive;
    },
  },
  actions: {
    async showNotification({ commit }) {
        commit("SHOW_SIDEBAR", true);
        setTimeout(() => { commit("SHOW_SIDEBAR"), false}, 1000)
    },
  },
  modules: {
  }
})

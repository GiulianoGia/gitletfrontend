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
    SHOW_NOTIFICATION(state, isActive) {
        state.isActive = isActive;
    },
  },
  actions: {
    async showNotification({ commit }) {
        commit("SHOW_NOTIFICATION", true);
        setTimeout(() => { commit("SHOW_NOTIFICATION"), false}, 1000)
    },
  },
  modules: {
  }
})

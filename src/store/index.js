import { createStore } from 'vuex';

const store = createStore({
  state: {
    userStatus: 'Disetujui', // Default status
  },
  mutations: {
    setUserStatus(state, status) {
      state.userStatus = status;
    }
  },
  actions: {
    updateUserStatus({ commit }, status) {
      commit('setUserStatus', status);
    }
  }
});

export default store;

export const state = () => ({
  jwt: "",
});

// actions
export const actions = {
  SET_JWT_STATUS({ commit }, config) {
    commit("set_jwt_status", config);
  },
};

// mutations
export const mutations = {
  set_jwt_status(state, payload) {
    state.jwt = payload;
  },
};

// getters
export const getters = {
  // getIdx(state) {
  //   return `count: ${state.idx}`;
  // },
};

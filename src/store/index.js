import { createStore } from "vuex";

export default createStore({
  state: {
    children: [],
  },
  getters: {
    getChildren(state) {
      return state.children;
    },
  },
  mutations: {
    setChildren(state, payload) {
      state.children = payload;
    },
  },
  actions: {},
});

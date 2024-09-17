import { createStore } from "vuex";

export default createStore({
  state: {
    person: {},
    children: [],
  },
  getters: {
    getPerson(state) {
      return state.person;
    },
    getChildren(state) {
      return state.children;
    },
  },
  mutations: {
    setPerson(state, person) {
      state.person = structuredClone(person);
    },
    setChildren(state, children) {
      state.children = structuredClone(children);
    },
  },
  actions: {},
});

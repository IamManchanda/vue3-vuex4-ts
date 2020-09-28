import { createStore } from "vuex";

export type State = { counter: number };

const state: State = {
  counter: 0,
};

export default createStore({
  state,
  mutations: {
    increment(state) {
      state.counter += 1;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
  modules: {},
});

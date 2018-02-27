import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0,
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + 'Clicks';
    },
    value: state => {
      return state.value
    }
  },
  mutations: {
    increment: (state, playload) => {
      state.counter += playload;
    },
    decrement: (state, playload) => {
      state.counter -=playload;
    },
    updateValue: (state, playload) => {
      state.value = playload;
    },
  },
  actions: {
    increment: ({ commit }, playload) => {
      commit('increment', playload);
    },
    decrement: ({ commit }, {by, duration}) => {
      setTimeout(() => {
        commit('decrement', by);
      }, duration);
    },
    asyncIncrement: ({commit}) => {
      setTimeout(() => {
        commit('increment');
      }, 2000);
    },
    updateValue: ({commit}, playload) => {
      commit('updateValue', playload);
    },
  }
})
import App from './App.vue';
import Vue from 'vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);


Vue.http.options.root = 'https://vue-resource-3be47.firebaseio.com';

import routes from './router';
// import store from './store';

const router = new VueRouter({
  routes,
  mode: 'history',
});

const store = new Vuex.Store({
  state: {
    Users: {},
  },

  getters: {
    getUsers(state) {
      return state.Users;
    }
  },

  mutations: {
    loadUsers(state, users) {
      state.Users = users;
    }
  },

  actions: {
    loadUsers(state){
      Vue.http.get('data.json').
        then(response => state.commit('loadUsers', response.body));
    },
    saveUserEdits(state, id) {
      Vue.http.put('data.json', ...state.Users).
        then(response => state.commit('loadUsers', response.body));
    },

  },
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

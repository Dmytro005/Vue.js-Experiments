import App from './App.vue';
import Vue from 'vue';
import Vuex from 'vuex';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'https://vue-resource-3be47.firebaseio.com';

import routes from './router';
import store from './store';

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import {routes} from './router';
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

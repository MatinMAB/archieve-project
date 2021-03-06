import Vue from 'vue'
import App from './App.vue'
import "./sass/font.css";
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'

import Particles from "particles.vue";

import VueTypedJs from 'vue-typed-js'


Vue.use(Particles).use(VueTypedJs);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

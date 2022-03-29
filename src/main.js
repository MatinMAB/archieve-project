import Vue from 'vue'
import App from './App.vue'
import "./sass/font.css";
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Particles from "particles.vue";

Vue.use(Particles);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

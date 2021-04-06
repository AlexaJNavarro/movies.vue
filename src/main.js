import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import './assets/app.css'
import 'boxicons'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuesax)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

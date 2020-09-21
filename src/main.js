import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import Moment from 'vue-moment'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css';
 
// variables -------------------
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$API_VERSION = 'v1/';
Vue.prototype.$API_VERSION_2 = 'v2/';
Vue.prototype.$API_URL = 'https://api.eqonaq.kz/api/';

// vue use ---------------------
Vue.use(Vuelidate)
Vue.use(VueToast)
Vue.use(Moment)

// main config -----------------

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

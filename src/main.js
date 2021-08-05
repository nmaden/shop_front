import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import Moment from 'vue-moment'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
import VueProgressBar from 'vue-progressbar'
import IdleVue from 'idle-vue-3'
import { i18n } from './plugins/i18n'
import Scroll from './plugins/scroll'

import VueMask from 'v-mask'
Vue.use(VueMask)

// options -------------------
const options = {
  color: '#ffcc47',
  failedColor: 'red',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

const eventsHub = new Vue()

// variables -------------------
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$API_VERSION = process.env.VUE_APP_API_VERSION;
Vue.prototype.$API_VERSION_2 = process.env.VUE_APP_API_VERSION_2;
Vue.prototype.$API_URL = process.env.VUE_SERVER;


Vue.prototype.$http = axios.create({
  baseURL: 'https://api.kenesmebel.kz/api/v1'
});

// events ----------------------
Vue.prototype.$modal = new Vue()

// vue use ---------------------
Vue.use(Scroll)
Vue.use(Vuelidate)
Vue.use(VueToast)
Vue.use(Moment)
Vue.use(VueProgressBar, options)

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 600000,
  KeepTracking: false
})


// main config -----------------

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')

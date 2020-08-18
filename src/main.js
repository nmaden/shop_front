import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.prototype.$baseUrl = "https://ecodom04.com/backend/api/";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

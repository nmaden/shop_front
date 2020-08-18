import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })],
})

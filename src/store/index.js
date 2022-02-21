import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import user from './model/user'
import shop from './model/shop'
Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    user,shop
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
})]
})

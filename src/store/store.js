
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
import Series from './modules/series/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state, mutations,
  modules: { Series }
})

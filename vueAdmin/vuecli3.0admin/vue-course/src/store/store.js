import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getter'
import saveInLocal from './plugin/save'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    user
  },
  plugins:[ saveInLocal ]
})

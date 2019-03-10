import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Bus from './bus'

Vue.config.productionTip = false

Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   router,
//   store,
//   render: h => {
//     return h('div',{
//       'class':'render',
//       attrs:{
//         id:'liu'
//       },
//       style:'color:pink'
//     },'liuzhen')
//   }
// }).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//不引入以下文件会报错，template or render function not defined.
// import Vue from 'vue/dist/vue.common'

import App from './App'
import router from './router'
import store from './store'

import iView from 'iview'
import './index.less'

import './mock'

Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

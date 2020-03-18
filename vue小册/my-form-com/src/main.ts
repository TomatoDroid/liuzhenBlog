import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Alert from './components/alert/alert'

Vue.config.productionTip = false
Vue.prototype.$alert = Alert

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')

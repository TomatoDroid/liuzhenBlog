import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setToken, getToken } from '@/lib/util'
import store from '@/store/store'

Vue.use(Router)
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // const token = getToken()
  // if(token){
  //   store.dispatch('authorization',token).then(() => {
  //     if(to.name === 'login') next({name:'home'})
  //     else next()
  //   }).catch(err => {
  //     setToken('')
  //     next({name:'login'})
  //   })
  // }else{
  //   if(to.name === 'login') next()
  //   else next({name:'login'})
  // }
  next()
})

export default router

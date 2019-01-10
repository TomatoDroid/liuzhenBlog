import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login';

Vue.use(Router);

export const constantRouterMap = [
  {
    path:'/redirect',
    component:Layout,
    hidden:true,
    children:[
      {
        path:'/redirect/:path*',
        component:() => import('@views/redicect/index')
      }
    ]
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
  ],
});

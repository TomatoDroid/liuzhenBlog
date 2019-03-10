//只做路由列表的配置
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path:'/argu/:name',
    name:'argu',
    component: () => import('@/views/Argu.vue'),
    props:true
  },
  {
    path:'/parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path:'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  {
    path:'/store',
    component: () => import('@/views/Store.vue')
  },
  {
    path:'/count-to',
    component: () => import('@/views/CountView.vue')
  },
  {
    path:"/split-pane",
    name:'split_pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path:'/render',
    name:'render',
    component: () => import('@/views/render-view.vue')
  },
  {
    path:'/menu_page',
    name:'menu_page',
    component: () => import('@/views/menu_page.vue')
  },
  {
    path:'/test-view',
    name:'test-view',
    component: () => import('@/views/test-view.vue')
  },
  {
    path:'*',
    component: () => import('@/views/404.vue')
  }
]
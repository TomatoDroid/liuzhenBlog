import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/form',
        name: 'form',
        component: () => import(/* webpackChunkName: "form" */ '../views/MyForm.vue')
    },
    {
        path: '/emitter',
        name: 'emitter',
        component: () =>
            import(/* webpackChunkName: "emitter" */ '../views/emitterTest/EmitterTest.vue')
    },
    {
        path: '/display',
        name: 'display',
        component: () => import(/* webpackChunkName: "display" */ '../views/Display.vue')
    },
    {
        path: '/alert',
        name: 'alert',
        component: () => import(/* webpackChunkName: "alert" */ '../views/AlertTest.vue')
    },
    {
        path: '/table',
        name: 'table',
        component: () => import(/* webpackChunkName: "table" */ '../views/TableRender.vue')
    },
    {
        path: '/tableSlot',
        name: 'tableSlot',
        component: () => import(/* webpackChunkName: "tableSlot" */ '../views/TableSlot.vue')
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import(/* webpackChunkName: "tableSlot" */ '../views/Tree.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router

const routers = [
    {
        path:'/list',
        meta:{
            title:'商品列表',
        },
        component:(resolve) => {
            require(['./view/list.vue'],resolve);
        }
    },
    {
        path:'/product/:id',
        meta:{
            title:'商品详情'
        },
        component:(resolve) => {
            require(['./view/product.vue'],resolve);
        }
    },
    {
        path:'/cart',
        meta:{
            title:'购物车'
        },
        component:(resolve) => require(['./view/cart.vue'],resolve)
    },
    {
        path:'*',
        redirect: '/list'
    },
]

export default routers;
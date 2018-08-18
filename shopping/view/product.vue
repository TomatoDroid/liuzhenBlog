<template>
    <div v-if="product">
        <div class="product">
            <div class="product-image">
                <img :src="product.image" alt="">
            </div>
            <div class="product-info">
                <h1 class="product-name">{{ product.name }}</h1>
                <div class="product-cost">￥ {{ product.cost }}</div>
                <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
            </div>
        </div>
        <div class="product-desc">
            <h2>产品介绍</h2>
            <img :src="'http://ordfm6aah.bkt.clouddn.com/shop/'+n+'.jpeg'" v-for="n in 10" :key="n">
        </div>
    </div>
</template>
<script>
// 导入产品数据，真实情况并不需要
import product_data from '../product.js';
export default {
    data () {
        return {
            // 获取路由中的参数
            id:parseInt(this.$route.params.id),
            product:null
        }
    },
    methods: {
        getProduct(){
            // 真实环境通ajax获取，这里用异步模拟
            setTimeout( () => {
                this.product = product_data.find( item => item.id === this.id);
            },500);
        },
        // 加入购物车
        handleAddToCart(){
            this.$store.commit('addCart',this.id);
        }
    },
    mounted () {
        // 初始化
        this.getProduct();
    }
}
</script>
<style scoped>
    .product{
        margin: 32px;
        padding: 32px;
        background: #fff;
        border: 1px solid #dddee1;
        border-radius: 10px;
        overflow: hidden;
    }
    .product-image{
        width: 50%;
        height: 550px;
        float: left;
        text-align: center;
    }
    .product-image img{
        height: 100%;
    }
    .product-info{
        width: 50%;
        padding: 150px 0 250px;
        height: 150px;
        float: left;
        text-align: center;
    }
    .product-cost{
        color: #f2352e;
        margin: 8px 0;
    }
    .product-add-cart{
        display: inline-block;
        padding: 6px 64px;
        margin: 8px 0;
        background: #2d8cf0;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }
    .product-desc{
        background: #fff;
        margin: 32px;
        padding: 32px;
        border: 1px solid #dddee1;
        border-radius: 13px;
        text-align: center;
    }
    .product-desc img{
        display: block;
        width: 50%;
        margin: 32px auto;
        padding: 32px;
        border-bottom: 1px solid #dddee1;
    }
</style>



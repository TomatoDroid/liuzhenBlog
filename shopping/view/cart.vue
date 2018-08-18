<template>
    <div class="cart">
        <div class="cart-heaedr">
            <div class="cart-header-title">购物清单</div>
            <div class="cart-header-main">
                <div class="cart-info">商品信息</div>
                <div class="cart-price">单价</div>
                <div class="cart-count">数量</div>
                <div class="cart-cost">小计</div>
                <div class="cart-delete">删除</div>
            </div>
        </div>
        <div class="cart-content">
            <div class="cart-content-main" v-for="(item,index) in cartList" :key="item.id">
                <div class="cart-info">
                    <img :src="productDictList[item.id].image" alt="">
                    <span>{{ productDictList[item.id].name }}</span>
                </div>
                <div class="cart-price">
                    ￥ {{ productDictList[item.id].cost }}
                </div>
                <div class="cart-count">
                    <span class="cart-countrol-minus" @click="handleCount(index,-1)">-</span>
                    {{ item.count }}
                    <span class="cart-countrol-add" @click="handleCount(index,1)">+</span>
                </div>
                <div class="cart-cost">
                    ￥ {{ productDictList[item.id].cost * item.count }}
                </div>
                <div class="cart-delete">
                    <span class="cart-control-delete" @click="handleDelete(index)">删除</span>
                </div>
            </div>
            <div class="cart-empty" v-if="!cartList.length">购物车为空</div>
        </div>
    </div>
</template>
<script>
import product_data from '../product.js';
export default {
    data () {
        return {
            productList : product_data
        }
    },
    computed: {
        cartList(){
            return this.$store.state.productList;
        },
        productDictList(){
            const dict = {};
            this.productList.forEach(item => {
                dict[item.id] = item;
            });
            return dict;
        },
        countAll(){
            let count = 0;
            this.cartList.forEach(item => {
                count +=  item.count;
            });
            return count;
        },
        costAll(){
            let cost = 0;
            this.cartList.forEach(item => {
                cost += this.productDictList[item.id].cost * item.count;
            });
            return cost;
        }
    },
    methods: {
        handleCount(index,count){
            if(count < 0 && this.cartList[index].count === 1) return;
            this.$store.commit('editCartCount',{
                id:this.productDictList[index].id,
                count:count
            });
        },
        handleDelete(){
            this.$store.commit('deleteCart',this.cartList[index].id);
        }
    }
}
</script>
<style scoped>
    .cart{
        margin: 32px;
        background: #ffffff;
        border: 1px solid #dddee1;
        border-radius: 10px;
    }
    .cart-header-title{
        padding: 16px 32px;
        border-bottom: 1px solid #dddee1;
        border-radius: 10px 10px 0 0;
        background: #f8f8f8;
    }
    .cart-header-main{
        padding: 8px 32px;
        overflow: hidden;
        border-bottom: 1px solid #dddee1;
        background: #eee;
        /* overflow: hidden; */
    }
    .cart-empty{
        text-align: center;
        padding: 32px;
    }
    .cart-header-main div{
        text-align: center;
        float: left;
        font-size: 14px;
    }
    div.cart-info{
        width: 60%;
        text-align: left;
    }
    .cart-price{
        width: 10%;
    }
    .cart-count{
        width: 10%;
    }
    .cart-cost{
        width: 10%;
    }
    .cart-delete{
        width: 10%;
    }
    .cart-content-main{
        padding: 0 32px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-bottom: 1px dashed #e9
    }
</style>



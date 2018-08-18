<template>
    <div>
        <div class="header">
            <router-link to="/list" class="header-title">电商网站实例</router-link>
            <div class="header-menu">
                <router-link class="header-menu-cart" to="/cart">
                    购物车
                    <span v-if="cartList.length">{{ cartList.length }}</span>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    computed: {
        cartList(){
            return this.$store.state.cartList;
        }
    }
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    body{
        background: #f8f8f9;
    }
    .header{
        height: 48px;
        line-height: 48px;
        background: rgba(0,0,0,.8);
        color: #fff;
    }
    .header-title{
        padding: 0 32px;
        float: left;
        color: #fff;
    }
    .header-menu{
        float: right;
        margin-right: 32px;
    }
    .header-menu-cart{
        color: #fff;
    }
    .header-menu-cart span{
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 50%;
        background: #ff5500;
        color: #fff;
        font-size: 12px;
    }
</style>


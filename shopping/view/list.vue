<template>
    <div v-show="list.length">
        <div class="list-control">
            <div class="list-control-filter">
                <span>品牌:</span>
                <span class="list-control-filter-item"
                    :class="{on:item === filterBrand}"
                    v-for="item in brands" :key="item"
                    @click="handleFilterBrand(item)">{{ item }}</span>
            </div>
            <div class="list-control-filter">
                <span>颜色:</span>
                <span class="list-control-filter-item"
                    :class="{on:item === filterColor}"
                    v-for="item in colors" :key="item"
                    @click="handleFilterColor(item)">{{ item }}</span>
            </div>
            <div class="list-control-order">
                <span>排序:</span>
                <span class="list-control-order-item" :class="{on:order === ''}"
                    @click="handleOrderDefault">默认
                </span>
                <span class="list-control-order-item" :class="{on:order === 'sales'}"
                    @click="handleOrderSales">销量
                    <template v-if="order === 'sales'">↓</template>
                </span>
                <span class="list-control-order-item" :class="{on:order.indexOf('cost') > -1}"
                    @click="handleOrderCost">价格
                    <template v-if="order === 'cost-asc'">↑</template>
                    <template v-if="order === 'cost-desc'">↓</template>
                </span>
            </div>
        </div>
        <Product v-for="item in filteredAndOrderedList" :key="item.id" :info="item"></Product>
        <div class="product-not-found" v-show="!filteredAndOrderedList.length">暂无相关产品</div>
    </div>
</template>
<script>
import Product from "../components/product.vue";
export default {
    components: {
        Product
    },
    data () {
        return {
            // 排序一句，可选值为：sales(销量) cost-desc(价格降序) cost-asc(价格升序)
            order:'',
            filterColor:'',
            filterBrand:''      
        }
    },
    computed: {
        list(){
            // 从Vuex获取商品列表数据
            return this.$store.state.productList;
        },
        brands(){
            return this.$store.getters.brands;
        },
        colors(){
            return this.$store.getters.colors;
        },
        filteredAndOrderedList(){
            // 复制原有数据
            let list = [...this.list];
            // todo按品牌过滤
            if(this.filterBrand !== ''){
                list = list.filter(item => item.brand === this.filterBrand);
            }
            // todo按颜色过滤
            if(this.filterColor !== ''){
                list = list.filter(item => item.color === this.filterColor);
            }
            // 排序
            if(this.order !== ''){
                if(this.order === 'sales'){
                    list = list.sort((a,b) => b.sales - a.sales);
                }else if(this.order === 'cost-desc'){
                    list = list.sort((a,b) => b.cost - a.cost);
                }else if(this.order === 'cost-asc'){
                    list = list.sort((a,b) => a.cost - b.cost);
                }
            }
            return list;
        }
    },
    mounted () {
        // 初始化时，通过vuex的action来请求数据
        this.$store.dispatch('getProductList');
    },
    methods: {
        handleOrderDefault(){
            this.order = '';
        },
        handleOrderCost(){
            if(this.order === 'cost-asc'){
                this.order = 'cost-desc';
            }else{
                this.order = 'cost-asc';
            }
        },
        handleOrderSales(){
            this.order = 'sales';
        },
        handleFilterColor(color){
            if(this.filterColor === color){
                this.filterColor = '';
            }else{
                this.filterColor = color;
            }
        },
        handleFilterBrand(brand){
            if(this.filterBrand === brand){
                this.filterBrand = '';
            }else{
                this.filterBrand = brand;
            }
        }
    }
}
</script>
<style scoped>
    .product-not-found{
        text-align: center;
        padding: 32px;
    }
    .list-control{
        background: #fff;
        border-radius: 6px;
        margin: 16px;
        padding: 16px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    }
    .list-control-filter{
        margin-bottom: 16px;
    }
    .list-control-filter-item,
    .list-control-order-item{
        cursor: pointer;
        display: inline-block;
        border: 1px solid #e9eaec;
        border-radius: 4px;
        margin-left: 6px;
        padding: 2px 6px;
    }
    .list-control-filter-item.on,
    .list-control-order-item.on{
        background: #f2352e;
        border: 1px solid #f2352e;
        color: #fff;
    }
</style>



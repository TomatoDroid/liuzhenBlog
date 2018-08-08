<template>
    <div>
        <h1>首页</h1>
        <router-link to="/about">跳转到about</router-link>
        <p>Vuebus-随机增加</p>
        <counter :number="number"></counter>
    </div>
</template>
<script>
import Counter from './counter.vue';
export default {
    components: {
        Counter
    },
    data () {
        return {
            number:10
        }
    },
    methods: {
        handleAddRandom(num){
            this.number += num;
        }
    },
    created () {
        this.$bus.on('add',this.handleAddRandom);
    },
    // 注意销毁句柄
    beforeDestroy () {
        this.$bus.off('add',this.handleAddRandom);
    }
}
</script>


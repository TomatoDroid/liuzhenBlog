<template>
    <div>
        <h1>首页</h1>
        count:{{count}}
        <button @click="handleIncrease">+5</button>
        <button @click="handleDecrease">-10</button>
        <p>过滤后的list,小于10的: {{list}}</p>
        <p>过滤后数组的长度: {{length}}</p>
        <button @click="handleActionIncrement">异步操作count</button>
    </div>
</template>
<script>
export default {
    computed: {
        count(){
            return this.$store.state.count;
        },
        list(){
            return this.$store.getters.filteredList;
        },
        length(){
            return this.$store.getters.listCount;
        }
    },
    methods: {
        handleIncrease(){
            this.$store.commit('increament',5);
        },
        handleDecrease(){
            this.$store.commit({
                type:'decrease',
                count:10
            });
        },
        handleActionIncrement(){
            // this.$store.dispatch('increament');
            this.$store.dispatch('asyncIncreament').then(() => {
                console.log('store',this.$store.state.count);
            });
        }
    }
}
</script>


<template>
    <div>
        <p>VueBus</p>
        <p>
            {{number}}
            <button @click="handleAddRandom">随机增加</button>
        </p>
    </div>
</template>
<script>
export default {
    props: {
        number:{
            type:Number
        }
    },
    methods: {
        handleAddRandom(){
            // 随机获取1-100数字
            const num = Math.floor(Math.random() * 100 +1);
            this.$bus.emit('add',num);
        }
    }
}
</script>


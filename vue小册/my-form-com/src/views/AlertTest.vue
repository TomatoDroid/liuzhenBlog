<template>
    <div>
        <p>
            <button @click="handleClick1">alert1</button>
        </p>
        <p>
            <button @click="handleClick2">alert2</button>
        </p>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick1() {
            this.$alert.info({
                content: '你好'
            })
        },
        handleClick2() {
            this.$alert.info({
                content: '延时三秒',
                duration: 30
            })
        }
    }
}
</script>

<style></style>

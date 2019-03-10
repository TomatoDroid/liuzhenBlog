<template>
    <div class="menu-box">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ZMenu'
}
</script>
<style lang="less">
    .menu-box{
        width: 400px;
        height: 400px;
        ul,li{
            list-style: none;
            margin: 0;
            padding: 0;
            color: white;
        }
    }
</style>

<template>
    <ul class="z-submenu">
        <div class="z-submenu-title"  @click="handleClick">
            <slot name="title"></slot>
            <span class="shrink-icon" :style="{transform:`rotateZ(${this.isShow?0:180}deg)`}">^</span>
        </div>
        <div v-if="isShow" class="z-submenu-children">
            <slot></slot>
        </div>
    </ul>
</template>
<script>
export default {
    name:'ZSubmenu',
    data() {
        return {
            isShow:true
        }
    },
    methods: {
        handleClick(){
            this.isShow = !this.isShow
        }
    },
}
</script>
<style lang="less">
    .z-submenu{
        background: rebeccapurple;
        &-title{
            position: relative;
            cursor: pointer;
            // background: greenyellow;
            .shrink-icon{
                position: absolute;
                top: 1px;
                right: 5px;
            }
        }
        &-children{
            padding-left: 10px;
        }
    }
</style>

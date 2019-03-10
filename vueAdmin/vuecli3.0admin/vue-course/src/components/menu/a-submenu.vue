<template>
    <ul class="a-submenu">
        <div class="a-submenu-title"  @click="handleClick">
            <slot name="title"></slot>
            <span class="shrink-icon" :style="{ transform:`rotateZ(${showChild ? 0 : 180}deg)` }">^</span>
        </div>
        <div v-if="showChild" class="a-submenu-child-box">
            <slot></slot>
        </div>
    </ul>
</template>
<script>
export default {
    name:'ASubmenu',
    data() {
        return {
            showChild:true
        }
    },
    methods: {
        handleClick(){
            this.showChild = !this.showChild
        }
    },
}
</script>
<style lang="less">
    .a-submenu{
        background: lightblue;
        &-title{
            background: lightblue;
            position: relative;
            .shrink-icon{
                position: absolute;
                top: 4px;
                right: 10px;
            }
        }
        &-child-box{
            overflow: hidden;
            padding-left: 10px;
        }
        li{
            background: lightblue;
        }
    }
</style>

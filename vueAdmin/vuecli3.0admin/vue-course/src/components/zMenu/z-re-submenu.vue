<template>
    <z-submenu>
        <div slot="title">{{ children.title }}</div>
        <template v-for="(item, index) in children.children">
            <z-menu-item v-if="!item.children" :key="`z_menu_item_${index}`">{{ item.title }}</z-menu-item>
            <z-re-submenu v-else :key="`z_submenu_${index}`" :children="item"></z-re-submenu>
        </template>
    </z-submenu>
</template>
<script>
import ZMenuItem from './z-menu-item.vue'
import ZSubmenu from './z-submenu.vue'

export default {
    name:'ZReSubmenu',
    components:{
        ZMenuItem,
        ZSubmenu
    },
    props:{
        children:{
            type:Object,
            default:() => {}
        }
    }
}
</script>
<style lang="less">

</style>


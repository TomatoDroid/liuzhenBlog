<template>
    <!-- <z-menu>
        <z-menu-item>1111</z-menu-item>
        <z-menu-item>2222</z-menu-item>
        <z-submenu>
            <div slot="title">3333</div>
            <z-menu-item>3333-1</z-menu-item>
            <z-menu-item>3333-2</z-menu-item>
            <z-submenu>
                <div slot="title">3333-3</div>
                <z-menu-item>3333-3-1</z-menu-item>
                <z-menu-item>3333-3-2</z-menu-item>
            </z-submenu>
        </z-submenu>
    </z-menu> -->
    <z-menu>
        <template v-for="(item, index) in list">
            <z-menu-item v-if="!item.children" :key="`z_menu_item_${index}`">{{ item.title }}</z-menu-item>
            <z-re-submenu v-else :key="`z_re_submenu_${index}`" :children="item"></z-re-submenu>
        </template>
    </z-menu>
</template>
<script>
import ZMenuCol from '_c/zMenu'
const { ZMenu,ZMenuItem,ZReSubmenu,ZSubmenu } = ZMenuCol
export default {
    name:'TestView',
    components:{
        ZMenu,
        ZMenuItem,
        ZReSubmenu,
        ZSubmenu
    },
    data() {
        return {
            list:[
                {
                    title:'1111'
                },
                {
                    title:'2222'
                },
                {
                    title:'3333',
                    children:[
                        {
                            title:'3333-1'
                        },
                        {
                            title:'3333-2'
                        },
                        {
                            title:'3333-3',
                            children:[
                                {
                                    title:'3333-3-1'
                                }
                            ]
                        },
                    ]
                },
            ]
        }
    },
}
</script>
<template>
    <div class="menu-box">
        <!-- <a-menu>
            <a-menu-item>111</a-menu-item>
            <a-menu-item>222</a-menu-item>
            <a-submenu>
                <div slot="title">333</div>
                <a-menu-item>333-111</a-menu-item>
                <a-submenu>
                    <div slot="title">333-222</div>
                    <a-menu-item>333-2-1</a-menu-item>
                    <a-menu-item>333-2-2</a-menu-item>
                </a-submenu>
            </a-submenu>
        </a-menu> -->
        <a-menu>
            <template v-for="(item, index) in list">
                <a-menu-item v-if="!item.children" :key="`menu-item_${index}`">{{item.title}}</a-menu-item>
                <re-submenu v-else :key="`menu-item_${index}`" :index="index" :parent="item"></re-submenu>
            </template>
        </a-menu>
    </div>
</template>
<script>
import menuComponent from '_c/menu'
import ReSubmenu from './re-submenu.vue'
const {AMenu, AMenuItem, ASubmenu} = menuComponent
export default {
    name:'menu_page',
    components:{
        AMenu, 
        AMenuItem, 
        ASubmenu,
        ReSubmenu
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
                        }
                    ]
                },
            ]
        }
    },
}
</script>
<style lang="less">
    .menu-box{
        width: 300px;
        height: 400px;
    }
</style>

<template>
    <a-submenu>
        <div slot="title">{{ parent.title }}</div>
        <template v-for="(item, i) in parent.children">
            <a-menu-item v-if="!item.children" :key="`a_menu_item_${index}_${i}`">{{ item.title }}</a-menu-item>
            <re-submenu v-else :key="`a_menu_item_${index}_${i}`" :parent="item"></re-submenu>
        </template>
    </a-submenu>
</template>
<script>
import menuComponent from '_c/menu'
const {AMenuItem, ASubmenu} = menuComponent
export default {
    name:'ReSubmenu',
    components:{
        AMenuItem, 
        ASubmenu
    },
    props:{
        parent:{
            type:Object,
            default:() => {}
        },
        index:{
            type:Number,
        }
    }
}
</script>
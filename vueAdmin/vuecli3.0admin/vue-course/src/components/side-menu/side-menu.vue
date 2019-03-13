<template>
    <div class="side-menu-wrapper">
        <slot></slot>
        <Menu v-show="!collapsed" width="auto" theme="dark"  @on-select="handleSelect">
            <template v-for="item in parent">
                <MenuItem v-if="!item.children" :key="`menu_item_${item.name}`" :name="item.name">
                    <Icon :type="item.icon" size="24"></Icon>
                    {{ item.title }}
                </MenuItem>
                <re-submenu v-else :key="`menu_item_${item.name}`" :name="item.name" :parent="item"></re-submenu>
            </template>
        </Menu>
        <div v-show="collapsed" class="drop-wrapper">
            <template v-for="item in parent">
                <Tooltip v-if="!item.children" :key="`icon_${item.name}`" 
                 placement="right" transfer :content="item.title">
                    <span @click="handleClick(item.name)" class="drop-down-span">
                        <Icon :type="item.icon"  color="#fff" size="24"/>
                    </span>
                </Tooltip>
                <re-dropdown @on-select="handleSelect" v-else :key="`dropdown_${item.name}`" 
                :show-title="false" 
                icon-color="#fff" :parent="item">
                </re-dropdown>
            </template>
        </div>
    </div>
</template>
<script>
import ReSubmenu from './re-submenu'
import ReDropdown from './re-dropdown'
export default {
    name:'SideMenu',
    components:{
        ReSubmenu,
        ReDropdown
    },
    props:{
        parent:{
            type:Array,
            default: () => []
        },
        collapsed:{
            type:Boolean,
            default: false
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleSelect(name){
            console.log(name)
        },
        handleClick(name){
            console.log(name)
        }
    },
}
</script>
<style lang="less">
.side-menu-wrapper{
    .ivu-tooltip, .drop-down-span{
        display:block;
        padding: 5px 0;
        text-align: center;
    }
    .drop-wrapper > .ivu-dropdown{
        display: block;
        padding: 5px;
        margin: 0 auto;
    }
}
</style>

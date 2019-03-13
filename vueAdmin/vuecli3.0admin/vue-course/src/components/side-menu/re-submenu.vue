<template>
    <Submenu :name="parent.name">
        <template slot="title">
            <Icon :type="parent.icon" size="24"/>
            {{ parent.title }}
        </template>
        <template v-for="item in parent.children">
            <MenuItem v-if="!item.children" :key="`menu_${item.name}`" :name="item.name">
                <Icon :type="item.icon" size="24" />
                {{ item.title }}
            </MenuItem>
            <re-submenu v-else :parent="item" :key="`menu_${item.name}`" :name="item.name"></re-submenu>
        </template>
    </Submenu>
</template>
<script>
export default {
    name:"ReSubmenu",
    props:{
        parent:{
            type:Object,
            default:() => {}
        }
    }
}
</script>
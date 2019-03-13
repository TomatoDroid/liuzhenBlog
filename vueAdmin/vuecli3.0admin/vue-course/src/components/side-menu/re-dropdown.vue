<template>
    <Dropdown @on-click="handleClick"  placement="right-start">
        <span class="drop-down-span" :style="titleStyle">
            <Icon :type="parent.icon" :color="iconColor" :size="24"/>
            <span v-if="showTitle">{{ parent.title }}</span>
        </span>
        <DropdownMenu slot="list">
            <template v-for="item in parent.children">
                <DropdownItem v-if="!item.children" :key="`drop${item.name}`" :name="item.name">
                    <Icon :type="item.icon" color="#515a6e" :size="24"/> 
                    {{ item.title }}
                </DropdownItem>
                <re-dropdown v-else :key="`drop${item.name}`" :parent="item"></re-dropdown>
            </template>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
export default {
    name:"ReDropdown",
    props:{
        parent:{
            type:Object,
            default:() => {}
        },
        showTitle:{
            type:Boolean,
            default: true
        },
        iconColor:{
            type:String,
            default: '#515a6e'
        }
    },
    computed: {
        titleStyle(){
            return{
                textAlign: this.showTitle ? 'left' : 'center',
                paddingLeft: this.showTitle ? '16px' : ''
            }
        }
    },
    methods: {
        handleClick(name){
            if(!this.showTitle) this.$emit('on-select',name)
        }
    },
}
</script>

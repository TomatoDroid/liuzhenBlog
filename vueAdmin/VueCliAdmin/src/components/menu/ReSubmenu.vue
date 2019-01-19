<template>
  <a-submenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item, i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">
        {{ item.title }}
      </a-menu-item>
      <re-submenu v-else :parent="item" :index="i" :key="`menu_item_${index}_${i}`"></re-submenu>
    </template>
  </a-submenu>
</template>
<script>
import ASubmenu from './ASubmenu.vue'
import AMenuItem from './AMenuItem.vue'
export default {
  name:'ReSubmenu',
  components:{
    ASubmenu,
    AMenuItem,
  },
  props:{
    parent:{
      type:Object,
      default:() => ({})
    },
    index:Number
  }
}
</script>

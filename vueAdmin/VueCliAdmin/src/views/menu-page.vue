<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>1</a-menu-item>
      <a-submenu>
        <div slot="title">2</div>
        <a-menu-item>2-1</a-menu-item>
        <a-menu-item>2-2</a-menu-item>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">
          {{ item.title }}
        </a-menu-item>
        <re-submenu v-else :parent="item" :index="index" :key="`menu_item_${index}` "></re-submenu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { AMenu, AMenuItem, ASubmenu,ReSubmenu } from '../components/menu'

export default {
  components:{
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  },
  data() {
    return {
      list:[
        {title:'111'},
        {title:'222'},
        {
          title:'333',
          children:[
            {title:'333-1'},
            {title:'333-2'},
          ]
        },
        {
          title:'444',
          children:[
            {title:'444-1'},
            {title:'444-2'},
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

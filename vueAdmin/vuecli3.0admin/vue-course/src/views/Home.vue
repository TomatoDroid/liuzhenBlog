<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button class="btn">0.5px按钮</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="less">
.home{
  .btn{
    border: none;
    padding: 0 16px;
    box-shadow:  inset 0 0 1px #000;
    // border: 1px solid black;
  }
}
</style>

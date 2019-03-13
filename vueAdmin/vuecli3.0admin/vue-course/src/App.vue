<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'argu',params:{name:123}}">About</router-link>
      <button @click="handleClick">返回上一页</button>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(){
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="less">
html, body{
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

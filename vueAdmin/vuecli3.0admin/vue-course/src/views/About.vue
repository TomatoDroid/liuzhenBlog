<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ $route.params.user }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.$router.params)
  },
}
</script>


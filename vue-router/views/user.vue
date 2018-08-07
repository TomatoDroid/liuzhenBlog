<template>
    <div>用户id{{$route.params.id}}</div>
</template>
<script>
export default {
    mounted () {
        console.log(this.$route.params);
        console.log('route',this.$route);
    }
}
</script>


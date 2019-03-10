<template>
    <div>
        来自AInput:{{ msg }}
    </div>
</template>
<script>
export default {
    name:'AShow',
    data() {
        return {
            msg:''
        }
    },
    mounted() {
        this.$bus.$on('btn',e => {
            this.msg = e
        })
    },
}
</script>
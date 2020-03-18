const code = `<template>
    <div>
        <input v-model="message">
        <span>{{ message }}</span>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: ''
            }
        }
    }
</script>
<style>
span {
    color:red;
}
</style>
`

export default code

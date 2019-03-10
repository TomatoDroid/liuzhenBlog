<template>
    <div>
        {{ name }}
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type:Number,
            default:'liuzhen'
        }
    }
}
</script>
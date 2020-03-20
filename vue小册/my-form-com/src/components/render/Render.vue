<template>
    <div>
        <render :render="render"></render>
    </div>
</template>

<script>
import Render from './render'

export default {
    components: {
        Render
    },
    props: {
        render: Function
    }
}
</script>

<style></style>

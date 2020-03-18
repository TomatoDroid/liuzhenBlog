<template>
    <div>
        <h3>动态渲染.vue文件的组件</h3>
        <i-display :code="code"></i-display>
    </div>
</template>

<script>
import iDisplay from '../components/display/Display.vue'
import defaultCode from './default-code'

export default {
    components: {
        iDisplay
    },
    data() {
        return {
            code: defaultCode
        }
    }
}
</script>

<style></style>

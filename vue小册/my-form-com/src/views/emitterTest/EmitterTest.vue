<template>
    <div>
        <h3>broadcast</h3>
        <component-a></component-a>
        <p>你好啊</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ComponentA from './A.vue'

@Component({
    components: {
        ComponentA
    }
})
export default class extends Vue {}
</script>

<style></style>

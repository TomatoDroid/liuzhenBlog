<template>
    <div>
        <p>ComponentB</p>
        <button @click="handleClick">向A-dispatch消息</button>
        <c></c>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Emitter from '../../mixins/emitter'
import C from './C.vue'

@Component({
    name: 'ComponentB',
    components: {
        C
    }
})
export default class extends Mixins(Emitter) {
    private created() {
        this.$on('from-a', this.showMessage)
    }
    showMessage(message: string) {
        console.log('B：', message)
    }
    handleClick() {
        this.dispatch('ComponentA', 'from-b', 'B的消息')
    }
}
</script>

<style></style>

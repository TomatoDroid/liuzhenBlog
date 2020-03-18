<template>
    <div>
        <p>ComponentB</p>
        <button @click="handleClick">向A-dispatch消息</button>
        <span>fromA:{{ value }}</span>
        <c></c>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'
import Emitter from '../../mixins/emitter'
import C from './C.vue'

@Component({
    name: 'ComponentB',
    components: {
        C
    }
})
export default class extends Mixins(Emitter) {
    @Prop(String) value?: string

    private created() {
        this.$on('from-a', this.showMessage)
    }
    showMessage(message: string) {
        console.log('B：', message)
    }
    handleClick() {
        this.dispatch('ComponentA', 'from-b', 'B的消息')
        this.$emit('update:value', 'a')
    }
}
</script>

<style></style>

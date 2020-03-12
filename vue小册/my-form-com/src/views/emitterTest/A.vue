<template>
    <div>
        <button @click="handleClick">向BC发送消息</button>
        <component-b></component-b>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Emitter from '../../mixins/emitter'
import ComponentB from './B.vue'

@Component({
    name: 'ComponentA',
    components: {
        ComponentB
    }
})
export default class extends Mixins(Emitter) {
    handleClick() {
        this.broadcast('ComponentB', 'from-a', 'A的消息')
        this.broadcast('ComponentC', 'from-a', { name: 'A', sex: 24 })
    }
    created() {
        this.$on('from-b', this.showMessage)
        this.$on('from-c', this.showCMessage)
    }
    showMessage(message: string) {
        console.log('A：', message)
    }
    showCMessage(message: string) {
        console.log('A:', message)
    }
}
</script>

<style></style>

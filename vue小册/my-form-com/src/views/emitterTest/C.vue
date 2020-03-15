<template>
    <p>
        <button @click="handleClick">向A发送消息</button>
    </p>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Emitter from '../../mixins/emitter'
import { findComponentUpward, findBrothersComponents } from '../../utils/assist'

@Component({
    name: 'ComponentC'
})
export default class extends Mixins(Emitter) {
    handleClick() {
        this.dispatch('ComponentA', 'from-c', [1, 2, 3, 4])
    }
    showMeeage(message: string) {
        console.log('C:', message)
    }
    created() {
        this.$on('from-a', this.showMeeage)
    }
    mounted() {
        const comA: any = findComponentUpward(this, 'ComponentA')
        comA.sayHello()
        const brothers = findBrothersComponents(this, 'ComponentC', false)
        console.log(brothers)
    }
    sayHello() {
        console.log('hello I am C')
    }
}
</script>

<style></style>

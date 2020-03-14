<template>
    <input type="text" :value="currentValue" @input="handleInput" @blur="handleBlur" />
</template>

<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import Emitter from '../../mixins/emitter'

@Component({
    name: 'iInput'
})
export default class extends Mixins(Emitter) {
    @Prop({
        type: String,
        default: ''
    })
    value: string | undefined

    currentValue = this.value

    @Watch('value')
    handleChangeValue(val: string) {
        this.currentValue = val
    }
    handleInput(event: { target: HTMLInputElement }) {
        const value = event.target.value
        this.currentValue = value
        this.$emit('input', value)
        this.dispatch('iFormItem', 'on-form-change', value)
    }
    handleBlur() {
        this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
}
</script>

<style></style>

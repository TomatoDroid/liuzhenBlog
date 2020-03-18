<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator'
import Emitter from '../../mixins/emitter'
import { findComponentsDownward } from '../../utils/assist'

@Component({
    name: 'iCheckboxGroup'
})
export default class extends Mixins(Emitter) {
    @Prop({ type: Array, default: [] }) readonly value?: []

    private currentVlaue = this.value
    private childrens = []

    @Watch('value')
    handleWatch() {
        this.updateModel(true)
    }

    mounted() {
        this.updateModel(true)
    }

    updateModel(update: boolean) {
        this.childrens = findComponentsDownward(this, 'iCheckbox')
        if (this.childrens) {
            const value: any[] = this.value as any[]
            this.childrens.forEach((child: any) => {
                child.model = value
                if (update) {
                    child.currentVlaue = value?.indexOf(child.label) >= 0
                    child.group = true
                }
            })
        }
    }

    change(data: any) {
        this.currentVlaue = data
        this.$emit('input', data)
        this.$emit('on-change', data)
        this.dispatch('iFormItem', 'on-form-change', data)
    }
}
</script>

<style></style>

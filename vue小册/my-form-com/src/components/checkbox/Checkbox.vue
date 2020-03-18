<template>
    <label>
        <span>
            <input
                v-if="group"
                type="checkbox"
                :disabled="disabled"
                :value="label"
                v-model="model"
                @change="change"
            />
            <input
                v-else
                type="checkbox"
                :disabled="disabled"
                :checked="currentValue"
                @change="change"
            />
        </span>
        <slot></slot>
    </label>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator'
import Emitter from '../../mixins/emitter'
import { findComponentUpward } from '../../utils/assist'

@Component({
    name: 'iCheckbox'
})
export default class extends Mixins(Emitter) {
    @Prop({ type: Boolean, default: false }) readonly disabled?: boolean
    @Prop({ type: [String, Number, Boolean], default: false }) readonly value?:
        | string
        | number
        | boolean
    @Prop({ type: [String, Number, Boolean], default: true }) readonly trueValue?:
        | string
        | number
        | boolean
    @Prop({ type: [String, Number, Boolean], default: false }) readonly falseValue?:
        | string
        | number
        | boolean
    @Prop([String, Number, Boolean]) readonly label: string | number | boolean | undefined

    currentValue = this.value
    model = []
    group = false
    parent: any = null

    @Watch('value')
    handleWatch(val: boolean) {
        if (val === this.trueValue || val === this.falseValue) {
            this.updateModel()
        } else {
            throw 'Value should be trueValue or falseValue'
        }
    }
    mounted() {
        this.parent = findComponentUpward(this, 'iCheckboxGroup')
        if (this.parent) {
            this.group = true
        }
        if (this.group) {
            this.parent?.updateModel(true)
        } else {
            this.updateModel()
        }
    }
    updateModel() {
        this.currentValue = this.value === this.trueValue
    }

    change(event: { target: HTMLInputElement }) {
        if (this.disabled) {
            return false
        }

        const checked = event.target.checked
        this.currentValue = checked

        const value = checked ? this.trueValue : this.falseValue
        this.$emit('input', value)

        if (this.group) {
            this.parent.change(this.model)
        } else {
            this.$emit('on-change', value)
            this.dispatch('iFormItem', 'on-form-change', value)
        }
    }
}
</script>

<style></style>

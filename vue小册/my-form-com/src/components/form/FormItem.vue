<template>
    <div>
        <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">
            {{ label }}
        </label>
        <div>
            <slot></slot>
            <div v-if="validateStatus === 'error'" class="i-form-item-message">
                {{ validateMessage }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Emitter from '../../mixins/emitter'
import { Component, Vue, Prop, Mixins, Inject } from 'vue-property-decorator'
import AsyncValidate from 'async-validator'

@Component({
    name: 'iFormItem'
})
export default class extends Mixins(Vue, Emitter) {
    @Prop(String)
    readonly label!: string
    @Prop(String)
    readonly prop!: string

    @Inject('form') readonly form: any
    //当前表单的数据
    get fieldVlaue() {
        return this.form.model[this.prop]
    }
    private isRequired = false
    private validateStatus = '' // 校验状态
    private validateMessage = '' // 校验不通过时的信息
    private initialValue = '' // 存储初始值，以便恢复默认值

    mounted() {
        if (this.prop) {
            this.dispatch('iForm', 'on-form-item-add', this)
            this.initialValue = this.fieldVlaue
            this.setRules()
        }
    }

    beforeDestory() {
        this.dispatch('iForm', 'on-form-item-remove', this)
    }

    getRules() {
        // 获取当前formitem的验证规则
        let formRules = this.form.rules
        formRules = formRules ? this.form.rules[this.prop] : []
        return [].concat(formRules || [])
    }
    getFilteredRule(trigger: 'blur' | 'change') {
        const rules = this.getRules()
        return rules.filter(
            (rule: { trigger: string }) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
        )
    }

    validate(trigger: 'blur' | 'change', callback?: any) {
        const rules = this.getFilteredRule(trigger)
        if (!rules || rules.length === 0) {
            return true
        }
        // 设置校验状态
        this.validateStatus = 'validating'
        // 以下为 async-validator 库的调用方法
        const descriptor: any = {}
        descriptor[this.prop] = rules
        const validator = new AsyncValidate(descriptor)

        const model: any = {}
        model[this.prop] = this.fieldVlaue
        validator.validate(model, { firstFields: true }, (errors) => {
            this.validateStatus = !errors ? 'success' : 'error'
            this.validateMessage = errors ? errors[0].message : ''
            callback(this.validateMessage)
        })
    }

    setRules() {
        const rules = this.getRules()
        if (rules.length) {
            rules.every((rule: any) => {
                this.isRequired = rule.required
            })
        }
        this.$on('on-form-blur', this.onFieldBlur)
        this.$on('on-form-change', this.onFieldChange)
    }

    resetFileds() {
        this.validateStatus = ''
        this.validateMessage = ''
        this.form.model[this.prop] = this.initialValue
    }

    onFieldChange() {
        this.validate('change')
    }
    onFieldBlur() {
        this.validate('blur')
    }
}
</script>

<style>
.i-form-item-label-required::before {
    content: '*';
    color: red;
}
.i-form-item-message {
    color: red;
}
</style>

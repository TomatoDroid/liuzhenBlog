<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Provide } from 'vue-property-decorator'
import Emitter from '../../mixins/emitter'

@Component({
    name: 'iForm'
})
export default class extends Mixins(Emitter) {
    @Prop(Object)
    model: any
    @Prop(Object)
    rules: any

    @Provide('form') form = this

    fileds: any[] = []

    created() {
        this.$on('on-form-item-add', (filed: any) => {
            if (filed) {
                this.fileds.push(filed)
            }
        })
        this.$on('on-form-item-remove', (filed: any) => {
            if (filed.prop) {
                this.fileds.splice(this.fileds.indexOf(filed), 1)
            }
        })
    }
    // 公开方法：全部重置数据
    resetFileds() {
        this.fileds.forEach((filed) => {
            filed.resetFileds()
        })
    }
    // 公开方法：全部校验数据，支持 Promise
    validate(callback: Function) {
        return new Promise((resolve, reject) => {
            let valid = true
            let count = 0
            this.fileds.forEach((filed) => {
                filed.validate('', (error: any) => {
                    if (error) {
                        valid = false
                        reject(valid)
                    }
                    if (++count === this.fileds.length) {
                        resolve(valid)
                        if (typeof callback === 'function') {
                            callback(valid)
                        }
                    }
                })
            })
        })
    }
}
</script>

<style></style>

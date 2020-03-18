<template>
    <div>
        <h3>具有验证功能的表单组件</h3>
        <i-form ref="form" :model="formValidate" :rules="rulesValidate">
            <i-form-item label="用户名" prop="name">
                <i-input v-model="formValidate.name"></i-input>
            </i-form-item>
            <i-form-item label="邮箱" prop="mail">
                <i-input v-model="formValidate.mail"></i-input>
            </i-form-item>
            <i-form-item label="单选框">
                <checkbox-group v-model="checked">
                    <checkbox label="vue">vue1</checkbox>
                    <checkbox label="react">react</checkbox>
                    <checkbox label="angular">angular</checkbox>
                </checkbox-group>
            </i-form-item>
        </i-form>
        <button @click="submit('form')">提交</button>
        <button @click="reset">重置</button>
    </div>
</template>

<script lang="ts">
import iForm from '../components/form/Form.vue'
import iFormItem from '../components/form/FormItem.vue'
import iInput from '../components/form/Input.vue'
import { Vue, Component, Ref } from 'vue-property-decorator'
import Checkbox from '../components/checkbox/Checkbox.vue'
import CheckboxGroup from '../components/checkbox/CheckboxGroup.vue'

@Component({
    name: 'MyForm',
    components: {
        iForm,
        iFormItem,
        iInput,
        Checkbox,
        CheckboxGroup
    }
})
export default class extends Vue {
    // data
    formValidate = {
        name: 'liuzhen',
        mail: '770'
    }
    rulesValidate = {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
            { required: true, message: '邮箱格式不能为空', trigger: 'blur' },
            {
                type: 'email',
                message: '邮箱格式不正确',
                trigger: 'blur'
            }
        ]
    }
    checked = ['vue', 'react']
    //   lifycircle
    private beforeCreate(): void {
        console.log('beforeCreate')
    }
    private created(): void {
        console.log('created')
    }
    private beforeMount(): void {
        console.log('beforeMount')
    }
    private mounted(): void {
        console.log('mounted')
    }
    private beforeUpdate(): void {
        console.log('beforeUpdate')
    }
    private updated(): void {
        console.log('updated')
    }
    private beforeDestory(): void {
        console.log('beforeDestory')
    }
    private destoryed(): void {
        console.log('destoryed')
    }

    @Ref() readonly form?: iForm

    submit() {
        this.form?.validate((valid: boolean) => {
            if (valid) {
                window.alert('成功')
            }
            return false
        })
    }

    reset() {
        this.form?.resetFileds()
    }
}
</script>

<style></style>

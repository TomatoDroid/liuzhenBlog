<template>
    <div>
        <i-form :model="form" :rules="rules">
            <i-form-item label="用户名" prop="name">
                <i-input v-model="form.name"></i-input>
            </i-form-item>
            <i-form-item label="邮箱" prop="mail">
                <i-input v-model="form.mail"></i-input>
            </i-form-item>
        </i-form>
    </div>
</template>

<script lang="ts">
import iForm from '../components/form/Form.vue'
import iFormItem from '../components/form/FormItem.vue'
import iInput from '../components/form/Input.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name: 'MyForm',
    components: {
        iForm,
        iFormItem,
        iInput
    }
})
export default class extends Vue {
    // data
    form = {
        name: '',
        mail: ''
    }
    rules = {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
            { required: true, message: '邮箱格式不能为空', trigger: 'blur' },
            {
                type: 'mail',
                message: '邮箱格式不正确',
                trigger: 'blur'
            }
        ]
    }
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
}
</script>

<style></style>

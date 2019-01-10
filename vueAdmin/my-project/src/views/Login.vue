<template>
    <Row type="flex" justify="center">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" style="width: 300px">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button :loading="loading" type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
        </Form>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                },
                loading:false,
                redirect:undefined,
            }
        },
        watch: {
            $route:{
                handler:function(route){
                    this.redirect = route.query && route.query.redirect;
                },
                immediate:true
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        this.$store.dispatch('LoginByUsername',this.formInline).then(() => {
                            this.loading = false;
                            this.$router.push({path:this.redirect || '/'});
                        }).catch(() => {
                            this.loading = false;
                        });
                        this.$Message.success('Success!');
                    } else {
                        console.log('error submit');
                        this.$Message.error('Fail!');
                        return false;
                    }
                })
            }
        }
    }
</script>
<style scoped>

</style>


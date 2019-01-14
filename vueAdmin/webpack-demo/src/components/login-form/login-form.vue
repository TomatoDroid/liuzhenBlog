<template>
	<Form ref="loginForm" :model="form" :rules="rules" @key.enter.native="handleSubmit">
		<FormItem prop="username">
			<Input v-model="form.username" placeholder="请输入用户名"/>
			<span>
				<Icon :size="16" type="ios-parse"></Icon>
			</span>
		</FormItem>
		<FormItem prop="password">
			<Input type="password" v-model="form.password" placeholder="请输入密码"/>
			<span>
				<Icon :size="14" type="md-lock"></Icon>
			</span>
		</FormItem>
		<FormItem>
			<Button @click="handleSubmit" type="primary" long>登录</Button>
		</FormItem>
	</Form>
</template>

<script>
export default {
	name:'LoginForm',
	props:{
		userNameRules:{
			type:Array,
			default: () => {
				return [
					{required:true, message:'账号不能为空', trigger:'blur'}
				]
			}
		},
		passwordRules:{
			type:Array,
			default: () => {
				return [
					{required:true, message:'密码不能为空', trigger:'blur'}
				]
			}
		}
	},
	data() {
		return {
			form:{
				username:'admin',
				password:''
			}
		}
	},
	computed: {
		rules(){
			return{
				userName:this.userNameRules,
				password:this.passwordRules
			}
		}
	},
	methods: {
		handleSubmit(){
			this.$refs.loginForm.validate((valid) => {
				if(valid){
					this.$emit('on-success-valid',{
						userName:this.form.userName,
						password:this.form.password
					})
				}
			})
		}
	},
}
</script>

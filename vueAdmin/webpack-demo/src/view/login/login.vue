<style lang="less">
  @import './login.less';
</style>

<template>
    <div class="login">
      <div class="login-con">
				<Card icon="log-in" title="欢迎登录" :bordered="false">
					<div class="form-con">
						<login-form @on-success-valid="handleSubmit"></login-form>
						<p class="login-tip">输入任意密码即可</p>
					</div>
				</Card>
      </div>
    </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'

export default {
	components:{
		LoginForm
	},
	computed: {
		...mapActions([
			'handleLogin',
			'getUserInfo'
		])
	},
	methods: {
		handleSubmit({username, password}){
			this.handleLogin({username, password}).then(res => {
				this.getUserInfo().then(res => {
					this.$route.push({
						name:this.$config.homeName
					})
				})
			})
		}
	},
}
</script>

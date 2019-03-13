<template>
    <div>
        <p><span>用户名：</span><input v-model="userName"/></p>
        <p><span>密码：</span><input type="password" v-model="password"/></p>
        <p>
            <button @click="handleSubmit">登录</button>
        </p>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name:'login_page',
    data() {
        return {
            userName:'',
            password:''
        }
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        handleSubmit(){
            this.login({
                userName: this.userName,
                password: this.password
            }).then(() => {
                this.$router.push({name:'home'})
            }).catch(error => {
                console.log(error)
            })
        }
    },
}
</script>
var app = new Vue({
    el:'#app',
    data:{
        message:'',
        username:'',
        list:[]
    },
    methods: {
        handleSend(){
            if(this.username === ''){
                window.alert('请填写用户名');
                return;
            }
            if(this.message === ''){
                window.alert('请填写内容');
                return;
            }
            this.list.push({
                name:this.username,
                message:this.message
            });
            this.message = '';
        },
        handleReply(index){
            var name = this.list[index].name;
            this.message = '回复@'+name+': ';
            // 直接调用子组件
            this.$refs.message.focus();
        },
        handleDelete(index){
            this.list.splice(index,1);
        }
    }
});
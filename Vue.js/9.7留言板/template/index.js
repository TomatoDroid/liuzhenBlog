var app = new Vue({
    el:'#app',
    data:{
        username:'',
        message:'',
        list:[]
    },
    methods: {
        handleSend(){
            this.list.push({
                name:this.username,
                message:this.message
            });
            this.message = '';
        },
        handleReply(index){
            var name = this.list[index].name;
            this.message = '回复：'+name+':';
            this.$refs.message.focus();
        },
        handleDelete(index){
            this.list.splice(index,1);
        }
    }
});
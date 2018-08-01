var app = new Vue({
    el:'#app',
    data:{
        message:'',
        username:'',
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
        handleReplay(index){
            var name = this.list[index].name;
            this.message = '回复@'+name+':';
        }
    }
});
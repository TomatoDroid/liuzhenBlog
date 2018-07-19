var app = new Vue({
    el:"#app",
    data:{
        show:flase
    },
    methods:{
        handleClose(){
            this.show = false;
        }
    }
});
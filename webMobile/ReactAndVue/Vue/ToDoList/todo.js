(function(exports){
    exports.app = new Vue({
        el:'.todoapp',
        data:{
            todos:[],
            newTodo:''
        },
        methods:{
            addTodo:function(){
                var value = this.newTodo && this.newTodo.trim();
                if(!value) return;
                this.todos.push({
                    id:this.todos.length ? this.todos[this.todos.length - 1].id++ : 1,
                    title:value,
                    completed:true
                });
                this.newTodo = '';
            },
            removeTodo:function(todo){
                this.todos.splice(this.todos.indexOf(todo),1);
            }
        }
    });
})(window);
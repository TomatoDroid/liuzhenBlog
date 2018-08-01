Vue.component('list',{
    props: {
        type:Array,
        default:function(){
            return []
        }
    },
    render(h){
        var _this = this;
        var lists = [];
        this.list.forEach(function(msg,index){
            var node = h('div',{
                // 普通的特性
                attrs:{
                    class:'list-item'
                }
            },[
                h('span',msg.name+':'),
                h('div',{
                    attrs:{
                        class:'list-msg'
                    }
                },[
                    h('p',meg.message),
                    h('a',{
                        attrs:{
                            class:'list-replay'
                        },
                        on:{
                            click:function(){
                                _this.handleReplay(index);
                            }
                        }
                    },'回复')
                ])
            ]);
            lists.push(node);
        });
        if(this.list.length){
            return h('div',{
                attrs:{
                    class:'list'
                }
            },lists);
        }else{
            return h('div',{
                attrs:{
                    class:'list-nothing'
                }
            },'留言列表为空');
        }
    },
    methods: {
        handleReplay(index){
            this.$emit('replay',index);
        }
    }
});
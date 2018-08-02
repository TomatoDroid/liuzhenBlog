Vue.component('list',{
    props: {
        list:{
            type:Array,
            default:function(){
                return [];
            }
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
                    h('p',msg.message),
                    h('div',{
                        attrs:{
                            class:'list-btn'
                        }
                    },[
                        h('a',{
                            attrs:{
                                class:'list-replay'
                            },
                            on:{
                                click:function(){
                                    _this.handleReply(index);
                                }
                            }
                        },'回复'),
                        h('a',{
                            attrs:{
                                class:'list-delete'
                            },
                            on:{
                                click:function(){
                                    _this.handleDelete(index);
                                }
                            }
                        },'删除')
                    ])
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
        handleReply(index){
            this.$emit('reply',index);
        },
        handleDelete(index){            
            this.$emit('delete',index);
        }
    }
});
Vue.component('vInput',{
    props:{
        value:{
            type:[String,Number],
            default:''
        }
    },
    render(h){
        var _this = this;
        return h('div',[
            h('span','昵称:'),
            h('input',{
                attrs:{
                    type:'text'
                },
                domProps:{
                    value:this.value
                },
                on:{
                    // v-model原理，动态绑定value，并且监听input事件，把输入的内容
                    // 通过$emit('input')派发给父组件
                    input(event){
                        _this.value = event.target.value;
                        _this.emit('input',event.target.value);
                    }
                }
            })
        ]);
    },
});

Vue.component('vTextarea',{
    props:{
        value:{
            type:[String,Number],
            default:''
        }
    },
    render(h){
        var _this = this;
        return h('div',[
            h('span','留言内容'),
            h('textarea',{
                attrs:{
                    placeholder:'请输入留言内容'
                },
                domProps:{
                    value:this.value
                },
                ref:'message',
                on:{
                    input(event){
                        _this.value = event.target.value;
                        _this.$emit('input',event.target.value);
                    }
                }
            })
        ]);
    }
});
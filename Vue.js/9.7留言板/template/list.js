Vue.component('list',{
    props: {
        list:{
            type:Array,
            default:function(){
                return [];
            }
        }
    },
    template:`
        <div class="list" v-if="list.length > 0">
            <div class="list-item"  v-for="(item,index) in list">
                <span>{{item.name}}:</span>
                <div class="list-msg">
                    <p>{{item.message}}</p>
                    <div class="list-btn">
                        <a class="list-replay" @click="handleReply(index)">回复</a>
                        <a class="list-delete" @click="handleDelete(index)">删除</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-nothing" v-else>暂无留言</div>
    `,
    methods: {
        handleReply(index){
            this.$emit('reply',index);
        },
        handleDelete(index){
            this.$emit('delete',index);
        }
    }
});
Vue.component('vInput',{
    props: {
        value:{
            type:[String,Number],
            default:''
        }
    },
    data () {
        return {
            currentValue:this.value      
        }
    },
    watch: {
        currentValue(val){
            this.currentValue = val;
            this.$emit('input',val);
        }
    },
    template:`
        <div>
            <span>昵称：</span>
            <input type="text" v-model="currentValue">
        </div>
    `,
    methods:{

    }
});

Vue.component('vTextarea',{
    props:{
        value:{
            type:[String,Number],
            default:''
        }
    },
    data(){
        return{
            currentValue:this.value
        }
    },
    watch:{
        currentValue(val){
            this.$emit('input',val);
        },
        value(val){
            this.currentValue = val;
        }
    },
    template:`
        <div>
            <span>留言内容:</span>
            <textarea v-model="currentValue" ref="message" placeholder="请输入留言"></textarea>
        </div>
    `,
    methods: {
        focus(){
            this.$refs.message.focus();
        }
    }
});
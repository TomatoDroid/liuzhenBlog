Vue.component('my-button',{
    props: {
        color:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    template:`
        <button :style="style" :disabled="disabled" @click="handleClick">
            <slot></slot>
        </button>
    `,
    data () {
        return {
            
        }
    },
    computed: {
        style(){
            return {
                'background': this.color
            }
        }
    },
    methods: {
        handleClick(e){
            this.$emit('click',e);
        }
    }
});
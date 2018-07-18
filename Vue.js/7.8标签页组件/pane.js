Vue.component('pane',{
    name:'pane',
    template:`
        <div class="pane" v-show="show">
            <slot></slot>
        </div>`,
    data:function(){
        return{
            show:true,
            paneClosable:this.closable
        }
    },
    props: {
        name:{
            type:String
        },
        label:{
            type:String,
            default:''
        },
        closable:{
            type:String,
            default:''
        }
    },
    methods:{
        updateNav(){
            this.$parent.updateNav();
        }
    },
    watch: {
        label(){
            this.updateNav();
        }
    },
    mounted () {
        this.updateNav();
        this.$emit('tabClose',this.paneClosable);
    }
});
Vue.component('pane',{
    name:'pane',
    props: {
        name:{
            type:String,
            default:'',
        },
        label:{
            type:String,
            default:''
        },
        closable:{
            type:Boolean,
            default:false
        }
    },
    template:`
        <transition name="slide-fade">
            <div class="pane" v-show="show">
                <slot></slot>
            </div>
        </transition>
        `,
    data () {
        return {
            show:true
        }
    },
    watch: {
        label(){
            this.updateNav();
        }
    },
    methods: {
        updateNav(){
            this.$parent.updateNav();
        }
    },
    mounted () {
        this.updateNav();
    },
    beforeDestroy () {
        this.updateNav();
    }
});
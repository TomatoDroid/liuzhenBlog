<template>
    <div>
        <span :id="eleId"></span>
    </div>
</template>
<script>
import CountUp,{ options } from 'countup'

export default {
    name:'CountTo',
    data() {
        return {
            counter:null
        }
    },
    props:{
        // 起始值
        startVal:{
            type:Number,
            default:-1000
        },
        // 最终值
        endVal:{
            type:Number,
            required: true
        },
        // 表示小数点后保留几位小数
        decimal:{
            type:Number,
            default:2
        },
        // 渐变时长
        duration:{
            type:Number,
            default:1
        },
        //动画延迟
        delay:{
            type:Number,
            default:0
        },
        useEasing:{
            type:Boolean,
            default: false
        },
        useGrouping:{
            type:Boolean,
            default: false
        },
        separator:{
            type:String,
            default:'+'
        },
    },
    // 使用vue组件的id保证id唯一
    computed: {
        eleId(){
            return `count_up_${this._uid}`
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.counter = new CountUp(this.eleId, this.startVal, this.endVal)
            setTimeout(() => {
               if (!this.counter.error) this.counter.start()
            }, this.delay);
        })
    },
}
</script>
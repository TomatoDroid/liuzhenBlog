<template>
    <div class="split-pane-wrapper" ref="outer">
        <div class="pane pane-left" :style="{width:leftOffsetPercent,paddingLeft:`${triggerWidth/2}px`}">
            <slot name="left"></slot>
        </div>
        <div class="pane-trigger-com" @mousedown="handleMousedown" :style="{left:triggerLeft,width:`${triggerWidth}px`}"></div>
        <div class="pane pane-right" :style="{left:leftOffsetPercent,paddingLeft:`${triggerWidth/2}px`}">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'SplitPane',
    props:{
        value:{
            type:Number,
            default:0.5
        },
        triggerWidth:{
            type:Number,
            default:8
        },
        min:{
            type:Number,
            default:0.1
        },
        max:{
            type:Number,
            default:0.9
        }
    },
    data() {
        return {
            canMove:false,
            // 初始偏移量
            initOffset:0
        }
    },
    computed: {
        leftOffsetPercent(){
            return `${this.value*100}%`
        },
        triggerLeft(){
            // calc运算符两边要保留空格
            return `calc(${this.leftOffsetPercent} - ${this.triggerWidth/2}px)`
        }
    },
    methods: {
        handleMousedown(event){
            document.addEventListener('mousemove',this.handleMousemove)
            document.addEventListener('mouseup',this.handleMouseup)
            this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
            this.canMove = true
        },
        handleMousemove(event){
            // 鼠标距容器的距离=鼠标距离浏览器边界和父容器距浏览器边界的距离
            if(!this.canMove) return
            const clientRect = this.$refs.outer.getBoundingClientRect()
            let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth/2 - clientRect.left) / clientRect.width
            if(offsetPercent < this.min) offsetPercent = this.min
            if(offsetPercent > this.max) offsetPercent = this.max
            // this.value = offsetPercent
            // this.$emit('input',offsetPercent)
            this.$emit('update:value',offsetPercent)
        },
        handleMouseup(){
            this.canMove = false
        }
    },
}
</script>
<style lang="less">
    .split-pane-wrapper{
        width: 100%;
        height: 100%;
        position: relative;
        .pane{
            position: absolute;
            height: 100%;
            top: 0;
            &-left{
                // width: 30%;
                background: palevioletred;
            }
            &-right{
                // left: 30%;
                right: 0;
                bottom: 0;
                background: palegreen;
            }
            &-trigger-com{
                // width: 8px;
                height: 100%;
                background: rebeccapurple;
                position: absolute;
                top: 0;
                z-index: 10;
                user-select: none;
                cursor: col-resize;
            }
        }
    }
</style>

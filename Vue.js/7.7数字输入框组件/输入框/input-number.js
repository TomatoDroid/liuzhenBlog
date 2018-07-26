function isValueNumber(val){
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(val+'');
}

Vue.component('input-number',{
    props: {
        value:{
            type:Number,
            default:0
        },
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:-Infinity
        },
        step:{
            type:Number,
            default:1
        }
    },
    template:`
        <div class="input-number">
            <input type="text" :value="currentValue" @change="handleChange"  @keyup.up="handleIncrease"  @keyup.down="handleReduce">
            <button @click="handleReduce" :disabled="currentValue <= min">-</button>
            <button @click="handleIncrease" :disabled="currentValue >= max">+</button>
        </div>
    `,
    data () {
        return {
            currentValue:this.value
        }
    },
    watch: {
        currentValue(val){
            this.$emit('input',val);
        },
        value(val){
            this.updateValue(val);
        }
    },
    methods: {
        handleReduce(){
            if(this.currentValue <= this.min) return;
            this.currentValue -= this.step;
        },
        handleIncrease(){
            if(this.currentValue >= this.max) return;
            this.currentValue += this.step;
        },
        updateValue(val){
            if(val > this.max) val = this.max;
            if(val < this.min) val = this.min;
            this.currentValue = val;
        },
        handleChange(event){
            var val = event.target.value.trim();
            var max = this.max;
            var min = this.min;
            if(isValueNumber(val)){
                val = Number(val);
                this.currentValue = val;
                if(val < min){
                    this.currentValue = min;
                }
                if(val > max){
                    this.currentValue = max;
                }
            }else{
                event.target.value = this.currentValue;
            }
        }
    },
    mounted () {
        this.updateValue(this.value);
    }
});
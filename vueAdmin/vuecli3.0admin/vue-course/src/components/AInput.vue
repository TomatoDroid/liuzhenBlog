<template>
    <div>
        <input @input="handleInput" :value="value">
        <button @click="handleBtn">点我</button>
    </div>
</template>
<script>
export default {
    name:'AInput',
    props:{
        value:{
            type:[String, Number],
            default:''
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
      handleInput(event){
          this.$emit('input', event.target.value)
      },
      handleBtn(){
          this.$bus.$emit('btn',this.value)
      }  
    },
}
</script>
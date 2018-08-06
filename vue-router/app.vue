<template>
    <div>
        <vTitle title="Vue组件化"></vTitle>
        <vButton @click="handleClick" color="blueviolet">点击</vButton>
        <p>
            <img src="./images/sql.jpg" alt="" style="width:200px;">
        </p>
    </div>
</template>
<script>
import vTitle from './title.vue';
import vButton from './button.vue';

export default {
    components: {
        vTitle,
        vButton
    },
    methods: {
        handleClick(e){
            console.log(e);
        }
    }
}
</script>
<style scoped>
    div{
        font-size: 24px;
        color: blueviolet;
    }
</style>



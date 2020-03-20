<template>
    <div>
        <p>
            <button @click="handleClick1">alert1</button>
        </p>
        <p>
            <button @click="handleClick2">alert2</button>
        </p>
        <div>
            <h3>函数式组件</h3>
            <render :render="render"></render>
        </div>
        <slot-ul :data="list">
            <template v-slot:default="{ li }">
                {{ li.price }}
            </template>
        </slot-ul>
    </div>
</template>

<script>
import Render from '../components/render/Render.vue'
import SlotUl from '../components/slotScope/index.vue'

export default {
    components: {
        Render,
        SlotUl
    },
    data() {
        return {
            render: (h) => {
                return h(
                    'div',
                    {
                        style: {
                            color: 'red'
                        }
                    },
                    '自定义内容'
                )
            },
            list: [
                { name: 'book', price: 1 },
                { name: 'book1', price: 2 },
                { name: 'book2', price: 3 },
                { name: 'book3', price: 44 },
                { name: 'book4', price: 6 },
                { name: 'book5', price: 123 }
            ]
        }
    },
    methods: {
        handleClick1() {
            this.$alert.info({
                content: '你好'
            })
        },
        handleClick2() {
            this.$alert.info({
                content: '延时三秒',
                duration: 30
            })
        }
    }
}
</script>

<style></style>

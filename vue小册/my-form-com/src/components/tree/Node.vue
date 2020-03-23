<template>
    <ul class="tree-ul">
        <li class="tree-li">
            <span class="tree-expand" @click="handleExpend">
                <span v-if="data.children && data.children.length && !data.expand">+</span>
                <span v-if="data.children && data.children.length && data.expand">-</span>
            </span>
            <i-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck"></i-checkbox>
            <span>{{ data.title }}</span>
            <template v-if="data.expand">
                <tree-node
                    v-for="(item, index) in data.children"
                    :key="index"
                    :data="item"
                    :showCheckbox="showCheckbox"
                ></tree-node>
            </template>
        </li>
    </ul>
</template>

<script>
import ICheckbox from '../../components/checkbox/Checkbox.vue'
import { findComponentUpward } from '../../utils/assist'

export default {
    name: 'TreeNode',
    components: {
        ICheckbox
    },
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        },
        showCheckbox: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        'data.children': {
            handler(data) {
                if (data) {
                    const checkAll = !data.some((item) => !item.checked)
                    this.$set(this.data, 'checked', checkAll)
                }
            },
            deep: true
        }
    },
    data() {
        return {
            tree: findComponentUpward(this, 'Tree')
        }
    },
    methods: {
        handleExpend() {
            this.$set(this.data, 'expand', !this.data.expand)

            if (this.tree) {
                this.tree.emitEvent('on-taggle-expand', this.data)
            }
        },
        handleCheck(checked) {
            this.updateTreeDown(this.data, checked)

            if (this.tree) {
                this.tree.emitEvent('on-check-change', this.data)
            }
        },
        updateTreeDown(data, checked) {
            this.$set(data, 'checked', checked)

            if (data.children && data.children.length) {
                data.children.forEach((item) => {
                    this.updateTreeDown(item, checked)
                })
            }
        }
    }
}
</script>

<style>
.tree-ul,
.tree-li {
    list-style: none;
    margin-left: 10px;
}
.tree-expand {
    cursor: pointer;
}
</style>

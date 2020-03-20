<template>
    <table>
        <thead>
            <tr>
                <th v-for="(col, index) in columns" :key="index">{{ col.title }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                <td v-for="(col, index) in columns" :key="`td-${index}`">
                    <template v-if="'render' in col">
                        <render
                            :row="row"
                            :column="col"
                            :index="rowIndex"
                            :render="col.render"
                        ></render>
                    </template>
                    <template v-else-if="'slot' in col">
                        <slot :row="row" :column="col" :index="rowIndex" :name="col.slot"></slot>
                    </template>
                    <template v-else>{{ row[col.key] }}</template>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Render from './render'

@Component({
    name: 'TableRender',
    components: {
        Render
    }
})
export default class extends Vue {
    @Prop({
        type: Array,
        default: () => []
    })
    columns?: Array<any>
    @Prop({
        type: Array,
        default: () => []
    })
    data?: Array<any>
}
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
}
table th {
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
}
table td,
table th {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
}
</style>

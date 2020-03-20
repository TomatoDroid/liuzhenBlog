<template>
    <table-slot :data="data" :columns="columns">
        <template v-slot:name="{ row, index }">
            <input type="text" v-model="editName" v-if="index === editIndex" />
            <span v-else>{{ row.name }}</span>
        </template>
        <template v-slot:age="{ row, index }">
            <input type="text" v-model="editAge" v-if="index === editIndex" />
            <span v-else>{{ row.age }}</span>
        </template>
        <template v-slot:birthday="{ row, index }">
            <input type="text" v-model="editBirthday" v-if="index === editIndex" />
            <span v-else>{{ getBirthday(row.birthday) }}</span>
        </template>
        <template v-slot:address="{ row, index }">
            <input type="text" v-model="editAddress" v-if="index === editIndex" />
            <span v-else>{{ row.address }}</span>
        </template>
        <template v-slot:action="{ row, index }">
            <div v-if="index === editIndex">
                <button @click="handleSave(index)" :style="{ marginRight: '10px' }">保存</button>
                <button @click="cancel">取消</button>
            </div>
            <div v-else>
                <button @click="update(row, index)">修改</button>
            </div>
        </template>
    </table-slot>
</template>

<script>
import TableSlot from '../components/tableSlot/Table.vue'

export default {
    components: {
        TableSlot
    },
    data() {
        return {
            editName: '',
            editAge: '',
            editAddress: '',
            editBirthday: '',
            editIndex: -1,

            columns: [
                {
                    title: '姓名',
                    slot: 'name'
                },
                {
                    title: '年龄',
                    slot: 'age'
                },
                {
                    title: '出生日期',
                    slot: 'birthday'
                },
                {
                    title: '地址',
                    slot: 'address'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ],
            data: [
                {
                    name: '王小明',
                    age: 18,
                    birthday: '919526400000',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    birthday: '696096000000',
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    birthday: '563472000000',
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    birthday: '687024000000',
                    address: '深圳市南山区深南大道'
                }
            ]
        }
    },
    methods: {
        update(row, index) {
            this.editName = row.name
            this.editAge = row.age
            this.editAddress = row.address
            this.editBirthday = row.birthday
            this.editIndex = index
        },
        handleSave(index) {
            this.data[index].name = this.editName
            this.data[index].age = this.editAge
            this.data[index].address = this.editAddress
            this.data[index].birthday = this.editBirthday
            this.editIndex = -1
        },
        cancel() {
            this.editIndex = -1
        },
        getBirthday(time) {
            const date = new Date(parseInt(time))
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return `${year}-${month}-${day}`
        }
    }
}
</script>

<style></style>

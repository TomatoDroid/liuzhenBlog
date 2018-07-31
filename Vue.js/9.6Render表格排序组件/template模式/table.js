Vue.component('vTable',{
    props: {
        columns:{
            type:Array,
            default:function(){
                return [];
            }
        },
        data:{
            type:Array,
            default:function(){
                return [];
            }
        }
    },
    data(){
        return {
            currentColumns:[],
            currentData:[],
        }
    },
    template:`
        <table>
            <th v-for="(col,index) in currentColumns">
                {{col.title}}
                <a v-if="col.sortable" :class="{on:col._sortType === 'asc'}" @click="handleSortByAsc(index)">↑</a>
                <a v-if="col.sortable" :class="{on:col._sortType === 'desc'}" @click="handleSortByDesc(index)">↓</a>
            </th>
            <tr v-for="(row,index) in currentData">
                <td v-for="(value,key,index) in row">
                    <span v-if="key !== '_index'">{{value}}</span>
                </td>
            </tr>
        </table>
    `,
    methods: {
        makeColumns(){
            this.currentColumns = this.columns.map(function(col,index){
                col._sortType = 'normal';
                col._index = index;
                return col;
            }); 
        },
        makeData(){
            this.currentData = this.data.map(function(row,index){
                row._index = index;
                return row;
            });
        },
        handleSortByAsc(index){
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col){
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'asc';
            this.currentData.sort(function(a,b){
                return a[key] > b[key] ? 1 : -1;
            });
        },
        handleSortByDesc(index){
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col){
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'desc';
            this.currentData.sort(function(a,b){
                return a[key] < b[key] ? 1 : -1;
            });
        }
    },
    mounted () {
        this.makeColumns();
        this.makeData();
    },
    watch: {
        data(){
            this.makeData();
            // 返回的是数组
            var sortedColumn = this.currentColumns.filter(function(col){
                return col._sortType !== 'normal';
            });
            if(sortedColumn.length > 0){
                if(sortedColumn[0]._sortType === 'asc'){
                    this.handleSortByAsc(sortedColumn[0]._index);
                }else{
                    this.handleSortByDesc(sortedColumn[0]._index);
                }
            }
        }
    }
});
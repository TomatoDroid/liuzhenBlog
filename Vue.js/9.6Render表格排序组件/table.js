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
    data () {
        return {
            currentColumns:[],
            currentData:[]
        }
    },
    // 这里的h只是换了个名字 就是createElement
    render(h){
        var _this = this;
        var trs = [];
        // 每一行
        this.currentData.forEach(function(row){
            var tds = [];
            // 每一列
            _this.currentColumns.forEach(function(cell){
                tds.push(h('td',row[cell.key]));
            });
            trs.push(h('tr',tds));
        });
        var ths = [];
        this.currentColumns.forEach(function(col,index){
            if(col.sortable){
                ths.push(h('th',[
                    h('span',col.title),
                    //升序
                    h('a',{
                        class:{
                            on:col._sortType === 'asc'
                        },
                        on:{
                            click:function(){
                                _this.handleSortByAsc(index);
                            }
                        }
                    },'↑'),
                    h('a',{
                        class:{
                            on:col._sortType === 'desc'
                        },
                        on:{
                            click:function(){
                                _this.handleSortByDesc(index);
                            }
                        }
                    },'↓')
                ]));
            }else if(col.width){
                ths.push(h('th',{
                    style:{
                        width:col.width+'px'
                    }
                },
                col.title));
            }else{
                ths.push(h('th',col.title));
            }
        });
        return h('table',[
            h('thead',[
                h('tr',ths)
            ]),
            h('tbody',trs)
        ])
    },
    methods: {
        makeColumns(){
            this.currentColumns = this.columns.map(function(col,index){
                // 添加一个字段标识当前排序的状态,后续使用
                col._sortType = 'normal';
                // 添加字段标识当前列的数组中的索引，后续使用
                col._index = index;
                return col;
            })
        },
        makeData(){
            this.currentData = this.data.map(function(row,index){
                // 添加一个字段标识当前行在数组中的索引，后续使用
                row._index = index;
                return row;
            })
        },
        handleSortByAsc(index){
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col){
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'asc';
            this.currentData.sort(function(a,b){
                return a[key] > b[key] ? 1: -1;
            });
        },
        handleSortByDesc(index){
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col){
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'desc';
            this.currentData.sort(function(a,b){
                return a[key] < b[key] ? 1: -1;
            });
        }
    },
    mounted () {
        //初始化调用
        this.makeColumns();
        this.makeData();
    },
    watch: {
        data(){
            this.makeData();
            var sortedColumn = this.currentColumns.filter(function(col,index){
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
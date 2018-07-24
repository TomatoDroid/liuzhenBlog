var app = new Vue({
    el:'#app',
    data:{
        lists:[
            ['电子产品',
                {
                    id:1,
                    name:'Iphone7',
                    price:6188,
                    count:1,
                    checked:false
                },
                {
                    id:2,
                    name:'Iphone8',
                    price:6555,
                    count:1,
                    checked:false
                },
                {
                    id:3,
                    name:'HuaWei',
                    price:5000,
                    count:2,
                    checked:false
                },
                {
                    id:4,
                    name:'魅族',
                    price:2000,
                    count:4,
                    checked:false
                }
            ],
            ['果蔬',
                {
                    id:1,
                    name:'苹果',
                    price:5,
                    count:1,
                    checked:false
                }, 
                {
                    id:2,
                    name:'梨',
                    price:5,
                    count:3,
                    checked:false
                }, 
                {
                    id:3,
                    name:'西瓜',
                    price:20,
                    count:1,
                    checked:false
                }, 
            ],
            
            
        ],
        allChecked:false
    },
    methods: {
        handleReduce(index){
            if(this.lists[index].count === 1) return;
            this.lists[index].count --;
        },
        handleAdd(index){
            this.lists[index].count ++;
        },
        handleRemove(index){
            this.lists.splice(index,1);
        },
        allCheck(){
            this.allChecked = event.target.checked;
            for(let i=0,len = this.lists.length;i<len;i++){
                this.lists[i].checked = event.target.checked;
            }
        },
        checkbox(index){
            this.lists[index].checked = event.target.checked;
            for(let i=0,len = this.lists.length;i<len;i++){
                if(this.lists[i].checked === false){
                    this.allChecked = false;
                    return;
                }
                this.allChecked = true;
            }
        }
    },
    computed: {
        totalCount(){
            let len = this.lists.length;
            let totalCount = 0;
            for(let i=0;i<len;i++){
                if(this.lists[i].checked){
                    totalCount += this.lists[i].count * this.lists[i].price;
                }
            }
            return totalCount;
        }
    }
});
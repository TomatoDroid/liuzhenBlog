Vue.component('tabs',{
    template:'\
    <div class="tabs">\
        <div class="tabs-bar">\
            <!-- 标签页标题 这里要用v-for -->\
            <div \
                :class="tabCls(item)"\
                v-for="(item,index) in navList"\
                @click="handleChange(index)">\
                {{item.label}}\
                </div>\
        </div>\
        <div class="tabs-content">\
            <!-- 这里的slot就是嵌套的pane-->\
            <slot></slot>\
        </div>\
    </div>',
    data:function(){
        return {
            currentValue : this.value,
            //用于渲染tabs的标题
            navList:[]
        }
    },
    props: {
        value:{
            type:[String,Number]
        }
    },
    methods: {
        getTabs(){
            //通过遍历子组件，得到所有的pane组件
            return this.$children.filter(function(item){
                return item.$options.name === 'pane';
            });
        },
        updateNav(){
            this.navList = [];
            //设置对this的应用，在function回调里，this指向的并不是Vue的实例
            var _this = this;
            this.getTabs().forEach(function(pane,index){
                _this.navList.push({
                    label:pane.label,
                    name:pane.name || index
                });
                //如果没有给pane设置name，默认设置他的索引
                if(!pane.name) pane.name = index;
                //设置当前选中的tab索引,在后面介绍
                if(index === 0){
                    if(!_this.currentValue){
                        _this.currentValue = pane.name || index;
                    }
                }
            });
            this.updateStatus();
        },
        updateStatus(){
            var tabs = this.getTabs();
            var _this = this;
            //显示当前选中的tab对应的pane组件，隐藏没有选中的
            tabs.forEach(function(tab){
                return tab.show = tab.name === _this.currentValue;
            });
        },
        tabCls:function(item){
            return [
                'tabs-tab',
                {
                    //给当前选中的tab加一个class
                    'tabs-tab-active':item.name === this.currentValue
                }
            ]
        },
        //点击tab标题时触发
        handleChange:function(index){
            var nav = this.navList[index];
            var name = nav.name;
            //改变当前选中的tab，并触发下面的额watch
            this.currentValue = name;
            //更新value
            this.$emit('input',name);
            //触发一个自定义事件 ，供父级适用
            this.$emit('on-click',name);
        }
    },
    watch: {
        value:function(val){
            this.currentValue = val;
        },
        currentValue:function(){
            //在当前选中的tab发生变化时，更新pane的显示状态
            this.updateStatus();
        }
    }
});
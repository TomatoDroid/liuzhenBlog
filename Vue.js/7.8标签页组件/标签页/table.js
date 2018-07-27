Vue.component('tabs',{
    props: {
        value:{
            type:[String,Number]
        }
    },
    template:`
        <div class="tabs">
            <div class="tabs-bar">
                <div :class="tabCls(item)" v-for="(item,index) in navLists" @click="handleChange(index)">
                    <span @click.stop="handleDel(index)" v-show="item.closable">×</span>
                    {{item.label}}
                </div>
            </div>
            <div class="tabs-contains">
                <slot></slot>
            </div>
        </div>
    `,
    data () {
        return {
            currentValue : this.value,
            navLists:[]
        }
    },
    methods: {
        handleChange(index){
            var nav = this.navLists[index];
            var name = nav.name;
            this.currentValue = name;
            this.$emit('input',name);
            this.$emit('on-click',name);
        },
        tabCls(item){
            return [
                'tabs-tab',
                {
                    'tabs-tab-active':item.name === this.currentValue
                }
            ]
        },
        getTabs(){
            return this.$children.filter(function(item){
                return item.$options.name === 'pane';
            });
        },
        updateNav(){
            this.navLists = [];
            var _this = this;
            this.getTabs().forEach(function(pane,index){
                _this.navLists.push({
                    label:pane.label,
                    name:pane.name || index,
                    closable:pane.closable || false
                });
                if(!pane.name) pane.name = index;
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
            tabs.forEach(function(tab){
                return tab.show = tab.name === _this.currentValue && tab.closable;
            });
        },
        handleDel(index){
            var tabs = this.getTabs();
            this.navLists.splice(index,1);
            tabs[index].show = false;
        }
    },
    watch: {
        currentValue(){
            this.updateStatus();
        },
        value(val){
            this.currentValue = val;
        }
    }
});
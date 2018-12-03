function Vue(options){
    var self = this;
    this.data = options.data;
    this.methods = options.methods;

    Object.keys(this.data).forEach(function(key){
        self.proxyKeys(key);
    });

    observe(this.data);
    new Compile(options.el,this);
    options.mounted.call(this);//所有事情处理好之后执行mounted函数
};

Vue.prototype = {
    proxyKeys:function(key){
        var self = this;
        Object.defineProperty(this,key,{
            enumerable:false,
            configurable:true,
            get:function(){
                return self.data[key];
            },
            set:function(newVal){
                self.data[key] = newVal;
            }
        });
    }
}


// 26飞福州 7:30 MU5399 410$ 经停武汉 4个半小时
// 27晚上飞上海  18:55 MU5661 330$
// 1 飞太原 7:45 MU9163 410$

// 27 太原南 7:40--10:21  打的 15分钟  11点到机场就行吧
// 27 福州 12:40 MF8162 497$ 2时35分 约15:15到
// 28 上海 19:00-8:30 413$ MU5661
// 2 太原 10：45 MU2401 330$
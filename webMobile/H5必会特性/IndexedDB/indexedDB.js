// 声明数据库构造函数
function LocalDB(dbName,tableName){
    this.dbName = dbName;
    this.tableName = tableName;
    this.db = null;
}
// 在原型链上注册open方法，完成打开数据库的操作
LocalDB.prototype.open = function(callback){
    var _this = this;
    // 打开数据库的动作
    var request = window.indexedDB.open(_this.dbName);
    // 打开成功后的回调函数
    request.onsuccess = function(event){
        // 获取打开的结果，数据库实例
        _this.db = request.result;
        callback && callback();
    }
    // 第一次创建数据库触发该事件
    request.onupgradeneeded = function(event){
        // 获取数据库实例
        var db = request.result;
        // 检查是否存在该表
        if(!db.objectStoreNames.contains(_this.tableName)){
            db.createObjectStore(_this.tableName,{
                keyPath:'id',
                autoIncrement:true
            });
        }
    }
};
// 获取数据表的实例
LocalDB.prototype.getStore = function(){
    var transaction = this.db.transaction(this.tableName,'readwrite');
    var objStore = transaction.objectStore(this.tableName);
    return objStore;
}
// 保存一条数据：支持添加和修改
LocalDB.prototype.set = function(data,callback){
    var objStore = this.getStore();
    var request = data.id ? objStore.put(data) : objStore.add(data);
    request.onsuccess = function(event){
        callback && callback(event.target.result);
    }
}
// 获取一条数据
LocalDB.prototype.get = function(id,callback){
    var objStore = this.getStore();
    var request = objStore.get(id);
    request.onsuccess = function(event){
        callback && callback(event.target.result);
    }
}
// 获取表中的所有数据
LocalDB.prototype.getAll = function(callback){
    var objStore = this.getStore();
    // 打开数据游标
    var request = objStore.openCursor();
    request.onsuccess = function(event){
        var cursor = event.target.result;
        if(cursor){
            callback && callback(cursor.value);
            cursor.continue();
        }
    }
}
// 删除数据
LocalDB.prototype.remove = function(id){
    var objStore = this.getStore();
    objStore.delete(id);
}

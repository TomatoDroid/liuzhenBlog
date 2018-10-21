var VehicleFactory = function(subType,superType){
    if(typeof VehicleFactory === 'function'){
        // 缓存类
        function F(){};
        // 继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();
        // 将子类constroctor指向子类
        subType.constructor = subType;
        // 子类原型继承父类
        subType.prototype = new F();
    }else{
        throw new Error('未创建该抽象类');
    }
}
// 小汽车抽象类
VehicleFactory.Car = function(){
    this.type = 'Car';
}
VehicleFactory.Car.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用');
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用');
    }
}
// 公交车抽象类
VehicleFactory.Bus = function(){
    this.type = 'Bus';
}
VehicleFactory.Bus.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用');
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用');
    }
}
// 货车抽象类
VehicleFactory.Truck = function(){
    this.type = 'Truck';
}
VehicleFactory.Truck.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用');
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用');
    }
}

//宝马汽车类
var BWM = function(price,speed){
    this.price = price;
    this.speed = speed;
}
VehicleFactory(BWM,'Car');
BWM.prototype.getPrice = function(){
    return this.price;
}
BWM.prototype.getSpeed = function(){
    return this.speed;
}

// 测试类
var bwm = new BWM(8888,200);
console.log(bwm.getPrice());
console.log(bwm.type);
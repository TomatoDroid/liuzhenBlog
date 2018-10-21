// 关注创建对象的细节
var Human = function(param){
    this.skill = param && param.skill || '保密';
    this.hobby = param && param.hobby || '保密';
}
Human.prototype = {
    getSkill:function(){
        return this.skill;
    },
    getHobby:function(){
        return this.hobby;
    }
}
// 实例化姓名类
var Named = function(name){
    var that = this;
    (function(name, that){
        that.wholeName = name;
        if(name.indexOf(' ') > 1){
            that.FirstName = name.slice(0,name.indexOf(' '));
            that.LastName = name.slice(name.indexOf(' '));
        }
    })(name, that);
}
// 实例化职位
var Work = function(work){
    var that = this;
    (function(work, that){
        switch(work){
            case 'code':
                that.work = '工程师';
                that.workDescript = '每天沉醉于编程';
                break;
            case 'ui':
            case 'ue':
                that.work = '设计师';
                that.workDescript = '设计是一种艺术';
                break;
            case 'teach':
                that.work = '教师';
                that.workDescript = '分享是一种快乐';
                break;
            default:
                break;
        }
    })(work, that);
}
Work.prototype.changeWork = function(work){
    this.work = work;
}
Work.prototype.changeDescript = function(setence){
    this.workDescript = setence;
}
/**
 * 应聘者建造者
 */
var Person = function(name,work){
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}

var person = new Person('liu zhen','code');
console.log(person.skill);
console.log(person.name.FirstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDescript('更改一下职位描述');
console.log(person.work.workDescript);
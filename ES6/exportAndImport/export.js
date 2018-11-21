// 一个文件就是一个模块
//  1 输出变量
/* export var firstName = 'liu';
export var lastName = 'zhen';
export var birth = 1995; */

// 2 在模块文件底部统一输出
/* var firstName = 'liu';
var lastName = 'zhen';
var birth = 1995;
export { firstName, lastName ,birth}; */

// 3 输出模块也可使用as进行重命名
// export { fs as firstName};

// 4 export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// 500毫秒后 foo的值会改变
/* export var foo = 'bar';
setTimeout(() => foo = 'baz', 500); */

// 5 一个模块中只能存在一个 export default

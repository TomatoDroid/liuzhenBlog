// 字符串翻转
var str = 'abcdef';
// 第一种
console.log(str.split('').reverse().join(''));

// 第二种
for(var i=str.length;i>=0;i--){
    console.log(str.charAt(i));
}
// 第三种
function reverse(str){
    if(str.length === 0) return null;
    var i = str.length;
    var dstr = '';
    while(i>=0){
        dstr += str.charAt(i);
        i--;
    }
    return dstr;
}
console.log(reverse('nihao'));
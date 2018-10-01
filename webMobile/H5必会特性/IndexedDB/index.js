// 预先定义便签代码
var divstr = '<div class="note"><a class="close">X</a><textarea></textarea></div>';
// 实例化便签数据库
var db = new LocalDB('db1','notes');
// 打开数据库
db.open(function(){
    db.getAll(function(data){
        var div = $(divstr);
        div.data('id',data.id);
        div.find('textarea').val(data.content);
        div.insertBefore(add);
    });
});
// 给添加按钮注册点击事件
var add = $('.add').on('click',function(){
    var div = $(divstr);
    div.insertBefore(add);
    // 添加一条便签
    db.set({content:''},function(id){
        div.data('id',id);
    });
});
// 监听所有便签编辑域的焦点事件
$('.notes').on('blur','textarea',function(){
    var div = $(this).parent();
    // 获取便签的id和内容
    var data  = {id:div.data('id'),content:$(this).val()}
    db.set(data);
})// 监听关闭按钮的单击事件
.on('click','.close',function(){
    if(confirm('确定删除此标签么？')){
        var div = $(this).parent();
        db.remove(div.data('id'));
        div.remove();
    }
});
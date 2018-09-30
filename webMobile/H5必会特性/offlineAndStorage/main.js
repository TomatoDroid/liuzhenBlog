// 获取记录内容的文本域
var el = document.querySelector('#content');

el.addEventListener('blur',function(){
    var data = el.value;
    // 如果是在线状态，就直接保存到服务器
    if(navigator.onLine){
        saveOnline(data);
    }else{
        // 保存到本地
        localStorage.setItem('data',data);
    }
});

// 监听上线事件
window.onLine = function(){
    // 从本地获取数据
    var data = localStorage.getItem('data');
    if(!!data){
        saveOnline(data);
        localStorage.removeItem('data');
    }
}

function saveOnline(data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/savedata');
    xhr.send('data='+data);
};
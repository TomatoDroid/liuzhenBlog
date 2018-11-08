// 简单的promise例子

/* function timeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'done');
    });
}
timeout(3000).then(value => {
    console.log(value);
}); */

// Promise建立后会立即执行
/* let promise = new Promise((resolve,reject) => {
    console.log('Promise');
    resolve();
});
promise.then(() => {
    console.log('resolved');
});
console.log('Hi!'); */

// 异步加载图片的例子
/* function loadImageAsync(url){
    return new Promise((resolve,reject) => {
        let image = new Image();
        image.onload = () => {
            resolve(image);
        }
        image.onerror = () => {
            reject(new Error('Could not load image at '+url));
        }
        image.url = url;
    });
} */

// 异步ajax操作
/* function getJSON(utl){
    const promise = new Promise((resolve,reject) => {
        const handle = () => {
            if(this.readyState !== 4){
                return;
            }
            if(this.status === 200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
        const client = new XMLHttpRequest();
        client.open('GET',url);
        client.onreadystatechange = handle;
        client.responseType = 'json';
        client.setRequestHeader('Accept','application/json');
        client.send();
    });
   return promise;
} */

// 调用resolve或reject并不会终结 Promise 的参数函数的执行。
/* new Promise((resolve,reject) => {
    resolve(1);
    console.log('2');
}).then(r => {
    console.log(r);
}); */
// 一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，
// 而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return语句，这样就不会有意外。
// 正确写法如下
/* new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
}) */
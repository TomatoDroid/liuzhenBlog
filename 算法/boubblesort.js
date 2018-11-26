// 冒泡排序，a 表示数组，n 表示数组大小
// 冒泡排序是原地排序，所以说空间复杂度是O(1)，也是稳定排序，时间复杂度是O(n²)
function bobbleSort(a,n){
    if(n<=1) return;
    for(let i=0;i<n;++i){
        // 提前退出冒泡排序的标志位
        let flag = false;
        for(let j=0;j<n-i-1;++j){
            if(a[j] > a[j+1]){  //交换
                let tmp = a[j];
                a[j] = a[j+1];
                a[j+1] = tmp;
                flag = true;    //表示有数据交换
            }
        }
        //没有数据交换，提前退出
        if(!flag) break;
    }
}
let array = [6,5,4,3,2,1];
bobbleSort(array,array.length);
console.log(array);


// 插入排序  优秀与冒泡排序
// 原地排序，空间复杂度是O(1)，稳定的排序，事件复杂度O(n²)
/* 首先，我们将数组中的数据分为两个区间，已排序区间和未排序区间
初始已排序区间只有一个元素，就是数组的第一个元素。
插入算法的核心思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序。
重复这个过程，直到未排序区间中元素为空，算法结束。 */
function insertionSort(a,n){
    if(n<=1) return;
    // 第一个循环代表未排区域
    for(let i=1;i<n;++i){
        let value = a[i];
        let j = i-1;
        // 第二个循环代表已排区域
        for(;j>=0;--j){
            if(a[j] > value){
                a[j+1] = a[j];
            }else{
                break;
            }
        }
        a[j+1] = value;
    }
}
let array2 = [6,5,4,3,2,1];
insertionSort(array2,array2.length);
console.log(array2);

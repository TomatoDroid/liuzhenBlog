// 冒泡排序，a 表示数组，n 表示数组大小
// 冒泡排序是原地排序，所以说空间复杂度是O(1)，也是稳定排序，时间复杂度是O(n²)
function bobbleSort(a,n){
    if(n<=1) return;
    // 外层循环循环数组长度
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


// 插入排序  优秀于冒泡排序
// 原地排序，空间复杂度是O(1)，稳定的排序，时间复杂度O(n²)
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


// 归并排序， 相比来说，快速排序用的更多
// 稳定，但不是原地排序（这是因为归并排序的合并函数，
// 在合并两个有序数组为一个有序数组时，需要借助额外的存储空间） ，时间复杂度的O(nlogn)。空间复杂度是O(n)

const mergeArr = (left,right) => {
    let temp = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // 判断2个数组中元素的大小，依次插入数组
    while(left.length > leftIndex && right.length > rightIndex){
        if(left[leftIndex] <= right[rightIndex]){
            temp.push(left[leftIndex]);
            leftIndex++;
        }else{
            temp.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // 合并多余数组
    return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const mergeSort = (arr) => {
    // 当任意数组分解到只有一个时返回
    if(arr.length <=1 ) return arr;
    const middle = Math.floor(arr.length/2); //找到中间值
    const left = arr.slice(0,middle);   //分割数组
    const right = arr.slice(middle);
    // 递归 分解 合并
    return mergeArr(mergeSort(left),mergeSort(right));
}
const array3 = [];
let i = 0;
while(i<10){
    array3.push(Math.floor(Math.random()*1000));
    i++;
}
const res = mergeSort(array3);
console.log(res);

// 快速排序
// 原地排序，但不稳定，时间复杂度的O(nlogn)。空间复杂度是O(n)
// 快排通过巧妙的原地分区函数，可以实现原地排序，解决了归并排序占用内存太多的问题
const swap = (arr,i,j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// 获取 pivot 交换完后的index
const partition = (arr,pivot,left,right) => {
    const pivotVal = arr[pivot];
    let startIndex = left;
    for(let i = left;i<right;i++){
        if(arr[i] < pivotVal){
            swap(arr,i,startIndex);
            startIndex++;
        }
    }
    swap(arr,startIndex,pivot);
    return startIndex;
}
const quickSort = (arr,left,right) => {
    if(left < right){
        let pivot = right;
        let partitionIndex = partition(arr,pivot,left,right);
        quickSort(arr,left,partitionIndex-1<left ? left : partitionIndex-1);
        quickSort(arr,partitionIndex+1>right ? right : partitionIndex+1,right);
    }
}

const array4 = [];
for(let i=0;i<10;i++){
    array4.push(Math.floor(Math.random()*1000));
}
quickSort(array4,0,array4.length-1);
console.log(array4);

// 在O(n) 时间复杂度内，求无序数组的第K大元素
const swapK = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const partitionK = (arr,pivod,left,right) => {
    let pivodValue = arr[pivod];
    let startIndex = left;
    for(let i=left;i<right;++i){
        if(arr[i] > pivodValue){
            swapK(arr,i,startIndex);
            startIndex++;
        }
    }
    swapK(arr,startIndex,pivod);
    return startIndex;
}
const kQiuckSort = (arr,left,right,k) => {
    if(left<right){
        const pivod = right;
        const partitionIndex = partitionK(arr,pivod,left,right);
        if(partitionIndex+1 > k){
            return kQiuckSort(arr,left,partitionIndex-1 < left ? left : partitionIndex-1,k);
        }else if(partitionIndex+1 < k){
            return kQiuckSort(arr,partitionIndex+1>right ? right : partitionIndex+1,right,k);
        }else if(partitionIndex+1 === k){
            return arr[partitionIndex];
        }
    }
}
const array5 = [2,8,1,6,5,4];
console.log("第K大元素：k=3:",array5);
console.log(kQiuckSort(array5,0,array5.length-1,3));
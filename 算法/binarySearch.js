/*二分查找   更适合查找近似的问题
注意点 
    一：循环退出条件 注意是 low<=high，而不是low<high
    二：mid取值，实际上，mid=(low+hight)/2是有问题的，如果
        low和high比较大，两者之和就可能会溢出，改写成
        low+(high-low)/2,更进一步，low+((high-low)>>1)
    三：low和high的更新 low=mid+1,high=mid-1.
    四：针对的是有序的数组，如果使用链表实现，则复杂度会很高，所以推荐数组实现
*/
// 循环实现
const binarySearch = (arr,len,value) => {
    let low = 0;
    let high = len-1;
    while(low <= high){
        let mid = low+((high-low)>>1);
        if(arr[mid] === value){
            return mid;
        }else if(arr[mid] < value){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
}
const arr = [1,3,5,7,9,10,11,23];
console.log(binarySearch(arr,arr.length,9));

// 递归实现
const binarySearchRecursive = (arr,len,value) => {
    return bsearchInternally(arr,0,len-1,value);
}
const bsearchInternally = (arr,low,high,value) => {
    if(low > high) return -1;
    let mid = low+((high-low)>>1);
    if(arr[mid] === value){
        return mid;
    }else if(arr[mid] < value){
        return bsearchInternally(arr,mid+1,high,value);
    }else{
        return bsearchInternally(arr,low,mid-1,value);
    }
}
console.log(binarySearchRecursive(arr,arr.length,9));

/* 四种常见的二分查找法变形问题 
    一：查找第一个等于给定值的元素
    二：查找最后一个等于给定值的元素
    三：查找第一个大于等于给定值的元素
    四：查找最后一个小于等于给定值的元素
*/
// 查找第一个等于给定值的元素
const testArr = [1,2,3,4,5,8,8,8,10,12,14];
const search1 = (arr,len,value) => {
    let low = 0;
    let high = len-1;
    while(low <= high){
        let mid = low+((high-low)>>1);
        if(arr[mid] < value){
            low = mid+1;
        }else if(arr[mid] > value){
            high = mid -1;
        }else{
            if(mid === 0 || arr[mid-1] !== value) return mid;
            else high = mid-1;
        }
    }
    return -1;
}
console.log(search1(testArr,testArr.length,8));

// 查找最后一个等于给定值的元素
const search2 = (arr,len,value) => {
    let low = 0;
    let high = len - 1; 
    while(low <= high){
        let mid = low+((high-low)>>1);
        if(arr[mid] < value){
            low = mid + 1;
        }else if(arr[mid] > value){
            high = mid - 1;
        }else{
            if(mid === len-1 || arr[mid+1] !== value) return mid;
            else low = mid + 1;
        }
    }   
    return -1;
}
console.log(search2(testArr,testArr.length,8));

// 查找第一个大于等于给定值的元素
const search3 = (arr,len,value) => {
    let low = 0;
    let high = len - 1;
    while(low <= high){
        let mid = low+((high-low)>>1);
        if(arr[mid] >= value){
            // if(mid === len-1 || arr[mid] > value) return mid;
            if(mid === 0 || arr[mid-1] < value) return mid;
            else high = mid - 1; 
        }else{
            low = mid + 1;
        }
    }
    return -1;
}
const test = [3,4,6,7,10];
console.log('查找第一个大于等于给定值的元素:5---',search3(test,test.length,5));

// 查找最后一个小于等于给定值的元素
const search4 = (arr,len,value) => {
    let low = 0;
    let high = len-1;
    while(low <= high){
        let mid = low+((high-low)>>1);
        if(arr[mid] > value){
            high = mid - 1;
        }else{
            if(mid === len-1 || arr[mid+1] > value ) return mid;
            else low = mid +1;
        }
    }
    return -1;
}
console.log(search4(test,test.length,5));
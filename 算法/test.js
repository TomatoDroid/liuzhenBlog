function popSort(arr,len){
    if(len <= 1) return;
    for(let i=0;i<len;++i){
        let flag = false;
        for(let j=0;j<len-i-1;++j){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if(!flag){
            return;
        }
    }
}

const arr = [6,5,4,3,2,1];
popSort(arr,arr.length);
console.log(arr);

function insertionAort(arr,len){
    if(len <= 1) return;
    for(let i=1;i<len;++i){
        let value = arr[i];
        let j = i-1;
        for(;j>=0;--j){
            if(arr[j] > value){
                arr[j+1] = arr[j];
            }else{
                break;
            }
        }
        arr[j+1] = value;
    }
}
const insArr = [6,5,4,3,2,1];
insertionAort(insArr,insArr.length);
console.log(insArr);


function mergeArr(left,right){
    let temp = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(left.length > leftIndex && right.length > rightIndex){
        if(left[leftIndex] <= right[rightIndex]){
            temp.push(left[leftIndex]);
            leftIndex++;
        }else{
            temp.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr){ 
    if(arr.length <= 1) return arr;
    let middleIndex = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,middleIndex);
    let rightArr = arr.slice(middleIndex);
    return mergeArr(mergeSort(leftArr),mergeSort(rightArr));
}

const meArr = [6,5,4,3,2,1];
console.log(mergeSort(meArr));

function quickSort(arr,left,right){
    if(left < right){
        let povit = right;
        let partitionIndex = partition(arr,povit,left,right);
        quickSort(arr,left,partition-1<left ? left : partitionIndex-1);
        quickSort(arr,partition+1 > right ? right : partitionIndex+1,right);
    }
}
function partition(arr,pivot,left,right){
    let pivotValue = arr[pivot];
    let startIndex = left;
    for(let i=left;i<right;++i){
        if(arr[i] < pivotValue){
            swap(arr,startIndex,i);
            startIndex++;
        }
    }
    swap(arr,startIndex,pivot);
    return startIndex;
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const quArr = [6,5,4,3,2,1];
quickSort(quArr,0,quArr.length-1);
console.log(quArr);
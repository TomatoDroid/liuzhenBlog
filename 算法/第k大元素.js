// 给出数组 [9,3,2,4,8]，第三大的元素是 4

// 给出数组 [1,2,3,4,5]，第一大的元素是 5，第二大的元素是 4，第三大的元素是 3，以此类推

function sortNumber(a,b){
    // a-b<0按照升序排列
    // b-a为降序
    return a-b;
}

function kthLargestElement(n,nums){
    nums.sort(sortNumber);
    return nums[nums.length-n];
}
console.log(kthLargestElement(3,[9,3,2,4,8]));
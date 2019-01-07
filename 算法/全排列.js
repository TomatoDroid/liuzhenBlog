/**
 * 数组的全排列
 */
function permutation(arr){
	if (arr.length == 1)
		return arr;
	else if (arr.length == 2)
		return [[arr[0],arr[1]],[arr[1],arr[0]]];
	else {
		var temp = [];
		for (var i = 0; i < arr.length; i++) {
			var save = arr[i];
			arr.splice(i, 1);//取出arr[i]
			var res = permutation(arr);//递归排列arr[0],arr[1],...,arr[i-1],arr[i+1],...,arr[n]
			arr.splice(i, 0, save);//将arr[j]放入数组，保持原来的位置
			for (var j = 0; j < res.length; j++) {
				res[j].push(arr[i]);
				temp.push(res[j]);//将arr[j]组合起来
			}
		}
		return temp;
	}
}
console.log(permutation([1,2,3]));
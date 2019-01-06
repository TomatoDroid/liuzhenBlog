/**
 * 动态规划---常用来求最优解的过程，最大值或者最小值
 */
// 背包问题
// weight: 物品重量，n: 物品个数，w: 背包可承载重量  时间复杂度O(n*w)，两层for循环
// 背包中物品总重量的最大值是多少呢？
function knapsack(weight,n,w){
    let status = new Array();
    for(let i=0;i<n;++i){
        status[i] = new Array(w+1);
        for(let j=0;j<w+1;++j){
            status[i][j] = '';
        }
    }
    status[0][0] = true; // 第一行的数据要特殊处理，可以利用哨兵优化
    status[0][weight[0]] = true; 
    for(let i=1;i<n;++i){//动态规划状态转移
        for(let j=0;j<=w;++j){   
            // 不把i物品放入背包
            if(status[i-1][j]){
                status[i][j] = status[i-1][j];
            }
        }
        for(let j=0;j<=w-weight[i];++j){
            // 把i物品放入背包
            if(status[i-1][j]){
                status[i][j+weight[i]] = true;
            }
        }
    }
    console.log(status);
    for(let i=w;i>=0;--i){
        if(status[n-1][i] === true){
            return i;
        }
    }
    return 0;
}
const weight = [2,2,4,6,3];
const maxWeight = 9;
console.log(knapsack(weight,weight.length,maxWeight));

// 实际上，我们只需要一个大小为 w+1 的一维数组就可以解决这个问题
// 优化版
function knapsack2(weight,n,w){
    let status = [];
    for(let i=0;i<=w;i++){
        status[i] = '';
    }
    status[0] = true;
    status[weight[0]] = true;
    console.log(status);
    for(let i=1;i<n;++i){//动态规划
        for(let j=w-weight[i];j>=0;--j){// 把第 i 个物品放入背包
            if(status[j]){
                status[j+weight[i]] = true;
            }
        }
    }
    for(let i=w;i>=0;--i){
        if(status[i]){
            return i;
        }
    }
    return0;
}
console.log(knapsack2(weight,weight.length,maxWeight));

// const weight = [2,2,4,6,3];
const value = [3,4,8,9,6];
// const maxWeight = 9;
console.log(knapsack3(weight,value,weight.length,maxWeight));
function knapsack3(weight,value,n,w){
    const status = new Array();
    for(let i=0;i<n;++i){
        status[i] = new Array(w+1);
        for(let j=0;j<w+1;++j){
            status[i][j] = -1;
        }
    }
    status[0][0] = 0;
    status[0][weight[0]] = value[0];
    for(let i=1;i<n;++i){
        for(let j=0;j<=w;++j){
            if(status[i-1][j] >= 0){
                status[i][j] = status[i-1][j];
            }
        }
        for(let j=0;j<=w-weight[i];++j){//把物品i放入背包中
            if(status[i-1][j] >= 0){
                let v = status[i-1][j] + value[i];
                if(v > status[i][j+weight[i]]){
                    status[i][j+weight[i]] = v;
                }
            }
        }
    }
    console.log(status);
    let maxValue = -1;
    for(let i=w;i>=0;--i){
        if(status[n-1][i] > maxValue){
            maxValue = status[n-1][i] ;
        }
        return maxValue;
    }
    return 0;
}
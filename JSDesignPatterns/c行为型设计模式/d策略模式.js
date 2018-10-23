// 价格策略对象
var PriceStrategy = (function(){
    var strategy = {
        // 100返30
        return30:function(price){
            // parseInt可通过~~ | 替换
            // +price使得string转化为int类型
            return + price + parseInt(price/100) * 30;
        },
        return50:function(price){
            return +price + parseInt(price/100) * 50;
        },
        parcent80:function(price){
            return price * 100 * 80 /10000;
        },
        parcent50:function(price){
            return price * 100 * 50 / 10000;
        }
    }
    return function(algorithm,price){
        // 如果算法存在则调用算法，不存在则返回false
        return strategy[algorithm] && strategy[algorithm](price);
    }
})();

var price = PriceStrategy('return50',299);
console.log(price);

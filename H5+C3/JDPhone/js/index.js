window.onload = function(){
    // 顶部通栏的滚动效果
    headerScroll();

    cutDownTime();

    banner();
}
// 通栏方法
/*
	获取 导航栏的 高度

	在onscroll 事件中 去修改颜色
		0-1的透明度
		获取到 滚动的距离
		滚动的距离 /导航栏  0-1的浮点数
		滚动的距离 大于导航栏 >1  如果透明度 >1 变为1

		通过js  修改 顶部通栏的 透明度即可
			为了保证 子元素 能够正常显示 rgba()  hsla();

*/
function headerScroll(){
    var navDom = document.querySelector('.jd_nav');
    var maxDistance = navDom.offsetTop + navDom.offsetHeight;
    // console.log('offsetTop',navDom.offsetTop+',,','offsetHeight',navDom.offsetHeight);
    var headerDom = document.querySelector('.jd_header');
    headerDom.style.backgroundColor = 'rgba(201,21,35,1)';

    window.onscroll = function(){
        // 兼容写法
        var scrollDistance = window.document.body.scrollTop || window.document.documentElement.scrollTop;

        var percent = scrollDistance / maxDistance;
        // console.log('percent',percent);
        if(percent>1){
            percent = 1;
        }
        headerDom.style.backgroundColor = 'rgba(201,21,35,'+percent+')';
    }
}

// 倒计时方法
/*
	定义一个 倒计时的 总时间
	获取 想要修改的 li标签

	开启定时器
		判断 是否时间没有了
		递减时间
		修改 对应标签的显示
*/
function cutDownTime(){
    var totalSec = 3*60*60;
    // var totalSec = 10;
    var liArr = document.querySelectorAll('.main_content:nth-child(1) .content_top li');

    var timeId = setInterval(function(){
        if(totalSec <= 0){
            clearInterval(timeId);
            return;
        }

        totalSec--;
        // 当前的秒 对应到 多少小时 多少分 多少秒
		/*
			3671
			1小时
			1分
			11秒
			/ 除法
			% 取余 
		*/
        var hour = Math.floor(totalSec/3600);
        var minutes = Math.floor(totalSec%3600 / 60);
        var seconds = Math.floor(totalSec%60);

        liArr[0].innerHTML = Math.floor(hour/10);
        liArr[1].innerHTML = hour%10;

        liArr[3].innerHTML = Math.floor(minutes/10);
        liArr[4].innerHTML = minutes%10;

        liArr[6].innerHTML = Math.floor(seconds/10);
        liArr[7].innerHTML = seconds%10;
    },1000);

}

function banner(){
    // 获取变量
    var width = document.body.offsetWidth;

    var moveUl = document.querySelector('.banner_images');

    var indexLiArr = document.querySelectorAll('.banner_index li');

    var index = 1;

    var timeId = setInterval(function(){
        index++;
        moveUl.style.transition = 'all .3s';
        moveUl.style.transform = 'translateX('+index*width*-1+'px)';
    },1000);
    // 过渡 结束事件 用来 修正 index的值 并修改索引
    moveUl.addEventListener('webkitTransitionEnd',function(){
        if(index>8){
            index = 1;
            // 关闭过渡
            moveUl.style.transition = '';
            // 瞬间修改一下ul的位置
            moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        }else if(index<1){
            index = 8;
            moveUl.style.transition = '';
            moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        }
        // 修改索引li标签的class
        for(var i=0;i<indexLiArr.length;i++){
            indexLiArr[i].className = '';
        }
        // 有一个li的差值
        indexLiArr[index-1].className = 'current';
    }); 

    // 注册三个touch事件
    // 定义变量记录开始的x
    var startX = 0;
    // 记录移动的值
    var moveX = 0;
    // 记录distanceX
    var distanceX = 0;
    //触摸开始
    moveUl.addEventListener('touchstart',function(event){
        // 关闭定时器
        clearInterval(timeId);
        // 关闭过渡效果
        moveUl.style.transition = '';
        // 记录开始值
        startX = event.touches[0].clientX;
    });
    // 触摸中
	moveUl.addEventListener('touchmove',function (event) {
		// 计算移动的值
		moveX = event.touches[0].clientX - startX;
        console.log('1');
		// 移动ul
		// 默认的移动值是 index*-1*width 
		moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
	})
    // 触摸结束
	/*
		手指松开的时候 判断 移动的距离 进行 是否吸附
			由于 不需要考虑 正负 只需要考虑 距离 Math.abs()
				吸附回的值是 index*-1*width
			如果移动的距离较大
				需要判断正负
					index++;
					index--;
					 index*-1*width
    */
    moveUl.addEventListener('touchend',function(event){
        // 定义最大偏移值
        var maxDistance = width/3;
        // 判断是否超过
        if(Math.abs(moveX) > maxDistance){
            if(moveX>0){
                index--;
            }else{
                index++;
            }
            moveUl.style.transition = 'all .3s';
            moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
        }else{
            // 为了好看 将 过渡效果开启
			moveUl.style.transition = 'all .3s';
			// 吸附回去
			moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
        }
        // 记录结束值
        timeId = setInterval(function(){
            index++;
            moveUl.style.transition = 'all .3s';
            moveUl.style.transform = 'translateX('+index*-1*width+'px)';
        },1000);
    });
}
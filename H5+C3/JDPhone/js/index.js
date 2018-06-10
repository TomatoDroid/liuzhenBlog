window.onload = function(){
    // 顶部通栏的滚动效果
    headerScroll();

    // cutDownTime();

    // banner();
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
        var scrollDistance = window.document.body.scrollTop;

        var percent = scrollDistance / maxDistance;
        console.log('percent',percent);
        if(percent>1){
            percent = 1;
        }
        headerDom.style.backgroundColor = 'rgba(201,21,35,'+percent+')';
    }
}
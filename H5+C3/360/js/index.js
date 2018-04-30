window.onload = function(){
    $('#fullpage').fullpage({
        //设置每一屏的颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        afterLoad:function(link,index){
            $('.section').removeClass('current');

            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);
        }
    });
}
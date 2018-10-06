(function(){
    var $gallery = document.querySelector('.gallery');
    $gallery.addEventListener('click',function(e){
        var classList = $gallery.classList,css_preview = 'preview';
        if(classList.contains(css_preview)){
            classList.remove(css_preview);
            $gallery.style.width = 100+'vw';
        }else{
            classList.add(css_preview);
            $gallery.style.width = 100*itemsLength+'vw';
        }
    });

    var isTouchStart = false,
        startOffsetX,
        currentTranX = 0,
        width = $gallery.offsetWidth,
        items = $gallery.querySelectorAll('.item'),
        itemsLength = items.length,
        move = function(dx){
            $gallery.style.transform = 'translate('+dx+'px, 0)';
        }

    $gallery.addEventListener('touchstart',function(e){
        // 记录初始位置
        startOffsetX = e.changedTouches[0].pageX;
        $gallery.classList.remove('animation');
    });
    $gallery.addEventListener('touchmove',function(e){
        isTouchStart = true;
        // 计算手指水平移动量
        var dx = e.changedTouches[0].pageX - startOffsetX;
        move(currentTranX+dx);
    });
    $gallery.addEventListener('touchend',function(e){
        if(isTouchStart){
            // 移动图片需要使用动画
            $gallery.classList.add('animation');
            var dx = e.changedTouches[0].pageX - startOffsetX;
            if(Math.abs(dx)>width/2){
                // 处理临界值
                if(currentTranX<=0 && currentTranX>-width*itemsLength){
                    if(dx>0){
                        if(currentTranX<0){
                            currentTranX = currentTranX+width;
                        }
                    }else if(currentTranX>-width*(itemsLength-1)){
                        currentTranX=currentTranX-width;
                    }
                }
            }
            move(currentTranX);
        }
        isTouchStart = false;
    });

})();
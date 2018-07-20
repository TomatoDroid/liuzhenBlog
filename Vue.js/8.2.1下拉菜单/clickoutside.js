Vue.directive('clickoutside',{
    bind(el,binding,vnode){
        function documentHandle(e){
            if(el.contains(e.target)){
                return false;
            }
            // 如果自定义指令包含表达式，则执行
            if(binding.expression){
                binding.value(e);
            }
        }
        function documenEsc(e){
            if(binding.modifiers.esc && e.keyCode === 27){
                binding.value(e);
            }
        }
        el._vueClickOutSide_ = documentHandle;
        document.addEventListener('click',documentHandle);
        el._vueEscOutSide_ = documenEsc;
        document.addEventListener('keydown',documenEsc);
    },
    // updated (el,binding,value,oldvalue) {
        
    // },
    unbind(el,binding){
        document.removeEventListener('click',el._vueClickOutSide_);
        delete el._vueClickOutSide_;
        document.removeEventListener('keydown',el._vueEscOutSide_);
        delete el._vueEscOutSide_;
    }
});
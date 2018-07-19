Vue.directive('clickoutside',{
    bind(el,binding,vnode){
        function documentHandle(e){
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value(e);
            }
        }
        el._vueClickOutSide_ = documentHandle;
        document.addEventListener('click',documentHandle);
    },
    unbind(){
        
    }
});
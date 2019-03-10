// 定义一个持久化的插件，因为vuex中的数据都是在内存中的，刷新就没有了，我们有时候
// 需要将其保存在本地
export default store => {
    console.log('插件初始化')
    store.subscribe((mutation, state) => {
        console.log('插件被调用了')
    })
}
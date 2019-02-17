// 将 async/await 转换成 ES5 代码后需要这个运行时库来支持
import 'regenerator-runtime/runtime'

const routes = {
    '/foo':() => import('./views/foo'),
    '/bar':() => import('./views/bar.do')
}

class Router{
    start(){
        window.addEventListener('popstate',() => {
            this.load(location.pathname)
        })
        this.load(location.pathname)
    }
    go(path){
        history.pushState({}, '', path)
        this.load(path)
    }
    async load(path){
				if(path === '/') path = '/foo'
				const View = (await routes[path]()).default
        const view = new View()
        view.mount(document.body)
    }
}
// 导出实例
export default new Router()

class Watcher{
    constructor(vm, expr, cb){
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.value = this.get()
    }
    getValue(vm, expr){
        expr = expr.split('.')
        return expr.reduce((prev, next) => {
            return prev[next]
        },vm.$data)
    }
    get(){
        Dep.target = this
        let value = this.getValue(this.vm, this.expr)
        Dep.target = null
        return value
    }
    update(){
        let newValue = this.getValue(this.vm, this.expr)
        let oldValue = this.value
        if(newValue !== oldValue){
            this.cb(newValue)
        }
    }
}
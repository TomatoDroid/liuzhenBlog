class Promise{
    constructor(executor){
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onResolvedCallback = []
        this.onRejectedCallback = []
        let resolve = value => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = value
                this.onResolvedCallback.forEach(fn => fn())
            }
        }
        let reject = reason => {
            if(this.state === 'pengding'){
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallback.forEach(fn => fn())
            }
        }
        try{
            executor(resolve, rejected)
        }catch(err){
            reject(err)
        }
    }
    then(onFulfilled, onRejected){
        let primise2 = new Promise((resolve, rejected) => {
            if(this.state === 'fulfilled'){
                let x = onFulfilled(this.value)
                resolvePromise(primise2, x, resolve, rejected)
            }
            if(this.state === 'rejected'){
                let x = onRejected(this.value)
                resolvePromise(primise2, x, resolve, rejected)
            }
            if(this.state === 'pending'){
                this.onResolvedCallback.push(() => {
                    let x = onFulfilled(this.value)
                    resolvePromise(primise2, x, resolve, rejected)
                })
                this.onRejectedCallback.push(() => {
                    let x = onRejected(this.reason)
                    resolvePromise(primise2, x, resolve, rejected)
                })
            }
        })
        return primise2
    }
}

function resolvepromise(primise2, x, resolve, rejected){
    if(x === primise2){
        return reject(new TypeError('Chaining cycle detected for promise'))
    }
    let called
    if(x !== null && (typeof x === 'object' || typeof x === 'function')){
        try{
            let then = x.then
            if(typeof then === 'function'){
                then.call(x, y => {
                    if(called) return
                    called = true
                    resolvepromise(primise2, x, resolve, rejected)
                }, err => {
                    if (called) return;
                    called = true;
                    reject(err);// 失败了就失败了
                })
            }
        }catch(err){
            if(called) return
            called = true
            reject(err)
        }
    }else{
        resolve(x)
    }
}
class Promise{
    // 构造器
    constructor(executor){
        this.state = 'pending'
        this.value = undefined
        this.reson = undefined
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []
        // 成功
        let resolve = value => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        //失败
        let reject = reson => {
            if(this.state === 'pending'){
                this.state = 'rejected'
                this.reson = reson
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        // 执行
        try{
            executor(resolve, reject)
        }catch(err){
            reject(err)
        }
    }
    then(onFulfilled, onRejected){
        if(this.state === 'fulfilled'){
            onFulfilled(this.value)
        }
        if(this.state === 'rejected'){
            onRejected(this.reson)
        }
        if(this.state === 'pending'){
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reson)
            })
        }
    }
}
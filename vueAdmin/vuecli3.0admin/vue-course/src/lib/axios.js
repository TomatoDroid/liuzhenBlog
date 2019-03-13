import axios from 'axios'
import { baseUrl } from '@/config'
import { getToken } from './util';

class HttpReauest{
    constructor(baseUrl = baseUrl){
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInstance(){
        const config = {
            baseUrl:this.baseUrl,
            headers:{

            }
        }
        return config
    }
    destory(url){
        delete this.queue[url]
        if(!Object.keys(this.queue).length){
            // Spin.hide()
        }
    }
    interceptors(instance, url){
        instance.interceptors.request.use(config => {
            // 添加全局的loading
            if(!Object.keys(this.queue).length){
                //Span.show()
            }
            this.queue[url] = true
            config.headers['Authorization'] = getToken()
            return config
        },error => {
           return Promise.reject(error)
        })
        instance.interceptors.response.use(response => {
            this.destory(url)
            const {data} = response
            return data
        },error => {
            this.destory(url)
            return Promise.reject(error)
        })
    }
    request(options){
        const instance = axios.create()
        options = Object.assign(this.getInstance(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpReauest
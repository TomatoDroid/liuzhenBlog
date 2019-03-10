import axios from 'axios'
import { baseUrl } from '@/config'

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
    interceptors(instance){
        instance.interceptors.request.use(config => {
            // 添加全局的loading
            return config
        },error => {
           return Promise.reject(error)
        })
        instance.interceptors.response.use(response => {
            //
            return response
        },error => {
            return Promise.reject(error)
        })
    }
    request(options){
        const instance = axios.create()
        options = Object.assign(this.getInstance(), options)
        this.interceptors(instance)
        return instance(options)
    }
}
export default HttpReauest
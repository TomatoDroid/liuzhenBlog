import {login,authorization} from '@/api/login'
import {setToken, getToken} from '@/lib/util'

export default {
    state:{
        user:'liuzhen'
    },
    mutations:{

    },
    actions:{
        login({commit},{userName,password}){
            return new Promise((resolve, reject) => {
                login({userName,password}).then(res => {
                    if(res.code === 200 && res.data.token){
                        setToken(res.data.token)   
                        resolve()
                    }else{
                        resolve(new Error('error'))
                    }
                }).catch(err => {
                    resolve(err)
                })
            })
        },
        authorization({commit}, token){
            return new Promise((resolve, reject) => {
                authorization().then(res => {
                    if(parseInt(res.code) === 401){
                        reject(new Error('store token error'))
                    }else{
                        setToken(res.data.token)
                        resolve()
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}
import axios from './index'

export const queryName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({code:200, info:{appName:'asyncFromLogin'}})
        }, 1000);
    })
}

export const login = ({userName, password}) => {
    return axios.request({
        url:'/index/login',
        method:'post',
        data:{
            userName,
            password
        }
    })
}


export const authorization = () => {
    return axios.request({
        url:'/users/authorization',
        method:'get'
    })
}
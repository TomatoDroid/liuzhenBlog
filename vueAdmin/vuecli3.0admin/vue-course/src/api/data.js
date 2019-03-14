import axios from './index'

export const getFolderList = () => {
    return axios.request({
        url:'/getFolderList',
        method:'get'
    })
}

export const getFileList = () => {
    return axios.request({
        url:'/getFileList',
        method:'get'
    })
}
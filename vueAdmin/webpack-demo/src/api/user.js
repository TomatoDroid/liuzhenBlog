import request from '@/utils/request';

export const login = ({userName,password}) => {
    const data = {
        userName,
        password
    }
    return request({
        url:'/login',
        method:'post',
        data
    });
}

export const logout = (token) => {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export const getUserInfo = (token) => {
    return request({
        url:'/get_info',
        method:'get',
        param:{ token }
    });
}

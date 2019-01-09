import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';

export function getTooken(){
    Cookies.getTooken(TokenKey);
}   

export function setToken(token){
    Cookies.setToken(TokenKey,token);
}

export function removeToken(){
    Cookies.removeToken(TokenKey);
}
// import router from './router';
// import store from './store';
// import Message from 'iview';
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css';
// import { getToken } from '@/utils/auth';

// NProgress.configure({showSpinner: false});

// function hasPermission(roles, permissionRoles){
//     if(roles.indexOf('admin') >= 0) return true;
//     if(!permissionRoles) return true;
//     return roles.some(role => permissionRoles.indexOf(role) >= 0);
// }

// const whiteList = ['/login','/auth-redirect'];

// router.beforeEach((to, from, next) => {
//     NProgress.start();
//     if(getToken()){
//         if(to.path === '/login'){
//             next({path:'/'});
//             NProgress.done();
//         }else{
//             if(store.getters.roles.length === 0){
//                 store.dispatch('GetUserInfo').then(res => {
//                     const roles = res.data.roles;
//                     store.dispatch('GenerateRoutes',{ roles }).then(() => {
//                         router.addRoutes(store.getters.addRoutes);
//                         next({...to,replace:true});
//                     });
//                 }).catch((err) => {
//                     store.dispatch('FedLogOut').then(() => {
//                         Message.error(err || 'Verification failed, please login again');
//                         next({path:'/'});
//                     });
//                 });
//             }else{
//                 // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
//                 if(hasPermission(store.getters.roles, to.meta.roles)){
//                     next();
//                 }else{
//                     next({ path: '/401', replace: true, query: { noGoBack: true }});
//                 }
//             }
//         }
//     }else{
//         if(whiteList.indexOf(to.path) !== -1){
//             next();
//         }else{
//             next(`/login?redirect=${to.path}`);//重定向到登录页
//             NProgress.done();
//         }
//     }
// });

// router.afterEach(() => {
//     NProgress.done();
// });

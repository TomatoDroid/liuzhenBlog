import { login, logout, getUserInfo } from '@/api/user'
import { getToken, setToken } from '@/libs/util'

export default {
	state:{
		userName:'',
		userId:'',
		avatorImgPath:'',
		token:getToken(),
		access:'',
		hasGetInfo:false,
		unreadCount:0,
		messageUnreadList: [],
		messageReadList: [],
		messageTrashList: [],
		messageContentStore: [],
	},
	mutations:{
		setAvator(state, avatorPath){
			state.avatorImgPath = avatorPath
		},
		setUserId(state, userId){
			state.userId = userId
		},
		setUserName(state, userName){
			state.userName = userName
		},
		setAccess(state, access){
			state.access = access
		},
		setToken(state, token){
			state.token = token
			setToken(token);
		},
		setHasGetInfo(state, status){
			state.hasGetInfo = status
		}
	},
	getters:{

	},
	actions:{
		// 登录
		handleLogin({ commit }, { userName, password }){
			userName = userName.trim()
			return new Promise((resolve, reject) => {
				login({
					userName,
					password
				}).then(res => {
					const data = res.data
					commit('setToken', data)
					resolve()
				}).catch( err => {
					reject(err)
				})
			})
		},
		// 退出登录
		handleLogOut({state, commit}){
			return new Promise((resolve, reject) => {
				logout(state.token).then(() => {
					commit('setToken','')
					commit('setAccess','')
					resolve()
				}).catch((err) => {
					reject(err)
				})
				// 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
			})
		},
		getUserInfo({state, commit}){
			return new Promise((resolve, reject) => {
				try{
					getUserInfo(state.token).then(res => {
						const data = res.data
						commit('setAvator', data.avator)
            commit('setUserName', data.name)
            commit('setUserId', data.user_id)
            commit('setAccess', data.access)
						commit('setHasGetInfo', true)
						resolve()
					}).catch(err => {
						reject(err)
					})
				}catch(err){
					reject(err)
				}
			})
		}
	},
}

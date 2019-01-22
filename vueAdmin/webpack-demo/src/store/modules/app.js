import {
	getBreadCrumbList,
	getMenuByRouter,
	getHomeRoute,
	getTagNavListFromLocalstorage,
	setTagNavListInLocalstorage,
	getRouteTitleHandled,
	routeHasExist,
} from '@/libs/util'
import router from '@/router'
import routes from '@/router/routers'
import config from '@/config'
const { homeName } = config

export default {
	state:{
		breadCrumbList:[],
		tagNavList:[],
		homeRoute:{},
	},
	getters:{
		menuList: (state, getters, rootState) => getMenuByRouter(routes, rootState.user.access)
	},
	mutations:{
		setBreadCrumb (state, route) {
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
		},
		setHomeRoute (state, routes) {
      state.homeRoute = getHomeRoute(routes, homeName)
		},
		setTagNavList(state, list){
			let tagList = []
			if(list){
				tagList = [...list]
			}else tagList = getTagNavListFromLocalstorage() || []
			if(tagList[0] && tagList[0].name !== homeName) tagList.shift()
			let homeTagIndex = tagList.findIndex(item => item.name === homeName)
			if(homeTagIndex > 0){
				let homeTag = tagList.splice(homeTagIndex,1)[0]
				tagList.unshift(homeTag)
			}
			state.tagNavList = tagList
			setTagNavListInLocalstorage([...tagList])
		},
		closeTag(){

		},
		addTag(state, { route, type="unshift" }){
			let router = getRouteTitleHandled(route)
			if(!routeHasExist(state.tagNavList, router)){
				if(type === 'push') state.tagNavList.push(router)
				else{
					if(router.name === homeName) state.tagNavList.unshift(router)
					else state.tagNavList.splice(1, 0, router)
				}
				setTagNavListInLocalstorage([...state.tagNavList])
			}
		},
	},
	actions:{

	}
}

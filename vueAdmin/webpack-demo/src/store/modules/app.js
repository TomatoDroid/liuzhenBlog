import {
	getBreadCrumbList,
	getMenuByRouter,
	getHomeRoute,
} from '@/libs/util'
import router from '@/router'
import routes from '@/router/routers'
import config from '@/config'
const { homeName } = config

export default {
	state:{
		breadCrumbList:[],
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
	},
	actions:{

	}
}

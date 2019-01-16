import {
	getMenuByRouter
} from '@/libs/util'
import router from '@/router'
import routers from '@/router/routers'
const homeName = 'home'

export default{
	state:{

	},
	getters:{
		menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access),
	},
	mutations:{

	},
	actions:{

	}
}

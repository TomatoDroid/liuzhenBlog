import {
	getMenuByRouter
} from '@/libs/util'
import router from '@/router'
import routes from '@/router/routers'
const homeName = 'home'

export default {
	state:{

	},
	getters:{
		menuList: (state, getters, rootState) => getMenuByRouter(routes, rootState.user.access)
	},
	mutations:{

	},
	actions:{

	}
}

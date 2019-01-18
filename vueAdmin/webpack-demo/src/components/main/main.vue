<template>
	<Layout style="height:100%;" class="main">
		<Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-side" :style="{overflow:'hidden'}">
			<side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
				<!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
				<div class="logo-con" >
					<img v-show="!collapsed" :src="maxLogo" key="max-logo" />
          <img v-show="collapsed" :src="minLogo" key="min-logo" />
				</div>
			</side-menu>
		</Sider>
		<Layout>
			<Header class="header-con">
				<header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChnage">
					<user></user>
					<language></language>
					<error-store></error-store>
					<fullscreen></fullscreen>
				</header-bar>
			</Header>
			<Content>
				没有内容
			</Content>
		</Layout>
	</Layout>
</template>
<script>
import HeaderBar from './components/header-bar'
import ErrorStore from './components/error-store'
import Fullscreen from './components/fullscreen'
import Language from './components/language'
import SideMenu from './components/side-menu'
import User from './components/user'

import { mapMutations, mapActions, mapGetters } from 'vuex'
import { getNewTagList, routeEqual } from '@/libs/util'
import routers from '@/router/routers'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import './main.less'

export default {
	name:'Main',
	components:{
		HeaderBar,
		ErrorStore,
		Fullscreen,
		Language,
		SideMenu,
		User,
	},
	data() {
		return {
			collapsed: false,
      minLogo,
      maxLogo,
      isFullscreen: false
		}
	},
	computed: {
		menuList () {
			return this.$store.getters.menuList
		},
	},
	methods: {
		...mapMutations([
			'setBreadCrumb',
			'setHomeRoute'
		]),
		...mapActions([

		]),
		turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
		},
		handleCollapsedChnage(state){
			this.collapsed = state
		}
	},
	watch: {
		'$route'(newRoute){
			const { name, query, params, meta } = newRoute

			this.setBreadCrumb(newRoute)

			this.$refs.sideMenu.updateOpenName(newRoute.name)
		}
	},
	mounted() {
		/**
     * @description 初始化设置面包屑导航和标签导航
     */
		this.setHomeRoute(routers)
		this.setBreadCrumb(this.$route)
	},
}
</script>

<style lang="less">
	@import './main.less';
</style>

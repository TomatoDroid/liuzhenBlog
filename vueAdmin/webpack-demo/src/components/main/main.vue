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
					<user :message-unread-count="unreadcCunt" :user-avator="userAvator"></user>
					<language></language>
					<error-store></error-store>
					<fullscreen v-model="isFullscreen" style="padding-right:10px;"></fullscreen>
				</header-bar>
			</Header>
			<Content class="main-content-con">
				<Layout class="main-layout-con">
					<div class="tag-nav-wrapper">
						<tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"></tags-nav>
					</div>
					<Content class="content-wrapper">
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
						<a-back-top :height="100" :bottom="80" :right="50" container=".container-wrapper"></a-back-top>
					</Content>
				</Layout>
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
import TagsNav from './components/tags-nav'
import ABackTop from './components/a-back-top'

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
		TagsNav,
		ABackTop,
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
		...mapGetters([
			'errorCount'
		]),
		tagNavList(){
			this.$store.state.app.tagNavList
		},
		menuList () {
			return this.$store.getters.menuList
		},
		userAvator(){
			return this.$store.state.user.avatorImgPath
		},
		unreadcCunt(){
			return this.$store.state.user.unreadCount
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
		handleCloseTag(){

		},
		handleCollapsedChnage(state){
			this.collapsed = state
		},
		handleClick(item){
			this.turnToPage(item)
		},

	},
	watch: {
		'$route'(newRoute){
			const { name, query, params, meta } = newRoute
			this.addTag({
				route:{ name, query, params, meta },
				type:'push'
			})
			this.setBreadCrumb(newRoute)
			this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
			this.$refs.sideMenu.updateOpenName(newRoute.name)
		}
	},
	mounted() {
		/**
     * @description 初始化设置面包屑导航和标签导航
     */
		this.setTagNavList()
		this.setHomeRoute(routers)
		this.addTag({
			route: this.$store.state.app.homeRoute
		})
		this.setBreadCrumb(this.$route)
		// 设置初始语言
    // this.setLocal(this.$i18n.locale)
    // 如果当前打开页面不在标签栏中，跳到homeName页
    if (!this.tagNavList.find(item => item.name === this.$route.name)) {
      this.$router.push({
        name: this.$config.homeName
      })
    }
    // 获取未读消息条数
    // this.getUnreadMessageCount()
	},
}
</script>

<style lang="less">
	@import './main.less';
</style>

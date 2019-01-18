<template>
	<div class="header-bar">
		<sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollapsedChange"></sider-trigger>
		<custom-bread-crumb show-icon style="margin-left:30px;" :list="breadCrumbList"></custom-bread-crumb>
		<div class="custom-content-con">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import SiderTrigger from './sider-trigger'
import CustomBreadCrumb from './custom-bread-crumb'
import './header-bar.less'
export default {
	name:'HeaderBar',
	components:{
		SiderTrigger,
		CustomBreadCrumb
	},
	props:{
		collapsed: Boolean
	},
	computed: {
		breadCrumbList(){
			return this.$store.state.app.breadCrumbList
		}
	},
	methods: {
		handleCollapsedChange(state){
			this.$emit('on-coll-change',state)
		}
	},
}
</script>


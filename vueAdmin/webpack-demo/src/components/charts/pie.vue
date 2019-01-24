<template>
	<div ref="dom" class="charts chart-pie"></div>
</template>
<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
import { on, off } from '@/libs/tools'
echarts.registerTheme(tdTheme)
export default {
	name:'ChartPie',
	props:{
		value:Array,
		text:String,
		subtext:String
	},
	data() {
		return {
			dom:null
		}
	},
	methods: {
		resize(){
			this.dom.resize()
		}
	},
	mounted() {
		this.$nextTack(() => {

		})
	},
}
</script>

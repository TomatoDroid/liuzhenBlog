<template>
	<div>
		<Row :gutter="20">
			<i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`info_${i}`" style="height:120px;padding-bottom:10px;">
				<info-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
					<count-to :end="infor.count" count-class="count-style"></count-to>
					<p>{{ infor.title }}</p>
				</info-card>
			</i-col>
		</Row>
		<Row :gutter="20" style="margin-top:10px;">
			<i-col :md="24" :lg="8" style="margin-bottom:20px;">
				<Card shadow>
					<chart-pie style="height:300px;" :value="pieData" text="用户来源访问"/>
				</Card>
			</i-col>
			<i-col :md="24" :lg="16" style="margin-bottom:20px">
				<Card shadow>
					<chart-bar style="height:300px" :value="barData" text="每周用户活跃量"/>
				</Card>
			</i-col>
		</Row>
	</div>
</template>

<script>
import InfoCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartBar, ChartPie } from '_c/charts'
export default {
	name:'home',
	components:{
		InfoCard,
		CountTo,
		ChartPie,
		ChartBar,
	},
	data() {
		return {
			inforCardData:[
				{ title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
			],
			pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
		}
	},
}
</script>
<style lang="less">
	.count-style{
		font-size: 50px;
	}
</style>

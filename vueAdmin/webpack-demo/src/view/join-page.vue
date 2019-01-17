<template>
	<div>
		<Row :gutter="20">
			<i-col span="12">
				<Card title="ivie-admin" shadow>
					<img class="qq-gruop-img" :src="qqFans" alt="">
					<p class="qq-gruop-intro">本群为使用iview-admin或者对iview-admin感兴趣的开发者提供交流平台，在这里，解决你开发中的疑惑，共同进步。</p>
				</Card>
			</i-col>
			<i-col span="12">
				<Card title="ivie-admin" shadow>
					<img class="qq-gruop-img" :src="qqFans2" alt="">
					<p class="qq-gruop-intro">本群为使用iview-admin或者对iview-admin感兴趣的开发者提供交流平台，在这里，解决你开发中的疑惑，共同进步。</p>
				</Card>
			</i-col>
		</Row>
	</div>
</template>
<script>
import qqFans from '@/assets/images/qq-group1.jpg'
import qqFans2 from '@/assets/images/qq-group2.jpg'

export default {
	name:'join_page',
	data() {
		return {
			qqFans,
			qqFans2
		}
	},
}
</script>
<style>
.qq-group-img{
	display: block;
	margin: 0 auto;
	width: 240px;
}
.qq-group-intro{
	padding: 20px;
	font-size: 16px;
}
</style>

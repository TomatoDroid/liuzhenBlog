<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleClick">点击</button>
    <p class="open-video-err-tip" v-if="openVideoErr === 'NotAllowedError'">
      摄像头打开权限被禁止，请尝试以下方法开启摄像头：
      <br>1、打开浏览器设置页面
      <br>2、进入“高级”选项
      <br>3、进入“内容设置”
      <br>4、点击“摄像头”选项
      <br>5、打开“使用前询问”按钮
      <br>6、刷新页面
    </p>
    <img>
  </div>
</template>
<script>
const liu = {
	name: 'liuzhen',
	first: 'a'
};
export default {
	data() {
		return {
			nihao: '',
			sas: ''
		};
	},
	methods: {
		handleClick(e) {
			let b;
			console.log(e);
		},
		format() {
			new Promise(resolve => {
				resolve();
			});
		}
	}
};
</script>
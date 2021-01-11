<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="list"></tab>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				src: '',
				list: []
			}
		},
		onLoad() {
            this.getLabel();
		},
		methods: {
			getLabel() {
				uniCloud.callFunction({
					name: 'getLabel'
				}).then((res)=>{
					this.list = res.result.content.data;
				}) 
			}
		}
	}
</script>

<style lang="scss">

</style>

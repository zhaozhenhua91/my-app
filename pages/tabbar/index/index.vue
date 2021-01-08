<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<view class="" v-for="i in 100">
			{{i}}个元素
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				src: ''
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>

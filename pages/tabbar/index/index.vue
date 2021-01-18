<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="list" @setActiveIndex="getActiveIndex" :currentIndex="currentIndex"></tab>
		<list-scroll :activeIndex="activeIndex" @setCurrentIndex="getCurrentIndex" :list="list"></list-scroll>
	</view>
</template>

<script>
	import listScroll from '../../../components/listScroll/listScroll.vue'
	export default {
		components: {
			listScroll
		},
		data() {
			return {
				title: 'Hello',
				src: '',
				list: [],
				activeIndex: 0,
				currentIndex: 0
			}
		},
		onLoad() {
            this.getLabel();
		},
		methods: {
			getLabel() {
			   this.$api.getLabel().then((res)=>{
				   const {content} = res;
				   this.list = content;
			   }).catch((err)=>{
				   console.log(err);
			   })
			},
			getActiveIndex(index) {
				this.activeIndex = index;
			},
			getCurrentIndex(index) {
				this.currentIndex = index;
			}
		}
	}
</script>

<style lang="scss">
    page {
		height: 100%;
		display: flex;
	}
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
</style>

<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll_box">
				<view v-for="i in 10" class="tab-scroll_item">
					{{i}}内容
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
   .tab-scroll {
	   .tab-scroll_box {
		   display: flex;
	   }
   }
</style>

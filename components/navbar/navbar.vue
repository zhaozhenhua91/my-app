<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="navbar-search">
				<view class="navbar-search_icon">
					
				</view>
				<view class="navbar-search_content">
					搜索
				</view>
			</view>
		</view>
		<view style="height: 45px;">
			
		</view>
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
    .navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			height: 45px;
			background-color: $mk-base-color;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 15px;
			box-sizing: border-box;
			.navbar-search {
				height: 30px;
				background-color: #fff;
				display: flex;
				align-items: center;
				width: 100%;
				border-radius: 30px;
				padding:0 10px;
				.navbar-search_icon {
					width: 10px;
					height: 10px;
					border: 1px solid red;
					margin-right: 10px;
				}
				.narbar-search_content {
					font-size: 12px;
					color: #999;
				}
			}
		}
    }
</style>

<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height: `${statusBarHeight}px`}"></view>
			<view class="navbar-content" :style="{height: `${navbarHeight}px`,width: `${windowWidth}px`}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<text class="iconfont icon-search"></text>
					</view>
					<view class="navbar-search_content">
						首页搜索
					</view>
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
				statusBarHeight: 20,
				navbarHeight: 44,
				windowWidth: 375
			}
		},
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth;
			console.log(info);
			//h5, app mp-alipay不适用
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			//获取胶囊的信息
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			console.log(menuButtonInfo);
			//（胶囊底部高度 - 状态栏的高度）+ （胶囊顶部高度 - 状态栏内的高度） = 导航栏的高度
			this.navbarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight);
			this.windowWidth = menuButtonInfo.left;
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icon.css';
    .navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			
			background-color: $mk-base-color;
			
			
			
			.navbar-content {
				//height: 45px;
				padding: 0 15px;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: center;
				.navbar-search {
					height: 30px;
					background-color: #fff;
					display: flex;
					align-items: center;
					width: 100%;
					border-radius: 30px;
					padding:0 10px;
					.navbar-search_icon {
						margin-right: 10px;
					}
					.navbar-search_content {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
    }
</style>

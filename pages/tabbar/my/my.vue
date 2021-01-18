<template>
	<view>
		<view class="my-header">
			<view class="my-header__background">
				<image :src="userInfo.avatar" mode="aspectFill"></image>
			</view>
			<view class="my-header__logo">
				<view class="my-header__logo-box">
					<image :src="userInfo.avatar" mode="aspectFill"></image>
				</view>
				<text class="my-header__name">{{userInfo.author_name}}</text>
			</view>
		</view>
		<view class="my-header__info">
			<view class="my-header__info-box">
				<text class="my-header__info-title">关注</text>
				<text>{{userInfo.follow_count}}</text>
			</view>
			<view class="my-header__info-box">
				<text class="my-header__info-title">粉丝</text>
				<text>{{userInfo.fans_count}}</text>
			</view>
			<view class="my-header__info-box">
				<text class="my-header__info-title">积分</text>
				<text>{{userInfo.fans_count}}</text>
			</view>
		</view>
		<view class="my-content">
			<view class="my-content__list">
				<view class="my-content__list-title">
					<uni-icons class="icons" type="contact" size="16" color="#666"></uni-icons>
					<text>我的文章</text>
				</view>
				<uni-icons type="arrowright" size="16" color="#666"></uni-icons>
			</view>
			<view class="my-content__list" @click="feedback">
				<view class="my-content__list-title">
					<uni-icons class="icons" type="help" size="16" color="#666"></uni-icons>
					<text>意见反馈</text>
				</view>
				<uni-icons type="arrowright" size="16" color="#666"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		onLoad() {
			console.log(this.userInfo);
		},
		methods: {
			feedback() {
				uni.navigateTo({
					url: '/pages/feedback/feedback'
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: #F5F5F5;
}
.my-header {
	position: relative;
	padding-bottom: 15px;
	.my-header__background {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		filter: blur(8px);
		opacity: 0.3;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.my-header__logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 30px;
		.my-header__logo-box {
			width: 50px;
			height: 50px;
			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.my-header__name {
			margin-top: 15px;
			font-size: 16px;
			font-weight: bold;
		}
	}
}
	.my-header__info {
		display: flex;
		margin-top: 15px;
		.my-header__info-box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			font-size: 12px;
			color: #999999;
			.my-header__info-title {
				font-size: 14px;
				color: #333333;
			}
		}
	}
	.my-content__list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
		background-color: #FFFFFF;
		padding: 10px;
		height: 30px;
		.my-content__list-title {
			.icons {
				margin-right: 5px;
			}
		}
	}
</style>

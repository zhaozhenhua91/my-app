<template>
	<view class="feedback-container">
		<view class="feedback-title">
			意见反馈:
		</view>
		<view class="feedback-content">
			<textarea value="" placeholder="请输入您要反馈的问题" />
		</view>
		<view class="feedback-image-title">
			反馈图片：
		</view>
		<view class="feedback-image-box">
			<view class="feedback-image-item" v-for="(item, index) in imageList">
				<view class="close-icon" @click="delImg(index)">
					<uni-icons type="closeempty" size="20" color="#fff"></uni-icons>
				</view>
				<view class="image-box">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</view>
			<view class="feedback-image-item" @click="chooseImg" v-if="imageList.length < 5">
				<view class="image-box">
					<uni-icons type="plusempty" size="50" color="#eee"></uni-icons>
				</view>
			</view>
		</view>
			<button class="feedback-btn" type="primary">提交反馈意见</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList: []
			}
		},
		methods: {
			chooseImg() {
				let self = this;
				const count = 5 - this.imageList.length;
				uni.chooseImage({
					count:5,
					success(res){
						console.log(res);
						const tempfilepaths = res.tempFilePaths;
						tempfilepaths.forEach((item,index)=>{
							if (index < count) {
								self.imageList.push({
									url: item
								});
							}
						})
					}
				})
			},
			delImg(index) {
				this.imageList.splice(index, 1);
			}
		}
	}
</script>

<style lang="scss">
    page {
		background-color: #FFFFFF;
	}
	.feedback-container {
		padding: 10px;
		.feedback-title {
			font-size: 16px;
			color: #999999;
		}
		.feedback-content {
			border: 1px solid #F5F5F5;
			padding: 10px;
			margin-top: 20px;
		}
		.feedback-image-title {
			font-size: 16px;
			color: #999999;
			margin-top: 20px;
		}
		.feedback-image-box {
			margin-top: 20px;
			display: flex;
			flex-wrap: wrap;
			.feedback-image-item {
				position: relative;
				width: 33.3%;
				height: 0;
				padding-top: 33.3%;
				.close-icon {
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 2;
					background-color: $mk-base-color;
					width: 22px;
					height: 22px;
					border-radius: 11px;
				}
				.image-box {
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 5px;
					right: 5px;
					bottom: 5px;
					left: 5px;
					border: 1px solid #eee;
					border-radius: 5px;
					overflow: hidden;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.feedback-btn {
			margin: 5px 10px;
			background-color: $mk-base-color;
		}
	}
</style>

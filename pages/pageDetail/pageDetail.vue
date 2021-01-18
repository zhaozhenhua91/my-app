<template>
	<view class="detail-container">
		<view class="detail-container__title">
			{{formData.title}}
		</view>
		<view class="detail-container__info">
			<view class="detail-container__info-detail">
				<view class="detail-container__info-img">
					<image :src="formData.avatar" mode="aspectFill"></image>
				</view>
				<view class="detail-container__info-detail-content">
					<view class="detail-container__info-detail__author">
						{{formData.author_name}}
					</view>
					<view class="detail-container__info-detail__time">
						{{formData.time}}  {{formData.browse_count}}浏览  {{formData.thumbs_up_count}}赞
					</view>
				</view>
			</view>
			<view class="detail-container__info-btn">
				<button type="default" size="mini">已关注</button>
			</view>
		</view>
		<view class="detail-container__content">
			<u-parse :content="content.content" :noData="noData"></u-parse>
		</view>
		<view class="detail-container__bottom">
			<view class="content-box" @click="open">
				<view class="content">
					谈谈您的看法
				</view>
				<view class="content-edit">
					<uni-icons type="compose" size="20" style="color: red;"></uni-icons>
				</view>
			</view>
			<view class="others">
				<uni-icons type="chat" size="20" style="color: red;"></uni-icons>
				<uni-icons type="heart" size="20" style="color: red;"></uni-icons>
				<uni-icons type="hand-thumbsup" size="20" style="color: red;"></uni-icons>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" :maskClick="false">
			<view class="comment-container">
				<view class="comment-container__head">
					<text @click="close">取消</text>
					<text>发布</text>
				</view>
				<view class="comment-container__content">
					<textarea class="comment-textarea" v-model="commentText" placeholder="请输入评论内容" maxlength="200" />
					<view class="count">
						<text>{{commentText.length}}/200</text>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uParse from "@/components/gaoyia-parse/parse.vue";
	export default {
		data() {
			return {
				formData: {},
				content: {},
				noData: '<p style="text-align:center">详情加载中......</p>',
				commentText: ''
			}
		},
		components: {
			uParse
		},
		onLoad(query) {
			console.log(JSON.parse(query.params));
			this.formData = JSON.parse(query.params);
			this.getDetail();
		},
		methods: {
			getDetail() {
				this.$api.getDetail({
					user_id: "5ff7da009fea3c000176acf1",
					article_id: this.formData._id
				}).then((res)=>{
					const {data} = res;
					console.log(data);
					this.content = data;
				})
			},
			open() {
				this.$refs.popup.open();
			},
			close() {
				this.$refs.popup.close();
			}
		}
	}
</script>

<style lang="scss">
    .detail-container {
		background: #FFFFFF;
		padding: 10px;
		padding-bottom: 54px;
		.detail-container__title {
			font-size: 20px;
			font-weight: bold;
		}
		.detail-container__info {
			display: flex;
			margin-top: 10px;
			justify-content: space-between;
			.detail-container__info-img {
				width: 50px;
				height: 50px;
				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.detail-container__info-detail {
				display: flex;
				.detail-container__info-detail-content {
					margin-left: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.detail-container__info-detail__time {
						font-size: 12px;
						color: #999999;
					}
				}
			}
			.detail-container__info-btn {
				display: flex;
				align-items: center;
			}
		}
		.detail-container__content {
			margin-top: 10px;
			height: 100%;
		}
		.detail-container__bottom {
			display: flex;
			justify-content: space-between;
			position: fixed;
			bottom: 0;
			width: 100%;
			background-color: #FFFFFF;
			.content-box {
				flex: 2;
				display: flex;
				justify-content: space-between;
				border: 1px solid #999999;
				padding: 0 10px;
				border-radius: 5px;
				margin: 5px 0;
				.content {
					color: #999999;
					font-size: 14px;
					line-height: 32px;
				}
				.content-edit {
					display: flex;
					align-items: center;
				}
			}
			.others {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 20px;
			}
		}
	}
	.comment-container  {
		background-color: #FFFFFF;
		padding: 0 10px;
		.comment-container__head {
			display: flex;
			justify-content: space-between;
			color: #999999;
			font-size: 13px;
			line-height: 38px;
			height: 38px;
			border-bottom: 1px solid #F5F5F5;
		}
		.comment-container__content {
			color: #999999;
			padding: 15px;
			.comment-textarea {
				height: 200px;
				width: 100%;
			}
			.count {
				display: flex;
				justify-content: flex-end;
				font-size: 14px;
				color: #999999;
			}
		}
	}
</style>

<template>
	<view>
		<view v-for="item in listData" @click="openDetail(item)">
			
		
		<view class="list-card__container" v-if="item.mode == 'base'">
			<view>
				<image :src="item.cover[0]" class="list-card__img" mode="aspectFill"></image>
			</view>
		
			<view class="list-card__info">
				<view class="listcard-content__title">
					{{item.title}}
				</view>
				<view class="listcard-content__desc">
					<view class="listcard-content__desc-label">
						<view class="name">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content__desc-browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
		<view class="more-list-card__container" v-if="item.mode=='column'">
			<view class="listcard-content__title">
				{{item.title}}
			</view>
			<view class="more-list-card__img">
				<image v-for="i in 3" :src="item.cover[i]" class="list-card__img" mode="widthFix"></image>	
			</view>
			<view class="listcard-content__desc">
				<view class="listcard-content__desc-label">
					<view class="name">
						{{item.classify}}
					</view>
				</view>
				<view class="listcard-content__desc-browse">
					{{item.browse_count}}浏览
				</view>
			</view>
		</view>
		<view class="large-listcard-content" v-if="item.mode=='image'">
			<view class="large-listcard__img">
				<image :src="item.cover[0]" class="list-card__img" mode="aspectFill"></image>
			</view>
			<view class="listcard-content__title">
				{{item.title}}
			</view>
			<view class="listcard-content__desc">
				<view class="listcard-content__desc-label">
					<view class="name">
						{{item.classify}}
					</view>
				</view>
				<view class="listcard-content__desc-browse">
					{{item.browse_count}}浏览
				</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			listData: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				
			}
		},
		created() {
            
		},
		methods: {
            openDetail(item) {
				console.log(item);
				let params = {
					_id: item._id,
					title: item.title,
					thumbs_up_count: item.thumbs_up_count,
					time: item.create_time,
					browse_count: item.browse_count,
					avatar: item.author.avatar,
					author_name: item.author.author_name
				}
				uni.navigateTo({
					url: '/pages/pageDetail/pageDetail?params='+JSON.stringify(params)
				});
			}
		}
	}
</script>

<style lang="scss">
	.list-card__container{
		display: flex;
		height: 50px;
		background-color: #FFFFFF;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		.list-card__img {
			height: 50px;
			width: 50px;
			border-radius: 5px;
		}
		.list-card__info {
			padding-left: 10px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.listcard-content__title {
				font-size: 14rpx;
				font-weight: 400;
				color: #333;
			}
			.listcard-content__desc {
				display: flex;
				justify-content: space-between;
				.listcard-content__desc-label {
					border: 1px solid red;
					border-radius: 5px;
					padding: 0 5px;
					font-size: 12px;
					line-height: 15px;
					height: 15px;
					color: $mk-base-color;
				}
				.listcard-content__desc-browse {
					font-size: 12px;
					color: #333;
				}
			}
		}
	}
	.more-list-card__container {
		background-color: #FFFFFF;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		.more-list-card__img {
			display: flex;
			.list-card__img {
				flex:1;
				padding: 10px 0;
				width: 100%;
				margin: 0 5px;
				&:first-child {
					margin-left: 0px;
				}
				&:last-child {
					margin-right: 0px;
				}
			}
		}
		.listcard-content__title {
			font-size: 14rpx;
			font-weight: 400;
			color: #333;
		}
		.listcard-content__desc {
			display: flex;
			justify-content: space-between;
			.listcard-content__desc-label {
				border: 1px solid red;
				border-radius: 5px;
				padding: 0 5px;
				font-size: 12px;
				line-height: 15px;
				height: 15px;
				color: $mk-base-color;
			}
			.listcard-content__desc-browse {
				font-size: 12px;
				color: #333;
			}
		}
	}
	
	.large-listcard-content {
		background-color: #FFFFFF;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		.large-listcard__img {
			display: flex;
			.list-card__img {
				flex: 1;
				height: 100px;
				padding: 10px 0;
			}
		}
		.listcard-content__title {
			font-size: 14rpx;
			font-weight: 400;
			color: #333;
		}
		.listcard-content__desc {
			display: flex;
			justify-content: space-between;
			.listcard-content__desc-label {
				border: 1px solid red;
				border-radius: 5px;
				padding: 0 5px;
				font-size: 12px;
				line-height: 15px;
				height: 15px;
				color: $mk-base-color;
			}
			.listcard-content__desc-browse {
				font-size: 12px;
				color: #333;
			}
		}
	}
</style>

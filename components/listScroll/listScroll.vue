<template>
	<view class="list-container">
		<swiper class="list-swiper" :current="activeIndex" @change="changeItem">
			<swiper-item class="list-swiper-item" v-for="i in 6">
					<scroll-view scroll-y class="list-card-scroll" @scrolltolower="loadmore">
						<view>
							<list-card :listData="listcardData[cIndex]"></list-card>
							<uni-load-more iconType="snow" :status="loadStatus"></uni-load-more>
						</view>
					</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import listCard from "../listCard/listCard.vue";
	export default {
		components: {
			listCard
		},
		props: {
			activeIndex: {
				type: Number,
				default() {
					return 0
				}
			},
			list: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				listData: [],
				listcardData: {},
				cIndex: 0,
				load: {},
				pageSize: 5,
				loadStatus: 'loading'
			}
		},
		watch: {
			list: function(val) {
				if (val.length == 0) return;
				this.getList(0);
			}
			
		},
		methods: {
			changeItem(e) {
				const {current} = e.detail;
				this.cIndex = current;
				if(!this.listcardData[current] || this.listcardData[current].length === 0) {
					this.getList(current);
				}
				this.$emit('setCurrentIndex',current);
			},
			getList(current) {
				if (!this.load[current]) {
					this.load[current] = {
						page: 1,
						loading: 'loading'
					};
				};
				this.$api.getList({
					  name: this.list[current].name,
					  page: this.load[current].page,
					  pageSize: this.pageSize
					}).then((res)=>{
					console.log(res);
					const {data} = res;
					if (data.length == 0) {
						this.loadStatus = 'noMore';
					}
					let oldList = this.listcardData[current] || [];
					oldList.push(...data);
					//this.listcardData[current] = res.data;
					this.$set(this.listcardData,current,oldList);
				}).catch((err)=>{
					
				})
			},
			loadmore() {
				this.load[this.cIndex].page++;
				this.getList(this.cIndex);
				console.log('上拉更多');
			}
		}
	}
</script>

<style lang="scss">
	.list-container {
		flex: 1;
		box-sizing: border-box;
		overflow: hidden;
		.list-swiper {
			height: 100%;
			.list-swiper-item  {
				height: 100%;
			}
		}
		.list-card-scroll {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>

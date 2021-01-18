<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll__box">
				<view v-for="(item,index) in list" class="tab-scroll__item" :class="{'active': activeIndex == index}" @click="chooseItem(index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="20"></uni-icons>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			},
			currentIndex: {
				type: Number,
				default() {
					return 0
				}
			}
		},
		data() {
			return {
                activeIndex: 0
			}
		},
		watch: {
			currentIndex: function(val) {
				this.activeIndex = val;
			}
		},
		methods: {
            chooseItem(index) {
				this.activeIndex = index;
				this.$emit('setActiveIndex',index);
			}
		}
	}
</script>

<style lang="scss">
   .tab {
	   background-color: #fff;
	   display: flex;
	   .tab-scroll {
		   flex: 1;
	   	   overflow: hidden;
	   	   .tab-scroll__box {
	   		   display: flex;
	   		   height: 45px;
	   		   align-items: center;
	   		   flex-wrap: nowrap;
	   		   box-sizing: border-box;
	   		   .tab-scroll__item {
	   			   flex-shrink: 0;
	   			   padding: 0 10px;
	   			   color: #333;
	   			   font-size: 14px;
				   &.active {
					   color: #007AFF;
				   }
	   		   }
	   	   }
	   }
	   .tab-icons { 
		   position: relative;
		   display: flex;
		   justify-content: center;
		   align-items: center;
		   padding: 0 10px;
		   &::after {
		   			content: '';
		   			top: 12px;
		   			bottom: 12px;
		   			position: absolute;
		   			left: 0;
		   			width: 1px;
		   			background-color: #ddd;
		    }
	   }
   }

</style>

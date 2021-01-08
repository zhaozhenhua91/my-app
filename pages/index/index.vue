<template>
	<view class="content">
		<image class="logo" :src="src"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="default" @click="open">点击</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				src: ''
			}
		},
		onLoad() {

		},
		methods: {
           open() {
			   let self = this;
			   uniCloud.deleteFile({
			   	 fileList: ['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-b3kozzcfdiks9753c7/4686bda0-4efd-11eb-bdc1-8bd33eb6adaa.png'],
				 success(res) {
				 	console.log(res);
				 },
				 fail(err) {
				 	console.log(err);
				 }
			   })
     //          uni.chooseImage({
				 //  count: 1,
				 //  success(res) {
					//   console.log(res.tempFilePaths[0]);
					//   uniCloud.uploadFile({
					//   	filePath: res.tempFilePaths[0],
					// 	cloudPath: 'test.jpg',
					// 	success(res) {
					// 		self.src = res.fileID;
					// 		console.log(res);
					// 	},
					// 	fail(err) {
					// 		console.log(err);
					// 	}
					//   })
				 //  },
				 //  fail(err) {
					//   console.log(err);
				 //  }
			  // });
		   }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

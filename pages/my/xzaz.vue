<template>
	<!-- 下载与安装 -->
	<view class="">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')"></uni-nav-bar>
		<view style="padding: 0 30upx;line-height: 60upx;height: 60upx;font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(153,153,153,1);">
			如何下载ios/android客户端
		</view>
		<view class="middle" style="padding: 0 20upx;">
			<view class="middle-item">
				<text class="middle-text">1、通过扫描二维码下载</text>
			</view>
			<view class="middle-item" style=" border-top:2upx solid rgb(204,204,204,1);border-bottom: 2upx solid rgb(204,204,204,1);">
				<text class="middle-text">2、本地下载*.ipa/*.apk文件</text>
			</view>
			<view class="middle-item">
				<text class="middle-text">3、更新版本：可根据提示在已安装的app上进行更新
或卸载登录appstore重新下载安装</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				navBarTitle: '下载与安装',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
			}
		},
		methods: {
			leftNavTop: () => {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page {
		background-color: #eee;
	}

	.middle {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 320upx;
		background: rgba(255, 255, 255, 1);
	}

	.middle-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		box-sizing: border-box;
		padding: 0 20upx;
	}

	.middle-text {
		font-size: 28upx;
		font-family: Roboto-Regular, Roboto;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
</style>

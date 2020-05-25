<template>
	<!-- 浏览与操作 -->
	<view class="">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')"></uni-nav-bar>
		<view style="padding: 0 30upx;line-height: 60upx;height: 60upx;font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(153,153,153,1);">
			客户端如何进行操作与浏览
		</view>
		<view class="middle">
			<view class="middle-item">
				<text class="middle-text">根据有效的图标或文字信息进行填写，如有疑问可联
系开发人员</text>
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
				navBarTitle: '浏览与操作',
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
		height: 132upx;
		background: rgba(255, 255, 255, 1);
	}
	
	.middle-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		box-sizing: border-box;
		padding: 0 30upx;
	}
	
	.middle-text {
		font-size: 28upx;
		font-family: Roboto-Regular, Roboto;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
</style>

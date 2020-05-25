<template>
	<!-- 账号与安全 -->
	<view class="">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')"></uni-nav-bar>
		<view style="padding: 0 30upx;line-height: 60upx;height: 60upx;font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(153,153,153,1);">
			如何登录客户端
		</view>
		<view class="middle">
			<view class="middle-item">
				<text class="middle-text">在客户端输入框，输入登录名、密码，点击登录，验 证通过后进入用户首页。首次登录请找管理员进行账号 申请,若忘记密码则联系管理员进行修改更</text>
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
				navBarTitle: '账号与安全',
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
		height: 170upx;
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

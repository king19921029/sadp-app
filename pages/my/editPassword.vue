<template>
	<!-- 修改密码 -->
	<view class="">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')"></uni-nav-bar>
		<view style="padding: 0 30upx;line-height: 60upx;height: 60upx;font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(153,153,153,1);">
			<form>
				<view class="input-icon-view">
					<input class="pass-input" placeholder="请输入原密码" />
					<image class="check-img" src="../../static/imgs/check.png"></image>
				</view>
				<view class="input-icon-view">
					<input class="pass-input" placeholder="请输入新密码" />
					<image class="check-img" src="../../static/imgs/check.png"></image>
				</view>
				<view class="input-icon-view">
					<input class="pass-input" placeholder="请再次输入新密码" />
					<image class="check-img" src="../../static/imgs/check.png"></image>
				</view>
				<view>
					<button class="button-submit" form-type="submit">提交</button>
				</view>
			</form>
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
				navBarTitle: '修改密码',
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

<style lang="scss">
	page {
		background-color: #fff;
	}
	
	.input-icon-view {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid #ccc;
		height: 101upx;
		
		.pass-input{
			margin-left: 20upx;
			font-size: 28upx;
			color: #bbb;
		}
	}
	
	.check-img {
		height: 35upx;
		width: 35upx;
		margin-right: 20upx;
	}
	
	.button-submit {
		border: none;
		border-radius: 100upx;
		background-color: #3574FA;
		color: #fff;
		font-size: 28upx;
		height: 80upx;
		line-height: 80upx;
		margin-top: 100upx;
	}
</style>

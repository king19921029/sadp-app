<template>
	<!-- 我的 -->
	<view class="" style="height: 100%;background-color: #eee;">
		<view class="title">
			<image class="title-img" src="../../static/imgs/wode.png" mode=""></image>
			<text class="title-text">你的昵称</text>
		</view>
		<view class="middle" style="padding: 0 20upx;">
			<view class="middle-item">
				<text class="common-text-title">部门</text>
				<text class="common-text-attribute">设备管理</text>
			</view>
			<view class="middle-item" style=" border-top:2upx solid rgb(204,204,204,1);border-bottom: 2upx solid rgb(204,204,204,1);">
				<text class="common-text-title">账号</text>
				<text class="common-text-attribute">eqmsadmin</text>
			</view>
			<view class="middle-item">
				<text class="common-text-title">岗位号</text>
				<text class="common-text-attribute">10015420</text>
			</view>
		</view>
		<view style="padding: 0 30upx;line-height: 69upx;height: 69upx;font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(153,153,153,1);">
			常见问题
		</view>
		<view class="middle">
			<view class="middle-item" @click="jump(1)" @touchstart="addActive(1)" @touchend="removeActive" :class="active==1?'active':''">
				<text class="common-text-title">下载与安装</text>
				<text class="common-text-attribute">></text>
			</view>
			<view class="middle-item" @click="jump(2)" @touchstart="addActive(2)" @touchend="removeActive" :class="active==2?'active':''">
				<text class="common-text-title">账号与安全</text>
				<text class="common-text-attribute">></text>
			</view>
			<view class="middle-item" @click="jump(3)" @touchstart="addActive(3)" @touchend="removeActive" :class="active==3?'active':''">
				<text class="common-text-title">浏览与操作</text>
				<text class="common-text-attribute">></text>
			</view>
		</view>
		<view class="middle" style="margin-top: 30upx;height:88upx;">
			<view class="middle-item" @click="jump(4)" @touchstart="addActive(4)" @touchend="removeActive" :class="active==4?'active':''">
				<text class="common-text-title">修改密码</text>
				<text class="common-text-attribute">></text>
			</view>
		</view>
		<view class="middle" style="margin-top: 30upx;height:88upx;">
			<view class="middle-item">
				<text class="common-text-title">版本信息</text>
				<text class="common-text-attribute">版本0.0.1</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: null
			}
		},
		methods: {
			jump: function(index) {
				console.log(this.active);
				switch (Number(index)) {
					case 1:
						uni.navigateTo({
							url: '/pages/my/xzaz'
						})
						break;
					case 2:
						uni.navigateTo({
							url: '/pages/my/zhyaq'
						})
						break;
					case 3:
						uni.navigateTo({
							url: '/pages/my/llycz'
						})
						break;
					case 4:
						uni.navigateTo({
							url: '/pages/my/editPassword'
						})
						break;
				}
			},
			addActive: function(index) {
				this.active = index
			},
			removeActive: function() {
				this.active = null
			}
		}
	}
</script>

<style>
	.active {
		background-color: #eee;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 750upx;
		height: 280upx;
		padding: 0 40upx;
		background: rgba(53, 116, 250, 1);
	}

	.title-img {
		width: 122upx;
		height: 122upx;
		border-radius: 50%;
		background-color: red;
	}

	.title-text {
		margin-left: 30upx;
		font-size: 32upx;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.middle {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 280upx;
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

	.common-text-title {
		font-size: 26upx;
	}
</style>

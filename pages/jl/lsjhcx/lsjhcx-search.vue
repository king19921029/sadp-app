<template>
	<!-- 临时检校计划查询-点击搜索按钮 -->
	<view class="">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')"></uni-nav-bar>
		<view style="padding: 0 45upx;box-sizing: border-box;">
			<view class="inp-item">
				<input type="text" value="" placeholder="设备编码" placeholder-style="font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(187,187,187,1);" />
			</view>
			<view class="inp-item">
				<input type="text" value="" placeholder="委托单号" placeholder-style="font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(187,187,187,1);" />
			</view>
			<view class="inp-item">
				<input type="text" value="" placeholder="计划开始日期" placeholder-style="font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(187,187,187,1);" />
			</view>
			<view class="inp-item">
				<input type="text" value="" placeholder="计划截止日期" placeholder-style="font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(187,187,187,1);" />
			</view>
			<view class="inp-item">
				<input type="text" value="" placeholder="校验类别" placeholder-style="font-size:24upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(187,187,187,1);" />
			</view>
			<button class="common-button-text" type="primary" style="margin-top: 100upx;border-radius: 50upx;height: 80upx;line-height: 80upx;">查询</button>
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
				navBarTitle: '临时检校计划查询',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				btnDisabled: true
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
	.inp-item {
		border-radius: 40upx;
		background-color: #eee;
		padding: 10upx 50upx;
		margin: 50upx 0;
		display: flex;
		align-items: center;
	}

	.inp-item>input {
		display: flex;
		align-items: center;
	}
</style>

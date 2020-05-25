<template>
	<view class="containersjb">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view style="height: 80upx;background-color: #4680FA;"></view>
		<view class="detail">
			<view class="detail-list" style="padding-top: 40upx;">
				<view>作业线编号:</view>
				<input class="insert" />
			</view>
			<view class="detail-list">
				<view>作业线名称:</view>
				<input class="insert" />
			</view>
			<view class="detail-list">
				<view>设备编码:</view>
				<input class="insert" />
			</view>
			<view class="detail-list">
				<view>设备名称:</view>
				<input class="insert" />
			</view>
			<view class="detail-list">
				<view>停机开始时间:</view>
				<input class="insert" />
			</view>
			<view class="detail-list">
				<view>事故级别:</view>
				<input class="insert" />
			</view>
			<view class="detail-list">
				<view>原因属性:</view>
				<input class="insert" />
			</view>
			<view class="detail-list">
				<view>专业属性:</view>
				<input class="insert" />
			</view>
			<view class="detail-list">
				<view>故障原因:</view>
				<input class="insert" />
			</view>
			<view class="search" style="margin-bottom: 40upx;" @click="baocun">保存</view>
		</view>
		
	</view>
	
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{
			uniNavBar,
		},
		data() {
			return {
				datas:{},
				navBarTitle: '故障新增详情',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				btnDisabled: true
			}
		},
		onLoad() {
			
		},
		methods: {
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	.search{
		border-radius: 40upx;
		height: 80upx;
		background-color: #3574FA;
		margin: 100upx 46upx 0upx 46upx ;
		font-size:32upx;
		text-align: center;
		line-height: 80upx;
		font-family:SourceHanSansCN-Medium,SourceHanSansCN;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
	.insert{
		background-color: #eee;
		border-radius: 6upx;
		width: 260upx;
		padding: 0 14upx;
		border-color: #E9E9E9;
	}
</style>

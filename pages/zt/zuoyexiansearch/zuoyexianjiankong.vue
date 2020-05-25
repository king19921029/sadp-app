<template>
	<view class="containersjb" style="height: 100%;">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view class="search" style="margin-top: 0;">成功查询到{{count}}条数据</view>
		<scroll-view class="main" scroll-y="true">
			<view class="zuoyexianhead">
				<view class="title">作业线名称</view>
				<view class="title">停机开始时间</view>
				<view class="title" style="border: 0upx;">停机持续时间</view>
			</view>
			<view class="content" v-for="(item,index) in datas" :key="index">
				<view class="item" style="line-height: 100upx;">{{item.name}}</view>
				<view class="item">{{item.starttime}}</view>
				<view class="item">{{item.times}}</view>
			</view>
		</scroll-view>
		
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
				count:4,
				datas:[
					{
						name:'1850连退线',
						starttime:'2019-08-16 16:13:14',
						times:'0天1小时20分钟30秒'
					},
					{
						name:'1850连退线',
						starttime:'2019-08-16 16:13:14',
						times:'0天1小时20分钟30秒'
					},{
						name:'1850连退线',
						starttime:'2019-08-16 16:13:14',
						times:'0天1小时20分钟30秒'
					},{
						name:'1850连退线',
						starttime:'2019-08-16 16:13:14',
						times:'0天1小时20分钟30秒'
					}
				],
				navBarTitle: '作业线监控画面',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				btnDisabled: true
				
			}
		},
		onShow() {
			
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
	.zuoyexianhead{
		color: #3574FA;
		font-size: 24upx;
		margin: 10upx 30upx;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		background-color: #fff;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
	}
	.title{
		border-right: 4upx solid #eee;
		padding: 10upx 0;
		font-weight: 500;
		font-size: 24upx;
		width: 226upx;
		text-align: center;
	}
	.content{
		display: flex;
		flex-direction: row;
		background-color: #fff;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-bottom: 10upx;
		height: 100upx;
		border-radius: 10upx;
	}
	.item{
		width: 226upx;
		font-size: 24upx;
		text-align: center;
		justify-content: center;
	}
</style>

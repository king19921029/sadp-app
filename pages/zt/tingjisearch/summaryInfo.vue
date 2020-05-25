<template>
	<view class="containersjb" :class="{chongman:count<=3}">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view class="search">成功查询到{{count}}条数据</view>
		<scroll-view class="main" scroll-y="true">
			<view class="list-view" v-for="(item,index) in datas" :key="index">
				<view class="first-line">
					<image class="img-shuqian" src="../../../static/imgs/shuqian.png"></image>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>作业线名称</view>
					</view>
					<view>{{item.name}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>生产操作故障停机(小时/次数)</view>
					</view>
					<view>{{item.shenchan}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>设备故障停机(小时/次数)</view>
					</view>
					<view>{{item.guzhang}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>设备计划检修(小时/次数)</view>
					</view>
					<view>{{item.jianxiu}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>计划检修拖期(小时/次数)</view>
					</view>
					<view>{{item.tuoqi}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>停机合计(小时/次数)</view>
					</view>
					<view>{{item.heji}}</view>
				</view>
			</view>
		</scroll-view>
		
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
				count:4,
				datas:[
					{
						name:'1580主扎线-H21',
						shenchan:'0.00/0',
						guzhang:'0.00/0',
						jianxiu:'0.00/0',
						tuoqi:'0.00/0',
						heji:'0.00/0'
					},
					{
						name:'1580主扎线-H21',
						shenchan:'0.00/0',
						guzhang:'0.00/0',
						jianxiu:'0.00/0',
						tuoqi:'0.00/0',
						heji:'0.00/0'
					},
					{
						name:'1580主扎线-H21',
						shenchan:'0.00/0',
						guzhang:'0.00/0',
						jianxiu:'0.00/0',
						tuoqi:'0.00/0',
						heji:'0.00/0'
					},
					{
						name:'1580主扎线-H21',
						shenchan:'0.00/0',
						guzhang:'0.00/0',
						jianxiu:'0.00/0',
						tuoqi:'0.00/0',
						heji:'0.00/0'
					}
				],
				navBarTitle: '停机信息汇总',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
				
			}
		},
		onShow() {
			
		},
		methods: {
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				uni.navigateTo({
					url: '/pages/zt/tingjisearch/summarySearch'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	
</style>

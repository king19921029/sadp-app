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
						<view>停机台账编号</view>
					</view>
					<view>{{item.id}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>作业线代码</view>
					</view>
					<view>{{item.zuoyexianid}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>停机开始时间</view>
					</view>
					<view>{{item.starttime}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>停机结束时间</view>
					</view>
					<view>{{item.endtime}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>停机类别</view>
					</view>
					<view>{{item.type}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>停机性质</view>
					</view>
					<view>{{item.xingzhi}}</view>
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
						id:'1580主扎线-H21',
						zuoyexianid:'废钢供应作业161#天车',
						starttime:'2019-09-24 08:13',
						endtime:'2019-09-24 08:23',
						type:'生产计划停机',
						xingzhi:'停产'
					},
					{
						id:'1580主扎线-H21',
						zuoyexianid:'废钢供应作业161#天车',
						starttime:'2019-09-24 08:13',
						endtime:'2019-09-24 08:23',
						type:'生产计划停机',
						xingzhi:'停产'
					},
					{
						id:'1580主扎线-H21',
						zuoyexianid:'废钢供应作业161#天车',
						starttime:'2019-09-24 08:13',
						endtime:'2019-09-24 08:23',
						type:'生产计划停机',
						xingzhi:'停产'
					},
					{
						id:'1580主扎线-H21',
						zuoyexianid:'废钢供应作业161#天车',
						starttime:'2019-09-24 08:13',
						endtime:'2019-09-24 08:23',
						type:'生产计划停机',
						xingzhi:'停产'
					},
					{
						id:'1580主扎线-H21',
						zuoyexianid:'废钢供应作业161#天车',
						starttime:'2019-09-24 08:13',
						endtime:'2019-09-24 08:23',
						type:'生产计划停机',
						xingzhi:'停产'
					}
				],
				navBarTitle: '停机信息',
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
					url: '/pages/zt/tingjisearch/tingjiSearch'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	
</style>

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
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>检修标准编号</view>
					</view>
					<view>{{item.id}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>检修标准名称</view>
					</view>
					<view>{{item.name}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>设备名称</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>产线代码</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>产线名称</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>施工类别</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>周期</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>周期单位</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>项目类别</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>专业分类</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>检修费用</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>施工班组</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>吊车费</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>总人数</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>总工时</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>总费用</view>
					</view>
					<view>{{item.weituorenname}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>工作内容</view>
					</view>
					<view>{{item.jihuaid}}</view>
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
						id:'SNIO3NDSKD8SAD',
						name:'4#机滤风室清灰检查布袋',
						weituorenname:'ASNDAOIS2边宝明',
						jihuaid:'20190923KAJSNDUAS'
					},
					{
						id:'SNIO3NDSKD8SAD',
						name:'4#机滤风室清灰检查布袋',
						weituorenname:'ASNDAOIS2边宝明',
						jihuaid:'20190923KAJSNDUAS'
					},{
						id:'SNIO3NDSKD8SAD',
						name:'4#机滤风室清灰检查布袋',
						weituorenname:'ASNDAOIS2边宝明',
						jihuaid:'20190923KAJSNDUAS'
					},{
						id:'SNIO3NDSKD8SAD',
						name:'4#机滤风室清灰检查布袋',
						weituorenname:'ASNDAOIS2边宝明',
						jihuaid:'20190923KAJSNDUAS'
					},
					
				],
				navBarTitle: '检修标准',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
				btnDisabled: true,
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
					url: '/pages/jx/jianxiusearch/jianxiuSearch'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	
</style>

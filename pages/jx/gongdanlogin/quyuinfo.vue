<template>
	<view class="containersjb" :class="{chongman:count<=3}">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view class="search">成功查询到{{count}}条数据</view>
		<scroll-view class="main" scroll-y="true">
			<view class="list-view" v-for="(item,index) in datas" :key="index" @click="toDetail">
				<view class="first-line">
					<image class="img-shuqian" src="../../../static/imgs/shuqian.png"></image>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>区域编号</view>
					</view>
					<view>{{item.id}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>区域名称</view>
					</view>
					<view>{{item.name}}</view>
				</view>
				
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>工单数量</view>
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
				navBarTitle: '区域工单数量',
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
					url: '/pages/jx/gongdanlogin/quyuSearch'
				})
			},
			toDetail(){
				uni.navigateTo({
					url: '/pages/jx/gongdanlogin/gongdanDetails'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	
</style>

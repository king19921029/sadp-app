<template>
	<view class="containersjb" :class="{chongman:count<=3}">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view class="search">成功查询到{{count}}条数据</view>
		<scroll-view class="main" scroll-y="true">
			<view class="list-view" v-for="(item,index) in datas" :key="index" @click="toDetail(item)">
				<view class="first-line">
					<image class="img-shuqian" src="../../../../static/imgs/shuqian.png"></image>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/landian.png"></image>
						<view>区域编码</view>
					</view>
					<view>{{item.id}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/hongdian.png"></image>
						<view>区域名称</view>
					</view>
					<view>{{item.name}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/huangdian.png"></image>
						<view>计划数量</view>
					</view>
					<view>{{item.jihuanum}}</view>
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
						id:'321315D331',
						name:'加热炉',
						jihuanum:'20'
					},
					{
						id:'321315D331',
						name:'加热炉',
						jihuanum:'20'
					},
					{
						id:'321315D331',
						name:'加热炉',
						jihuanum:'20'
					},
					{
						id:'321315D331',
						name:'加热炉',
						jihuanum:'20'
					},
				],
				navBarTitle: '给油脂标准',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
			}
		},
		onShow() {
			
		},
		methods: {
			toDetail(item){
				//跳转给油脂计划详情页面
				uni.navigateTo({
					url:'shijiDetails?item='+JSON.stringify(item)
				})
			},
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				//跳转给油脂计划查询页面
				uni.navigateTo({
					url: 'shijiSearch'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../../common/sjbStyle.css");
	
</style>

<template>
	<view class="containersjb" :class="{chongman:count<=3}">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view class="search">成功查询到{{count}}条数据</view>
		<scroll-view class="main" scroll-y="true">
			<view class="list-view" v-for="(item,index) in datas" :key="index" @click="toDetail(item)">
				<view class="first-line">
					<image class="img-shuqian" src="../../../static/imgs/shuqian.png"></image>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>点检标准编码</view>
					</view>
					<view>{{item.id}}</view>
				</view>

				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>点检标准项次号</view>
					</view>
					<view>{{item.xiangciid}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>标准</view>
					</view>
					<view>{{item.biaozhun}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>内容</view>
					</view>
					<view>{{item.content}}</view>
				</view>
				
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>内码</view>
					</view>
					<view>{{item.contentid}}</view>
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
				count:1,
				datas:[],
				navBarTitle: '点检计划项次',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
			}
		},
		onLoad(option) {
			this.datas.push(JSON.parse(option.item))
		},
		onShow() {
			
		},
		methods: {
			toDetail(item){
				//跳转点检标准项次详情页面
				uni.navigateTo({
					url:'xiangciDetails?item='+JSON.stringify(item)
				})
			},
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				//跳转点检标准项次查询页面
				uni.navigateTo({
					url: '/pages/dj/dianjianjihua/xiangciSearch'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	
</style>

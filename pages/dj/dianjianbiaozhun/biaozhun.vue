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
						<view>设备名称</view>
					</view>
					<view>{{item.name}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>点检项目名称</view>
					</view>
					<view>{{item.xiangmuname}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>标准类别</view>
					</view>
					<view>{{item.type}}</view>
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
						name:'一柜去天然气温度检测回路',
						xiangmuname:'传感器本体常规检查',
						type:'常规点检',
						weihugangwei:'KSJDS3232',
						weihurenname:'朱月至',
						nextricheng:'2019-1-1',
						shishifang:'1',
						shishitime:'1',
						timedanwei:'M',
						shebeizhuangtai:'1',
						tongyongdianjianid:'xxxxxx',
						xiudingren:'xxxxxxx',
						xiudingdate:'xxxxxxx',
						zhuangtai:'xxxxxxx',
						xiangci:'01',
						content:'CPU模块',
						method:'aa',
						datatype:'cc',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						biaozhun:'通讯电缆连接可靠；无灰尘；CPU状态指示灯工作正常',
						shangxian:'aa',
						xiaxian:'aa'
					},
					{
						id:'321315D331',
						name:'一柜去天然气温度检测回路',
						xiangmuname:'传感器本体常规检查',
						type:'常规点检',
						weihugangwei:'KSJDS3232',
						weihurenname:'朱月至',
						nextricheng:'2019-1-1',
						shishifang:'1',
						shishitime:'1',
						timedanwei:'M',
						shebeizhuangtai:'1',
						tongyongdianjianid:'xxxxxx',
						xiudingren:'xxxxxxx',
						xiudingdate:'xxxxxxx',
						zhuangtai:'xxxxxxx',
						xiangci:'01',
						content:'CPU模块',
						method:'aa',
						datatype:'cc',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						biaozhun:'通讯电缆连接可靠；无灰尘；CPU状态指示灯工作正常',
						shangxian:'aa',
						xiaxian:'aa'
					},
					{
						id:'321315D331',
						name:'一柜去天然气温度检测回路',
						xiangmuname:'传感器本体常规检查',
						type:'常规点检',
						weihugangwei:'KSJDS3232',
						weihurenname:'朱月至',
						nextricheng:'2019-1-1',
						shishifang:'1',
						shishitime:'1',
						timedanwei:'M',
						shebeizhuangtai:'1',
						tongyongdianjianid:'xxxxxx',
						xiudingren:'xxxxxxx',
						xiudingdate:'xxxxxxx',
						zhuangtai:'xxxxxxx',
						xiangci:'01',
						content:'CPU模块',
						method:'aa',
						datatype:'cc',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						biaozhun:'通讯电缆连接可靠；无灰尘；CPU状态指示灯工作正常',
						shangxian:'aa',
						xiaxian:'aa'
					},
					{
						id:'321315D331',
						name:'一柜去天然气温度检测回路',
						xiangmuname:'传感器本体常规检查',
						type:'常规点检',
						weihugangwei:'KSJDS3232',
						weihurenname:'朱月至',
						nextricheng:'2019-1-1',
						shishifang:'1',
						shishitime:'1',
						timedanwei:'M',
						shebeizhuangtai:'1',
						tongyongdianjianid:'xxxxxx',
						xiudingren:'xxxxxxx',
						xiudingdate:'xxxxxxx',
						zhuangtai:'xxxxxxx',
						xiangci:'01',
						content:'CPU模块',
						method:'aa',
						datatype:'cc',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						biaozhun:'通讯电缆连接可靠；无灰尘；CPU状态指示灯工作正常',
						shangxian:'aa',
						xiaxian:'aa'
					},
				],
				navBarTitle: '点检标准',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
			}
		},
		onShow() {
			
		},
		methods: {
			toDetail(item){
				//跳转点检标准详情页面
				uni.navigateTo({
					url:'biaozhunDetails?item='+JSON.stringify(item)
				})
			},
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				//跳转点检标准查询页面
				uni.navigateTo({
					url: '/pages/dj/dianjianbiaozhun/biaozhunSearch'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	
</style>

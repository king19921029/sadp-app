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
						<view>作业线编码</view>
					</view>
					<view>{{item.id}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>作业线名称</view>
					</view>
					<view>{{item.name}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>设备编码</view>
					</view>
					<view>{{item.shebeiid}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>设备名称</view>
					</view>
					<view>{{item.shebeiname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>停机开始时间</view>
					</view>
					<view>{{item.starttime}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>事故级别</view>
					</view>
					<view>{{item.shigulevel}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>原因属性</view>
					</view>
					<view>{{item.yuanyinshuxing}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>专业属性</view>
					</view>
					<view>{{item.zhuanyeshuxing}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>故障原因</view>
					</view>
					<view>{{item.guzhangyuanyin}}</view>
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
						name:'废钢供应作业161#天车',
						shebeiid:'KASNDKJ12E1',
						shebeiname:'酸连轧机',
						starttime:'2019-02-02',
						shigulevel:'一般',
						yuanyinshuxing:'1',
						zhuanyeshuxing:'1',
						guzhangyuanyin:'传动带断裂'
					},
					{
						id:'1580主扎线-H21',
						name:'废钢供应作业161#天车',
						shebeiid:'KASNDKJ12E1',
						shebeiname:'酸连轧机',
						starttime:'2019-02-02',
						shigulevel:'一般',
						yuanyinshuxing:'1',
						zhuanyeshuxing:'1',
						guzhangyuanyin:'传动带断裂'
					},
					{
						id:'1580主扎线-H21',
						name:'废钢供应作业161#天车',
						shebeiid:'KASNDKJ12E1',
						shebeiname:'酸连轧机',
						starttime:'2019-02-02',
						shigulevel:'一般',
						yuanyinshuxing:'1',
						zhuanyeshuxing:'1',
						guzhangyuanyin:'传动带断裂'
					},
					{
						id:'1580主扎线-H21',
						name:'废钢供应作业161#天车',
						shebeiid:'KASNDKJ12E1',
						shebeiname:'酸连轧机',
						starttime:'2019-02-02',
						shigulevel:'一般',
						yuanyinshuxing:'1',
						zhuanyeshuxing:'1',
						guzhangyuanyin:'传动带断裂'
					}
				],
				navBarTitle: '故障新增维护页面',
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
					url: '/pages/zt/guzhanginsert/guzhangSearch'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	
</style>

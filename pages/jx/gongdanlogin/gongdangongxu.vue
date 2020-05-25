<template>
	<view class="containersjb" :class="{chongman:count<=3}">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view class="search">成功查询到{{count}}条数据</view>
		<scroll-view class="main" scroll-y="true">
			<view class="list-view" v-for="(item,index) in datas" :key="index" @click="toDetail(item)">
				<view class="first-line">
					<image class="img-shuqian" src="../../../static/imgs/shuqian.png"></image>
					<view class="gouyuan" :class="{choosed:item.choosed}" @click.stop="choose(item)"></view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>工作内容</view>
					</view>
					<view>{{item.id}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>人数</view>
					</view>
					<view>{{item.shishifang}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>时间</view>
					</view>
					<view>{{item.biaozhunname}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>完工日期</view>
					</view>
					<view>{{item.wangongdate}}</view>
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
						choosed:false,
						shishifang:'点检',
						biaozhunname:'定期检查项目',
						jihuadate:'2019-09-26',
						xiangciid:'aa',
						biaozhun:'aa',
						content:'aa',
						contentid:'aa',
						shebeiname:'废钢供应 作业区161#天车电控设备',
						gangweiid:'KJASDHK32',
						jihualaiyuan:'系统生产',
						wangongdate:'',
						panding:'',
						yichangid:'aa',
						jiliangdan:'aa',
						shangxian:'aa',
						xiaxian:'aa',
						bencijieguo:'aa',
						dianjianmethod:'aa',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						datatype:'aa'
					},
					{
						id:'321315D331',
						choosed:false,
						shishifang:'点检',
						biaozhunname:'定期检查项目',
						jihuadate:'2019-09-26',
						xiangciid:'aa',
						biaozhun:'aa',
						content:'aa',
						contentid:'aa',
						shebeiname:'废钢供应 作业区161#天车电控设备',
						gangweiid:'KJASDHK32',
						jihualaiyuan:'系统生产',
						wangongdate:'',
						panding:'',
						yichangid:'aa',
						jiliangdan:'aa',
						shangxian:'aa',
						xiaxian:'aa',
						bencijieguo:'aa',
						dianjianmethod:'aa',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						datatype:'aa'
					},
					{
						id:'321315D331',
						choosed:false,
						shishifang:'点检',
						biaozhunname:'定期检查项目',
						jihuadate:'2019-09-26',
						xiangciid:'aa',
						biaozhun:'aa',
						content:'aa',
						contentid:'aa',
						shebeiname:'废钢供应 作业区161#天车电控设备',
						gangweiid:'KJASDHK32',
						jihualaiyuan:'系统生产',
						wangongdate:'',
						panding:'',
						yichangid:'aa',
						jiliangdan:'aa',
						shangxian:'aa',
						xiaxian:'aa',
						bencijieguo:'aa',
						dianjianmethod:'aa',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						datatype:'aa'
					},
					{
						id:'321315D331',
						choosed:false,
						shishifang:'点检',
						biaozhunname:'定期检查项目',
						jihuadate:'2019-09-26',
						xiangciid:'aa',
						biaozhun:'aa',
						content:'aa',
						contentid:'aa',
						shebeiname:'废钢供应 作业区161#天车电控设备',
						gangweiid:'KJASDHK32',
						jihualaiyuan:'系统生产',
						wangongdate:'',
						panding:'',
						yichangid:'aa',
						jiliangdan:'aa',
						shangxian:'aa',
						xiaxian:'aa',
						bencijieguo:'aa',
						dianjianmethod:'aa',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						datatype:'aa'
					},
				],
				navBarTitle: '工单工序',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
			}
		},
		onShow() {

		},
		methods: {
			// toDetail(item){
			// 	//跳转点检计划详情页面
			// 	uni.navigateTo({
			// 		url:'xiangci?item='+JSON.stringify(item)
			// 	})
			// },
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				
				
			},
			choose(item){
				console.log(typeof item.choosed)
				item.choosed = !item.choosed
				console.log(item.choosed)
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	.first-line{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.gouyuan{
		margin-top: 10upx;
		width: 40upx;
		height: 40upx;
		background-color: #BEBEBE;
	}
	.choosed{
		background-color: #3574FA;
	}
</style>

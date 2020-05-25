<template>
	<view class="containersjb">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view style="height: 80upx;background-color: #4680FA;"></view>
		<scroll-view scroll-y="true" class="detail">
			<view class="detail-list" style="padding-top: 40upx;">
				<view>异常联络单:</view>
				<view>{{datas.yichangid}}</view>
			</view>
			<view class="detail-list">
				<view>来源:</view>
				<view>{{datas.laiyuan}}</view>
			</view>
			<view class="detail-list">
				<view>异常类型:</view>
				<view>{{datas.yichangtype}}</view>
			</view>
			<view class="detail-list">
				<view>提出人:</view>
				<view>{{datas.tichuren}}</view>
			</view>
			<view class="detail-list">
				<view>提出日期:</view>
				<view>{{datas.tichudate}}</view>
			</view>
			<view class="detail-list">
				<view>起始日期:</view>
				<view>{{datas.qishidate}}</view>
			</view>
			<view class="detail-list">
				<view>提出部门:</view>
				<view>{{datas.tichubumen}}</view>
			</view>
			<view class="detail-list">
				<view>受理部门:</view>
				<view>{{datas.shoulibumen}}</view>
			</view>
			<view class="detail-list">
				<view>设备编码:</view>
				<view>{{datas.shebeiid}}</view>
			</view>
			<view class="detail-list">
				<view>处理人:</view>
				<view>{{datas.chuliren}}</view>
			</view>
			<view class="detail-list">
				<view>处理方式:</view>
				<view>{{datas.chulifangshi}}</view>
			</view>
			<view class="detail-list">
				<view>处理进度:</view>
				<view>{{datas.chulijindu}}</view>
			</view>
			<view class="detail-list">
				<view>合并单号:</view>
				<view>{{datas.hebingdanhao}}</view>
			</view>
			<view class="detail-list">
				<view>复检日期:</view>
				<view>{{datas.fujianriqi}}</view>
			</view>
			<view class="detail-list">
				<view>完工日期:</view>
				<view>{{datas.wangongriqi}}</view>
			</view>
			<view class="detail-list">
				<view>确认结果:</view>
				<view>{{datas.querenjieguo}}</view>
			</view>
			<view class="detail-list">
				<view>历次意见:</view>
				<view>{{datas.liciyijian}}</view>
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
				datas:{
					yichangid:'aa',
					laiyuan:'aa',
					yichangtype:'aa',
					tichuren:'aa',
					tichudate:'aa',
					qishidate:'aa',
					tichubumen:'aa',
					shoulibumen:'aa',
					shebeiid:'aa',
					chuliren:'aa',
					chulifangshi:'aa',
					chulijindu:'aa',
					hebingdanhao:'aa',
					fujianriqi:'aa',
					wangongriqi:'aa',
					querenjieguo:'aa',
					liciyijian:'aa'
				},
				navBarTitle: '异常联络单详情',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				btnDisabled: true
			}
		},
		onLoad(option) {
			// this.datas = JSON.parse(option.item)
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
	.search{
		border-radius: 40upx;
		height: 80upx;
		background-color: #3574FA;
		margin: 100upx 46upx 0upx 46upx ;
		font-size:32upx;
		text-align: center;
		line-height: 80upx;
		font-family:SourceHanSansCN-Medium,SourceHanSansCN;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
</style>

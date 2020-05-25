<template>
	<view class="containersjb">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view style="height: 80upx;background-color: #4680FA;"></view>
		<scroll-view scroll-y="true" class="detail">
			<view class="detail-list" style="padding-top: 40upx;">
				<view>计划编号:</view>
				<view>{{datas.id}}</view>
			</view>
			<view class="detail-list">
				<view>计划名称:</view>
				<view>{{datas.level}}</view>
			</view>
			<view class="detail-list">
				<view>施工类别:</view>
				<view>{{datas.name}}</view>
			</view>
			<view class="detail-list">
				<view>计划开始:</view>
				<view>{{datas.type}}</view>
			</view>
			<view class="detail-list">
				<view>计划结束:</view>
				<view>{{datas.zhizaochang}}</view>
			</view>
			<view class="detail-list">
				<view>检修开始时间:</view>
				<view>{{datas.guanlitexing}}</view>
			</view>
			<view class="detail-list">
				<view>检修结束时间:</view>
				<view>{{datas.chengbenzhongxin}}</view>
			</view>
			<view class="detail-list">
				<view>定年修时长:</view>
				<view>{{datas.weihurenid}}</view>
			</view>
			<view class="detail-list">
				<view>定年修时长单位:</view>
				<view>{{datas.weihurenname}}</view>
			</view>
			<view class="detail-list">
				<view>检修时长:</view>
				<view>{{datas.tuhao}}</view>
			</view>
			<view class="detail-list">
				<view>检修时长单位:</view>
				<view>{{datas.zhaungjiliang}}</view>
			</view>
			<view class="detail-list">
				<view>实际计划开始时间:</view>
				<view>{{datas.zichanzhuangtai}}</view>
			</view>
			<view class="detail-list">
				<view>实际计划结束时间:</view>
				<view>{{datas.tuhao}}</view>
			</view>
			<view class="search" style="margin-bottom: 40upx;" @click="baocun">保存</view>
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
				datas:{},
				navBarTitle: '计划实绩登陆详情',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				btnDisabled: true
			}
		},
		onLoad(option) {
			this.datas = JSON.parse(option.item)
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

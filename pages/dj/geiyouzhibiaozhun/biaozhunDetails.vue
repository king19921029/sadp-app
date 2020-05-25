<template>
	<view class="containersjb">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view style="height: 80upx;background-color: #4680FA;"></view>
		<scroll-view scroll-y="true" class="detail">
			<view class="detail-list" style="padding-top: 40upx;">
				<view>点检标准编码:</view>
				<view>{{datas.id}}</view>
			</view>
			<view class="detail-list">
				<view>点检项目名称:</view>
				<view>{{datas.xiangmuname}}</view>
			</view>
			<view class="detail-list">
				<view>设备名称:</view>
				<view>{{datas.name}}</view>
			</view>
			<view class="detail-list">
				<view>标准类别:</view>
				<view>{{datas.type}}</view>
			</view>
			<view class="detail-list">
				<view>维护岗位:</view>
				<view>{{datas.weihugangwei}}</view>
			</view>
			<view class="detail-list">
				<view>维护人姓名:</view>
				<view>{{datas.weihurenname}}</view>
			</view>
			<view class="detail-list">
				<view>下次排程日程:</view>
				<view>{{datas.nextricheng}}</view>
			</view>
			<view class="detail-list">
				<view>实施方:</view>
				<view>{{datas.shishifang}}</view>
			</view>
			<view class="detail-list">
				<view>实施周期:</view>
				<view>{{datas.shishitime}}</view>
			</view>
			<view class="detail-list">
				<view>周期单位:</view>
				<view>{{datas.timedanwei}}</view>
			</view>
			<view class="detail-list">
				<view>设备状态:</view>
				<view>{{datas.shebeizhuangtai}}</view>
			</view>
			<view class="detail-list">
				<view>通用点检标准编号 :</view>
				<view>{{datas.tongyongdianjianid}}</view>
			</view>
			
			<view class="search" style="margin-bottom: 40upx;" @click="toXiangci">给油脂标准项次查询</view>
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
				navBarTitle: '给油脂标准详情',
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
			toXiangci(){
				
				uni.navigateTo({
					
					url:'xiangci?item='+JSON.stringify(this.datas)
				})
			},
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

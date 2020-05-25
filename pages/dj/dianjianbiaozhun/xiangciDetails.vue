<template>
	<view class="containersjb">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		
		<view style="height: 80upx;background-color: #4680FA;"></view>
		<view class="detail">
			<view class="detail-list" style="padding-top: 40upx;">
				<view>点检标准编码:</view>
				<view>{{datas.id}}</view>
			</view>
			<view class="detail-list">
				<view>点检项目项次:</view>
				<view>{{datas.xiangci}}</view>
			</view>
			<view class="detail-list">
				<view>内容:</view>
				<view>{{datas.content}}</view>
			</view>
			<view class="detail-list">
				<view>点检方法:</view>
				<view>{{datas.method}}</view>
			</view>
			<view class="detail-list">
				<view>管理控别:</view>
				<view>{{datas.guanlikongbie}}</view>
			</view>
			<view class="detail-list">
				<view>管理类别:</view>
				<view>{{datas.guanlileibie}}</view>
			</view>
			<view class="detail-list">
				<view>数据类别:</view>
				<view>{{datas.datatype}}</view>
			</view>
			<view class="detail-list">
				<view>标准:</view>
				<view style="max-width: 364upx;">{{datas.biaozhun}}</view>
			</view>
			<view class="detail-list">
				<view>上限:</view>
				<view>{{datas.shangxian}}</view>
			</view>
			<view class="detail-list">
				<view>下限:</view>
				<view>{{datas.xiaxian}}</view>
			</view>
			
		</view>
		
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
				navBarTitle: '点检标准项次详情',
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

<template>
	<view class="containersjb">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view style="height: 80upx;background-color: #4680FA;"></view>
		<scroll-view scroll-y="true" class="detail">
			<view class="detail-list" style="padding-top: 40upx;">
				<view>委托单编号:</view>
				<view>{{datas.id}}</view>
			</view>
			<view class="detail-list">
				<view>项目名称:</view>
				<view>{{datas.level}}</view>
			</view>
			<view class="detail-list">
				<view>委托人姓名:</view>
				<view>{{datas.name}}</view>
			</view>
			<view class="detail-list">
				<view>标准项目编号:</view>
				<view>{{datas.type}}</view>
			</view>
			<view class="detail-list">
				<view>项目分类:</view>
				<view>{{datas.zhizaochang}}</view>
			</view>
			<view class="detail-list">
				<view>施工类别:</view>
				<view>{{datas.guanlitexing}}</view>
			</view>
			<view class="detail-list">
				<view>开工日期:</view>
				<view>{{datas.chengbenzhongxin}}</view>
			</view>
			<view class="detail-list">
				<view>完工日期:</view>
				<view>{{datas.weihurenid}}</view>
			</view>
			<view class="detail-list">
				<view>施工班组名称:</view>
				<view>{{datas.weihurenname}}</view>
			</view>
			<view class="detail-list">
				<view>状态:</view>
				<view>{{datas.tuhao}}</view>
			</view>
			<view class="detail-list">
				<view>完工实际登陆日期:</view>
				<view>{{datas.zhaungjiliang}}</view>
			</view>
			<view class="detail-list">
				<view>计划编号:</view>
				<view>{{datas.zichanzhuangtai}}</view>
			</view>
			<view class="detail-list">
				<view>计划名称:</view>
				<view>{{datas.tuhao}}</view>
			</view>
			<view class="detail-list">
				<view>安全技术交底查看:</view>
				<view>{{datas.zhaungjiliang}}</view>
			</view>
			<view class="detail-list">
				<view>物料清单查看:</view>
				<view>{{datas.zichanzhuangtai}}</view>
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
				datas:{},
				navBarTitle: '检修工单明细',
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
</style>

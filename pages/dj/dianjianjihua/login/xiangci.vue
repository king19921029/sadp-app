<template>
	<view scroll-y="true" class="containersjb" :class="{chongman:count<=3}">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<view class="search">成功查询到{{count}}条数据</view>
		<scroll-view class="main" scroll-y="true">
			<view class="list-view" v-for="(item,index) in datas" :key="index" >
				<view class="first-line">
					<image class="img-shuqian" src="../../../../static/imgs/shuqian.png"></image>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/landian.png"></image>
						<view>点检标准编码</view>
					</view>
					<view>{{item.id}}</view>
				</view>

				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/hongdian.png"></image>
						<view>点检标准项次号</view>
					</view>
					<view>{{item.xiangciid}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/huangdian.png"></image>
						<view>点检标准名称</view>
					</view>
					<view>{{item.biaozhunname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/huangdian.png"></image>
						<view>标准</view>
					</view>
					<view>{{item.biaozhun}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/huangdian.png"></image>
						<view>内容</view>
					</view>
					<view>{{item.content}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/huangdian.png"></image>
						<view>数据类别</view>
					</view>
					<view>{{item.datatype}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/hongdian.png"></image>
						<view>计量单位</view>
					</view>
					<view>{{item.jiliangdanwei}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/hongdian.png"></image>
						<view>上限</view>
					</view>
					<view>{{item.shangxian}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/hongdian.png"></image>
						<view>下限</view>
					</view>
					<view>{{item.xiaxian}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/landian.png"></image>
						<view>点检方式</view>
					</view>
					<view>{{item.dianjianmethod}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/landian.png"></image>
						<view>本次结果</view>
					</view>
					<view>{{item.bencijieguo}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../../static/imgs/landian.png"></image>
						<view>判定</view>
					</view>
					<view>{{item.panding}}</view>
				</view>
				<view class="button" @click="baocun">保存</view>
				<view class="button" @click="yichang">生成异常</view>
				<view style="height: 80upx;"></view>
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
				count:1,
				datas:[
					{
						id:'321315D331',
						biaozhunname:'定期检查项目',
						xiangciid:'aa',
						biaozhun:'aa',
						content:'aa',
						panding:'',
						jiliangdan:'aa',
						shangxian:'aa',
						xiaxian:'aa',
						bencijieguo:'aa',
						dianjianmethod:'aa',
						datatype:'aa'
					},
					{
						id:'321315D331',
						biaozhunname:'定期检查项目',
						xiangciid:'aa',
						biaozhun:'aa',
						content:'aa',
						panding:'',
						jiliangdan:'aa',
						shangxian:'aa',
						xiaxian:'aa',
						bencijieguo:'aa',
						dianjianmethod:'aa',
						datatype:'aa'
					},
				],
				navBarTitle: '点检计划项次登录信息',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				btnDisabled: true
			}
		},
		onLoad(option) {
			// this.datas.push(JSON.parse(option.item))
		},
		onShow() {
			
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
	@import url("../../../../common/sjbStyle.css");
	.button{
		border-radius: 40upx;
		height: 80upx;
		background-color: #3574FA;
		margin: 40upx 46upx 0upx 46upx ;
		font-size:32upx;
		text-align: center;
		line-height: 80upx;
		font-family:SourceHanSansCN-Medium,SourceHanSansCN;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
</style>

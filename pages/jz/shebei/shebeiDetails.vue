<template>
	<view class="containersjb" >
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		
		<view style="height: 80upx;background-color: #4680FA;"></view>
		<view class="detail">
			<view class="detail-list" style="padding-top: 40upx;">
				<view>设备编码:</view>
				<view>{{datas.id}}</view>
			</view>
			<view class="detail-list">
				<view>设备层级:</view>
				<view>{{datas.level}}</view>
			</view>
			<view class="detail-list">
				<view>设备名称:</view>
				<view>{{datas.name}}</view>
			</view>
			<view class="detail-list">
				<view>设备类别:</view>
				<view>{{datas.type}}</view>
			</view>
			<view class="detail-list">
				<view>制造厂:</view>
				<view>{{datas.zhizaochang}}</view>
			</view>
			<view class="detail-list">
				<view>管理特性:</view>
				<view>{{datas.guanlitexing}}</view>
			</view>
			<view class="detail-list">
				<view>成本中心:</view>
				<view>{{datas.chengbenzhongxin}}</view>
			</view>
			<view class="detail-list">
				<view>维护人岗代码:</view>
				<view>{{datas.weihurenid}}</view>
			</view>
			<view class="detail-list">
				<view>维护人岗姓名:</view>
				<view>{{datas.weihurenname}}</view>
			</view>
			<view class="detail-list">
				<view>图号:</view>
				<view>{{datas.tuhao}}</view>
			</view>
			<view class="detail-list">
				<view>装机量:</view>
				<view>{{datas.zhaungjiliang}}</view>
			</view>
			<view class="detail-list">
				<view>资产状态:</view>
				<view>{{datas.zichanzhuangtai}}</view>
			</view>
			<uni-fab ref="fab" :pattern="pattern" :content="content" horizontal="right" vertical="bottom" direction="vertical"
			 @trigger="trigger" @click='bindIsShow' @_touchend="_touchend" :show="fabShow" />
		</view>
		
	</view>
	
</template>

<script>
	import uniFab from '@/components/uni-fab/uni-fab.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{
			uniFab,
			uniNavBar
		},
		data() {
			return {
				datas:{},
				showClicked:false,
				fabShow: false,
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#5D91FF',
					buttonColor: '#5D91FF'
				},
				content: [{
						iconPath: '/static/imgs/jianxiu/jianxiu.png',
						// selectedIconPath: '/static/imgs/tieqian/endc.png',
						text: '检修信息履历',
						imgSize: '92upx',
						active: false
					},
					{
						iconPath: '/static/imgs/jianxiu/yichang.png',
						// selectedIconPath: '/static/imgs/tieqian/startc.png',
						text: '异常信息履历',
						imgSize: '92upx',
						active: false
					},
					{
						iconPath: '/static/imgs/jianxiu/guzhang.png',
						// selectedIconPath: '/static/imgs/tieqian/startc.png',
						text: '故障信息履历',
						imgSize: '92upx',
						active: false
					}
				],
				navBarTitle: '设备档案详情',
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
			show(){
				this.showClicked = !this.showClicked
			},
			// info(i){//  1--跳转检修信息  2--跳转异常信息  3--跳转故障信息
			// 	this.showClicked = false //点击后隐藏弹出列表
			// 	let temp = i==1?'../jianxiu/jianxiuInfo':i==2?'../yichang/yichangInfo':i==3?'../guzhang/guzhangInfo':''
			// 	uni.navigateTo({
			// 		url:temp
			// 	})
			// },
			trigger(e) {
				this.content[e.index].active = !e.item.active
				console.log("asdasd",e.index)
				let i = e.index
				let temp = i==0?'../jianxiu/jianxiuInfo':i==1?'../yichang/yichangInfo':i==2?'../guzhang/guzhangInfo':''
				uni.navigateTo({
					url:temp
				})
				return
				
			},
			bindIsShow(v) {
				this.fabShow = v
			},
			_touchend(e) {
				this.content[e.index].active = !e.item.active
			},
			fabHide() {
				this.$refs.fab._onClick()
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
</style>

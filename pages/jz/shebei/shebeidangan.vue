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
						<view>设备编码</view>
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
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>设备层级</view>
					</view>
					<view>{{item.level}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>设备类别</view>
					</view>
					<view>{{item.type}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/hongdian.png"></image>
						<view>型号规格</view>
					</view>
					<view>{{item.xinghao}}</view>
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
				count: 4,
				datas: [{
						id: '010101',
						name: '废钢供应作业161#天车',
						level: '六位码',
						type: '',
						xinghao: '16T',
						zhizaocheng: '河南卫华',
						guanlitexing: '1000000',
						chengbenzhongxin: 'asdasd',
						weihurenid: 'SDFSD',
						weihurenname: '胡松亮',
						tuhao: 'xxxxx',
						zhuangjiliang: 'xxxxxx',
						zichanzhuangtai: 'xxxxxxx'
					},
					{
						id: '010101',
						name: '废钢供应作业161#天车',
						level: '六位码',
						type: '',
						xinghao: '16T',
						zhizaocheng: '河南卫华',
						guanlitexing: '1000000',
						chengbenzhongxin: 'asdasd',
						weihurenid: 'SDFSD',
						weihurenname: '胡松亮',
						tuhao: 'xxxxx',
						zhuangjiliang: 'xxxxxx',
						zichanzhuangtai: 'xxxxxxx'
					}, {
						id: '010101',
						name: '废钢供应作业161#天车',
						level: '六位码',
						type: '',
						xinghao: '16T',
						zhizaocheng: '河南卫华',
						guanlitexing: '1000000',
						chengbenzhongxin: 'asdasd',
						weihurenid: 'SDFSD',
						weihurenname: '胡松亮',
						tuhao: 'xxxxx',
						zhuangjiliang: 'xxxxxx',
						zichanzhuangtai: 'xxxxxxx'
					}, {
						id: '010101',
						name: '废钢供应作业161#天车',
						level: '六位码',
						type: '',
						xinghao: '16T',
						zhizaocheng: '河南卫华',
						guanlitexing: '1000000',
						chengbenzhongxin: 'asdasd',
						weihurenid: 'SDFSD',
						weihurenname: '胡松亮',
						tuhao: 'xxxxx',
						zhuangjiliang: 'xxxxxx',
						zichanzhuangtai: 'xxxxxxx'
					}
				],
				navBarTitle: '设备档案',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
			}
		},
		onShow() {
			this.findByConditionsQn()
		},
		methods: {
			toDetail(item) {

				uni.navigateTo({
					url: 'shebeiDetails?item=' + JSON.stringify(item)
				})
			},
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				uni.navigateTo({
					url: '/pages/jz/shebei/shebeiSearch'
				})
			},
			async findByConditionsQn() {
				console.log(11)
				try {
					let data = await this.$wxhttp.get({
						url: '/sadp-auth-app/app/qn/qnaa6To12/findByConditionsQn',
						data: {
							deviceId: "110101M01000",
							deviceName: "测试使用",
							deviceLevel: "12",
							deviceType: "JSE00",
							typeSpec: "测试"
						}
					})
					console.log(data)
				} catch (e) {
					console.log(data)
				}
			},
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
</style>

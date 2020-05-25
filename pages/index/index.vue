<template>
	<!-- 首页 -->
	<view style="height: 100%;width:100%;background-color: #fff;position: fixed;">
		<view style="display: flex;flex-direction: column;flex: 1;background-color: #fff;height: 100%;">
			<view v-if="active==0" style="height: 100%;overflow: hidden;display: flex;flex-direction: column;">
				<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
				 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
				<view class="model-box">
					<view v-for="(item,i) in list" :key="i" class="model-item" @click="togglePopup('bottom-share',item.type)">
						<image :src="item.img" mode="" style="width: 80upx;height: 80upx;"></image>
						<text class="model-box-text">{{item.name}}</text>
					</view>
				</view>
				<view style="display: flex;flex-direction:column;padding: 14upx 40upx 0 40upx;background-color: #fff;">
					<view style="display: flex;flex-direction: row;align-items: center;">
						<view style="display: flex;flex-direction: row;flex: 1;align-items: center;">
							<!-- <text class="iconfont icon-iconfontscan" style="font-size: 48upx;margin-right: 15upx;"></text> -->
							<image src="/static/imgs/dbrw.png" mode="" style="width: 44upx;height: 46upx;margin-right: 15upx;"></image>
							<text style="font-size:32upx;font-family:SourceHanSansCN-Medium,SourceHanSansCN;font-weight:500;color:rgba(51,51,51,1);display: flex;align-items: center;justify-items: center;">待办任务</text>
						</view>
						<!-- <view style="display: flex;flex-direction: row;align-items: center;" @click="moreClick" >
							<text style="font-size:28upx;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(70,128,250,1);">更多>></text>
						</view> -->
					</view>
					<view class="wait-deal-view">
						<text class="wait-deal-text" style="font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:rgba(51,51,51,1);">有277条数据待处理</text>
					</view>
				</view>
				<view class="list">
					<text class="list-text" v-for="item in 30" :key="item.id">你有新的待办</text>
					<!-- <view class="hengxian"></view> -->
				</view>
			</view>
			<view v-if="active==1" class="" style="height: 100%;overflow: hidden;">
				<!-- 我的 -->
				<my-page></my-page>
			</view>
			<view style="background-color: #fff;border-top: 2upx solid #ccc;display: flex;flex-direction: row;height: 100upx;">
				<view @click="checkActive(0)" style="align-items: center;display: flex;flex: 1;justify-content: center;flex-direction: column;">
					<!-- <image style="width: 44upx;height: 38upx;" src="/static/imgs/wode.png"></image> -->
					<view class="iconfont" :class="active==0?'iconwodedianji':'iconwode'" :style="{color:active==0?'rgba(53, 116, 250, 1)':''}"></view>
					<text class="tab-text" :class="active==0?'active':''">首页</text>
				</view>
				<view @click="checkActive(1)" style="align-items: center;display: flex;flex: 1;justify-content: center;flex-direction: column;">
					<!-- <image style="width: 44upx;height: 38upx;" src="/static/imgs/shouye.png"></image> -->
					<view class="iconfont" :class="active==1?'iconshouyedianji':'iconshouye'" :style="{color:active==1?'rgba(53, 116, 250, 1)':''}"></view>
					<text class="tab-text" :class="active==1?'active':''">我的</text>
				</view>
			</view>
		</view>
		<!-- 底部弹出层 -->
		<uni-popup :show="type === 'bottom-share'" position="bottom" @hidePopup="togglePopup('')">
			<view style="display: block;width: 100%;">
				<view class="bottom-title">{{name}}</view>
				<view class="bottom-content">
					<view v-for="(item, index) in bottomData" :key="index" class="bottom-content-box" @click="details(item.name)">
						<view :class="item.name" class="bottom-content-image">
							<!-- <text class="iconfont icon-iconfontscan">{{item.img}}</text> -->
							<image :src="item.img" mode="" style="width: 48upx;height: 48upx;"></image>
						</view>
						<view class="bottom-content-text">{{ item.text }}</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import myPage from '@/pages/my/my.vue'
	export default {
		components: {
			uniNavBar,
			uniPopup,
			myPage
		},
		data() {
			return {
				bottomData: [],
				type: '',
				list: [{
					name: '基准管理',
					type: 1,
					img: '/static/imgs/jzgl.png'
				}, {
					name: '点检管理',
					type: 2,
					img: '/static/imgs/djgl.png'
				}, {
					name: '状态管理',
					type: 3,
					img: '/static/imgs/ztgl.png'
				}, {
					name: '检修管理',
					type: 4,
					img: '/static/imgs/jxgl.png'
				}, {
					name: '物料管理',
					type: 5,
					img: '/static/imgs/wlgl.png'
				}, {
					name: '合同管理',
					type: 6,
					img: '/static/imgs/htgl.png'
				}, {
					name: '计量管理',
					type: 7,
					img: '/static/imgs/jlgl.png'
				}, {
					name: '特种管理',
					type: 8,
					img: '/static/imgs/tzgl.png'
				}],
				navBarTitle: '通钢设备管理系统',
				leftIcon: '',
				rightIcon: 'iconsaoyisao',
				exitStr: '',
				btnDisabled: true,
				active: 0,
				name:''    //弹出层名称
				
			}
		},
		methods: {
			// moreClick(){
			// 	console.log('11111');
			// },
			details: function(index) {
				console.log(index);
				switch (index) {
					case 'kccx':
						uni.navigateTo({
							url: '/pages/wl/kccx/kccx'
						})
						break;
					case 'ckcx':
						uni.navigateTo({
							url: '/pages/wl/ckcx/ckcx'
						})
						break;
					case 'kctz':
						uni.navigateTo({
							url: '/pages/wl/kctz/kctz'
						})
						break;
					case 'bfsh':
						uni.navigateTo({
							url: '/pages/wl/bfsh/bfsh'
						})
						break;
					case 'wldmcx':
						uni.navigateTo({
							url: '/pages/wl/wldm/wldm'
						})
						break;
					case 'yfkcx':
						uni.navigateTo({
							url: '/pages/ht/yfk/yfkcx'
						})
						break;
					case 'jcxxcx':
						uni.navigateTo({
							url: '/pages/ht/jc/jcxxcx'
						})
						break;
					case 'jxbz':
						uni.navigateTo({
							url: '/pages/ht/jx/jxbz/jxbz'
						})
						break;
					case 'jxht':
						uni.navigateTo({
							url: '/pages/ht/jx/jxht/jxht'
						})
						break;
					case 'jxjs':
						uni.navigateTo({
							url: '/pages/ht/jx/jxjs/jxjs'
						})
						break;
					case 'jxxm':
						uni.navigateTo({
							url: '/pages/ht/jx/jxxm/jxxm'
						})
						break;
					case 'bxbz':
						uni.navigateTo({
							url: '/pages/ht/bx/bxbz/bxbz'
						})
						break;
					case 'bxht':
						uni.navigateTo({
							url: '/pages/ht/bx/bxht/bxht'
						})
						break;
					case 'bxjs':
						uni.navigateTo({
							url: '/pages/ht/bx/bxjs/bxjs'
						})
						break;
					case 'bxxm':
						uni.navigateTo({
							url: '/pages/ht/bx/bxxm/bxxm'
						})
						break;
					case 'aqfzkcx':
						uni.navigateTo({
							url: '/pages/tz/aqfzkxx/aqfzkxx'
						})
						break;
					case 'tzsbrycx':
						uni.navigateTo({
							url: '/pages/tz/tzsbrycx/tzsbrycx'
						})
						break;
					case 'zkxxhz':
						uni.navigateTo({
							url: '/pages/tz/zkxxhz/zkxxhz'
						})
						break;
					case 'lsjhcx':
						uni.navigateTo({
							url: '/pages/jl/lsjhcx/lsjhcx'
						})
						break;
					case 'lszkcx':
						uni.navigateTo({
							url: '/pages/jl/lszkcx/lszkcx'
						})
						break;
					case 'lxjhcx':
						uni.navigateTo({
							url: '/pages/jl/lxjhcx/lxjhcx'
						})
						break;
					case 'lxzkcx':
						uni.navigateTo({
							url: '/pages/jl/lxzkcx/lxzkcx'
						})
						break;
					case 'zxjhcx':
						uni.navigateTo({
							url: '/pages/jl/zxjhcx/zxjhcx'
						})
						break;
					case 'zxzkcx':
						uni.navigateTo({
							url: '/pages/jl/zxzkcx/zxzkcx'
						})
						break;
					case 'shebeidangan':
						uni.navigateTo({
							url: '/pages/jz/shebei/shebeidangan'
						})
						break;
					case 'guzhanginfo':
						uni.navigateTo({
							url: '/pages/jz/guzhang/guzhangInfo'
						})
						break;
					case 'yichanginfo':
						uni.navigateTo({
							url: '/pages/jz/yichang/yichangInfo'
						})
						break;
					case 'jianxiuinfo':
						uni.navigateTo({
							url: '/pages/jz/jianxiu/jianxiuInfo'
						})
						break;
					case 'dianijanbiaozhun':
						uni.navigateTo({
							url: '/pages/dj/dianjianbiaozhun/biaozhunSearch'
						})
						break;
					case 'dianjianjihuaSearch':
						uni.navigateTo({
							url: '/pages/dj/dianjianjihua/jihuaSearch'
						})
						break;
					case 'dianjianjihuaLogin':
						uni.navigateTo({
							url: '/pages/dj/dianjianjihua/login/shiji'
						})
						break;
					case 'geiyouzhijihua':
						uni.navigateTo({
							url: '/pages/dj/geiyouzhijihua/login/shiji'
						})
						break;
					case 'yichanglianluodan':
						uni.navigateTo({
							url: '/pages/dj/geiyouzhibiaozhun/biaozhun'
						})
						break;
					case 'geiyouzhibiaozhun':
						uni.navigateTo({
							url: '/pages/dj/geiyouzhijihua/login/shiji'
						})
						break;
					case 'zuoyexian':
						uni.navigateTo({
							url: '/pages/zt/zuoyexiansearch/zuoyexianjiankong'
						})
						break;
					case 'tingjiinfo':
						uni.navigateTo({
							url: '/pages/zt/tingjisearch/tingjiInfo'
						})
						break;
					case 'infohuizong':
						uni.navigateTo({
							url: '/pages/zt/tingjisearch/summaryInfo'
						})
						break;
					case 'guzhangshenhe':
						uni.navigateTo({
							url: '/pages/zt/guzhangshenhe/guzhangInfo'
						})
						break;
					case 'jihuafenlei':
						uni.navigateTo({
							url: '/pages/jx/fenleisearch/fenleiInfo'
						})
						break;
					case 'yuedujihua':
						uni.navigateTo({
							url: '/pages/jx/yuedusearch/yueduInfo'
						})
						break;
					case 'gongdanLogin':
						uni.navigateTo({
							url: '/pages/jx/gongdanlogin/gongdangongxu'
						})
						break;
					case 'jihuashijiLogin':
						uni.navigateTo({
							url: '/pages/jx/jihualogin/jihuaInfo'
						})
						break;
					case 'gongdanSearch':
						uni.navigateTo({
							url: '/pages/jx/gongdanlogin/gongdanSearch'
						})
						break;
				}
			},
			togglePopup: function(type, index) {
				this.type = type;
				if(this.type == 'bottom-share'){
					this.name = this.list[index - 1].name
					console.log(this.type,index,this.name);
				}
				switch (index) {
					case 1:
						this.bottomData = [{
								text: '设备档案查询',
								name: 'shebeidangan',
								img: '/static/imgs/jizhun/sbda.svg'
							},
							{
								text: '故障信息履历',
								name: 'guzhanginfo',
								img: '/static/imgs/jizhun/gzxxll.svg'
							},
							{
								text: '异常信息履历',
								name: 'yichanginfo',
								img: '/static/imgs/jizhun/ycxxll.svg'
							}, {
								text: '检修信息履历',
								name: 'jianxiuinfo',
								img: '/static/imgs/jizhun/jxxx.svg'
							}
						]
						break;
					case 2:
						this.bottomData = [{
								text: '点检标准查询',
								name: 'dianijanbiaozhun',
								img: '/static/imgs/dianjian/djbz.svg'
							},
							{
								text: '点检计划查询',
								name: 'dianjianjihuaSearch',
								img: '/static/imgs/dianjian/djjh.svg'
							},
							{
								text: '点检计划登录',
								name: 'dianjianjihuaLogin',
								img: '/static/imgs/dianjian/jhdl.svg'
							}, {
								text: '给油脂计划登录',
								name: 'geiyouzhijihua',
								img: '/static/imgs/dianjian/gyzjh.svg'
							}, {
								text: '异常联络单',
								name: 'yichanglianluodan',
								img: '/static/imgs/dianjian/yclld.svg'
							}, {
								text: '给油脂标准',
								name: 'geiyouzhibiaozhun',
								img: '/static/imgs/dianjian/gyz.svg'
							}
						]
						break;
					case 3:
						this.bottomData = [{
								text: '作业线监控画面',
								name: 'zuoyexian',
								img: '/static/imgs/zhuangtai/zyxjk.svg'
							},
							{
								text: '停机信息查询',
								name: 'tingjiinfo',
								img: '/static/imgs/zhuangtai/tjxx.svg'
							},
							{
								text: '信息汇总查询',
								name: 'infohuizong',
								img: '/static/imgs/zhuangtai/xxhz.svg'
							}, {
								text: '故障信息审核',
								name: 'guzhangshenhe',
								img: '/static/imgs/zhuangtai/gzxxsh.svg'
							}
						]
						break;
					case 4:
						this.bottomData = [{
								text: '计划分类统计',
								name: 'jihuafenlei',
								img: '/static/imgs/jianxiu/jhfltj.svg'
							},
							{
								text: '月度计划查询',
								name: 'yuedujihua',
								img: '/static/imgs/jianxiu/ydjhcx.svg'
							},
							{
								text: '工单登录',
								name: 'gongdanLogin',
								img: '/static/imgs/jianxiu/gddl.svg'
							}, {
								text: '计划实绩登录',
								name: 'jihuashijiLogin',
								img: '/static/imgs/dianjian/jhdl.svg'
							}, {
								text: '工单查询',
								name: 'gongdanSearch',
								img: '/static/imgs/jianxiu/gdcx.svg'
							}
						]
						break;
					case 5:
						this.bottomData = [{
								text: '库存查询',
								name: 'kccx',
								img: '/static/imgs/wlgl1/kccx.svg'
							},
							{
								text: '出库查询',
								name: 'ckcx',
								img: '/static/imgs/wlgl1/ckcx.svg'
							},
							{
								text: '库存台账',
								name: 'kctz',
								img: '/static/imgs/wlgl1/kctz.svg'
							}, {
								text: '报废审核',
								name: 'bfsh',
								img: '/static/imgs/wlgl1/bfsp.svg'
							},
							{
								text: '物料代码查询',
								name: 'wldmcx',
								img: '/static/imgs/wlgl1/wldmcx.svg'
							}
						]
						break;
					case 6:
						this.bottomData = [{
								text: '备修项目',
								name: 'bxxm',
								img: '/static/imgs/htgl1/bxxm.svg'
							},
							{
								text: '检修项目',
								name: 'jxxm',
								img: '/static/imgs/htgl1/jxxm.svg'
							},
							{
								text: '备修合同',
								name: 'bxht',
								img: '/static/imgs/htgl1/bxht.svg'
							}, {
								text: '检修合同',
								name: 'jxht',
								img: '/static/imgs/htgl1/jxht.svg'
							},
							{
								text: '检修结算',
								name: 'jxjs',
								img: '/static/imgs/htgl1/jxjs.svg'
							},
							{
								text: '奖惩信息',
								name: 'jcxxcx',
								img: '/static/imgs/htgl1/jcxx.svg'
							},
							{
								text: '备修结算',
								name: 'bxjs',
								img: '/static/imgs/htgl1/bxjs.svg'
							},
							{
								text: '检修报支',
								name: 'jxbz',
								img: '/static/imgs/htgl1/jxbz.svg'
							},
							{
								text: '备修报支',
								name: 'bxbz',
								img: '/static/imgs/htgl1/bxbz.svg'
							},
							{
								text: '预付款查询',
								name: 'yfkcx',
								img: '/static/imgs/htgl1/yfkcx.svg'
							}
						]
						break;
					case 7:
						this.bottomData = [{
								text: '在线总库查询',
								name: 'zxzkcx',
								img: '/static/imgs/jlgl1/zxzk.svg'
							},
							{
								text: '离线总库查询',
								name: 'lxzkcx',
								img: '/static/imgs/jlgl1/lxzk.svg'
							},
							{
								text: '临时总库查询',
								name: 'lszkcx',
								img: '/static/imgs/jlgl1/lszk.svg'
							}, {
								text: '在线计划查询',
								name: 'zxjhcx',
								img: '/static/imgs/jlgl1/zxjh.svg'
							},
							{
								text: '离线计划查询',
								name: 'lxjhcx',
								img: '/static/imgs/jlgl1/lxjh.svg'
							},
							{
								text: '临时计划查询',
								name: 'lsjhcx',
								img: '/static/imgs/jlgl1/lsjh.svg'
							}
						]
						break;
					case 8:
						this.bottomData = [{
								text: '安全阀总库查询',
								name: 'aqfzkcx',
								img: '/static/imgs/tzgl1/aqf.svg'
							},
							{
								text: '总库汇总查询',
								name: 'zkxxhz',
								img: '/static/imgs/tzgl1/zkhz.svg'
							},
							{
								text: '特种设备人员查询',
								name: 'tzsbrycx',
								img: '/static/imgs/tzgl1/tzsb.svg'
							}
						]
						break;
				}
			},
			checkActive: function(index) {
				switch (index) {
					case 0:
						this.active = 0
						break;
					case 1:
						this.active = 1
						break;
				}
			},
			leftNavTop: function(e) {
				if (this.btnDisabled) {
					if (e === 'left') {
						console.log(1);
					} else {
						this.showRigth = true
					}
				}
			},
			rightNavTop: function() {
				if (this.btnDisabled) {
					// 允许从相机和相册扫码
					uni.scanCode({
						success: function(res) {
							uni.showToast({
								icon: 'none',
								title: res.result
							})
							console.log('条码类型：' + res.scanType);
							console.log('条码内容：' + res.result);
						}
					});
				}
			},
			
		},
		mounted() {
			this.$ajax.get({
				url:"/app/public/excuteSql",
				data:{},
				success:function(v){
					console.log(v);
				}
			})
		}
	}
</script>

<style lang="scss">
	@import url("index.css");
	.wait-deal-view {
		height: 72upx;
		line-height: 72upx;
		background: rgba(255,255,255,1);
		box-shadow: 0upx 1upx 4upx 0upx rgba(187,187,187,0.5);
		border-radius: 6upx;
		border: 1upx solid rgba(238,238,238,1);
		font-size: 28upx;
		color: #333;
		margin-top: 20upx;
		
		.wait-deal-text {
			padding: 0 20upx;
		}
	}
</style>

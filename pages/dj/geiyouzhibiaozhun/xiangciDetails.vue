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
						<view>点检标准编码</view>
					</view>
					<view>{{item.id}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>点检标准项次</view>
					</view>
					<view>{{item.xiangci}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>内容</view>
					</view>
					<view>{{item.content}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>点检方法</view>
					</view>
					<view>{{item.dianjianmethod}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>管理控别</view>
					</view>
					<view>{{item.guanlikongbie}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>管理类别</view>
					</view>
					<view>{{item.guanlileibie}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>数据类别</view>
					</view>
					<view>{{item.datatype}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>标准</view>
					</view>
					<view style="max-width: 364upx;">{{item.biaozhun}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>上限</view>
					</view>
					<view>{{item.shangxian}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>下限</view>
					</view>
					<view>{{item.xiaxian}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>装置名称</view>
					</view>
					<view>{{item.zhuangzhiname}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>润滑部位</view>
					</view>
					<view>{{item.runhuabuwei}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>分配器编码</view>
					</view>
					<view>{{item.fenpeiqiid}}</view>
				</view>
				
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>入机点编码</view>
					</view>
					<view>{{item.rujidianid}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>润滑标识</view>
					</view>
					<view>{{item.runhuaid}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>油嘴规格</view>
					</view>
					<view>{{item.youzuiguige}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>加油工具</view>
					</view>
					<view>{{item.jiayoutool}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>油脂属性</view>
					</view>
					<view>{{item.youzhishuxing}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>油脂牌号</view>
					</view>
					<view>{{item.youzhipaihao}}</view>
				</view>
				<view class="line">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/huangdian.png"></image>
						<view>单点注入量</view>
					</view>
					<view>{{item.dandianzhuruliang}}</view>
				</view>
				<view class="line" style="padding-bottom: 40upx;">
					<view class="line-left">
						<image class="img-point" src="../../../static/imgs/landian.png"></image>
						<view>标准类别</view>
					</view>
					<view>{{item.type}}</view>
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
						xaingci:'aa',
						content:'aa',
						dianjianmethod:'aa',
						zhuangzhiname:'aa',
						runhuabuwei:'aa',
						runhuaid:'aa',
						fenpeiqiid:'aa',
						rujidianid:'aa',
						youzuiguige:'aa',
						youzhishuxing:'aa',
						jiayoutool:'aa',
						youzhipaihao:'aa',
						dandianzhuruliang:'aa',
						datatype:'cc',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						biaozhun:'通讯电缆连接可靠；无灰尘；CPU状态指示灯工作正常',
						shangxian:'aa',
						xiaxian:'aa'
					},
					{
id:'321315D331',
						xaingci:'aa',
						content:'aa',
						dianjianmethod:'aa',
						zhuangzhiname:'aa',
						runhuabuwei:'aa',
						runhuaid:'aa',
						fenpeiqiid:'aa',
						rujidianid:'aa',
						youzuiguige:'aa',
						youzhishuxing:'aa',
						jiayoutool:'aa',
						youzhipaihao:'aa',
						dandianzhuruliang:'aa',
						datatype:'cc',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						biaozhun:'通讯电缆连接可靠；无灰尘；CPU状态指示灯工作正常',
						shangxian:'aa',
						xiaxian:'aa'
					},
					{
id:'321315D331',
						xaingci:'aa',
						content:'aa',
						dianjianmethod:'aa',
						zhuangzhiname:'aa',
						runhuabuwei:'aa',
						runhuaid:'aa',
						fenpeiqiid:'aa',
						rujidianid:'aa',
						youzuiguige:'aa',
						youzhishuxing:'aa',
						jiayoutool:'aa',
						youzhipaihao:'aa',
						dandianzhuruliang:'aa',
						datatype:'cc',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						biaozhun:'通讯电缆连接可靠；无灰尘；CPU状态指示灯工作正常',
						shangxian:'aa',
						xiaxian:'aa'
					},
					{
id:'321315D331',
						xaingci:'aa',
						content:'aa',
						dianjianmethod:'aa',
						zhuangzhiname:'aa',
						runhuabuwei:'aa',
						runhuaid:'aa',
						fenpeiqiid:'aa',
						rujidianid:'aa',
						youzuiguige:'aa',
						youzhishuxing:'aa',
						jiayoutool:'aa',
						youzhipaihao:'aa',
						dandianzhuruliang:'aa',
						datatype:'cc',
						guanlikongbie:'aa',
						guanlileibie:'aa',
						biaozhun:'通讯电缆连接可靠；无灰尘；CPU状态指示灯工作正常',
						shangxian:'aa',
						xiaxian:'aa'
					},
				],
				navBarTitle: '给油脂标准项次详情',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
			}
		},
		onShow() {
			
		},
		methods: {
			
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				//跳转点检标准查询页面
				uni.navigateTo({
					url: 'xiangDetailsSearch'
				})
			}
		}
	}
</script>

<style>
	@import url("../../../common/sjbStyle.css");
	
</style>

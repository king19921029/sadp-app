<template>
	<!-- 报废查询 -->
	<view class="common-container">
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle" color="#fff"
		 shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<scroll-view scroll-y="true" style="height: 100%;overflow: hidden;">
			<view class="common-text-title" style="background-color: #fff;height:60upx;text-align: center;line-height: 60upx;">
				成功查询10条数据
			</view>
			<view style="position: relative;margin: 30upx 30upx;background-color: #fff;" v-for="(item,i) in 5" :key="i">
				<text class="flg">
					<text style="position: absolute;top:-6upx;left:-8upx;color: #fff;">{{i+1}}</text>
				</text>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">物料代码</text>
					</view>
					<view class="right">
						<text class="common-text-value">C0232450</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">物料名称</text>
					</view>
					<view class="right">
						<text class="common-text-value">尾滚筒</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">报废单号</text>
					</view>
					<view class="right">
						<text class="common-text-value">DT110514/630*1400</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">报废原因</text>
					</view>
					<view class="right">
						<text class="common-text-value">0.00000</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">入库单号</text>
					</view>
					<view class="right">
						<text class="common-text-value">0.00</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">报废申请数量</text>
					</view>
					<view class="right">
						<text class="common-text-value">JT6-4-0-0</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">报废回收数量</text>
					</view>
					<view class="right">
						<text class="common-text-value">GTGFLT017</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">库存量</text>
					</view>
					<view class="right">
						<text class="common-text-value">60</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">报废原值</text>
					</view>
					<view class="right">
						<text class="common-text-value">60</text>
					</view>
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
				navBarTitle: '报废查询',
				leftIcon: 'iconfanhui',
				rightIcon: 'iconchaxun',
				exitStr: '',
				btnDisabled: true,
			}
		},
		methods: {
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				uni.navigateTo({
					url: '/pages/wl/bfsh/bfsh-search'
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #eee;
	}

	.left>view {
		margin-right: 10upx;
	}

	.flg {
		position: relative;
		width: 0;
		height: 0;
		border-style: solid;
		border-color: skyblue skyblue transparent skyblue;
		border-width: 4upx 18upx 10upx;
		top: 0;
		left: 20upx;
	}

	.list-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10upx 30upx;
	}
</style>

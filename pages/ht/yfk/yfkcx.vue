<template>
	<!-- 预付款查询 -->
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
						<text class="common-text-attribute">预付款申请单号</text>
					</view>
					<view class="right">
						<text class="common-text-value">首钢股份炼作业部</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">流程查看</text>
					</view>
					<view class="right">
						<text class="common-text-value">2019-09-24</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">状态</text>
					</view>
					<view class="right">
						<text class="common-text-value">C0232450</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">供应商代码</text>
					</view>
					<view class="right">
						<text class="common-text-value">尾滚筒</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">供应商名称</text>
					</view>
					<view class="right">
						<text class="common-text-value">DT110514/630*1400</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">公司代码</text>
					</view>
					<view class="right">
						<text class="common-text-value">0.00000</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">会计期</text>
					</view>
					<view class="right">
						<text class="common-text-value">0.00</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">开户银行名称</text>
					</view>
					<view class="right">
						<text class="common-text-value">JT6-4-0-0</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">银行账号</text>
					</view>
					<view class="right">
						<text class="common-text-value">GTGFLT017</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">申请金额</text>
					</view>
					<view class="right">
						<text class="common-text-value">60</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">币种</text>
					</view>
					<view class="right">
						<text class="common-text-value">60</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">付款方式</text>
					</view>
					<view class="right">
						<text class="common-text-value">60</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">备注</text>
					</view>
					<view class="right">
						<text class="common-text-value">60</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">创建人</text>
					</view>
					<view class="right">
						<text class="common-text-value">60</text>
					</view>
				</view>
				<view class="list-item">
					<view class="left" style="display: flex;flex-direction: row;align-items: center;">
						<view style="width: 15upx;height: 15upx;border-radius: 50%;background-color: red;"></view>
						<text class="common-text-attribute">创建时间</text>
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
				navBarTitle: '预付款查询',
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
					url: '/pages/ht/yfk/yfkcx-search'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #eee;
		height: 100%;
	}

	.left>view {
		margin-right: 10upx;
	}

	.flg {
		position: relative;
		width: 0;
		height: 0;
		border-style: solid;
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

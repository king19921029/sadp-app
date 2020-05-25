<template>
	<view class="uni-navbar" :class="{'uni-navbar-fixed':isFixed,'uni-navbar-shadow':hasShadow}" :style="{'background-color':'#4680FA'}">
		<uni-status-bar v-if="insertStatusBar"></uni-status-bar>
		<view class="uni-navbar-header" style="box-sizing: border-box;" :style="{color:color}">
			<view class="uni-navbar-header-btns left-icon" @tap="onClickLeft">
				<view v-if="leftIcon.length" style="line-height: normal;">
					<text class="iconfont" :class="leftIcon" style="font-size: 40upx;"></text>
					<!-- <uni-icon :type="leftIcon" :color="color" size="48upx"></uni-icon> -->
				</view>
				<view v-if="leftText.length" class="uni-navbar-btn-text " :class="{'uni-navbar-btn-icon-left':!leftIcon.length}">{{leftText}}</view>
				<slot name="left"></slot>
			</view>
			<view class="uni-navbar-container">
				<!-- <view v-if="title.length" class="uni-navbar-container-title"> -->
				<view class="uni-navbar-container-title">{{title}}</view>
				<!-- </view> -->
				<!-- 标题插槽 -->
				<slot></slot>
			</view>
			<view class="uni-navbar-header-btns right-icon" @tap="onClickRight">
				<view v-if="rightIcon.length" style="line-height: normal;">
					<text class="iconfont" :class="rightIcon" style="font-size: 40upx;"></text>
					<!-- <uni-icon :type="rightIcon" :color="color" size="48upx"></uni-icon> -->
				</view>
				<!-- 优先显示图标 -->
				<view v-if="rightText.length&&!rightIcon.length" class="uni-navbar-btn-text ">{{rightText}}</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../uni-status-bar/uni-status-bar.vue'
	import uniIcon from '../uni-icon/uni-icon.vue'

	export default {
		components: {
			uniStatusBar,
			uniIcon
		},
		props: {
			/**
			 * 标题文字
			 */
			title: {
				type: String,
				default: ''
			},
			/**
			 * 左侧按钮文本
			 */
			leftText: {
				type: String,
				default: ''
			},
			/**
			 * 右侧按钮文本
			 */
			rightText: {
				type: String,
				default: ''
			},
			/**
			 * 左侧按钮图标
			 */
			leftIcon: {
				type: String,
				default: ''
			},
			/**
			 * 右侧按钮图标
			 */
			rightIcon: {
				type: String,
				default: ''
			},
			/**
			 * 是否固定在顶部
			 */
			fixed: {
				type: [Boolean, String],
				default: false
			},
			/**
			 * 按钮图标和文字颜色
			 */
			color: {
				type: String,
				default: '#000000'
			},
			/**
			 * 背景颜色
			 */
			backgroundColor: {
				type: String,
				default: '#4680FA'
			},
			/**
			 * 是否包含状态栏，默认固定在顶部时包含
			 */
			statusBar: {
				type: [Boolean, String],
				default: ''
			},
			/**
			 * 是否使用阴影，默认根据背景色判断
			 */
			shadow: {
				type: String,
				default: ''
			}
		},
		computed: {
			isFixed() {
				return String(this.fixed) === 'true'
			},
			insertStatusBar() {
				switch (String(this.statusBar)) {
					case 'true':
						return true
					case 'false':
						return false
					default:
						return this.isFixed
				}
			},
			hasShadow() {
				var backgroundColor = this.backgroundColor
				switch (String(this.shadow)) {
					case 'true':
						return true
					case 'false':
						return false
					default:
						return backgroundColor !== 'transparent' && backgroundColor.indexOf('rgba') < 0
				}
			}
		},
		methods: {
			/**
			 * 左侧按钮点击事件
			 */
			onClickLeft() {
				// this.$emit('clickLeft')
				this.$emit('click-left')
			},
			/**
			 * 右侧按钮点击事件
			 */
			onClickRight() {
				// this.$emit('clickRight')
				this.$emit('click-right')
			}
		}
	}
</script>

<style>
	.uni-icon {
		vertical-align: top;
	}

	.uni-navbar {
		display: block;
		position: relative;
		width: 100%;
		background-color: #FFFFFF;
		/* background: url('/static/imgs/shouye/yewu.png'); */
		/* overflow: hidden; */
	}

	.uni-navbar view {
		/* line-height: 90upx; */
		/* padding-top: 10px; */
	}

	.uni-navbar-shadow {
		box-shadow: 0 1px 6px #ccc;
	}

	.uni-navbar.uni-navbar-fixed {
		position: fixed;
		z-index: 998;
	}

	.uni-navbar-header {
		display: flex;
		flex-direction: row;
		width: 100%;
		/* line-height: 100upx; */
		font-size: 32upx;
	}

	/* #ifdef APP-PLUS || H5 */
	.uni-navbar-header {
		height: 120upx;
		padding: 14upx 6upx 0 6upx;
	}

	/* #endif */

	/* #ifdef MP-WEIXIN */
	.uni-navbar-header {
		height: auto;
	}

	/* #endif */

	.uni-navbar-header .uni-navbar-header-btns {
		display: flex;
		align-items: flex-end;
		flex-wrap: nowrap;
		flex-shrink: 0;
		width: 120upx;
		padding: 0 12upx;
		padding-bottom: 10upx;
	}

	.uni-navbar-header .uni-navbar-header-btns:first-child {
		padding-left: 20upx;
	}

	.uni-navbar-header .uni-navbar-header-btns:last-child {
		width: 60upx;
	}

	.uni-navbar-container {
		width: 100%;
		margin: 0 10upx;
		position: relative;
	}

	.uni-navbar-container-title {
		/* height: 120upx; */
		/* text-align: center; */
		/* display: flex; */
		/* justify-content: center; */
		font-size: 36upx;
		/* text-align: center; */
		font-weight: 700;
		padding-right: 60upx;
		/* align-items: flex-end; */
		position: absolute;
		width: 100%;
		box-sizing: border-box;
		text-align: center;
		bottom: 0;
	}
</style>

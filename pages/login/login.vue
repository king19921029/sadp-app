<template>
	<!-- 登陆页 -->
	<view class="page-box" style="background-image: url('/static/imgs/login.jpg');">
		<view class="logo-img">
			<!-- <image style="width: 102upx;height: 51upx;" src="/static/imgs/denglu/logo.png" mode=""></image> -->
			<text class="login-title">通钢设备管理移动应用</text>
		</view>
		<view class="login-box">
			<view class="login-box-top">
				<text style="text-align: center;font-size:24upx;font-family:Roboto-Bold,Roboto;font-weight:bold;color:rgba(74,74,74,1);">登录</text>
			</view>
			<view class="login-box-bottom">

				<!-- #ifdef APP-PLUS || H5-->
				<view v-if="platform==='android'" class="with-fun">
					<text style="padding-left: 10upx;width: 100upx;color: rgba(102, 102, 102, 1); ">用户名</text>
					<view style="flex: 1;">
						<input style="background-color: #fff;height: 75upx;box-sizing: border-box;border-bottom: 2upx solid #eee;" class="uni-input"
						 v-model="username" focus />
					</view>
					<view @click="clearUserName"><text style="font-size: 36upx;" class="iconfont iconquxiao"></text></view>
				</view>

				<view v-if="platform==='ios'" class="with-fun" style="align-items:center;">
					<text style="padding-left: 10upx;width: 100upx;color: rgba(102, 102, 102, 1);">用户名</text>
					<view style="flex: 1;">
						<input style="background-color: #fff;height: 75upx;box-sizing: border-box;border-bottom: 2upx solid #eee;" class="uni-input"
						 v-model="username" @focus="onFocus" @blur="onBlur" />
					</view>
					<view @click="clearUserName"><text style="font-size: 36upx;" class="iconfont iconquxiao"></text></view>
				</view>
				<!-- #endif -->

				<!-- #ifdef MP-WEIXIN -->
				<view class="with-fun">
					<text style="padding-left: 10upx;width: 100upx;color: rgba(102, 102, 102, 1);">用户名</text>
					<view style="flex: 1;">
						<input style="background-color: #fff;height: 75upx;box-sizing: border-box;border-bottom: 2upx solid #eee;" class="uni-input"
						 v-model="username" />
					</view>
					<view @click="clearUserName"><text style="font-size: 36upx;" class="iconfont iconquxiao"></text></view>
				</view>
				<!-- #endif -->
				<!-- 密码 -->
				<view class="with-fun">
					<text style="padding-left: 10upx;width: 100upx;color: rgba(102, 102, 102, 1);">密码</text>
					<view style="flex: 1;">
						<input @confirm="login" style="background-color: #fff;height: 75upx;box-sizing: border-box;border-bottom: 2upx solid #eee;"
						 class="uni-input" v-model="password" :password="showPassword" />
					</view>
					<view class="iconfont iconyanjing " style="font-size: 36upx;" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
				</view>
				<view class="foot-bar">
					<label class="radio" @click="radioChange" style="color: #fff;">
						<radio value="r2" ref="radioInput" color="#108ee9" :checked="ischecked" style="transform:scale(0.5)" />
						<text style="color: #666;font-size: 24upx;">记住密码</text>
					</label>
					<text style="font-size: 24upx;color: #666;">忘记密码?</text>
				</view>
				<button class="login-btn" @click="login">登陆</button>
			</view>

		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				getBackgroundBase64: '',
				showPassword: true,
				iconType: 'success',
				ischecked: false,
				username: '',
				password: '',
				RememberPsd: false,
				useMsg: {},
				platform: ''
			}
		},
		methods: {
			onFocus() {
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'none'
				})
			},
			onBlur() {
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'auto'
				})
			},
			changePassword() {
				this.showPassword = !this.showPassword
			},
			clearUserName() {
				console.log('清除');
				this.username = ''
			},
			radioChange: function() {

				this.ischecked = !this.ischecked
				this.RememberPsd = this.ischecked
				console.log('是否记住密码', this.RememberPsd);
			},

			login: function() {
				// useMsg
				var _this = this
				this.$set(this.useMsg, 'username', this.username);
				// console.log(this.RememberPsd);
				if (this.RememberPsd) {
					this.$set(this.useMsg, 'password', this.password);
				}
				uni.redirectTo({
					'url': '/pages/index/index'
				})
				return
				this.$ajax.get({
					url: '/app/public/login',
					data:{
						username:_this.username,
						'password':_this.password
					},
					success: function(res) {
						if (res.data.meta.success) {
							_this.$set(_this.useMsg, 'tokenId', res.data.data);
							uni.setStorageSync('login', JSON.stringify(_this.useMsg))

							uni.redirectTo({
								'url': '/pages/index/index'
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: "用户名或密码错误!"
							})
						}
					}
				})
				// console.log(this.useMsg);
			}

		},
		onLoad(option) {
			// 判断操作系统
			this.platform = uni.getSystemInfoSync().platform
			let msg = uni.getStorageSync('login')
			if (msg) {
				let username = JSON.parse(uni.getStorageSync('login')).username
				let password = JSON.parse(uni.getStorageSync('login')).password
				if (username) {
					this.username = username
				} else {
					this.username = ''
				}
				if (option.RememberPsd == 'edit') {
					console.log('取消记住密码');
				} else {
					if (password) {
						this.password = password
						this.ischecked = true
						this.RememberPsd = true
					} else {
						this.password = ''
					}
				}
			}
		}
	}
</script>
<style>
	@import url("login.css");
</style>

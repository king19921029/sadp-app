<template>
	<view>
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60"  :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" class="bfsh-nav-bar"></uni-nav-bar>
		<view class="bfsh-view-box">
			<view class="bfsh-list-view" v-for="(item, index) in bfshDatas" :key="index">
				<view class="bfsh-key-value-view">
					<text class="bfsh-key">{{item.bfshKey}}:</text>
					<text class="bfsh-value">{{item.bfshValue}}</text>
				</view>
			</view>
			<view class="button-view">
				<button class="button-agreen" form-type="submit">同意</button>
				<button class="button-unagreen" form-type="submit">不同意</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				navBarTitle: '报废审核',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				bfshDatas: [
					{
						bfshKey: "入库单号",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "库区",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "物料代码",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "物料名称",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "规格型号",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "库位",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "物料大类",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "成本中心代码",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "循环品号",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "报废数量",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "报废类型",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "报废估重（KG）",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "报废原因",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "报废原值",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "文档编号",
						bfshValue: "11236547895245"
					},
					{
						bfshKey: "文档名称",
						bfshValue: "11236547895245"
					}
				]
			}
		},
		methods: {
			leftNavTop: () => {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	page{
		background:rgba(238,238,238,1);
	}
	.bfsh-nav-bar {
		padding-bottom: 100upx;
	}
	.bfsh-view-box{
		width: 90%;
		margin: 5%;
		// height: 300rpx;
		position: absolute;
		top: 8%;
		right: 0;
		left:0;
		background: rgba(255, 255, 255, 1);
		border-radius: 16px 16px 0px 0px;
		z-index: 999;
		
		.bfsh-key-value-view {
			margin: 40upx 0 0 30upx;
			font-size: 26upx;
			font-family:SourceHanSansCN-Regular,SourceHanSansCN;
			font-weight:400;
			color:rgba(51,51,51,1);
			// line-height:66upx;
		}
	}
	
	.button-view {
		padding-bottom: 100upx;
		.button-agreen, .button-unagreen {
			border: none;
			border-radius: 100upx;
			background-color: #3574FA;
			color: #fff;
			font-size: 28upx;
			height: 80upx;
			line-height: 80upx;
			margin-top: 100upx;
			width: 90%;
		}
		
		.button-unagreen {
			margin-top: 30upx;
		}
	}
	
</style>

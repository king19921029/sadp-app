<template>
	<view>
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60"  :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" class="bxht-nav-bar"></uni-nav-bar>
		<view class="bxht-view-box">
			<view class="bxht-list-view" v-for="(item, index) in bxhtDatas" :key="index">
				<view class="bxht-key-value-view">
					<text class="bxht-key">{{item.bxhtKey}}:</text>
					<text class="bxht-value">{{item.bxhtValue}}</text>
				</view>
			</view>
			<view class="bxht-button-view">
				<button class="bxht-button-agreen" form-type="submit">同意</button>
				<button class="bxht-button-unagreen" form-type="submit">不同意</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				navBarTitle: '备修合同审核',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				bxhtDatas: [
					{
						bxhtKey: "合同名称",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "供应商代码",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "供应商名称",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "合同年份",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "不含税金额",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "合同生成日期",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "合同有效期起",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "合同有效期止",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "是否含税",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "合同文本",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "开票税率",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "签订日期",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "年度合同",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "责任人岗号",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "责任人姓名",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "合同方式",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "发票类型",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "付款方式",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "质保期",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "质保期单位",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "质保方式",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "质保金",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "文档编号",
						bxhtValue: "11236547895245"
					},
					{
						bxhtKey: "文档名称",
						bxhtValue: "11236547895245"
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
	.bxht-nav-bar {
		padding-bottom: 100upx;
	}
	.bxht-view-box{
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
		
		.bxht-key-value-view {
			margin: 40upx 0 0 30upx;
			font-size: 26upx;
			font-family:SourceHanSansCN-Regular,SourceHanSansCN;
			font-weight:400;
			color:rgba(51,51,51,1);
			// line-height:66upx;
		}
	}
	
	.bxht-button-view {
		padding-bottom: 100upx;
		.bxht-button-agreen, .bxht-button-unagreen {
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
		
		.bxht-button-unagreen {
			margin-top: 30upx;
		}
	}
	
</style>


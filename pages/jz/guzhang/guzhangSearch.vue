<template>
	<view>
		<uni-nav-bar :left-icon="leftIcon" :right-icon="rightIcon" :rightText="exitStr" size="60" :title="navBarTitle"
		 color="#fff" shadow="false" background-color="#4680FA" @click-left="leftNavTop('left')" @click-right="rightNavTop('right')"></uni-nav-bar>
		<search :datas='datas'></search>
	</view>
</template>

<script>
	import search from "@/components/search/search.vue"
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{
			'search':search,
			uniNavBar,
		},
		data() {
			return {
				datas:[
					'设备编码','故障开始时间起','故障开始时间止'
				],
				navBarTitle: '故障信息查询',
				leftIcon: 'iconfanhui',
				rightIcon: '',
				exitStr: '',
				btnDisabled: true
			}
		},
		methods: {
			leftNavTop: () => {
				uni.navigateBack()
			},
			rightNavTop: () => {
				
			}
		}
	}
</script>

<style>

</style>

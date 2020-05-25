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
					'异常联络单编码','设备编码','提出日期起','提出日期止','处理进度'
				],
				navBarTitle: '异常联络单查询',
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

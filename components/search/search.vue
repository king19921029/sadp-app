<template name='search' style="overflow: hidden;">
	<view>
		<view class="style" v-for="(item,index) in datas" :key="index">
			<input style="height: 60upx;margin-left: 30upx;" :placeholder="item" placeholder-class="placeholder-style"/>
		</view>
		<view class="search">查询</view>
	</view>
	
</template>

<script>
	export default {
		name:'search',
		props:{
			datas:{
				type:Array,
				value:[]
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style>
	uni-page-body{
		height: 100% !important;
		overflow: hidden !important;
	}
	.style{
		border-radius: 30upx;
		background-color: #eee;
		margin: 40upx 46upx 0upx 46upx;
		font-size:24upx;
		font-family:SourceHanSansCN-Regular,SourceHanSansCN;
		font-weight:400;
	}
	.placeholder-style{
		font-size:24upx;
		font-family:SourceHanSansCN-Regular,SourceHanSansCN;
		font-weight:400;
		color:rgba(187,187,187,1);
		line-height: 60upx;
	}
	.time-def-block{
		height:71upx;
		width:524upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		
	}
	
	.time-def{
		position: relative;
		/* height: 100%; */
		height:71upx;
		width: 246upx;
		display: flex;
		align-items: center;
	}
	
	.time-def-input{
		/* height: 100%; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		height:71upx;
		width: 206upx;
		background:#EEEEEE;
		border-radius:8upx;
		text-indent: 20upx;
		font-size: 24upx;
		padding-right: 40upx;
		color: #CCCCCC;
	}
	.search{
		border-radius: 40upx;
		height: 80upx;
		background-color: #3574FA;
		margin: 100upx 46upx 0upx 46upx ;
		font-size:32upx;
		text-align: center;
		line-height: 80upx;
		font-family:SourceHanSansCN-Medium,SourceHanSansCN;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
</style>

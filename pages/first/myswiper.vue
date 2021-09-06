<template>
	<view>
		<view style="width: 100%;background-color: rgba(173,216,230,.2);display: flex;padding:20rpx;position: absolute;top:0;z-index: 2;">
			<image class="mapICon" src="/static/svg/circle.svg" @click="chooseLocation"></image>
			<input class="homeInput" placeholder="请输入搜索" placeholder-style="padding-left:24rpx;font-size:28rpx;color:#fff"/>
		</view>
		
		<swiper
			:autoplay="true"
			interval=3000
			:circular="true"
		>
			<swiper-item
				v-for="item in img"
				:key="item.id"
				style="width: auto;height: auto;"
			>
				<image class="scaleImg" :src="item.url" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"myswiper",
		data(){
			return {
				img:[
					{id:"123",url:"https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2891176346,1475092354&fm=26&gp=0.jpg"},
					{id:"456",url:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2682583657,1427700662&fm=26&gp=0.jpg"},
					{id:"789",url:"https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1641318454,3057139146&fm=26&gp=0.jpg"},
				]
			}
		}
	}
</script>

<style>
	.mapICon{
		width:48rpx;
		height:48rpx
	}
	.homeInput{
		width:80%;
		background-color: rgba(0,0,0,.3);
		border-radius: 26rpx;
		
	}
	.scaleImg{
		background-size:contain|cover;
		width:100%;		
		/* height: auto;
		min-height:300rpx */
	}
</style>

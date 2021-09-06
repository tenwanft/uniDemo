<template>
	<view>
		<image  class="imgStyle" :src="detailData.img"></image>
		<view class="title">文案{{detailData.id}}</view>
		<view class="contet">
			{{content}}
		</view>
	</view>
</template>

<script>
	import {articleDetail} from "../../mock/article.js"
	export default {
		data() {
			return {
				detailData:null,
				content:''
			}
		},
		methods: {
			
		},
		onLoad(){
			const eventChannel = this.getOpenerEventChannel()
			eventChannel.on('getItem', (data)=> {
				this.detailData = data.data
			})
		},
		mounted(){
			articleDetail(this.detailData.id).then(res=>{
				console.log(res,'===')
				if(res.text){
					this.content=res.text
				}
				
			}).catch(err=>{console.log(err)})
		}
	}
</script>

<style scoped>
	.imgStyle{
		width: 100%;
		height: 500rpx;
	}
	.title{
		font:48rpx/88rpx "";
	}
	.content{
		font:36rpx/66rpx "";
		color:#666
	}
</style>

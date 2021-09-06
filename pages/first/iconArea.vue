<template>
	<view style="display: flex;justify-content: center;background-color: #fff;margin:25rpx 0">
		<view class="iconBox">
			<view
				v-for="item in iconList"
				:key="item.id"
				class="iconImg"
				@click="getPhoto(item.id)"
			>
			<image :src="item.url" style="width: 100rpx;height:100rpx"></image>
			<text style="font-size: 32rpx;">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"iconArea",
		data(){
			return {
				iconList:[
					{id:"111",url:"/static/icon/map.png",text:"地图"},
					{id:"222",url:"/static/icon/creame.png",text:"相机"},
					{id:"333",url:"/static/icon/shoppingmall.png",text:"商城"},
					{id:"444",url:"/static/icon/music.png",text:"音乐"},
					{id:"555",url:"/static/icon/game.png",text:"游戏"},
					{id:"666",url:"/static/icon/email.png",text:"邮件"},
					{id:"888",url:"/static/icon/map.png",text:"地图"},
					{id:"999",url:"/static/icon/creame.png",text:"相机"}
				],
				location:{
					latitude:'',
					longitude:'',
					name:'我的位置'
				}
			}
		},
		methods:{
			getPhoto(id){
				if(id==="222"){
					// 相机拍照
					uni.chooseImage({
						sourceType: ['album','camera'],
						success:(res)=>{
							console.log(res,'==')
						}
					})
					//从微信聊天里选择图片
					 // wx.chooseMessageFile({
						// 	count: 5,
						//     type: 'image',
						//     success :(res) =>{
						//      // tempFilePath可以作为img标签的src属性显示图片
						//      const tempFilePaths = res.tempFiles
						// 	 this.$store.commit('changeImg',tempFilePaths)
							 
						//     }
					 // })
				}else if(id==="111"){
					
					// 打开手机自带地图
					uni.openLocation({
						...this.location,
					})
				}
			},
			chooseLocation(){
				//选择定位
				uni.chooseLocation({
					success: (res) => {
						this.address=res
					}
				})
			}
		}
	}
	
</script>

<style>
	.iconBox{
		display: flex;
		padding:50rpx 25rpx;
		box-sizing: border-box;
		flex-wrap: wrap;
		justify-content: space-between;
		
	}
	.iconImg{
		display: flex;
		align-items: center;
		flex-direction: column;
		padding:0 25rpx 15rpx;
	}
</style>

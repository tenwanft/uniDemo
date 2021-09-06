<template>
	<view style="background-color: #f5f7f9;height:100vh">
		<view class="header">
			<view v-if="!userInfo"  class="headerBox" @click="userLogin">
				<image src="../../static/my/my.png" class="headerImg"></image>
				<view style="padding-top:10rpx;color:#fff">授权登录</view>
			</view>
			<view v-else class="headerBox">
				<image :src="userInfo.avatarUrl" class="headerImg"></image>
				<view style="padding-top:10rpx;color:#fff">{{userInfo.nickName}}</view>
			</view>
		</view>
		<view class="iconList">
			<image 
				v-for="item in iconList"
				:key="item.id"
				:src="item.iconPath"
				style="width: 66rpx;height:66rpx"
			></image>
		</view>
		<view class="listFooter">
			<view
				v-for="item in list"
				:key="item.id"
				class="listStyle"
			>
				<text style="font-size: 36rpx;color:#333">{{item.text}}</text>
				<image src="../../static/my/arrow-right.png" style="width: 36rpx;height:36rpx"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList:[
					{id:'1',iconPath:"../../static/my/vip.png"},
					{id:'2',iconPath:"../../static/my/gift.png"},
					{id:'3',iconPath:"../../static/my/shopping.png"},
					{id:'4',iconPath:"../../static/my/coupon.png"}
				],
				list:[
					{id:"l1",text:"个人信息"},
					{id:"l2",text:"查看订单"}
				],
				login:false,
				userInfo:null
			}
		},
		methods: {
			userLogin(){
				// uni.getProvider({
				//     service: 'oauth',
				//     success: function (res) {
				//         if (~res.provider.indexOf('weixin')) {
				//             uni.login({
				//                 provider: 'weixin',
				//                 success: function (loginRes) {
				//                     console.log(JSON.stringify(loginRes));
				// 					uni.getUserInfo({
				// 					     provider: 'weixin',
				// 					     success: (info) => {//这里请求接口
				// 							 console.log(info);
									                       
				// 					     }, 
				// 						fail:(err)=>{
				// 							console.log(err,'err')
				// 						}
				// 					})
				//                 }
				//             });
				//         }
				//     }
				// });
				//获取用户信息，每次都弹窗
				uni.getUserProfile({
					desc:"login",
					lang:"zh_CN",
					success:(data)=>{
						// console.log(data)
						wx.login({
							success:(res) => {
							    if (res.code) {
									// 模拟登陆成功后
									this.userInfo=data.userInfo
									console.log(data.userInfo)
									this.login=true
							      //发起网络请求
							      // wx.request({
							      //   url: 'https://example.com/onLogin',
							      //   data: {
							      //     code: res.code
							      //   }
							      // })
							    } else {
							      console.log('登录失败！' + res.errMsg)
							    }
							  }
						})
						// 调用 wx.login() 获取 临时登录凭证code ，并回传到开发者服务器。
						// 调用 auth.code2Session 接口，换取 用户唯一标识 OpenID 、 用户在微信开放平台帐号下的唯一标识UnionID（若当前小程序已绑定到微信开放平台帐号） 和 会话密钥 session_key。
						// 之后开发者服务器可以根据用户标识来生成自定义登录态，用于后续业务逻辑中前后端交互时识别用户身份。
					},
					fail:(err)=>{
						console.log(err)
					}
				})
				
				
			}
		}
	}
</script>

<style scoped>
	.header{
		width:100%;
		height:360rpx;
		background-color:#ADD8E6;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.headerBox{
		/* width: 140rpx;
		height: 140rpx;
		border-radius: 50%;
		overflow: hidden;
		background-color: #FFFFFF;
		text-align: center; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.headerImg{
		/* width:100%;
		height:100% */
		width: 140rpx;
		height: 140rpx;
		border-radius: 50%;
		background-color: #FFFFFF;
		text-align: center;
	}
	.iconList{
		background-color: #fff;
		margin: 20rpx 0;
		padding: 20rpx 66rpx;
		display: flex;
		justify-content: space-between;
	}
	.listFooter{
		padding: 0 66rpx;
		background-color: #fff;
	}
	.listStyle{
		border-bottom: 1rpx solid #f5f7f9;
		padding:25rpx 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>

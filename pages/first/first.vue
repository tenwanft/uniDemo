<template>
	<scroll-view 
		style="background-color: #F5F7F9;height: 100vh;width:100%" 
		@scroll="getscroll"
		scroll-y=true
		@scrolltolower="ontouchBottom()" 
		@refresherrefresh="refreshData()"
		@refresherrestore="onRestore()"
		refresher-enabled=true
		:refresher-triggered="triggered"
	>
		<myswiper></myswiper>
		<icon-area></icon-area>
		
		<view id="tabList">
			<view class="tab" :style="isFixed?fixStyles:''">
				<text class="tabText" :style="selectedTab===item.id?styles:null" v-for="item in tabList" @click="changeTab(item.id)">{{item.text}}</text>
			</view>
			<view style="background-color: #fff;">
				<view
					class="listStyle"
					v-for="item in dataList"
					@click="gotoDetail(item)"
				>
					<image class="itemImg" :src="item.img"></image>
					<view>
						<view>
							<view class="title">標題1</view>
							<view class="content">這是內容12</view>
						</view>
					</view>
				</view>
			</view>
			<view style="width:100%;text-align: center;margin-top: 50rpx;">
				<text>{{bottomText}}</text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import CommonList from "./commonList.vue"
	import myswiper from './myswiper.vue'
	import IconArea from './iconArea.vue'
	import { getRequest } from "@/util/request.js"
	import { getTabList } from "@/mock/tabList.js"
	export default {
		components:{
			CommonList,
			myswiper,
			IconArea
		},
		data() {
			return {
				uploadImg:[],
				address:null,
				location:{
					latitude:'',
					longitude:'',
					name:'我的位置'
				},
				tabTop:null,
				isFixed:false,
				dataList:[],
				tabList:[
					{id:0,text:"全部"},
					{id:1,text:"狮子"},
					{id:2,text:"兔子"},
				],
				pageSize:4,
				pageNum:1,
				isShow:true,//是否还有
				bottomText:'',
				triggered:false,
				selectedTab:0,
				styles:"border-bottom:2px solid #ADD8E6",
				fixStyles:'position:fixed;top:0;z-index:9',
				refresh:false
			}
		},
		methods: {
			
			getscroll(e){
				let scrollTop=e.detail.scrollTop
				if(scrollTop < this.tabTop){
					this.isFixed=false
					
				}else{
					this.isFixed=true
				}
			},
			fetchData(pageNum){
				let pageSize=this.pageSize
				console.log(pageNum,'num')
				let data=getTabList({tabIndex:this.selectedTab,pageNum:pageNum,pageSize:pageSize})
				this.bottomText=''
				this.isShow=data.isShow
				// this.pageNum=data.pageNum
				this.dataList=data.pageNum===1?data.list:this.dataList.concat(data.list)
				this.refresh=false
				this.triggered=false 
			},
			gotoDetail(item){
				
				uni.navigateTo({
					url: '/components/first/listDetail',
					events:{
						
					},
					success:(res)=>{
						 res.eventChannel.emit('getItem', { data: item })
					}
				})
			},
			refreshData(){
				if(this.refresh) return
				this.refresh = true;
				this.triggered=true
				this.pageNum=1
				this.fetchData(1)
			},
			onRestore(){
				//下拉刷新被重置
				this.triggered='restore'
			},
			changeTab(index){
				this.selectedTab=index
				
				this.dataList=[]
				this.fetchData(1)
			},
			ontouchBottom(){
				if(this.isShow){
					this.fetchData(this.pageNum)
					this.pageNum++
					this.bottomText='正在加载中。。。'
				}else{
					this.bottomText='我已經到底啦~'
					return 
				}
				
			}
			
		},
		created(){
			this.fetchData(1)
			uni.getLocation({
				type:'wgs84',
				geocode:true,
				complete: (res,err) => {
					if(res){
						// console.log(res,'===')
						this.location.latitude=res.latitude
						this.location.longitude=res.longitude
						// this.location={latitude:res.latitude,longitude:res.longitude}
					}
					if(err){
						uni.showToast({
							title:"获取位置信息失败",
							duration:1000,
							icon:"none"
						})
					}
				}
			})
		},
		mounted(){
			const query = uni.createSelectorQuery()
			query.select('#tabList').boundingClientRect()
			query.exec((res)=>{
				// console.log(res[0].top)
				this.tabTop=res[0].top
			}) 
			// getRequest('qr/qr.php',{url:'https://lengyanwl.com'},(res)=>{
			// 	if(res.data){
			// 		this.imgUrl=res.data.imgurl
			// 	}
			// })
			
		},
	}
</script>

<style scoped>
	.listStyle{
		display: flex;
		align-items: center;
		/* width:calc(100%-50rpx)*2 */
		margin:35rpx 50rpx 0;
		padding:20rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #F1F1F1;
	}
	.itemImg{
		width:100rpx;
		height:100rpx;
		border-radius: 15rpx;
		margin-right: 30rpx;
	}
	.title{
		font:32rpx/64rpx "";
	}
	.content{
		font:24rpx/48rpx "";
		color:#999
	}
	.tab{
		padding: 25rpx;
		background-color: #fff;
		border-bottom: 1rpx solid #f5f7f9;
	}
	.tabText{
		padding: 25rpx 0;
		margin:0 25rpx;
		border:none
	}	
</style>

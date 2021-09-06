<template>
	<view>
		<view class="tab">
			<text class="tabText" :style="selectedTab===item.id?styles:null" v-for="item in tabList" @click="changeTab(item.id)">{{item.text}}</text>
		</view>
		<scroll-view 
			:scroll-y="true" 
			style="height: 100vh;background-color: #fff" 
			@scrolltolower="ontouchBottom()" 
			
		>
			
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
			<view style="width:100%;text-align: center;margin-top: 50rpx;">
				<text>{{bottomText}}</text>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"CommonList",
		data() {
			return {
				dataList:[
					{id:"bx1",img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2682583657,1427700662&fm=26&gp=0.jpg'},
					{id:"bx2",img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2253877398,227989971&fm=26&gp=0.jpg'},
					{id:"bx3",img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3283169428,2012619199&fm=26&gp=0.jpg'},
					{id:"bx4",img:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2001945861,3826538413&fm=26&gp=0.jpg'},
				],
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
				styles:{
					borderBottom:'2px solid #ADD8E6'
				}
			};
		},
		methods:{
			//分页，传入参数，调用接口，传入参数pageNUm要同步是第几页，和是不是最后一页，是的话则不再调用这个接口，并且isshow要变成false（不再展示并且直接return）
			//不是的话则再次调用这个接口，并将上一次的数据和这一页的数据concat合并起来
			fetchData(){
				let pageSize=this.pageSize
				let num=this.pageNum
				let item={id:"1",img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2682583657,1427700662&fm=26&gp=0.jpg'}
				console.log(num,'===')
				
				if(this.triggered===true){
					this.triggered = false //请求接口之后
						console.log(123)
				}
				if(this.dataList.length>20){
					this.isShow = false
					this.bottomText='我已經到底啦~'
					return 
				}
				for(var i=this.dataList.length;i<pageSize*(num+1);i++){
					this.bottomText="正在加載中。。。"
					setTimeout(()=>{
						this.dataList.push(item)
						this.bottomText=''
						// this.triggered=false
					},1000)
					
				}
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
			// refreshData(){
			// 	this.triggered=true
			// 	this.pageNum=1
			// 	this.fetchData()
			// @refresherrefresh="refreshData()"
			// refresher-enabled=true
			// :refresher-triggered="triggered"
			// },
			// onRestore(){
			// 	//下拉刷新被重置
			// 	this.triggered='restore'
			// },
			changeTab(index){
				this.selectedTab=index
			},
			ontouchBottom(){
				if(this.isShow){
					this.pageNum++
					this.fetchData()
				}else{
					return 
				}
				
			}
		}
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

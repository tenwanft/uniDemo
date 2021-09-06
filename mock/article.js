const bxList=[
	{
		id:"bx1",
		text:"王一博惊艳了时光 肖战温柔了岁月 博君一肖成了信仰\r\n意大利有座城市名叫博肖\r\n博肖里有个酒庄，里面卖百香果味的红酒\r\n原来我和你的相遇从不是巧合"
	},
	{
		id:"bx2",
		text:"博君一肖是我心动的开始,是整个夏天残留的温柔。<br/>他把爱意掰碎揉进两个小括号里<br/>他把温柔散开放进弯起的眼睛里"
	},
	{
		id:"bx3",
		text:"那年夏天<br/>两颗星星相遇了<br/>小冰块有了心尖上的小王子 <br/>小兔子也有了自己的小狮子<br/>下辈子还要和你一起在屋顶看星星<br/>下辈子还要和你在下雨天听雨<br/>下辈子还要和你一起吹夏天的风<br/>后来我才知道，当你喊出战哥弟弟爱你的时候就藏不住了<br/>王一博喊出这句话的时候没有笑我就知道他对肖战动了真情"
	},{
		id:"bx4",
		text:"他喜欢海绵宝宝，他喜欢菠萝<br/>海绵宝宝住在大菠萝里，他住在他心里<br/>愿等君归<br/>博君一肖<br/>战哥博弟<br/>前途无量"
	}	
]
export function articleDetail(id){
	let p1 = new Promise((resolve,reject)=>{
		let bxObj = bxList.find(item=>item.id===id)
		if(bxObj){
			resolve(bxObj)
		}else{
			reject('傳入id無效')
			uni.showToast({
				title:"傳入id無效",
				icon:'none',
				duration:1000
			})
		}
	})
	return Promise.race([p1]).then((result)=>{
		return result
	}).catch(err=>{console.log(err)})
}
const tab={
	all:[
		{id:"bx1",img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2682583657,1427700662&fm=26&gp=0.jpg'},
		{id:"bx2",img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2253877398,227989971&fm=26&gp=0.jpg'},
		{id:"bx3",img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3283169428,2012619199&fm=26&gp=0.jpg'},
		{id:"bx4",img:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2001945861,3826538413&fm=26&gp=0.jpg'},
		{id:"bx5",img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2682583657,1427700662&fm=26&gp=0.jpg'},
		{id:"bx6",img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2253877398,227989971&fm=26&gp=0.jpg'},
		{id:"bx7",img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3283169428,2012619199&fm=26&gp=0.jpg'},
		{id:"bx8",img:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2001945861,3826538413&fm=26&gp=0.jpg'},
		],
	lion:[
		{id:"w1",img:'https://img0.baidu.com/it/u=3165414574,2185771824&fm=26&fmt=auto&gp=0.jpg'},
		{id:"w2",img:'https://img2.baidu.com/it/u=3058791339,1414001349&fm=26&fmt=auto&gp=0.jpg'},
		{id:"w3",img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3283169428,2012619199&fm=26&gp=0.jpg'},
		{id:"w4",img:'https://img2.baidu.com/it/u=1546462944,1631602436&fm=26&fmt=auto&gp=0.jpg'},
	],
	rabbit:[
		{id:"x1",img:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2763858159,801771131&fm=26&gp=0.jpg'},
		{id:"x2",img:'https://img2.baidu.com/it/u=3128248044,3216064626&fm=11&fmt=auto&gp=0.jpg'},
		{id:"x3",img:'https://img2.baidu.com/it/u=3154997079,187228373&fm=11&fmt=auto&gp=0.jpg'},
		{id:"x4",img:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2001945861,3826538413&fm=26&gp=0.jpg'},	
	]
}
export const getTabList=(data)=>{
	const {tabIndex,pageSize,pageNum}=data 
	// 每页只拉pagesize条，每个tab，total条，拉完了则isSHow为false，还要返回出你当前拉的是哪一页
	let tabData={}
	let map = new Map()
	let list = []
	let key = tabIndex===0?"all":tabIndex===1?"lion":"rabbit"
	let total=tab[key].length
	let num = Math.ceil(total/pageSize) //向上取整
	if(total>pageSize){
		for(var i=0;i<num;i++){
			console.log(num)
			list=tab[key].slice(i*pageSize,pageNum*pageSize)
			// map.set(i,tab[tabIndex].slice(i,pageNum*pageSize))
			//每次只取最后一个
			if(list[0]){
				tabData={
					list:list,
					total:total,
					pageNum:i+1,
					isShow:i<num-1?true:false
				}	
			}
			
		}
	}else{
		tabData = {
			list:tab[key],
			total:total,
			pageNum:1,
			isShow:false
		}
	}
	return tabData
	// let promise=new Promise((resolve,reject)=>{
		
	// })
}

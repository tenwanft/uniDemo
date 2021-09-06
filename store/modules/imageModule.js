 const imageModule={
	state: {
		imgList:[]
	},
	  mutations: { 
		  changeImg(state,params){
			  state.imgList=params
		  }
	  },
	  actions: { 
		  changeImg(context,agruments ){
		  // 可在里面做异步操作去改变mutations的值
		   console.log(agruments,'===')
			} 
	  },
	  // getters: {
			// img:state=>state.imgList
	  // }
}
export default imageModule
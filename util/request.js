import { url } from "@/common/common"
import { header } from './httpconfig.js'
export const getRequest = (api,data,callback)=>{
	uni.request({
		method:"GET",
		url:url+api,
		data:data,
		dataType:'json',
		header: header,
		success: (res) => {
			callback(res)
		},
		fail:(err)=>{
			console.log(err)
		}
	})
}
export const postRequest=(api,data,callback)=>{
	
}
import storage from '@utils/storage'
import qs from 'qs'
import G from "./global"
import store from '../store/index'
import AES from './utils/AES'

const getCode = () => {
	let urlParams = new URLSearchParams(window.location.search);
	let code = urlParams.get("code");
	return code
}

let Fly = require("flyio/dist/npm/wx")
let fly = new Fly
let log = console.log

// 请求配置选项
// {
//   headers:{}, //http请求头，
//   baseURL:"", //请求基地址
//   timeout:0,//超时时间，为0时则无超时限制
//   //是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
//   parseJson:true,
//   withCredentials:false //跨域时是否发送cookie
// }

fly.config.headers = {
	"User": storage.getToken(),
	// "Content-Type": "application/x-www-form-urlencoded"
}
fly.config.baseURL = G.baseURL

//添加请求拦截器
fly.interceptors.request.use((request) => {
	log(`发起请求：path:${request.url}，baseURL:${request.baseURL}`)
	
	let token = storage.getToken()
	// baseURL,  //请求的基地址
	// body, //请求的参数
	// headers, //自定义的请求头
	// method, // 请求方法
	// timeout, //本次请求的超时时间
	// url, // 本次请求的地址
	// withCredentials //跨域请求是否发送第三方cookie

	//给所有请求添加自定义header
	request.headers["X-Tag"] = "flyio";
	//打印出请求体
	log(request.body)
	//终止请求
	//var err=new Error("xxx")
	//err.request=request
	//return Promise.reject(new Error(""))
	
	request.body = qs.stringify(request.body)
	//可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
	return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
	(response) => {
		// data, //服务器返回的数据
		// engine, //请求使用的http engine(见下面文档),浏览器中为本次请求的XMLHttpRequest对象
		// headers, //响应头信息
		// request //本次响应对应的请求信息

		//只将请求结果的data字段返回
		return response.data
	},
	(err) => {
		// message:"Not Find 404", //错误消息
		//  status:404, //如果服务器可通，则为http请求状态码。网络异常时为0，网络超时为1
		//  request:{...}, //对应的请求信息
		//  response:{}, //响应信息
		//  engine:{}//请求使用的http engine(见下面文档),浏览器中为本次请求的XMLHttpRequest对象

		// 0	网络错误
		// 1	请求超时
		// 2	文件下载成功，但保存失败，此错误只出现node环境下
		// >=200	http请求状态码

		//发生网络错误后会走到这里
		//return Promise.resolve("ssss")
	}
)

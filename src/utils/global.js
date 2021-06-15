/**
 * auth:kuroky
 * 全局变量文件
 */

// <!-- 发版只需更改参数即可 ↓ -->   

// const version = 'test'
// const version = 'uat'
const version = 'prod'

// <!-- 注释或者手动赋值 ↑ -->




const environment = {
	test: {
		/*********************测试环境配置项********************/
		/*********************测试环境配置项********************/
	},
	uat: {
		/*********************Nfalseike uat配置项********************/
		/*********************Nike uat配置项********************/
	},
	prod: {
		/*********************Nike prod配置项********************/
		/*********************Nike prod配置项********************/
	}
}


const default_config = {
	openid: '', //验证值
	user_info: {},
	iphonex: false, //iphonex 尺寸屏幕
	language: null, //语言文件
	timer: null, //定时器
	time_thanks: null, //定时器
	code_timer: null, //定时器
	bg_music_manage: null, //背景音乐

	rposition: 30,

	new_msg_count: 0,
	img_version: '1113'
}

const output = {
	...environment[version],
	...default_config
}

export default output

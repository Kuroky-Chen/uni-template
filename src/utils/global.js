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
		is11: false,
		isShowFunction: true,
		isOKTA: false, //是否开启okta
		isWaterMark: false, //是否开启水印
		env: 'test',
		baseURL: 'http://service.msofttek.com:52187', //配置地址
		baseURL1: 'http://service.msofttek.com:52188', //配置地址
		CropID: 'wwdd97fd1e79e3bdd5',
		AgentID_exChange: '1000003',
		AgentID_Topic: '1000004',
		AgentID_News: '1000005',
		AgentID_Album: '1000007',
		AgentID_Events: '1000008',
		AgentID_Sports: '1000009',
		AgentID_ME: '1000012',
		AgentID_VOTING: '1000010',
		AgentID_Engagement: '1000011',
		AgentID_Learn: '1000015',
		AgentID_Onboarding: '1000021',
		AgentID_FirstThirtyDays: '1000020',
		AgentID_FAQ: '1000022',
		AgentID_Offboarding: '1000023',
		oktaURL: 'http://localhost:8080',
		oss_endpoint: 'oss-cn-shanghai.aliyuncs.com',
		oss_accessKeyId: 'LTAI4G7T9e7Aws6FzbMmKNEn',
		oss_accessKeySecret: '40BJbsq3NmWI62r0zDrQcfsiBXOkBx',
		oss_bucket: 'swoosh-non-cn-shanghai',
		oss_folderkey: 'ueditorfolder',
		/*********************测试环境配置项********************/
	},
	uat: {
		/*********************Nfalseike uat配置项********************/
		isShowFunction: true,
		is11: false,
		isOKTA: true, //是否开启okta
		isWaterMark: true, //是否开启水印
		env: 'prod',
		baseURL: 'https://gcwechatworkuat.nike.com/api', //API配置地址
		CropID: 'ww93f0a4322240deca',
		AgentID_exChange: '1000008',
		AgentID_Topic: '1000009',
		AgentID_News: '1000005',
		AgentID_Album: '1000011',
		AgentID_Events: '1000012',
		AgentID_Sports: '1000004',
		AgentID_ME: '1000007',
		AgentID_VOTING: '1000014',
		AgentID_Engagement: '1000013',
		AgentID_Learn: '1000015',
		AgentID_Onboarding: '1000020',
		AgentID_FirstThirtyDays: '1000021',
		AgentID_FAQ: '1000022',
		AgentID_Offboarding: '1000023',
		oktaURL: 'http://localhost:8080',
		oktaURL: 'https://gcwechatworkuat.nike.com',
		oss_endpoint: 'oss-cn-shanghai.aliyuncs.com', //'oss-cn-shanghai-internal.aliyuncs.com';                                   
		oss_accessKeyId: 'LTAI4G7T9e7Aws6FzbMmKNEn',
		oss_accessKeySecret: '40BJbsq3NmWI62r0zDrQcfsiBXOkBx',
		oss_bucket: 'swoosh-non-cn-shanghai',
		oss_folderkey: 'ueditorfolder',
		/*********************Nike uat配置项********************/
	},
	prod: {
		/*********************Nike prod配置项********************/
		isShowFunction: true,
		is11: false,
		isOKTA: true, //是否开启okta
		isWaterMark: true, //是否开启水印
		env: 'prod',
		baseURL: 'https://gcwechatwork.nike.com/api', //API配置地址
		CropID: 'ww4e5bd7f1fead139b',
		AgentID_exChange: '1000004',
		AgentID_Topic: '1000005',
		AgentID_News: '1000006',
		AgentID_Album: '1000007',
		AgentID_Events: '1000008',
		AgentID_Sports: '1000009',
		AgentID_ME: '1000010',
		AgentID_VOTING: '1000011',
		AgentID_Engagement: '1000012',
		AgentID_Learn: '1000013',
		AgentID_Onboarding: '1000017',
		AgentID_FirstThirtyDays: '1000018',
		AgentID_FAQ: '1000019',
		AgentID_Offboarding: '1000020',
		oktaURL: 'https://gcwechatwork.nike.com',
		oss_endpoint: 'oss-cn-shanghai.aliyuncs.com', // 'oss-cn-shanghai-internal.aliyuncs.com',                                   
		oss_accessKeyId: 'LTAI4GD8gbgRoz9vNKcWdHeJ',
		oss_accessKeySecret: 'JUEkfbiPt2mDrWHNKf6FoEQRvMu2aK',
		oss_bucket: 'swoosh-prd-cn-shanghai',
		oss_folderkey: 'ueditorfolder',
		/*********************Nike prod配置项********************/
	}
}


const default_config = {
	preview_User:'preview@nike.com',
	preview_Authorization:'F2B1D76AC3FB7624C482310E0949B73E178478A191F3C757F3397B28845989AD',
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

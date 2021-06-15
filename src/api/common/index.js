import http from '@util/http'

/***************************************************************************
 * common
 */

// example
export const example_get = data => {
	return http.get('/api/example', data)
}

export const example_post = data => {
	return http.post('/api/example', data)
}

export const example_upload = data => {
	return http.upload('/api/example', data)
}

export const example_download = data => {
	return http.download('/api/example', data)
}

// Fly下载文件的原理是将选项 responseType 设为“stream”，然后fly在接收数据时就会将响应流传递给上层，然后再读取、保存，所以我们也可以用如下方式达到同样的效果：
// http.get("/Fly/v.png",null,{
//     responseType:"arraybuffer"
// }).then(d=>{
//   //d.data 为ArrayBuffer实例
// })

// 注：在浏览器中时 responseType 值可为 "arraybuffer" 或"blob"之一。在node下只需设为 "stream"即可。
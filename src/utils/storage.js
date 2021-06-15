const TokenKey = 'TokenKey'
const OktaKey = 'OktaKey'
const refreshKey = 'refreshKey'

export default {
	set(key, value) {
		uni.setStorageSync(key, value);
		localStorage.setItem('local' + key, JSON.stringify(value))
	},
	get(key) {
		let datas = uni.getStorageSync(key) || JSON.parse(localStorage.getItem('local' + key))
		return datas;
	},
	remove(key) {
		uni.removeStorageSync(key)
		localStorage.removeItem('local' + key)
	},
	clear() {
		uni.clearStorageSync()
		localStorage.clear()
		sessionStorage.clear()
	},
	setToken(token, expireday) {
		let expiredays = new Date().getTime() + (expireday ? expireday : 86400000)
		uni.setStorageSync(TokenKey, {
			token: token,
			expiredays: expiredays
		});
		let local = {
			token: token,
			expiredays: expiredays
		}
		localStorage.setItem('local' + TokenKey, JSON.stringify(local))
	},
	getToken() {
		let datas = uni.getStorageSync(TokenKey) || JSON.parse(localStorage.getItem('local' + TokenKey));
		if (!!datas) {
			let now = new Date().getTime()
			if (!!datas.expiredays && datas.expiredays > now) {
				return datas.token
			} else {
				uni.removeStorageSync(TokenKey)
				localStorage.removeItem('local' + TokenKey)
			}
		}
		return null;
	},
	clearToken() {
		uni.removeStorageSync(TokenKey)
		uni.removeStorageSync(OktaKey)
		uni.removeStorageSync(refreshKey)
	},
	setOkTA(okta, expireday) {
		let expiredays = new Date().getTime() + (expireday ? expireday : 86400000)
		uni.setStorageSync(OktaKey, {
			okta: okta,
			expiredays: expiredays
		});
		let local = {
			okta: okta,
			expiredays: expiredays
		}
		localStorage.setItem('local' + OktaKey, JSON.stringify(local))
	},
	getOkTA() {
		let datas = uni.getStorageSync(OktaKey) || JSON.parse(localStorage.getItem('local' + OktaKey));
		if (!!datas) {
			let now = new Date().getTime()
			if (!!datas.expiredays && datas.expiredays > now) {
				return datas.okta
			} else {
				uni.removeStorageSync(OktaKey)
				localStorage.removeItem('local' + OktaKey)
			}
		}
		return null;
	},
	setRefresh(refreshokta, expireday) {
		let expiredays = new Date().getTime() + (expireday ? expireday : 86400000)
		let refreshoktaTime = new Date().getTime() + 72000000
		this.set('refreshoktaTime', refreshoktaTime)
		uni.setStorageSync(refreshKey, {
			refreshokta: refreshokta,
			expiredays: expiredays
		});
		let local = {
			refreshokta: refreshokta,
			expiredays: expiredays
		}
		localStorage.setItem('local' + refreshKey, JSON.stringify(local))
	},
	getRefresh() {
		let datas = uni.getStorageSync(refreshKey) || JSON.parse(localStorage.getItem('local' + refreshKey));
		if (!!datas) {
			let now = new Date().getTime()
			datas.expiredays = this.get('refreshoktaTime')
			if (!!datas.expiredays && datas.expiredays > now) {
				return datas.refreshokta
			} else {
				uni.removeStorageSync(refreshKey)
				localStorage.removeItem('local' + refreshKey)
			}
		}
		return null;
	},
	setLocal(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	},
	getLocal(key) {
		return JSON.parse(localStorage.getItem(key));
	},
	removeLocal(key) {
		localStorage.removeItem(key);
	},
	setCookie(c_name, value, expiredays) {
		let exdate = new Date()
		exdate.setDate(exdate.getDate() + expiredays)
		document.cookie = c_name + "=" + escape(value) +
			((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
	},
	getCookie(c_name) {
		if (document.cookie.length > 0) {
			let c_start = document.cookie.indexOf(c_name + "=")
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1
				let c_end = document.cookie.indexOf(";", c_start)
				if (c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end))
			}
		}
		return ""
	}
}

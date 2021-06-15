import CryptoJS from 'crypto-js';

export default {
	testKEY: this.generatekey(32), //32位
	testIV: this.generatekey(16), //16位

	//随机生成指定数量的16进制key
	generatekey(num) {
		let library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let key = "";
		for (var i = 0; i < num; i++) {
			let randomPoz = Math.floor(Math.random() * library.length);
			key += library.substring(randomPoz, randomPoz + 1);
		}
		return key;
	},

	//加密
	Encrypt(str) {
		var key = CryptoJS.enc.Utf8.parse(this.testKEY);
		var iv = CryptoJS.enc.Utf8.parse(this.testIV);
		var encrypted = '';
		var srcs = CryptoJS.enc.Utf8.parse(str);
		encrypted = CryptoJS.AES.encrypt(srcs, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		return encrypted.ciphertext.toString();
	},
	//解密
	Decrypt(str) {
		var key = CryptoJS.enc.Utf8.parse(this.testKEY);
		var iv = CryptoJS.enc.Utf8.parse(this.testIV);
		var encryptedHexStr = CryptoJS.enc.Hex.parse(str);
		var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
		var decrypt = CryptoJS.AES.decrypt(srcs, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
		return decryptedStr.toString();
	}

}

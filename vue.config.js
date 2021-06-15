"use strict";
const path = require("path");

function resolve(dir) {
	return path.join(__dirname, dir);
}

const name = "uni-template";

module.exports = {
	// 路径别名
	configureWebpack: {
		name: name,
		resolve: {
			alias: {
				"@": resolve("src"),
				"@api": resolve("src/api"),
				"@d": resolve("src/directive"),
				"@f": resolve("src/filters"),
				"@component": resolve("src/components"),
				"@img": resolve("src/assets/images"),
				"@css": resolve("src/styles"),
				"@util": resolve("src/utils"),
				"@pages": resolve("src/app"),
				"@i18n": resolve("src/assets/i18n"),
			},
		},
	},
	// 发布时删除console
	chainWebpack: (config) => {
		// 发行或运行时启用了压缩时会生效
		config.optimization.minimizer('terser').tap((args) => {
			const compress = args[0].terserOptions.compress
			// 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
			compress.drop_console = true
			compress.pure_funcs = [
				'__f__', // App 平台 vue 移除日志代码
				// 'console.debug' // 可移除指定的 console 方法
			]
			return args
		})
	}
};

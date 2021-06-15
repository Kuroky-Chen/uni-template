import Vue from 'vue'
import App from './App'
import store from '@/store'
import * as filters from '@f' // global filters
import zh from '@i18n/zh.js';
import en from '@i18n/en.js';
import GlobalLoading from './components/GlobalLoading/GlobalLoading'

// register global loading
let globalLoading = Vue.component('GlobalLoading', GlobalLoading)

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

// 引入并使用uview
import uView from "uview-ui";
Vue.use(uView);

// 引入并使用vue-i18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 构造i18n对象
const i18n = new VueI18n({
	// 默认语言，这里的local属性，对应message中的zh、en属性
	locale: 'zh',
	// 引入语言文件
	messages: {
		// 这里的属性名是任意的，您也可以把zh设置为cn等，只是后续切换语言时
		// 要标识这里的语言属性，如：this.$i18n.locale = zh|en|zh|xxx
		'zh': zh, // 这里为上面通过import引入的语言包
		'en': en,
	}
})

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n

// register global utility filters
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

const app = new Vue({
	i18n,
	store,
	...App
})

// 有些东西，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用

app.$mount()

document.body.appendChild(new globalLoading().$mount().$el)

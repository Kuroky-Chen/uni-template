<script>
	import './index.css'
	import {
		pageIndexSetting
	} from './setting.js'
	export default {
		// #ifdef H5
		data() {
			return {
				before: '',
				afterstart: '',
				isBack: false,
				isImg: false
			};
		},
		onLaunch: function() {
			// 监听浏览器返回按钮
			window.addEventListener("popstate", (e) => {
				this.isBack = true;
			}, false);
			this.equipSetting();
			this.show()
			this.$router.beforeEach((toPage, fromPage, next) => {
				this.isImg = false
				if (toPage.meta.pageIndex == 8 || toPage.path == '/preview-image' || fromPage.path ==
					'/preview-image') {
					next();
					this.isImg = true
				}
				let type = toPage.meta.pageIndex >= fromPage.meta.pageIndex;
				this.before = type ? 'animation-before' : 'animation-before2';
				this.afterstart = type ? 'animation-afterstart' : 'animation-afterstart2';
				setTimeout(this.hide(next));
			})
			this.$router.afterEach(() => {
				this.isBack = false
				setTimeout(this.show, 50)
			});
		},
		methods: {
			equipSetting() {
				this.$router.options.routes.forEach((item, index) => {
					pageIndexSetting.forEach(page => {
						page.path === item.meta.pagePath ?
							item.meta.pageIndex = page.index :
							''
					})
				});
			},
			hide(callback) {
				setTimeout(() => {
					this.before = this.isBack ? 'animation-before2' : this.before;
					this.afterstart = this.isBack ? 'animation-afterstart2' : this.afterstart;

					const classList = document.querySelector('uni-page').classList
					if (!this.isImg) classList.add(this.before, 'animation-leave')
					classList.remove('animation-show')
					setTimeout(() => {
						classList.remove(this.before, 'animation-leave')
						callback && callback();
					}, 300);
				}, 20)
			},
			show() {
				this.onShowClick()
				// if (this.isShow()) {
				// 	this.onShowClick()
				// } else {
				// 	// do something
				// }
			},
			onShowClick() {
				const classList = document.querySelector('uni-page').classList
				if (!this.isImg) classList.add(this.afterstart, 'animation-before')
				setTimeout(() => {
					if (this.isImg) {
						classList.add('animation-show')
					} else {
						classList.add('animation-enter', 'animation-after', 'animation-show')
					}
					setTimeout(() => {
						classList.remove('animation-before', 'animation-after',
							'animation-enter', this
							.afterstart)
					}, 300)
				}, 20);
			},
			isShow() {
				let flag = false
				const path = window.location.href
				let whiteList = ['pages/offboard/qrcode', 'preview=1', '/coupon/', 'pages/clause/index', 'pages/404/index',
					'u-avatar-cropper'
				]
				// const OpenOffBoardingPower = storage.get('OpenOffBoardingPower')
				// if (!!OpenOffBoardingPower && OpenOffBoardingPower == 1) {
				// 	whiteList.push('pages/offboard/index')
				// 	storage.remove('OpenOffBoardingPower')
				// }
				whiteList.forEach(item => {
					if (path.includes(item)) flag = true
				})
				if (this.isImg) flag = true
				return flag
			}
		},

		// #endif
	}
</script>

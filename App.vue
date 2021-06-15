<script>
	import storage from './src/utils/storage'
	import pageAnimation from './components/Michael-pageAnimationPlus'
	
	export default {
		mixins: [pageAnimation],
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success(res) {
					console.log(res)
					storage.set('myPhone', res)
					if (res.platform == "ios") {
						storage.set('model', 'ios')
					}
					if (res.platform == "android") {
						storage.set('model', 'android')
					}
				}
			})
		},
		onShow: function() {
			console.log('App Show')
			if (storage.get("store")) {
				this.$store.replaceState(Object.assign({}, this.$store.state, storage.get("store")))
			}
		},
		onHide: function() {
			storage.set("store", this.$store.state)
			console.log('App Hide')
		},
		globalData: {
			publicDatas: {},
			// getApp().globalData.publicDatas
		}
	}
</script>
<style>
	@import 'src/styles/font.css';
</style>
<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import '@css/common.scss';
</style>

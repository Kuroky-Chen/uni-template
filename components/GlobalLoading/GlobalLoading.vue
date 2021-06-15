<template>
	<view class='cc-global' v-show='isLoading'>
		<view>Loading...</view>
	</view>
</template>

<script>
	export default {
		name: "GlobalLoading",
		data() {
			return {

			};
		},
		computed: {
			isLoading() {
				return this.$store.state.globalLoading
			}
		},
		created() {
			this.$store.commit('set_loading', false)
		}
	}
</script>

<style scoped lang="scss">
	.cc-global {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #FFFFFF;
		z-index: 588888;
	}
</style>

<template>
	<view class='container-box' @touchmove.stop.prevent="moveStop">
		<view>
			
		</view>
		
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			moveStop() {},
		},
		onLoad(options) {
		
		},
		onShow() {
		
		}
	}
</script>

<style scoped lang="scss">
	.container-box{
		background-color: #FFFFFF;
	}
</style>

<template>
	<view>
		<text>这是第2页</text>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapGetters({
				imgList:'imgList'
			})
		},
		onShow() {
			console.log(this.$store.state.imageModule)
			// console.log(this.$store.getters)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

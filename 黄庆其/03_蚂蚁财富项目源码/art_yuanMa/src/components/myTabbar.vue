<template>
	<van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
		<van-tabbar-item to="/Home" icon="home-o">发现</van-tabbar-item>
		<van-tabbar-item to="/optional" icon="sign">自选</van-tabbar-item>
		<van-tabbar-item to="/Community" icon="friends-o">社区</van-tabbar-item>
		<van-tabbar-item to="/User" icon="user-circle-o">资产</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	export default {
		data() {
			return {
				// active:0
			}
		},
		mounted() {
			console.log(this.$route)
		},
		computed: {
			active: {
				get() {
					switch (this.$route.path) {
						case '/home':
							return 0;
						case '/optional':
							return 1;
						case '/Community':
							return 2;
						case '/User':
							return 3;
						
						default:
							break;
					}
				},
				set() {},

			},
		},
		
	}
</script>

<style>
	
</style>

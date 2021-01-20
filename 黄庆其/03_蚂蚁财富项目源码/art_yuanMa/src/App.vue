<template>
	<div id="app">
		<router-view />
		<myTabbar v-if="$route.meta.ifShowTabbar"/>
	</div>
</template>

<script>
	import myTabbar from '@/components/myTabbar.vue'
	export default {
		components:{
			myTabbar
		}
	}
</script>
<style>
/* 	.content{
		background-color: #E6E6E6;
	} */
</style>

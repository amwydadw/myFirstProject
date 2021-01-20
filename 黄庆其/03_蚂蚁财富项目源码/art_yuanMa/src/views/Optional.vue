<template>
	<div id="app">
		<!-- 自选 -->
		<div class="header">
			<!-- amw自选 -->
			<div class="headerTop">
				<div class="market">市场</div>
				<div class="headerCenter">
					<div class="left">股票</div>
					<div class="right">基金</div>
				</div>
				<div class="icon">
					<div>
						<van-icon name="circle" />
					</div>
				</div>
			</div>
		</div>
		<optionalTemplate></optionalTemplate>
		<!-- <router-view /> -->
	</div>
</template>

<script>
	import optionalTemplate from "../components/optional/optionalTemplate.vue"
	export default{
		components:{
			optionalTemplate
		}
	}
</script>

<style scoped>
	.header {
		background-color: #3e70f7;
		height: 80px;
		padding: 0 3%;
	}
	
	.header .market {
		width: 25%;
		padding: 3px 0;
		color: #fff;
	
	}
	
	.headerTop {
		display: flex;
		/* justify-content: center; */
		padding: 40px 0 0 0;
		margin: 0 0;
		font-size: 16px;
	}
	
	.header .icon {
		display: flex;
		width: 25%;
		padding: 3px 0;
		justify-content: flex-end;
	}
	
	.header .icon>div {
		padding: 5px;
	}
	
	.headerCenter {
		display: flex;
		border: #C7C9CF solid 1px;
		margin: auto;
		/* width: 33.4%; */
		border-radius: 8px;
	
	
	}
	
	.headerCenter .left {
		color: #fff;
		padding: 3px 5px;
		background-color: blue;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}
	
	.headerCenter .right {
		color: #fff;
		padding: 3px 5px;
	}
</style>

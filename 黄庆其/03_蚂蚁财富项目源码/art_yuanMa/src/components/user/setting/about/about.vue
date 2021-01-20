<template>
	<div>
		<div class="header">
			<van-row type="flex" justify="space-between">
				<van-col class="back" span="8">
						<van-icon size="22" v-on:click="back" name="arrow-left" />
				</van-col>
				<van-col span="8">
					<div class="title">
						关于
					</div>
				</van-col>
				<van-col span="8"></van-col>
			</van-row>
		</div>
		<div class="cell_box">
			<div class="logo">
				<img src="../../../../assets/home.png" alt="">
				<div>版本号1.0.0.0</div>
			</div>
			<van-cell is-link>
				<!-- 使用 title 插槽来自定义标题 -->
				<template #title>
					<span class="custom-title">反馈</span>
				</template>
			</van-cell>
			<van-cell is-link>
				<!-- 使用 title 插槽来自定义标题 -->
				<template #title>
					<span class="custom-title">去评分</span>
				</template>
			</van-cell>
			<van-cell is-link>
				<!-- 使用 title 插槽来自定义标题 -->
				<template #title>
					<span class="custom-title">欢迎页</span>
				</template>
			</van-cell>
			<van-cell is-link>
				<!-- 使用 title 插槽来自定义标题 -->
				<template #title>
					<span class="custom-title">服务协议</span>
				</template>
			</van-cell>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
		    back(){
		        this.$router.go(-1);//返回上一层
		    },
		},
	}
</script>

<style scoped>
	.header {
		background-color: #3e70f7;
		color: white;
		padding: 10px 0;
	}

	.back {
		display: flex;
		align-items: center;
		/* margin-left: 10px; */
	}

	.title {
		text-align: center;

		font-size: 18px;

	}

	.cell_box .van-cell {
		margin: 0;
		padding: 8px 3%
			/* ; */
	}

	.cell_box .logo {
		text-align: center;
		margin: 5% 0;
	}
</style>

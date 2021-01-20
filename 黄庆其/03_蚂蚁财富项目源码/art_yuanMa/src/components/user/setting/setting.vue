<template>
	<div>
		<div class="header">
			<van-row type="flex" justify="space-between">
				<van-col class="back" span="8">
						<van-icon size="22" v-on:click="back" name="arrow-left" />
				</van-col>
				<van-col span="8">
					<div class="title">
						设置
					</div>
				</van-col>
				<van-col span="8"></van-col>
			</van-row>
		</div>
		<div class="cell_box">
				<van-cell is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
					<router-link to="/safety"><span class="custom-title">账户与安全</span></router-link>
						<!-- <van-tag type="danger">标签</van-tag> -->
					</template>
				</van-cell>
				<van-cell is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
					<router-link to="/paySetting"><span class="custom-title">支付设置</span></router-link>
						<!-- <van-tag type="danger">标签</van-tag> -->
					</template>
				</van-cell>
				<van-cell is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<router-link to="/privacy"><span class="custom-title">隐私</span></router-link>
						<!-- <van-tag type="danger">标签</van-tag> -->
					</template>
				</van-cell>
				<van-cell is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<router-link to="/currency"><span class="custom-title">通用</span></router-link>
						<!-- <van-tag type="danger">标签</van-tag> -->
					</template>
				</van-cell>
				<van-cell is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<router-link to="/about"><span class="custom-title">关于</span></router-link>
						<!-- <van-tag type="danger">标签</van-tag> -->
					</template>
				</van-cell>
		</div>
		<div>
			<van-button type="default" size="large">退出登陆</van-button>
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
	.custom-title {
		margin-right: 4px;
		vertical-align: middle;
	}

	/* .search-icon {
		font-size: 16px;
		line-height: inherit;
	} */
	.cell_box .van-cell{
		margin: 0;
		padding: 8px 3%;
		
	}
	.cell_box span.custom-title{
		color: black;
	}
</style>

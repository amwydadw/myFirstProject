<template>
	<div class="content">
		<div class="header">
			<van-row type="flex" justify="space-between">
				<van-col class="back" span="8">
					<van-icon size="22" v-on:click="back" name="arrow-left" />
				</van-col>
				<van-col span="8">
					<div class="title">
						隐私
					</div>
				</van-col>
				<van-col span="8"></van-col>
			</van-row>
		</div>
		<div class="cell_box">
			<div class="titleText">自选股</div>
			<div class="text">设置谁可以看我的自选股</div>
			<div>
				<van-cell>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">所有人</span>
					</template>
				</van-cell>
				<van-cell>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">关注的人</span>
					</template>
				</van-cell>
				<van-cell>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">不显示</span>
					</template>
					<template #right-icon>
						<van-icon name="search" class="search-icon" />
					</template>
				</van-cell>
			</div>
		</div>
		<div class="cell_box">
			<div class="titleText">通过支付宝关系搜索到我</div>
			<div>

				<van-cell>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">打开</span>
					</template>
				</van-cell>
				<van-cell>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">关闭</span>
					</template>
					<template #right-icon>
						<van-icon name="search" class="search-icon" />
					</template>
				</van-cell>
			</div>
		</div>
		<div class="cell_box">
			<div class="titleText">个性化推荐</div>
			<div class="text">将保留根据风险定级内容干预</div>
			<div>

				<van-cell>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">打开</span>
					</template>
				</van-cell>
				<van-cell>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">关闭</span>
					</template>
					<template #right-icon>
						<van-icon name="search" class="search-icon" />
					</template>
				</van-cell>
				<van-cell is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">蚂蚁财富隐私权政策</span>
					</template>
				</van-cell>
			</div>
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

	.cell_box>.titleText {
		padding: 6px 3%;
		font-size: 12px;
		font-weight: 300;
	}

	.cell_box>.text {
		padding: 0 3%;
		font-size: 10px;
		color: #c7c9cf;

	}

	.cell_box .van-cell {
		margin: 0;
		padding: 8px 3%
			/* ; */
	}
</style>

<template>
	<div class="content">
		
		<div class="header">
			<van-row type="flex" justify="space-between">
				<van-col class="back" span="8">
						<van-icon size="22"v-on:click="back" name="arrow-left" />
				</van-col>
				<van-col span="8">
					<div class="title">
						账户安全
					</div>
				</van-col>
				<van-col span="8"></van-col>
			</van-row>
		</div>
		<div class="cell_box">
			<van-cell value="账户安全险免费升级" is-link>
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">账户安全险</span>
			  </template>
			</van-cell>
			<van-cell value="amw*****w@163.com" >
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">邮箱</span>
			  </template>
			</van-cell>
			<van-cell value="181*******0059" >
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">手机号</span>
			  </template>
			</van-cell>
			<div>如需更改手机号，请在支付宝App的"设置"-"手机号"中更改</div>
			<van-cell is-link>
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">密码设置</span>
			  </template>
			</van-cell>
			<van-cell  is-link>
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">解锁设置</span>
			  </template>
			</van-cell>
			<div>设置后进入资产页需要使用面容ID|指纹|手势解锁</div>
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
	.cell_box{
		padding: 0 3%;
	}
	.cell_box .van-cell{
		margin: 0;
		padding: 10px 0;
	}
	/* .cell_box div{
		margin: 6px 3%;
	} */
</style>

<template>
	<div>
		<div class="header">
			<van-row type="flex" justify="space-between">
				<van-col class="back" span="8">
						<van-icon size="22" v-on:click="back" name="arrow-left" />
				</van-col>
				<van-col span="8">
					<div class="title">
						资金保障
					</div>
				</van-col>
				<van-col span="8"></van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
			methods:{
			    back(){
			        this.$router.go(-1);//返回上一层
			    },
			},
	};
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
</style>

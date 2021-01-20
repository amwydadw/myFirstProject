<template>
	<div class="content">
		<div class="header">
			<div>
				<van-row type="flex" justify="space-between">
					<van-col class="back"  v-on:click="back" span="6">
						<van-icon size="22" name="arrow-left" />
					</van-col>
					<van-col class="titleBox" span="12">
						<div class="title">余额宝</div>
						<div class="text">广发天天利货币E</div>
					</van-col>
					<van-col class="icon" span="3">
						<van-icon name="circle" />
					</van-col>
					<van-col class="icon" span="3">
						<van-icon name="circle" />
					</van-col>
				</van-row>
			</div>
			<div class="profitBox">
				<div class="yesterday">昨日收益(元)</div>
				<div class="money">10.00</div>
				<div class="allMoney">
					<div>总金额****元</div>
					<van-icon name="circle" />
				</div>
			</div>
			<div class="conversion">
				<van-row>
					<van-col span="8">
						<div>累计收益(元)</div>
						<div>*****</div>
					</van-col>
					<van-col span="8">
						<div>万份收益(元)</div>
						<div>0.7045</div>
					</van-col>
					<van-col span="8">
						<div>七日年化(%)</div>
						<div>2.5840</div>
					</van-col>
				</van-row>
			</div>
		</div>
		<div class="manageBox">
			<van-collapse v-model="activeNames">
				<van-collapse-item icon="search" title="资金管理" name="1">
					<div class="manage">
						<div class="item">
							<div class="title">工资理财</div>
							<div class="text">从银行卡定时把资金转入余额宝</div>
						</div>
						<div class="item">
							<div class="title">还贷管家</div>
							<div class="text">从余额宝定时把资金转出到银行卡自动还款</div>
						</div>
						<div>
							<div class="title">余额自动转入</div>
							<div class="text">从余额自动把资金转入余额宝</div>
						</div>
					</div>
				</van-collapse-item>
				<van-collapse-item icon="search" title="心愿储蓄" name="2">
					<van-row>
						<van-col span="8">
							<div class="wish">
								<img src="../../../assets/home.png" alt="">
								<div>更新我的装备</div>
							</div>
						</van-col>
						<van-col span="8">
							<div class="wish">
								<img src="../../../assets/home.png" alt="">
								<div>给TA的礼物</div>
							</div>
						</van-col>
						<van-col span="8">
							<div class="wish">
								<img src="../../../assets/home.png" alt="">
								<div>许下心愿</div>
							</div>
						</van-col>
					</van-row>
					<div class="wishManage">
						<div>心愿管理</div>
						<van-icon name="arrow" />
					</div>
				</van-collapse-item>
			</van-collapse>
		</div>
		<div class="footer">
			余额宝对应货币基金销售服务由网商银行提供
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeNames: ['1'],
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
	.content {
		font-size: 12px;
		color: #fff;
	}

	.header {
		background-color: #eb5f3b;
	}

	.header .back {
		display: flex;
		align-items: center;
	}

	.header .titleBox {
		text-align: center;
	}

	.header .title {
		font-size: 16px;
	}

	.header .titleBox .text {
		font-size: 10px;
	}

	.header .icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.profitBox {
		text-align: center;
	}

	.profitBox .yesterday {
		margin: 5% 0;
	}

	.profitBox .money {
		margin: 5% 0;
	}

	.profitBox .allMoney {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 5% 0;
	}

	.conversion {
		text-align: center;
		background-color: #ec6842;
		padding: 2% 0;
	}

	.manageBox .title {
		font-size: 14px;
		color: #323233;
	}

	.manage .text {
		font-size: 12px;
		font-weight: 300;
	}

	.manage .item {
		border-bottom: 1px solid #f5f9fc;
		padding: 0 0 2% 0;
		margin: 0 0 2% 0;
	}

	.manageBox .wish {
		text-align: center;
	}
	.manageBox .wishManage{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2% 0 0 0;
		color: #323233;
	}
	.footer{
		text-align: center;
	color: #dcdcdc;	
	margin: 4% 0 0 0;
	}
</style>

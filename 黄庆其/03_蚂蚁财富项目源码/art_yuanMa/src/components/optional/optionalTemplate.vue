<template>
	<div class="content">
		<!-- <div class="header">
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
		</div> -->
		<div class="information">
			<div class="title"><img src="../../assets/ziXuanZiXun.png" alt=""></div>
			<div class="text">白酒被狠砸，还有跨年行情吗</div>
		</div>
		<div class="ranking">
			<div class="all">
				<div>
					全部
				</div>
				<div class="icon">
					<van-icon name="circle" />
				</div>
			</div>
			<div>
				<div>
					最新价
				</div>
				<div class="icon">
					<van-icon name="circle" />
				</div>
			</div>
			<div class="increase">
				<div>
					涨跌幅
				</div>
				<div class="icon">
					<van-icon name="circle" />
				</div>
			</div>
		</div>
		<div class="sharePrices">
			<div class="item">
				<div class="title">
					<div>贵州茅台</div>
					<div>600519.SH</div>
				</div>
				<div class="num">1830.34</div>
				<div class="percentage">-0.61%</div>
			</div>
		</div>
		<div class="sharePrices">
			<div class="item">
				<div class="title">
					<div>贵州茅台</div>
					<div>600519.SH</div>
				</div>
				<div class="num">1830.34</div>
				<div class="percentage">-0.61%</div>
			</div>
		</div>
		<div class="sharePrices">
			<div class="item">
				<div class="title">
					<div>贵州茅台</div>
					<div>600519.SH</div>
				</div>
				<div class="num">1830.34</div>
				<div class="percentage">-0.61%</div>
			</div>
		</div>
		<div class="addSharePrices">+ 添加股票</div>
		<div class="statement">行情由第三方提供，详见使用声明</div>
		
		<!-- <div class="scroll-wrap">
			<ul class="scroll-content" :style="{ top }">
				<li v-for="item in prizeList2">{{item.name}}</li>
			</ul>
		</div> -->

	</div>
</template>

<script>
</script>

<style scoped>
	.information {
		display: flex;
		align-items: center;
		padding:0.0625rem 3%;
	}

	.information .title {
		padding: 10px 0 0 0;
	}

	.information .title>img {
		height: 20px;
	}

	.information .text {
		padding: 3px 0 0 5px;
		color: #c7c9cf;
	}

	.ranking {
		display: flex;
		padding: 4px 3%;
		background-color: #e6e6e6;

	}

	.ranking .all {
		justify-content: flex-start;
	}

	.ranking .increase {
		justify-content: flex-end;
	}

	.ranking>div {
		display: flex;
		width: 33.3%;
		justify-content: center;
	}

	.ranking .icon {
		display: flex;
		align-items: center;
		width: 10px;
		/* justify-content: flex-start; */
	}

	.sharePrices {
		display: flex;
		width: 94%;
		padding: 10px 3% 0 3%;
		background-color: #ffffff;
		font-size: 12px;
	}

	.sharePrices>.item {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}

	/* .sharePrices .title {} */
	.sharePrices .percentage {
		background-color: #fd7433;
		padding: 5px 10px;
	}

	.addSharePrices {
		text-align: center;
		padding: 10px 0;
		margin-top: 5px;
		border-top: #E1E4E7 1px solid;
		font-size: 16px;
	}

	.statement {
		text-align: center;
		padding: 10px 0;
		margin-top: 5px;
		color: #c7c9cf;
	}
</style>

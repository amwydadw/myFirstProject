<template>
	<div class="content">
		<div class="header">
			<!-- 社区模版 -->
			<van-search v-model="value" show-action shape="round" background="#3e70f7" placeholder="请输入搜索关键词">
				<template #action>
					<div class="information">
						<van-icon name="chat-o" badge="9" size="25px" />
					</div>
				</template>
			</van-search>
		</div>
		<div class="navRow">
			<div class="navIcon">
				<img src="../../assets/home.png" alt="">
				<div>大咖</div>
			</div>
			<div class="navIcon">
				<img src="../../assets/home.png" alt="">
				<div>专栏</div>
			</div>
			<div class="navIcon">
				<img src="../../assets/home.png" alt="">
				<div>看点</div>
			</div>
			<div class="navIcon">
				<img src="../../assets/home.png" alt="">
				<div>短视频</div>
			</div>
		</div>
		<van-tabs v-model="active" animated swipeable>
			<van-tab title="热门">
				<div class="hot">
					<img class="headerTitle" src="../../assets/community/banner.png" alt="">
					<div>
						<div>
							<div class="hotHeader">
								<van-row type="flex">
									<van-col span="3">
										<div><img src="../../assets/home.png" alt=""></div>
									</van-col>
									<van-col span="17">
										<div class="uName">是空小白啊</div>
									</van-col>
									<van-col span="4">
										<div class="follow">
											<div class="icon">+</div>
											<div class="text">关注</div>
										</div>
									</van-col>
								</van-row>
							</div>
							<div class="contentTitle">1.4操作：白酒、医疗、新能源车、半导体等操作策略</div>
							<div class="hotCenter">
								<van-row>
									<van-col span="14">注:个人投资风格较为稳健，投资策略为价值投资，适合刚开始投资，追求稳定收益的用户。每个人风险承受能力不同，个人意见仅供参考，不构成投资建议哟!</van-col>
									<van-col span="10"><img src="../../assets/community/img1.png" alt=""></van-col>
								</van-row>
							</div>
							<div class="hotBottm">
								<van-row type="flex">
									<van-col span="12"class="time" >28分钟前</van-col>
									<van-col span="4" class="spot">...</van-col>
									<van-col span="4">
										<div class="iconBox">
											<!-- <img src="../../assets/home.png" alt=""> -->
										<van-icon size="20" name="good-job-o" />
											<div>189</div>
										</div>
									</van-col>

									<van-col span="4">
										<div class="iconBox">
											<!-- <img src="../../assets/home.png" alt=""> -->
											<van-icon size="20" name="more-o" />
											<div>189</div>
										</div>
									</van-col>
								</van-row>
							</div>
						</div>
					</div>
				</div>
				
				<div class="hot">
					<!-- <img class="headerTitle" src="../../assets/community/banner.png" alt=""> -->
					<div>
						<div>
							<div class="hotHeader">
								<van-row type="flex">
									<van-col span="3">
										<div><img src="../../assets/home.png" alt=""></div>
									</van-col>
									<van-col span="17">
										<div class="uName">是空小白啊</div>
									</van-col>
									<van-col span="4">
										<div class="follow">
											<div class="icon">+</div>
											<div class="text">关注</div>
										</div>
									</van-col>
								</van-row>
							</div>
							<div class="contentTitle">1.4操作：白酒、医疗、新能源车、半导体等操作策略</div>
							<div class="hotCenter">
								<van-row>
									<van-col span="14">注:个人投资风格较为稳健，投资策略为价值投资，适合刚开始投资，追求稳定收益的用户。每个人风险承受能力不同，个人意见仅供参考，不构成投资建议哟!</van-col>
									<van-col span="10"><img src="../../assets/community/img1.png" alt=""></van-col>
								</van-row>
							</div>
							<div class="hotBottm">
								<van-row type="flex">
									<van-col span="12"class="time" >28分钟前</van-col>
									<van-col span="4" class="spot">...</van-col>
									<van-col span="4">
										<div class="iconBox">
											<!-- <img src="../../assets/home.png" alt=""> -->
										<van-icon size="20" name="good-job-o" />
											<div>189</div>
										</div>
									</van-col>
				
									<van-col span="4">
										<div class="iconBox">
											<!-- <img src="../../assets/home.png" alt=""> -->
											<van-icon size="20" name="more-o" />
											<div>189</div>
										</div>
									</van-col>
								</van-row>
							</div>
						</div>
					</div>
				</div>
			</van-tab>
			
			
			<van-tab title="讨论区">
				<div>
					<van-cell title="我的讨论区" is-link value="自选&持有" />
				</div>
			</van-tab>
			<van-tab title="关注">
				<div class="followBox">
					<img src="../../assets/community/null.png" alt="">
					<div>您还没有关注的人</div>
					<div>赶紧去社区关注牛人吧!</div>
				</div>
			</van-tab>
			<!-- <van-tab title="标签 4">内容 4</van-tab> -->
		</van-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				active: 0,
			};
		},
	};
</script>

<style scoped>
	.header {
		background-color: #3e70f7;
		/* height: 50px; */
	}

	.header .information {
		display: flex;
		align-items: center;
		padding-right: 6px;
	}

	.navRow {
		display: flex;
		padding: 0.3125rem 0;
	}

	.navRow img {
		width: 30px;
		height: 30px;
	}

	.navIcon {
		width: 25%;
		text-align: center;
		font-weight: 300;
	}

	/* 热门 */
	.hot{
		margin: 0 3%;
	}
	.hot>.headerTitle {
		width: 100%;
		/* heigh; */
	}
	.hotHeader .van-row{
		display: flex;
		align-items: center;
	}
	
	.hot .contentTitle{
		font-size: 16px;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		margin: 10px 0;
	}
	.hotHeader .follow{
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: #EDF7FF 1px solid; */
		background-color: #edf7ff;
		color: #51B3EE;
		padding: 3px 0;
	}
	.hotHeader .uName{
		font-size: 14px;
		font-weight: 500;
	}

	.hotCenter img {
		width: 96%;
		padding-left:4% ;
	}
	.hotCenter{
		font-size: 12px;
		
	}
	.hotBottm{
		margin-top: 10px;
		font-size: 12px;
	}
.hotBottm .time{
	color: #D1D4D4;
}
	.hotBottm .spot{
		font-size: 20px;
		font-weight: 700;
		text-align: center;
		margin-top: -2%;
		color: #D1D4D4;
	}

	.hotBottm .iconBox {
		display: flex;
		align-items: center;
	}
	.followBox{
		text-align: center;
		/* background-color: #DCDCDC; */
		height: 100vh;
		width: 100%;
		background-color: #FAFAFA;
		font-size: 16px;
	}
	.followBox>div{
		margin-bottom: 5%;
		color: #B4B4B4;
	}
	
</style>

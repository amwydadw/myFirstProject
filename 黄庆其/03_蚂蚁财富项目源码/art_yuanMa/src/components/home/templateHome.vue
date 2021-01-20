<template>
	<div class="content">
		<div class="header">
			<div class="headerSearch">
				<div class="logoBox">
					<img class="headerLogo" src="../../assets/home.png" alt="">
					<div>
						<!-- 我能帮您诊断风险，陪你挑选产品 -->
						<div class="scroll-wrap">
							<ul class="scroll-content" :style="{ top }">
								<li v-for="item in prizeList2">{{item.name}}</li>
							</ul>
						</div>
					</div>
					<div class="headerIcon">
						<img class="headerLogo" src="../../assets/home.png" alt="">
					</div>
				</div>

			</div>
		</div>
		<div class="navBox  ">

			<div class="navRow">
				<div class="navIcon">
					<img src="../../assets/home.png" alt="">
					<router-link to="/balance"><div>余额宝</div></router-link>
				</div>
				<div class="navIcon">
					<img src="../../assets/home.png" alt="">
					<div>理财</div>
				</div>
				<div class="navIcon">
					<img src="../../assets/home.png" alt="">
					<div>基金</div>
				</div>
				<div class="navIcon">
					<img src="../../assets/home.png" alt="">
					<div>黄金</div>
				</div>
			</div>
			<div class="navRow">
				<div class="navIcon">
					<img src="../../assets/home.png" alt="">
					<div>高端理财</div>
				</div>
				<div class="navIcon">
					<img src="../../assets/home.png" alt="">
					<div>帮你投</div>
				</div>
				<div class="navIcon">
					<img src="../../assets/home.png" alt="">
					<div>股票</div>
				</div>
				<div class="navIcon">
					<img src="../../assets/home.png" alt="">
					<div>财富号</div>
				</div>
			</div>
		</div>
		<div class="information">
			<div class="title">
				<div>行情动态</div>
				<div>财富直通车</div>
			</div>
			<div class="shares">


				<div class="scroll-wrap">
					<ul class="scroll-content" :style="{ top }">
						<li v-for="item in prizeList">
							<div class="leftTop">
								<div>
									<div>{{item.title}}</div>
									<div class="space"> </div>
									<span class="fontColor">{{item.num1}}</span>
								</div>
								<div>
									<span class="fontColor">{{item.num2}}</span>
									<div class="space"> </div>
									<span class="fontColor">{{item.num3}}</span>
									<div class="space"> </div>
									<span>{{item.tip}}</span>
								</div>
							</div>
						</li>
					</ul>
				</div>

			</div>
			<div class="plate">
				<div class="plateLeft">
					<div>热门板块</div>
					<div class="plateItem">
						<div>航空装备</div>
						<div class="fontColor">+6.85%</div>
					</div>
					<div class="plateItem">
						<div>电源设备</div>
						<div class="fontColor">+6.85%</div>
					</div>
				</div>
				<div class="plateRight">
					<div>热门话题</div>
					<div class="plateItem">
						<div>#五毛钱的股票</div>
					</div>
					<div class="plateItem">
						<div>#牛年有牛市吗？</div>
					</div>
				</div>
			</div>
		</div>
		<div class="investment ">
			<van-tabs>
				<van-tab v-for="(item,index) in investment" :key="index" :title="item.title">
					<div class="content">{{item.title}}</div>
				</van-tab>
			</van-tabs>
		</div>
		<div class="realTimeInfo ">
			<van-tabs>
				<van-tab v-for="(item,index) in realTimeInfo" :key="index" :title="item.title">
					<div class="content">{{item.title}}</div>
				</van-tab>
			</van-tabs>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				prizeList: [{
						title: "A股|创业板指",
						num1: "2842.97",
						num2: "+31.22",
						num3: "+1.11%",
						tip: "已收盘",
					},
					{
						title: "A股|创业板指",
						num1: "2842.97",
						num2: "+31.22",
						num3: "+1.11%",
						tip: "已收盘",
					},
					{
						title: "A股|创业板指",
						num1: "2842.97",
						num2: "+31.22",
						num3: "+1.11%",
						tip: "已收盘",
					}

				],
				activeIndex: 0,
				prizeList2: [{
						name: "我能帮您诊断风险，陪你挑选产品"
					},
					{
						name: "我能帮您诊断风险，陪你挑选产品"
					},
					{
						name: "我能帮您诊断风险，陪你挑选产品"
					}
				],
				activeIndex2: 0,
				investment: [{
						title: "博取更高"
					},
					{
						title: "投资顺风车"
					},
					{
						title: "攒点金子"
					},
					{
						title: "安稳理财"
					},
					{
						title: "精选组合"
					},
					{
						title: "稳中进取"
					},
					{
						title: "人气定投"
					}
				],
				realTimeInfo: [{
						title: "快讯"
					},
					{
						title: "推荐"
					},
					{
						title: "问答"
					},
					{
						title: "基金"
					},
					{
						title: "短视频"
					}
				],

			}
		},
		computed: {
			top() {
				return -this.activeIndex * 100 + '%';
			}
		},

		mounted() {
			setInterval(_ => {
				if (this.activeIndex < this.prizeList.length - 1) {
					this.activeIndex += 1;
				} else {
					this.activeIndex = 0;
				}
			}, 3000)

		}

	}
</script>

<style scoped src='./homeCss.vue'>
	/* @import '@./homeCSS'; */
</style>

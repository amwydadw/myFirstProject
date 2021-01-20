<template>
	<div class="content">
		<div class="header">
			<div class="headerSetting">
				<router-link to="/setting">
					<div class="headerSet">设置</div>
				</router-link>
				</router-view>
				<div class="headerNotice">通知</div>
			</div>

		</div>
		<div class="login_modal" v-if="showModal">
			<!-- <div class="login_modal_form">

			</div> -->
			<div class="bg" @click='closeModal'></div>
			<van-form @submit="onSubmit">
				<van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
				<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
				<div style="margin: 16px;">
					<van-button round block type="info" native-type="submit">提交</van-button>
				</div>
			</van-form>
		</div>
		<div class="userInfo">
			<div class="headerBox  ">
				<div class="photo"><img :src="avatar" alt=""></div>
				<div class="userTitle">
					<div class="userName">
						<div class="name" @click="openModal">{{userLonginName}}</div>
						<van-icon name="arrow" />
					</div>
					<div class="text">黄庆其理财的第xxx天</div>
				</div>
				<div class="userRight">
					<div class="money">我的三笔钱</div>
					<span class="moneyRigth">提保障</span>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="userBottom">
				<van-icon name="circle" />
				<div class="text">本月跑赢了多少用户？去看看</div>
			</div>

		</div>
		<div class="userWealth">
			<div class="wealthTitle">
				<div class="money">
					<div class="userM">我的资产</div>
					<van-icon name="circle" />
				</div>
				<div class="sefa">
					<div class="sefaLeft">
						<router-link to="/fundGuarantee">账户安全险免费升级</router-link>
					</div>
					<van-icon name="circle" />
				</div>
			</div>
			<div class="allMoney">
				<div>
					<div class="allTitle">总资产</div>
					<div class="money">xxxxx</div>
				</div>
				<div class="profit">
					<div class="title">昨日收益</div>
					<div class="money">xxxxx</div>
				</div>
			</div>
			<div class="balance">
				<div class="left">
					<div class="balanceTitle">余额</div>
					<div class="text">xxx</div>
				</div>
				<div class="right">
					<div>
						<div class="balanceTitle">余额</div>
						<div class="text">xxx</div>
					</div>
					<div class="text">xxx</div>
				</div>
			</div>
			<div class="balance">
				<div class="left">
					<div class="balanceTitle">理财产品</div>
					<div class="text">收益稳健</div>
				</div>
				<div class="right">
					<div>
						<div class="balanceTitle">基金</div>
						<div class="text">xxx</div>
					</div>
					<div class="text">xxx</div>
				</div>
			</div>
			<div class="balance">
				<div class="left">
					<div class="balanceTitle">黄金</div>
					<div class="text">1元起买</div>
				</div>
				<div class="right">
					<!-- <div>
						<div class="balanceTitle">余额</div>
						<div class="text">xxx</div>
					</div>
					<div class="text">xxx</div> -->
				</div>
			</div>
		</div>
		<div class="guarantee ">
			<div class="title">我的保障</div>
			<div class="Insurance">保险</div>
			<div class="family">1位家人保障中</div>
		</div>
		<div class="bottomCell">
			<van-cell title="账单" icon="shop-o" is-link>
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<template #left-icon>
				</template>
			</van-cell>
			<van-cell title="银行卡" icon="shop-o" is-link>
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<template #left-icon>
				</template>
			</van-cell>
			<van-cell title="卷包" icon="shop-o" is-link>
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<template #left-icon>
				</template>
			</van-cell>
			<van-cell title="活动" icon="shop-o" is-link>
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<template #left-icon>
				</template>
			</van-cell>

		</div>
		<div>
			<van-cell title="账单" icon="shop-o" is-link>
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<template #left-icon>
				</template>
			</van-cell>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				showModal: false,
				userLonginName: "请先登陆",
				avatar: require("@/assets/home.png"),
			};
		},
		methods: {
			onSubmit(values) {

				console.log('submit', values["用户名"]);
				console.log('submit', values["密码"]);
				getUserName: values["用户名"];
				getPwd: values["密码"];


			},
			//关闭模态框
			closeModal() {
				this.showModal = false;
			},
			openModal() {
				console.log(this.userLonginName);

				if (this.userLonginName != "请先登陆") {
					return;
				} else {
					this.showModal = true;
				}

			}
			// 如果账号等于181,密码等于amw则加载新的头像和更改用户名
		},
	};
</script>

<style src="./userCss.vue" scoped>

</style>

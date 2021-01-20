<style scoped>
	.content{
		font-size: 12px;
	}
	/* 头部 */

	.header {
		background-color: #3e70f7;
		height: 3.75rem;
		/* height: 200px; */
	}

	.headerSetting {
		display: flex;
		justify-content: flex-end;
		padding-top: 1.25rem;
		margin: 0 3%;
	}

	.headerSetting div {
		margin: 0 0.1875rem;
	}

	/* 头部结束 */
	/* 用户头像 */

	.userInfo {
		width: 94%;
		background-color: #fff;
		border-radius: 0.3125rem;
		margin: -1.5625rem 3% 0.3125rem 3%;
		border: #e1e4e7 solid 0.01875rem;
	}

	.login_modal {
		width: 100%;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;

	}
	.login_modal>.bg{
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
	}

	.login_modal>.van-form {
		width: 90%;
		/* margin: 40vh auto 0; */
		padding: 10px;
		box-sizing: border-box;
		background-color: #fff;
		position: absolute;
		left:50%;
		margin-left: -45%;
		top: 40vh;
	}

	/* .login_modal_form{
	} */

	.headerBox {
		height: 1.875rem;
		padding: 0.3125rem 0 0 0;
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		position: relative;
	}

	.headerBox .photo {
		margin: 0.3125rem;
	}

	.userName {
		display: flex;
		align-items: center;

	}

	.userRight .money {
		font-size: 0.375rem;
	}

	.userRight .moneyRigth {
		background-color: #efffd2;
		color: #FF7F50;
		padding: 0.0625rem;
		margin: 0.25rem;
		font-size: 0.1875rem;
		border-radius: 0.1875rem;
	}

	.userName>.name {
		font-size: 0.5rem;
	}

	.userName>div {
		margin: 0 0.125rem 0 0;
	}

	.userRight {
		display: flex;
		align-items: center;
		position: absolute;
		right: 5px;
	}

	.userBottom {
		display: flex;
		align-items: center;
		border-top: #f5f9fc solid 0.025rem;
		margin: 0.125rem 0.1875rem;
	}

	.userBottom .van-icon-circle::before {
		/* content: '\F030'; */
		margin: 0.3125rem;
	}

	.userTitle>.text {
		font-weight: 300;
	}

	/* 用户头像结束*/
	/* 资产 */
	.userWealth,
	.guarantee {
		border: #e1e4e7 solid 0.01875rem;
		width: 90%;
		margin: 3%;
		border-radius: 0.3125rem;
		padding: 2%;
	}

	.wealthTitle {
		display: flex;
		justify-content: space-between;
		padding: 0.3125rem 0;
		border-bottom: #f5f9fc solid 0.0025rem;
	}

	.wealthTitle .sefa {
		display: flex;
		align-items: center;
	}

	.wealthTitle .sefa>div {
		margin: 0 0.1875rem;
	}

	.wealthTitle .money {
		display: flex;
		align-items: center;
	}

	.wealthTitle .userM {
		margin-right: 0.1875rem;
		font-size: 0.5rem;
	}

	.userWealth .allMoney {
		border-bottom: #f5f9fc solid 0.0025rem;
		padding: 0.3125rem 0;
		display: flex;
		justify-content: space-between;
	}

	.userWealth .profit {
		margin: 0 0.3125rem;
		font-size: 0.375rem;
		font-weight: 300;
	}

	.userWealth .allTitle {
		font-size: 0.4375rem;
		font-weight: 300;
	}

	.allMoney .money {
		font-size: 0.625rem;
	}

	.userWealth .balance {
		display: flex;
		justify-content: space-between;
	}

	.userWealth .balance>.left {
		border-right: #f5f9fc solid 0.0025rem;
		border-bottom: #f5f9fc solid 0.0025rem;
		width: 50%;
		padding: 0.1875rem 0;
	}

	.userWealth .balance>.right {
		display: flex;
		justify-content: space-between;
		border-bottom: #f5f9fc solid 0.0025rem;
		width: 50%;
		padding: 0.1875rem;
	}

	.balance .balanceTitle {
		font-size: 0.375rem;
		font-weight: 300;
	}

	.balance .text {
		font-size: 0.375rem;
		font-weight: 300;
		color: #c7c9cf;
	}

	/* 资产结束 */
	/* 我的保障 */

	.guarantee>.title {
		font-size: 0.5rem;
		padding: 0.3125rem 0;
		border-bottom: #f5f9fc solid 0.0025rem;
	}

	.guarantee .Insurance {
		padding: 0.1875rem 0;
	}

	.guarantee .family {
		padding: 0 0 0.1875rem 0;
		color: #c7c9cf;
	}

	/* 我的保障结束*/
	.bottomCell{
		margin: 0 3%;
	}
	.bottomCell>.van-cell{
		margin: 0;
		padding:0.1875rem 0;
	}
	
</style>

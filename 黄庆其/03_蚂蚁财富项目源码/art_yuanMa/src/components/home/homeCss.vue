<style scoped>
	/* 头部 */
	.content {
		font-size: 12px;
	}
	
	
	.header .scroll-wrap{
	  width: 200px;
	  height: 30px;
	  /* border: 1px solid blue; */
	  overflow: hidden;
	  padding: 0.125rem;
	  border: #d1d4d4 solid 0.025rem;
	  border-radius: 0.1875rem;
	  margin-left: 0.3125rem;
	  color: #fff;
	}
	
	.header .scroll-content{
	  position: relative;
	  transition: top 0.5s;
	}
	.header li{
	  line-height: 30px;
	  /* 文字超出显示省略号及强制不换行 */
	  white-space:nowrap;
	  overflow:hidden;
	  text-overflow:ellipsis;
	  /* text-align: center; */
	}

	.header {
		background-color: #3e70f7;
		height: 3.75rem;
		font-size: 0.3rem;
		padding: 0 3%;
	}

	.headerSearch {
		display: flex;
		justify-content: space-between;
		padding: 0.625rem 0.5rem 0 0.5rem;
		
		position: relative;
	}

	.headerSearch img {
		height: 0.8rem;
		width: 0.8rem;
	}

	.logoBox {
		display: flex;
		align-items: center;
		

	}
	.logoBox .headerIcon{
		position: absolute;
		right: 0.5rem;
	}

	.logoBox>div {
		/* padding: 0.125rem;
		border: #d1d4d4 solid 0.025rem;
		border-radius: 0.1875rem;
		margin-left: 0.3125rem;
		color: #fff; */
		
	}
	

	/* 头部搜索结束 */
	/* 余额导航 */
	.navBox {
		width: 94%;
		background-color: #fff;
		border-radius: 0.3125rem;
		margin: -1.5625rem 3% 0.3125rem 3%;
		border: #e1e4e7 solid 0.01875rem;
		font-size: 12px;
	}

	.navRow {
		display: flex;
		padding: 0.3125rem 0;
	}

	.navRow img {
		width: 0.5rem;
		height: 0.5rem;
	}

	.navIcon {
		width: 25%;
		text-align: center;
	}

	/* 余额导航 结束*/
	/* 行情动态 */
	.information {
		width: 94%;
		background-color: #fff;
		border-radius: 0.3125rem;
		margin: 0 3% 0.3125rem 3%;
		border: #e1e4e7 solid 0.01875rem;
	}

	.information>.title {
		display: flex;
		justify-content: space-around;
	}

	.information>.title>div {
		width: 50%;
		text-align: center;
		padding: 0.3125rem 0 0 0;
		border-radius: 0.3125rem;
	}

	.information .plate,
	.information .plateItem {
		display: flex;
	}

	.information .leftTop {
		text-align: center;
		display: flex;
	}

	.information .leftTop>div {
		width: 50%;
		display: flex;
		justify-content: space-between;
		height: 30px;
		margin: 0 2%;
	}
	.information .leftTop div{
		line-height: 30px;
	}

	.information .scroll-wrap {
		width: 100%;
		height: 30px;
		overflow: hidden;
		line-height: 30px;
		
	}

	.information .scroll-content {
		position: relative;
		transition: top 0.5s;


	}

	.information li {
		line-height: 50px;
		text-align: center;
	}

	.information .space {
		width: 0.3125rem;
		height: 0.0625rem;
		display: inline-block;
	}

	.information .plateLeft,
	.information .plateRight {
		width: 50%;
		margin: 0.3125rem 0;
		background-color: #f2f4fa;
		border-radius: 0.125rem;
		padding: 0.125rem;
		
	}

	.information .plateLeft {
		margin-left: 0.1875rem;
		margin-right: 0.0625rem;
	}

	.information .plateRight {
		margin-left: 0.0625rem;
		margin-right: 0.1875rem;
	}

	.information .plateItem {
		justify-content: space-between;
	}

	.information .fontColor {
		color: coral;
	}

	/* 行情动态结束 */
	.investment .content,
	.realTimeInfo .content {
		padding: 1% 3%;
	}
</style>

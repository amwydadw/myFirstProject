<template>
	<view class="content">
		<input type="text" value="" />
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for='(item,index) in news' :key="index" @tap='openinfo'
			 :data-newsid="item.post_id">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar" mode=""></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							<text class="left-tips">{{index+1}}</text>
							{{item.title}}
						</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: []
			};
		},
		onLoad: function() {
			uni.showLoading({
				title: "正在拼命加载中..."
			})
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res)
					const news = res.data;
					news.reverse();
					this.news=news
					uni.hideLoading()
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openinfo(e) {
				// console.log(e.currentTarget.dataset.newsid);
				const newsid = e.currentTarget.dataset.newsid;
				console.log(newsid)
				uni.navigateTo({
					url: '../info/info?newsid=' + newsid
				});
			}
		},
	}
</script>

<style>
	.uni-media-list-body {
		height: auto;
	}

	.uni-media-list-text-top {
		line-height: 1.6em;
	}

	.left-tips {
		/* border: 2rpx solid #007AFF; */
		background-color: #007AFF;
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		text-align: center;
		line-height: 50rpx;
		color: #FFFFFF;
		border-radius: 50rpx;
	}

	.uni-media-list>image {
		/* background-color: #007AFF; */
		border-radius: 100rpx;
	}
</style>

// pages/goods_detail/goods_detail.js
/* 
页面分析
1.发送请求获取数据
2.点击轮播预览大图
 2.1给轮播图绑定点击事件
 2.2调用小程序的api previewImage
3.点击加入购物车
 3.1先绑定点击事件
 3.2获取缓存中的购物车数据 数组格式
 3.3先判断当前的商品是否已经存在于购物车里
 3.4已经存在修改商品数据 执行购物车数量++ 重新反购物车数组，填充回缓存中
 3.5不存在于购物车的数组中，直接给购物车数组添加一个新元素，新元素带上购物车数量属性num重新把购物车数组填充回缓存中
 3.6弹出提示
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {}
  },
  // 商品对象
  GoodsInfo: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      goods_id
    } = options;
    // console.log(goods_id);
    this.getGoodsDetail(goods_id)
  },
  // 获取代码的详情数据
  getGoodsDetail(goods_id) {
    console.log(goods_id);
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=' + goods_id,
      success: (res) => {
        // console.log(res)
        const goodsObj = res.data.message
        this.GoodsInfo = goodsObj
        this.setData({
          // goodsObj:res.data.message,
          goodsObj: {
            goods_name: goodsObj.goods_name,
            goods_price: goodsObj.goods_price,
            // iphone部分手机，不识别webp图片格式
            // 最好找到后台 让他进行修改
            // 临时自己改 确保后台存在webp =>jpg
            goods_introduce: goodsObj.goods_introduce.replace(/\.webp/g, '.jpg'),
            pics: goodsObj.pics
          }
        })
      }
    })
  },
  // 点击轮播图 放大预览
  handlePreviewImage(e) {
    // console.log('yulan')
    // 1.先构造预览的图片数组
    const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
    // 接收传递过来的图片url
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls
    });
  },
  // 点击加入购物车
  handleCartAdd() {
    // console.log(1)
    // 1.获取缓存中的购物车，数组
    let cart = wx.getStorageSync("cart") || [];
    // 2判断商品对象是否存在于购物车数组中
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
    if (index === -1) {
      // 3不存在，第一次添加
      this.GoodsInfo.num=1;
      this.GoodsInfo.checked=true;
      cart.push(this.GoodsInfo)
    } else {
      // 4已经存在购物车数据执行num++
      cart[index].num++;
    }
    // 5把购物车重新添加回缓存中
    wx.setStorageSync("cart",cart);
    // 6弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 1500,
      // true 防止用户手抖疯狂点击按钮
      mask: true
    });
  }

})
// pages/goods_list/goods_list.js
/*备注均为学习视频需要所打上的
一、用户上滑页面事件，滚动条触底，开始加载下一页数据
1、找到滚动条触底事件
2、判断有没有下一页数据
 2.1获取到总页数 只有总页数
 总页数=Math.ceil(总条数/页容量 pagesize)
       Math.ceil(23/10)
 2.2获取到当前的码 pagenum
 2.3判断一下当前的页码是否大于等于总页数
 表示没有下一页数据


3、假如没有下一页数据 弹出一个提示
4、假如还有下一页数据则进行加载下一页数据
 4.1当前的页码++
 4.2重新发送请求
 4.3数据请求回来 要对data中的数组进行拼接 而不是全部替换

二、下拉刷新操作
 1.触发下拉刷新事件  需要在页面的json文件中开启一个配置项
 2.重置数据数组
 3.重置页码 设置为1
 4.重新发送请求
*/


import {request} from "../../request/index.js";
// es7解决async解决回调
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    goodsList: [],
  },
  // 接口要的参数
  QueryParams: {
    query: "",
    cid: "",
    pagenum: 1,
    pagesize: 10
  },
  // 标题点击事件 从子组件传过来的
  handleTabsItemChange(e) {
    // console.log(e)
    // 1获取被点击的标题索引
    const {
      index
    } = e.detail;
    // 2修改原数组
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    // 3赋值到data中
    this.setData({
      tabs
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.QueryParams.cid = options.cid;
    this.getGoodsList();
    // wx.showLoading({
    //   title: '加载中',
    // })

    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)
  },
  // 总页数
  totalPages: 1,
  // 获取商品列表数据
  async getGoodsList() {
    const res = await request({
      url: "/goods/goods_search.json",
      data: this.QueryParams
    });
    // console.log(res.data.message.total-57426);
    // 获取总页数
    const total = res.data.message.total - 57426;

    // 计算总页数
    this.totalPages = Math.ceil(total / this.QueryParams.pagesize);
    // console.log(this.totalPages);
    this.setData({
      // goodsList:res.data.message.goods
      goodsList: [...this.data.goodsList, ...res.data.message.goods]
    });
    // 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭也不会报错
    wx.stopPullDownRefresh();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log("刷新")
    // 1重置数组
    this.setData({
      goodsList: [],
    });
    //2 重置页码
    this.QueryParams.pagenum = 1;
    // 3.发送请求 
    this.getGoodsList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    // console.log("页面触底");
    if (this.QueryParams.pagenum >= this.totalPages) {
      // 没有下一页数据了
      // console.log('没有下一页数据了');
      wx.showToast({
        title: '没有下一页数据了',
      })
    } else {
      // console.log("有下一页数据");
      this.QueryParams.pagenum++;
      this.getGoodsList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
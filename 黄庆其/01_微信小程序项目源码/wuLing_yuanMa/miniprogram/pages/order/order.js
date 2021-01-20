// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderTabs: [
      {
        id: 0,
        name: "全部",
        isActive: true
      },
      {
        id: 1,
        name: "待付款",
        isActive: false
      },
      {
        id: 2,
        name: "进行中",
        isActive: false
      },
      {
        id: 3,
        name: "已完成",
        isActive: false
      },
      {
        id: 4,
        name: "已取消",
        isActive: false
      },
    ],
  },
  hanldeItemTap(e){
console.log(e.currentTarget.dataset)
const {index}=e.currentTarget.dataset;
console.log(index);
let{orderTabs}=this.data;
orderTabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
this.setData({
  orderTabs
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
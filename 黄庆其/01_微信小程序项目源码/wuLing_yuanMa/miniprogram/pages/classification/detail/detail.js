// pages/detail/detail.js
// const db = wx.cloud.database().collection("wuLingCar")
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderTabs: app.globalData.orderTabs,
    tabList: app.globalData.tabList,
    carArray: app.globalData.carArray,
    // car:app.globalData.car
  },
  hanldeItemTap(e) {
    // console.log(e.currentTarget.dataset)
    const {
      index
    } = e.currentTarget.dataset;
    // console.log(index);
    let {
      orderTabs
    } = this.data;
    orderTabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      orderTabs
    })
  },
  tabSwitch(e) {
    // console.log(e),
    const {
      index
    } = e.currentTarget.dataset;
    // console.log(index)
    let {
      tabList
    } = this.data;
    //let{tabs}=this.data;等价于let tabs=this.data.tabs;
    //循环数据
    //forEach遍历数组，遍历数组的时候修改了v,也会导致原数组被修改
    tabList.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id); /*相当于取货码，去拿匹配的数据*/
    var id = options.id;
    for (var i = 0; i < app.globalData.car.length; i++) {
      /*拿着取货码和快递都对比了一遍*/
      if (id == app.globalData.car[i].id) {
        this.setData({
          car: app.globalData.car[i]
        })
      }

    }
    console.log(this.data.car)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('所有数据渲染完成')
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
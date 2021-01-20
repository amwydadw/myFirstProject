const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        id: 0,
        name: "全部",
        isActive: true
      },
      {
        id: 1,
        name: "轿车",
        isActive: false
      },
      {
        id: 2,
        name: "SUV",
        isActive: false
      },
      {
        id: 3,
        name: "MPV",
        isActive: false
      },
      {
        id: 4,
        name: "微面",
        isActive: false
      },
      {
        id: 5,
        name: "微卡",
        isActive: false
      },
    ],
    car: app.globalData.car
  },
  //自定义事件，用来接收了子组件传递的数据
  handleItemChange(e) {
    // console.log(e)
    const {
      index
    } = e.detail;
    // console.log(index)
    let {
      tabs
    } = this.data;
    //let{tabs}=this.data;等价于let tabs=this.data.tabs;
    //循环数据
    //forEach遍历数组，遍历数组的时候修改了v,也会导致原数组被修改
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },

  toDetails(e) {
    console.log(e)
    wx.navigateTo({
      url: './detail/detail?id='+e.currentTarget.dataset.index
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log(app.globalData.car)
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
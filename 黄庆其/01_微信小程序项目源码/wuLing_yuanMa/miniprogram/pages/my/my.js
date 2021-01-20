// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "https://616d-amwydadw-z71vo-1302490479.tcb.qcloud.la/wuLingCar/my/logoBg.png?sign=943fbaf4c1311da67e9e46915aa915ef&t=1606413162",
    userName: "昵称",
    // autograph: "签名",
    login: "登陆"
  },
  handleGetUserInfo(e) {
    // console.log(e.detail.userInfo);
    var userInfo = e.detail.userInfo
    // console.log(this.data.userName)
    var userName = this.data.userName
    var avatar = this.data.avatar
    var login=this.data.login
    this.setData({
      userName: userInfo.nickName,
      avatar: userInfo.avatarUrl,
      login:"已登陆",
    })

    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
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
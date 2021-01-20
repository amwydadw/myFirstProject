// pages/TestDrive/TestDrive.js
// const db = wx.cloud.database().collection("carUserName")
// let carName = "";
// let userName = "";
// let id = "";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carArray: ['宏光MINIEV', '五菱凯捷', '五菱宏光', '五菱宏光PLUS', "五菱宏光S3", "五菱荣光小卡", "五菱之光", "五菱荣光新卡", "五菱荣光", "五菱荣光EV", "五菱宏光V", "五菱之光小卡", "五菱730"],
    // carArray:app.globalData.car,

    items: [{
        name: 'woman',
        value: '女士'
      },
      {
        name: 'man',
        value: '男士',
        checked: 'true'
      },
    ],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['广西壮族自治区', '贵港市', '桂平市'],
    customItem: '全部',
    
  },


  
  bindPickerChange(e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
    })
  },

  addCarName:function(e){
    console.log(e)
  },
  myName:function(e){
console.log(e)
  },
  myPhone:function(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.car)
    console.log(this.data.carArray)
    for (var i = 0; i < this.data.carArray.length; i++) {

    }
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
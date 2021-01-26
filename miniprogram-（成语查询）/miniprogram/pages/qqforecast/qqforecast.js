// pages/qqforecast/qqforecast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
value:"",
// qqList
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
  onChange(e) {
    this.setData({
      value:e.detail,
    });
    // console.log(this.data.value)  //直接输入搜索框内容显示后台

  },
    /**
   *获取成语名字
   */
  getName: function () {
    var startName=this.data.value;//获取成语名字
    console.log("查询的成语:"+startName)
    this.getStartMessage(startName)
  },
   /**
   *获取成语详细信息
   */
  getStartMessage: function (name) {
    var startUrL="http://v.juhe.cn/chengyu/query?&word=";
    var startkey="&key=e84e1df212036bc9d69be7b3570ea6fd";
    var that=this;
    wx.request({
      url: startUrL+name+startkey,
      success:function(res){
    console.log(res.data.result)
    that.setData({
      wordList:res.data.result,
    })
      }
    })
    console.log(this.data.wordList)
  },
})
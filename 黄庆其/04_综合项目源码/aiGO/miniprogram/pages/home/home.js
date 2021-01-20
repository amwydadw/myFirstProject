// pages/home/home.js
// 用来发送请求的广法一定要把路径写全
import {
  request
} from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义轮播图数组空数组
    swiperList: [],
    //导航数组
    // catesList: [],
    // 商品渲染数据
    floorList: [],
    tabs: [{
        id: 0,
        value: "新品",
        isActive: true
      },
      {
        id: 1,
        value: "男装",
        isActive: false
      },
      {
        id: 2,
        value: "女装",
        isActive: false
      },
      {
        id: 3,
        value: "运动",
        isActive: false
      },
      {
        id: 4,
        value: "美妆",
        isActive: false
      },
      {
        id: 6,
        value: "鞋靴",
        isActive: false
      }
    ],
    commodityList: [],
    nanZhuang: [],
    nvZhuang:[],
    motion:[],
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
    // 调用轮播数据
    this.getSwiperList();
    //调用导航数据
    this.getCateList();
    // 调用商品内容数据
    this.getFloorList();
    // 数据库
    let that = this;
    const db = wx.cloud.database().collection("aigoHome").get({
      success(res) {
        // console.log(1,res.data);
        const imagedata = res.data;
        // console.log(imagedata);
        that.setData({
          commodityList: imagedata
        })
      }
    });
    const db2 = wx.cloud.database().collection("aigoHomeNanZhuang").get({
      success(res) {
        // console.log(1,res.data);
        const imagedata = res.data;
        // console.log(imagedata);
        that.setData({
          nanZhuang: imagedata
        })
      }
    });
    const db3 = wx.cloud.database().collection("aigoHomeNvZhuang").get({
      success(res) {
        // console.log(1,res.data);
        const imagedata = res.data;
        // console.log(imagedata);
        that.setData({
          nvZhuang: imagedata
        })
      }
    });
    const db4 = wx.cloud.database().collection("aigoHomeMotion").get({
      success(res) {
        // console.log(1,res.data);
        const imagedata = res.data;
        // console.log(imagedata);
        that.setData({
          motion: imagedata
        })
      }
    })
  },
  /**
  获取轮播图数据
   */

  getSwiperList() {
    //1发送异步请求获取轮播图数据 优化的手机可以通过ES6的promise来解决这个问题
    // wx.request({
    //   url: 'https://616d-amwydadw-z71vo-1302490479.tcb.qcloud.la/aiGo/lunbo_api/lunBo.json?sign=886d727c1e7a9e355445b36c24458050&t=1610460700',
    //   success: (result) => {
    //     console.log(result.data.message)
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //   }
    // })
    request({
        url: "/lunBo.json"
      })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },
  // 获取分类导航数据
  getCateList() {
    request({
        url: "/nav.json"
      })
      .then(result => {
        this.setData({
          catesList: result.data.message
        })
      })
  },
  // 获取商品内容数据
  getFloorList() {
    request({
        url: "/louChen.json"
      })
      .then(result => {
        this.setData({
          floorList: result.data.message
        })
      })
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
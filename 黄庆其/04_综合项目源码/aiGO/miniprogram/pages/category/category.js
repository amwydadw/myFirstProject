// pages/category/category.js
// 用来发送请求的广法一定要把路径写全
import {
  request
} from "../../request/index.js";
// es7解决async解决回调
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的商品标题分类数据
    leftMenuList: [],
    // 右侧的商品内容数据
    rightContent: [],
    // 被点击的左侧菜单
    currentIndex: 0,
    // 右侧内容点击从最顶端开始显示
    scrollTop: 0,
  },
  // 分类接口的返回数据
  Cates: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /*
    0 web中的本地存储和小程序中的本地存储的区别
     0.1 写代码的方式不一样了
     web:localStorage.setItem('key',"value")localStorage.getItem('key')
     小程序中:wx.setStorageSync('key', "value"); wx。getStorageSync("key"),
     0.2：存的时候有没有做类型转换
     web: 不管存入的是什么类型的数据，最终都是会先调用toString(),把数据变成字符串再存入
     小程序：不存在类型转换的这个操作，存什么类型的数据进去，获取的时候就是什么类型的
    1先判断本地存储中有没有旧的数据
    2没有旧数据就发送新请求
    3有旧数据且没有过期则用本地存储中的旧数据
    */

    /*步骤
    1获取本地存储中的数据（小程序中也是存在地地存储技术）
    */
    const Cates = wx.getStorageSync('cates');
    //  2判断
    if (!Cates) {
      // 不存在 则发送请求数据
      this.getCates()
    } else {
      if (Date.now() - Cates.time > 100000 * 10) {
        // 重新发送请求
        this.getCates();
      } else {
        // 可以使用旧的数据
        // console.log('可以使用旧数据')
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.map(v => v.cat_name);
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent

        })
      }
    }
  },
  // 获取分类数据
  async getCates() {
    // request({
    //     url: "/cates.json"
    //   })
    //   .then(res => {
    //     // console.log(res)
    //     this.Cates = res.data.message;
    //     // 把接口的数据存入到本地存储中
    //     wx.setStorageSync('cates', {
    //       time: Date.now(),
    //       data: this.Cates
    //     })
    //     // 构造左侧的大菜单标题数据
    //     let leftMenuList = this.Cates.map(v => v.cat_name);
    //     // 构造右侧的商品数据
    //     let rightContent = this.Cates[0].children;
    //     this.setData({
    //       leftMenuList,
    //       rightContent

    //     })
    //   })

    // 1使用es7的async await来发送异步请求
    const res=await request({url:'/cates.json'})
    this.Cates = res.data.message;
        // 把接口的数据存入到本地存储中
        wx.setStorageSync('cates', {
          time: Date.now(),
          data: this.Cates
        })
        // 构造左侧的大菜单标题数据
        let leftMenuList = this.Cates.map(v => v.cat_name);
        // 构造右侧的商品数据
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent

        })
  },
  handleItemTap(e) {
    // console.log(e)
    /*
    1获取被点击的标题身上的索引
    2给data中的currentIndex赋值就可以了
    3根据不同的商品来渲染右侧的内容
    */
    const {
      index
    } = e.currentTarget.dataset;
    let rightContent = this.Cates[index].children;
    //  scrollTop:0 第次调用都把0重新赋值，达到点击菜单右侧内容顶置的效果
    this.setData({
      currentIndex: index,
      rightContent,
      scrollTop: 0
    })
  }
})
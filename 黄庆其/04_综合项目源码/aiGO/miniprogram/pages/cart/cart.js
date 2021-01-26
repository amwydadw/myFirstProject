// pages/cart/cart.js
/*
1获取用户的收货地址
 1.1绑定点击事件
 1.2调用小程序内置api 获取用户的收货地址 wx.chooseAddress
2获取用户对小程序所授予获取地址的权限状态scope
 2.1 假设用户点击获取收货地址的提示框确定 authSetting scope.address
 scope值true
2假设用户点击获取收货地址的提示框，取消
scope值false
*/
import {
  getSetting,
  chooseAddress
} from '../../utils/asyncWX';
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    address: {},
    cart: [],
    allchecked:false,
    totalPrice:0,
    totalNum:0,
  },
  onShow() {
    // 获取缓存中的收货地址信息
    const address = wx.getStorageSync('address');
    // 获取缓存中的购物车数据
    const cart = wx.getStorageSync('cart')||[];
    // 计算全选
    // const allchecked=cart.length?cart.every(v=>v.checked):false;
    let allchecked=true;
    // 总价格 总数量
    let totalPrice=0;
    let totalNum=0;
    cart.forEach(v=>{
      if(v.checked){
        totalPrice+=v.num*v.goods_price;
        totalNum+=v.num;
      }else{
        allchecked=false;
      }
    })
    // 判断数组是否为空
    allchecked=cart.length!=0?allchecked:false;
    // 给data赋值
    this.setData({
      address,
      cart,
      allchecked,
      totalNum,
      totalPrice
    })
  },
  async handleChooseAddress() {
    // 原生
    //  wx.getSetting({
    //   success:(res)=>{
    //     const scopeAddress=res.authSetting['scope.address'];
    //     if(scopeAddress===true||scopeAddress===undefined||scopeAddress===""){
    //       wx.chooseAddress({
    //         success: (result) => {
    //           console.log(result)
    //         },
    //       });
    //     }else{

    //     }
    //   }
    //  })
    // 封装
    const res1 = await getSetting();
    const scopeAddress = res1.authSetting['scope.address'];
    let address = await chooseAddress();
    address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;
    wx.setStorageSync('address', address)
  },
  // 商品选中
  handelItemChande(e){
    const goods_id=e.currentTarget.dataset.id;
    console.log(goods_id);
    
  }
})
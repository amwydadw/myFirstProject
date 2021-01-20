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
import{getSetting,chooseAddress}from '../../utils/asyncWX';
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
 data:{
   address:[]
 },
onShow(){
const address=wx.getStorageSync('address');
this.setData({
  address
})
},
  async handleChooseAddress(){
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
 const res1=await getSetting();
 const scopeAddress=res1.authSetting['scope.address'];
const address=await chooseAddress();
wx.setStorageSync('address', address)
  }
})
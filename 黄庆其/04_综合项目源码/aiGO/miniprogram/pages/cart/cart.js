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
  chooseAddress,
  showModal,
  showToast
} from '../../utils/asyncWX';
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    address: {},
    cart: [],
    allchecked: false,
    totalPrice: 0,
    totalNum: 0,
  },
  onShow() {
    // 获取缓存中的收货地址信息
    const address = wx.getStorageSync('address');
    // 获取缓存中的购物车数据
    const cart = wx.getStorageSync('cart') || [];
    /*
    // 计算全选
    const allchecked=cart.length?cart.every(v=>v.checked):false;
    let allchecked = true;
    // 总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      } else {
        allchecked = false;
      }
    })
    // 判断数组是否为空
    allchecked = cart.length != 0 ? allchecked : false;
    // 给data赋值
    this.setData({
      address,
      cart,
      allchecked,
      totalNum,
      totalPrice
    })*/
    this.setData({
      address
    });
    this.setCart(cart);
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
  handelItemChande(e) {
    // 获取被修改的商品id
    const goods_id = e.currentTarget.dataset.id;
    // console.log(goods_id);.
    // 获取购物车数组
    let {
      cart
    } = this.data;
    // 找到被修改商品对象
    let index = cart.findIndex(v => v.goods_id === goods_id);
    // 选中状态取反
    cart[index].checked = !cart[index].checked;
    /* // 把购物车数据重新设置回data中和缓存中
     wx.setStorageSync('cart', cart)
     let allchecked = true;
     // 总价格 总数量
     let totalPrice = 0;
     let totalNum = 0;
     cart.forEach(v => {
       if (v.checked) {
         totalPrice += v.num * v.goods_price;
         totalNum += v.num;
       } else {
         allchecked = false;
       }
     })
     // 判断数组是否为空
     allchecked = cart.length != 0 ? allchecked : false;
     this.setData({
       cart,
       totalPrice,
       totalNum,
       allchecked
     })*/
    this.setCart(cart);
  },
  // 设置购物车状态同时重新计算底部工具栏的数据全选、总价格、购买的数量
  setCart(cart) {

    let allchecked = true;
    // 总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      } else {
        allchecked = false;
      }
    });
    // 判断数组是否为空
    allchecked = cart.length != 0 ? allchecked : false;
    this.setData({
      cart,
      totalPrice,
      totalNum,
      allchecked
    });
    wx.setStorageSync('cart', cart);
  },
  // 商品全选功能
  handleItemAllCheck() {
    // 获取data中的数据
    let {
      cart,
      allchecked
    } = this.data;
    // 修改值
    allchecked = !allchecked;
    cart.forEach(v => v.checked = allchecked);
    this.setCart(cart);
  },
  // 商品数量加减
  async handleItemNumEdit(e) {
    // console.log(e);
    const {
      operation,
      id
    } = e.currentTarget.dataset;
    // console.log(operation,id);
    // 获取购物车数组
    let {
      cart
    } = this.data;
    // 找到需要修改的商品的索引
    const index = cart.findIndex(v => v.goods_id === id);
    // 判段是否要执行删除
    if (cart[index].num === 1 && operation === -1) {
      /* 
        // 弹窗提示
        wx.showModal({
          title: '提示',
          content: '您是否要删除？',
          success: (res) => {
            if (res.confirm) {
              cart.splice(index, 1)
              this.setCart(cart);
            } else if (res.cancel) {}
          }
        });
        */
      const res = await showModal({
        content: "您是否要删除？"
      });
      if (res.confirm) {
        cart.splice(index, 1)
        this.setCart(cart);
      }
    } else {
      // 进行修改数量
      cart[index].num += operation;
      // 设置回封闭的缓存和data中
      this.setCart(cart);
    }

  },
  // 点击结算
  async handlePay(e) {
    // console.log(e)
    // 判断收货地址
    const{address,totalNum}=this.data;
    if(!address.userName){
      await showToast({title:"您还没有选择收货地址"});
      return;
    }
    // 判断用户有没有选购商品
    if(totalNum==0){
      await showToast({title:"您还没有选购商品"});
      return;
    }
    // 以上判段均通过则跳转到支付页面
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  }
})
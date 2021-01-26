/*
promise形式getSetting
 */

export const getSetting = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      withSubscriptions: true,
      success: (result) => {
        resolve(result);
      }
    })
  })
}
export const chooseAddress = () => {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      withSubscriptions: true,
      success: (result) => {
        resolve(result);
      }
    })
  })
}
/**
*购物车页删商品弹窗
*@param {object} param0
*/
export const showModal = ({content}) => {
  return new Promise((resolve, reject) => {
    // 弹窗提示
    wx.showModal({
      title: '提示',
      content: content,
      success: (res) => {
       resolve(res);
      },
      fail:(err)=>{
        reject(err);
      }
    });
  })
}
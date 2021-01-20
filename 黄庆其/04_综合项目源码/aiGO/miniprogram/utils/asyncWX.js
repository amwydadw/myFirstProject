/*
promise形式getSetting
 */ 

export const getSetting=()=>{
  return new Promise((resolve,reject)=>{
    wx.getSetting({
      withSubscriptions: true,
      success:(result)=>{
        resolve(result);
      }
    })
  })
}
export const chooseAddress=()=>{
  return new Promise((resolve,reject)=>{
    wx.chooseAddress({
      withSubscriptions: true,
      success:(result)=>{
        resolve(result);
      }
    })
  })
}

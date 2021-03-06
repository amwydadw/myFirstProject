// 同时发送异步代码的次数
let ajaxTimes = 0;
export const request = (params) => {
  ajaxTimes++;
  // 显示加载中 效果
  wx.showLoading({
    title: '加载中',
    mask: true
  });
  // 定义公式的url
  const baseUrl = "https://616d-amwydadw-z71vo-1302490479.tcb.qcloud.la/aiGo/lunbo_api";
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      // 请求url的拼接
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        ajaxTimes--;
        if (ajaxTimes === 0) {
          // 关闭正在等待的图标
          wx.hideLoading()
        }

      }

    });
  });
}
Page({
  data: {

  },

  onLoad: function (options) {

  },

  onShow: function () {
    wx.request({
      url: 'https://URL',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        
      },
      fail: function () {
        
      },
      complete: function () {
        
      }
    })
  },

  onPullDownRefresh() {
    　　console.log('--------下拉刷新-------')
    　　wx.showNavigationBarLoading() //在标题栏中显示加载

    　　wx.request({
      url: 'https://URL',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    })
  }
})
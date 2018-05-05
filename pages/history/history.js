Page({
  data: {
    ProductShortList: [
      {
        productId: "",
        producedDate: ""
      }
    ]
  },

  onLoad: function (options) {

  },

  onShow: function () {
    wx.request({
      url: 'https://URL/Product/history',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        this.setData({
          productShortList: JSON.parse(res.data)
        })
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function () {
        //再刷新一遍更新数据
      }
    })
  },

  requireDetail: function (productId) {
    wx.navigateTo({
      url: '../detail/detail?productId'
    })
  },

  onPullDownRefresh() {
    　　console.log('--------下拉刷新-------')
    　　wx.showNavigationBarLoading() //在标题栏中显示加载

    　　wx.request({
      url: 'https://URL/Product/history',
      data: {},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        this.setData({
          productShortList: JSON.parse(res.data)
        })
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    })
  }
})
const app = getApp()
Page({
  data: {
    ProductShortList: [
      /*{
        productId: "光明牛奶",
        producedDate: "2018.5.13 12:21:39"
      },
      {
        productId: "放心牛奶",
        producedDate: "2018.5.12 22:44:02"
      },
      {
        productId: "进口牛奶",
        producedDate: "2018.5.13 08:55:07"
      }*/
    ]
  },
  object: {
    productId: '',
    producedDate: ''
  },
  onLoad: function (options) {
  },

  onShow: function () {
    var that = this
    wx.request({
      url: 'http://localhost:12494/Product/history',
      method: 'GET',
      header: { 
        //'content-type': 'application/json',
        'Authorization': `Bearer ${app.globalData.token}`},
      success: function (res) {
        console.log(res.data)
        if(res.data != null) {
          that.setData({
            productShortList: res.data
          })
        }else {
          wx.showToast({
            title: '当前没有历史查询内容',
          })
        }
        console.log(that.data.productShortList)
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function () {
        //再刷新一遍更新数据
        that.onLoad()
      }
    })
    
  },

  requireDetail: function () {
    var that = this
    wx.navigateTo({
      url: `../detail/detail?productId=${that.data.productId}`
    })
  },

  detail: function () {
  
  },
  delete: function () {
    var that = this
    wx.request({
      url: `http://localhost:12494/Product/history?productId=${that.data.productId}`,
      method: 'DELETE',
      header: {
        //'content-type': 'application/json',
        'Authorization': `Bearer ${app.globalData.token}`
      },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '已删除',
        })
      },
      fail: function (e) {
        wx.showToast({
          title: '删除失败',
        })
        console.log(e)
      },
      complete: function () {
        //再刷新一遍更新数据
      }
    })
  },

  onPullDownRefresh() {
    　　console.log('--------下拉刷新-------')
    　　wx.showNavigationBarLoading() //在标题栏中显示加载

    　　wx.request({
        url: 'http://localhost:12494/Product/history',
      data: {},
      method: 'GET',
      header: {
        //'content-type': 'application/json',
        'Authorization': `Bearer ${app.globalData.token}`
      },
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
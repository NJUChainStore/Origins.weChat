const app = getApp()
Page({
  data: {
    loading: true,

    productShortList: [
      /*{
        productId: "光明牛奶",
        produceDate: "2018.5.13 12:21:39"
      },
      {
        productId: "放心牛奶",
        produceDate: "2018.5.12 22:44:02"
      },
      {
        productId: "进口牛奶",
        produceDate: "2018.5.13 08:55:07"
      }*/
    ]
  },
  object: {
    productId: '',
    produceDate: ''
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://localhost:12494/Product/History',
      method: 'GET',
      header: {
        //'content-type': 'application/json',
        'Authorization': `Bearer ${app.globalData.token}`
      },
      success: function (res) {
        console.log(res.data)
        if (res.data != null) {
          that.setData({
            productShortList: res.data.productShortList
          })
        } else {
          wx.showToast({
            title: '当前没有历史查询内容',
          })
        }
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function () {
        that.setData({
          loading: false
        })
      }
    })
  },

  onShow: function () {
    /*
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
      }
    })*/
    
  },

  requireDetail: function (e) {
    console.log(e.currentTarget.dataset.productid)
    var that = this
    wx.navigateTo({
      url: `../detail/detail?productId=${e.currentTarget.dataset.productid}`
    })
  },

  delete: function (e) {
    var that = this
    wx.request({
      url: `http://localhost:12494/Product/History?productId=${e.currentTarget.dataset.productid}`,
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
        url: 'http://localhost:12494/Product/History',
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
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: "光明牛奶",

    ProductInfoQueryViewModelProductInfoQueryViewModel: {
      productId: '光明牛奶',
      productDetails: [{
        operator: '王小虎',
        date: '2018.5.14 09:20:41',
        detail: `天气: 气候温和湿润\n降雨量：500毫米\n地理位置：爱尔兰（53°N，8°W）\n`
      }]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //从上个页面的path获取productId
    if(options.productId != null) {
      this.setData({
        productId: options.productId
      })
    }

    //ajax获取后端product detail
    wx.request({
      url: `http://localhost:12494/Product?productId=${that.data.productId}`,
      method: 'GET',
      header: {
        //'content-type': 'application/json',
        'Authorization': `Bearer ${app.globalData.token}`
      },
      success: function (res) {
        console.log(res.data)
        //ProductInfoQueryViewModelProductInfoQueryViewModel
        that.setData({
          ProductInfoQueryViewModelProductInfoQueryViewModel:res.data
        })
        console.log(res)
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function () {
        //刷新页面
        that.onShow()
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
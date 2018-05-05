Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: "",

    ProductInfoQueryViewModelProductInfoQueryViewModel: {
      productId: '',
      productDetails: [{
        operator: '',
        date: '',
        detail: ''
      }]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从上个页面的path获取productId
    if(options.productId != null) {
      this.setData({
        productId: options.productId
      })
    }

    //ajax获取后端product detail
    wx.request({
      url: 'https://URL/Product',
      data: { "productId": productId},
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        //ProductInfoQueryViewModelProductInfoQueryViewModel
        this.setData({
          ProductInfoQueryViewModelProductInfoQueryViewModel:JSON.parse(res.data)
        })
        console.log(res)
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function () {
        //刷新页面
        onShow()
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
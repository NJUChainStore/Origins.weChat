Page({

  /**
   * 页面的初始数据
   */
  data: {
    allValue: '',
    productId: "",
    operator: "",
    productDetails: "",

    StatsModel: function(productId, operator, productDetails){
      this.productId = "",
      this.operator = "",
      this.productDetails = ""
    }
  },

  submit: function (e) {
    wx.request({
      url: 'https://URL/Product',
      data: JSON.stringify(new StatsModel(productId, operator, productDetails)),
      method: 'POST',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        //token
        console.log(res)
        wx.showToast({
          title: '添加成功',
          icon: 'sucess'
        })
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function () {
        wx.switchTab({
          url: '../scanQR/scanQR',
        })
      }
    })
  },

  reset: function () {
    this.setData({
      allValue: ''
    })
  },

  productIdInput: function (e) {
    this.setData({
      productId:e.detail.value
    })
  },

  operatorInput: function (e) {
    this.setData({
      operator:e.detail.value
    })
  },

  productDetails: function (e) {
    this.setData({
      productDetails:e.detai.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
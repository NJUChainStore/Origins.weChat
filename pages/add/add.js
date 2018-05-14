const app = getApp()
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
    var that = this
    wx.request({
      url: 'http://localhost:12494/Product',
      data: JSON.stringify({
        productId: that.data.productId, 
        operator: that.data.operator, 
        productDetails: that.data.productDetails}),
      method: 'POST',
      header: {
        'content-type': 'application/json', // 默认值 
        'Authorization': `Bearer ${app.globalData.token}`
      },
      success: function (res) {
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

  productDetailsInput: function (e) {
    this.setData({
      productDetails:e.detail.value
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
    /*
    wx.request({
      url: 'http://localhost:12494/Product',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值 
        'token': app.globalData.token
      },
      success: function (res) {

      },
      fail: function () {

      },
      complete: function () {

      }
    })*/
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
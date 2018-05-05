const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isProducer: false,
    producerDisplay: 'none',
    clientDisplay: 'block' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isProducer: app.globalData.isProducer
    })
    if(this.isProducer == true){
      this.setData({
        prducerDisplay: 'block',
        clientDisplay: 'none'
      })
    }else{
      this.setData({
        producerDisplay: 'none',
        clientDisplay: 'block'
      })
    }
  },

  scan: function (e) {
    var that = this;
    var show;  
    //调用扫码api
    wx.scanCode({
      success: (res) => {
        this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
        wx.showToast({
          title: this.show,
          duration: 5000
        })
      },    
    })
  },

  history: function () {
    wx.navigateTo({
      url: '../history/history',
    })
  },

  addData: function (){
    wx.navigateTo({
      url: '../add/add',
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
    this.setData({
      isProducer:app.globalData.isProducer
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
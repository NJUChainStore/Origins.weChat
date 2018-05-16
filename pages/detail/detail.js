const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: "光明牛奶",
    correctDate: '',

    ProductInfoQueryViewModel: {
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
        //ProductInfoQueryViewModel
        that.setData({
          ProductInfoQueryViewModel:res.data
        })
        /*
        var len = 'that.data.ProductInfoQueryViewModell.productDetails'
        var tmp = 'that.data.ProductInfoQueryViewModell.productDetails.date'
        var tmpData = 'ProductInfoQueryViewModell.productDetails.date'
        for(var i = 0;i<[len].length();i++){
          that.setData({
            [tmpData]: convertUTCTimeToLocalTime([tmp])
          })
        }
        console.log(that.data.ProductInfoQueryViewModel)
        */
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
  convertUTCTimeToLocalTime: function (UTCDateString) {
    if (!UTCDateString) {
      return '-';
    }
    function formatFunc(str) {    //格式化显示
      return str > 9 ? str : '0' + str
    }
    var date2 = new Date(UTCDateString);     //这步是关键
    var year = date2.getFullYear();
    var mon = formatFunc(date2.getMonth() + 1);
    var day = formatFunc(date2.getDate());
    var hour = date2.getHours();
    var noon = hour >= 12 ? 'PM' : 'AM';
    hour = hour >= 12 ? hour - 12 : hour;
    hour = formatFunc(hour);
    var min = formatFunc(date2.getMinutes());
    var dateStr = year + '-' + mon + '-' + day + ' ' + noon + ' ' + hour + ':' + min;
    return dateStr;
  },
  correctDate: function (e) {
    var that = this
    console.log(that.convertUTCTimeToLocalTime(e.currentTarget.dataset.date))
    this.setData({
      correctDate: that.convertUTCTimeToLocalTime(e.currentTarget.dataset.date)
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
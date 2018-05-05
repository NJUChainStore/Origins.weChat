const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isProducer: false,
    producerDisplay: 'none',
    clientDisplay: 'block',
    location: "",
    productId: "",

    ProductInfoItem: function (operator, date, detail) {
      this.product = productId;
      this.date = date;
      this.detail = detail;
    }
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
          productId: res.result,
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

        //getLocation得到地理位置信息
        getLocation()

        //ajax向后端传输
        submit()

        //跳转商品详情页
        wx.navigateTo({
          url: '../detail/detail?productId={{productId}}',
        })

      },    
    })
  },

  submit: function (){
    wx.request({
      url: 'https://URL/Product/QRcode',
      data: {"productId":productId,"location":location},
      method: 'GET',
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

  getLocation: function (){
    var that = this
    // 实例化腾讯地图API核心类
    qqmapsdk = new QQMapWX({
      key: '开发密钥（key）' // 必填
    });
    //1、获取当前位置坐标
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            that.setData({
              location: address
            })
            console.log(address)
          }
        })
      }
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
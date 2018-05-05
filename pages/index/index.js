//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello Origins!',
    userInfo: {},
    hasUserInfo: false,
    isLogin: true,
    signUp:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    username: "",
    password: ""
  },
  //事件处理函数
  bindViewTap: function() {
    console.log(app.globalData.userInfo)
    wx.showToast({
      title: "" + app.globalData.userInfo,
    })
  },
  onLoad: function (e) {
    this.setData({
      signUp: e.signUp
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  usernameInput: function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function(e) {
    //向后端发ajax请求 获取用户密码
    /*
    if (app.globalData.password == e.detail.value) {
      wx.showToast({
        title: '登录成功！',
      })
    }*/
    app.globalData.isLogin = true
    
    wx.switchTab({
      url: '../profile/profile',
    })
  },
  signUp: function(e) {
    //向后端发ajax请求 传参username password
  }
})

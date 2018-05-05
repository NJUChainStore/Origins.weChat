const app = getApp()

Page({
  data: {
    username: '',
    avatarURL: '',
    isLogin: false,
    loginDisplay: "block",
    userDisplay: "none",
    userInfo: ''
  },
   
  onLoad: function (e) {

  },

  onShow: function () {
    this.setData({
      isLogin: app.globalData.isLogin,
      userInfo: app.globalData.userInfo
    })

    if (app.globalData.isLogin == true){
      this.setData({
        loginDisplay: "none",
        userDisplay: "block"
      })
      console.log(this.loginDisplay)
    }
  },

  login: function (e){       
    wx.navigateTo({
        url: '../index/index?signUp=false',
    })
  },
  signUp: function (e){
    wx.navigateTo({
      url: '../index/index?signUp=true',
    })
  },

  welcome: function (e){
    
  }
})  
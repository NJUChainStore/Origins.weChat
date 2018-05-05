const app = getApp()

Page({
  data: {
    username: '',
    loginDisabled: "block",
  },
   
  onLoad: function (e) {
    var username = app.globalData.username
    console.log("username:" + username)
    
  },

  login: function (e){       
      wx.navigateTo({
        url: '../login/login',
      })

      this.setData({
        loginDisabled:"none"
      })
    },

  welcome: function (e){
    
  }
})  
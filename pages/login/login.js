Page({
  data: {
    phoneNumber: '',
    password: ''
  },

  //获取输入账号
  phoneNumberInput: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },

  passowrdInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  login: function (e) {
    if (this.data.phoneNumber.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      //跳转页面
/*
      wx.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 2000
      })
*/
      wx.navigateBack({
        delta: 1
      })
    }
  }
})  
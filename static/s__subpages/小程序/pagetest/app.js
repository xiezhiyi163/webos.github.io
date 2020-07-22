//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success:function(res){
        wx.setStorageSync('rpx', 750/res.windowWidth)//然后用量取的px除以这个就是实际的长度
      }
    })
    //判断用户信息存不存在，不存在就跳去登录页
    setTimeout(function(){
      if(wx.getStorageInfoSync().keys.indexOf('userInfo')==-1){
        wx.redirectTo({
          url: '/pages/logins/index',
        })
      }
    },500)
  },
  globalData: {
    userInfo: null
  }
})
//app.js

//微信登录的流程：登录-没有注册就绑手机（解密），注册直接跳返回 【 登录那里做的判断
              //登录-绑定手机-获取不到手机就输入手机号记录，否则直接跳到输入邀请码 【 绑定并获取手机那里做的判断

//下拉刷新在tapItemToCenter页面里面
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
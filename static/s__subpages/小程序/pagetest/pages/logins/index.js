// pages/login/index.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /** 登录方法 */

  getUserInfo:function(){
    wx.showLoading({
      title: '正在登录',
    })
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId，最好直接在这一步到位请求完就行，不用再进行二次请求
        // 获取用户信息
        var sFn = res2 => {
          if (res2.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res3 => {
                wx.hideLoading()
                // 可以将 res 发送给后台解码出 unionId
                // app.globalData.userInfo = res.userInfo
                wx.setStorageSync('userInfo', res3.userInfo)
                wx.redirectTo({
                  url: '/'+wx.getStorageSync('link'),
                })
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res3)
                }
              },fail:function(err){
                wx.hideLoading()
                console.log(err)
              }
            })
          }else{
            wx.showModal({
              title:'授权获取用户信息失败',
            })
          }
        }
        wx.getSetting({
          success: sFn,
          fail:function(err){
            wx.hideLoading()
          }
        })
      },
      fail:function(err){
        wx.hideLoading()
      }
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
// pages/progressType/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size: 120,
    persent: 30
  },

  //timedownonChange
  timedownonChange(e) {
    this.setData({
      timeData: {
        days:e.detail.days,
        hours:e.detail.hours,
        minutes:e.detail.minutes,
        seconds:e.detail.seconds,
      },
    });
 },

  //closeitem
  closeitem:function(e){
    const position = e.detail.position,instance = e.detail.instance;
    instance.close()//关闭item
  },

  //deleteitem
  deleteitem : function(){
    console.log(100)
  },

  //favouriteitem
  favouriteitem:function(){
    console.log(200)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    setTimeout(function () {
      _this.setData({
        persent: 60
      })
    }, 1500)
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
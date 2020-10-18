//index.js
//获取应用实例
const app = getApp()
//临时数据
const data = require('./index.TempData')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    //滚动联动需要的临时数据
    classfiySelect: "",//右边选中的那个
    leftText: data.leftdata,
    rightData:data.rightData,
    leftscrollTop:0,
    scrollflag:0,
    isScrolling:false
  },

  /**
   * 一些方法
   */
  //**监听滚动联动的函数 */
  scroll: function (e) {
    var _this = this
    if(this.data.isScrolling===true)return;
    this.data.isScrolling=true;//下面是逻辑
    var $ = wx.createSelectorQuery()
    for(var i=0;i<this.data.rightData.length;i++){
      $.select('#inToview'+this.data.rightData[i].id).boundingClientRect()      
    }
    $.exec(function(res){
      for(var i=0;i<res.length+1;i++){
        if(res[i]){
          if(res[i].top>44){
            _this.setData({
              classfiySelect:res[i-1].id.split('inToview')[1],
              rigId:'l_'+res[i-1].id.split('inToview')[1],
              leftscrollTop:'l_'+res[i-1].id.split('inToview')[1]
            })
            break;
          }
        }else{
          _this.setData({
            classfiySelect:res[i-1].id.split('inToview')[1],
            rigId:'l_'+res[i-1].id.split('inToview')[1],
            leftscrollTop:'l_'+res[i-1].id.split('inToview')[1]
          })
          break;
        }
      }
    })
    //逻辑结束
    this.data.isScrolling=false;
  },
  //求每一栏高度
  length: function (e) {
    var that = this;
    var rightData = that.data.rightData;
    for (var i = 0; i < rightData.length; i++) {
      if (rightData[i]['id'] == e) {
        return rightData[i]['frist'].length;

      }
    }
  },
  //点击左边事件
  left_list: function (e) {
    var that = this;
    var l_id = e.currentTarget.dataset.id;
    that.setData({
      classfiySelect:e.currentTarget.dataset.id,
      rigId: l_id,
    })
  },
  //写入classfiySelect
  classfiySelectSet:function(){
    this.setData({
      classfiySelect: this.data.leftText[0].id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = ''
    for(var x in this.options){
      t+=x+'='+this.options[x]+'&'
    }
    wx.setStorageSync('link', this.route+'?'+t)
    this.classfiySelectSet()
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
// pages/letters_find_where/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:300,
    list: [
      { alphabet: 'A', datas: [{ name: "风一样男子", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'B', datas: [{ name: "风一样", avater: "http://img.zcool.cn/community/01b4fa55de8e0532f875a132d6f99c.jpg@1280w_1l_2o_100sh.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'C', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'D', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'E', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'F', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'G', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'H', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'I', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'J', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'K', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'L', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'M', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'N', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'O', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'P', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'Q', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'R', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'S', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'T', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'U', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'V', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'W', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'X', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'Y', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
      { alphabet: 'Z', datas: [{ name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg" }, { name: "风一样", avater: "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" }, { name: "风一样", avater: "http://pic18.nipic.com/20120203/8215229_164952068393_2.jpg" }]},
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    setTimeout(function(){
      _this.setData({
        keyword:600
      })
    },100)
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
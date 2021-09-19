// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //*旋转轮播
    swiperindex:0,
  },

  
  // *旋转轮播图
  swiperchange(e){
    this.setData({
      swiperindex:e.detail.current
    })
  },


  /**扫码调起 */
  scans:function(){
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
        wx.showModal({
          title:res.result
        })        
      },
      fail:function(err){
        console.log(err)
      }
    })
  },

  /** canvas绘制海报 */
  canvasTest:function(){
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(function(){
      var rpx = Number(wx.getStorageSync('rpx'))
      //ctx画图
      const ctx = wx.createCanvasContext('canva');
      //ctx两个大块绘制
      ctx.save();
      ctx.fillStyle = '#333';
      ctx.fillRect(0,0,750/rpx,700/rpx);
      ctx.save();
      ctx.fillStyle = '#fff';
      ctx.fillRect(0,400/rpx,750/rpx,700/rpx);
      //ctx分块一绘制圆
      ctx.save();
      ctx.beginPath(); 
      ctx.arc(140/rpx,190/rpx,80/rpx,0,2 * Math.PI)
      ctx.strokeStyle = '#666'
      ctx.stroke()
      ctx.clip();//然后下面填充
      ctx.fillStyle = '#666';
      ctx.fillRect(60/rpx,110/rpx,160/rpx,160/rpx);//(-80,-80,*2,*2)
      ctx.closePath();
      ctx.restore();
      //ctx分块一填写文字
      ctx.save();
      ctx.fillStyle = '#666';
      ctx.fillRect(260/rpx,120/rpx,360/rpx,40/rpx);
      ctx.fillRect(260/rpx,210/rpx,400/rpx,40/rpx);
      //ctx分块二绘制scan
      ctx.save();
      ctx.drawImage('../common/img/index/bfde28e960ea902d3f0d922b7255caa9.png',(750/rpx-420/rpx)/2,450/rpx,420/rpx,420/rpx)
      //ctx分块二最底下文字输入
      ctx.save();
      ctx.setFontSize(60/rpx);
      ctx.textAlign = 'center';
      ctx.fillText('扫码有奖',750/rpx/2,980/rpx,300/rpx);
      //ctx画到画布中
      ctx.draw(true,function(){
        //存图
        wx.canvasToTempFilePath({
          canvasId:'canva',
          success:function(res){
            wx.previewImage({
              urls: [res.tempFilePath],
            })
            wx.hideLoading()
          },
          fail:function(err){
            console.log(err)
            wx.hideLoading()
          }
        })
      });
    },3000)
  },

  canvasImagedata(){
    this.canvasTest()
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
    this.canvasImagedata()
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
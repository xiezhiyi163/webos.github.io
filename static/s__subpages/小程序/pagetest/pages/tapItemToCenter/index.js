// pages/tapItemToCenter/index.js

const scui = require('../common/sc-ui/dist/sc-ui');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //win高度
    winheight:'',
    //获取rpx转换
    rpxroot:'',
    //swiper数据
    swiperindex:0,
    //下拉刷新相关数据
    sy:'',
    data: [],
    desc: '下拉刷新',//刷新提示语
    hei: 0,//刷新view高度阈值
    scrolltop: 0,//scorll-view滑动离顶部的距离
    isindrag: false//是否在下拉状态（必须要滑动到顶部才能触发）
  },
  //获取win高度
  getwinheight(){
    var that = this;
    wx.getSystemInfo({
      complete: (res) => {
        that.setData({
          winheight:res.windowHeight
        })
      },
    })
    setTimeout(this.getwinheight,500)
  },
  // 旋转轮播图
  swiperchange(e){
    this.setData({
      swiperindex:e.detail.current
    })
  },
  /*
  * 下拉刷新相关方法
  */
  start(e) {
    if(this.data.desc == '正在刷新...'){
      return;
    }
    //记录手指触摸是的y坐标
    this.setData({sy: e.touches[0].clientY})
    console.log('开始触摸 sy : ' + this.data.sy + ' scrolltop : ' + this.data.scrolltop)
  },
  move(e) {
    if(this.data.desc == '正在刷新...'){
      return;
    }
    //计算手指滑动的距离
    var delta = e.touches[0].clientY - this.data.sy
    console.log('delta : ' + delta)
    //scorll-view滑动到顶部且继续向上滑动时，走scorll-view滑动流程
    // if(this.data.hei <= 0 && delta <= 0){
    //   return
    // }
    //scorll-view已经滑动到顶部，继续下拉进入下拉状态
    if (this.data.scrolltop <= 0){
      if (this.data.isindrag == false){
        this.setData({
          isindrag: true
        })
      }
      var tempdelta = 0
      console.log('hei : ' + this.data.hei)
      if(delta > 0){//手指向下滑动
        if (this.data.hei > 50) {//触发阈值，更改状态
          this.setData({
            desc: '松开刷新'
          })
          tempdelta = this.data.hei + delta / (this.data.hei - 50)//增大下拉阻尼感
        } else {
          this.setData({
            desc: '下拉刷新'
          })
          //手指移动未到阈值，按正常滑动增加高度
          tempdelta = this.data.hei + delta
        }
      } else {//手指向上滑动
        tempdelta = this.data.hei + delta
        //刷新状态view最小为0
        if(tempdelta <= 0){
          tempdelta = 0
        }
        if (this.data.hei > 50) {
          this.setData({
            desc: '松开刷新'
          })
        }else{
          this.setData({
            desc: '下拉刷新'
          })
        }
      }
      //滑动完成设置刷新view高度
      this.setData({
        hei: tempdelta
      })
    }
    //每次滑动事件后记录y坐标
    this.setData({sy:e.touches[0].clientY})
  },
  end(e) {
    if(this.data.desc == '正在刷新...'){
      return;
    }
    var that = this;
    console.log('手指离开')
    //手指离开时，如果阈值大于等于50，则触发刷新，数据处理在这儿处理
    if(this.data.hei >= 50){
      this.setData({
        desc: '正在刷新...'
      })
      this.setData({
        hei: 50
      })
      //模拟耗时操作，2秒后恢复正常状态
      setTimeout(function () {
        that.setData({
          sy:0,
          desc: '下拉刷新',
          hei: 0,
          isindrag: false,
          scrolltop: 0
        })
        setTimeout(function(){//弥补再次刷新产生的拖动过大距离的bug
          if(that.data.hei > 50){
            that.setData({
              hei: 50
            })
          }
        },55)
      }, 2000)
    }else{//未下拉到阈值，松开时则收起刷新view
      that.setData({
        sy:0,
        desc: '下拉刷新',
        hei: 0,
        isindrag: false,
        scrolltop: 0
      })
    }
  },
  scorll(e) {
    //未进入下拉状态时，记录scorll-view滑动距离顶部的距离
    var st = e.detail.scrollTop
    console.log('滚动 st : '+st)
    if (this.data.isindrag == false){
      this.setData({
        scrolltop: st
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getwinheight()
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
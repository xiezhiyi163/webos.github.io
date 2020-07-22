// pages/dragphoto/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //拖拽部分
    hidden:true,
    flag:false,
    x:0,
    y:0,
    data:[{index:1},
      { index: 2 },
      { index: 3 },
      { index: 4 },
      { index: 5 },
      { index: 6 },
      { index: 7 },
      { index: 8 },
      { index: 9 },
      { index: 10 },
      { index: 11 },
      { index: 12 },
      { index: 13 },
    ],
    disabled: true,
    elements:[]
  },

  /**
   * 
   * 一些方法
   * 
   */

  //拖拽部分  
  touchs:function(e){//触摸开始
    const detail = e.detail;
    this.setData({
      x: e.currentTarget.offsetLeft,
      y: e.currentTarget.offsetTop
    })
    this.setData({
      hidden: false,
      flag:true
    })
    this.setData({
      beginIndex:e.currentTarget.dataset.index
    })
  },  
  touchend:function(e){//触摸结束
    if (!this.data.flag) {
      return;
    }
    const x = e.changedTouches[0].pageX
    const y = e.changedTouches[0].pageY
    const list = this.data.elements;
    let data = this.data.data
    for(var j = 0; j<list.length; j++){
      const item = list[j];
      if(x>item.left && x<item.right && y>item.top && y<item.bottom){
        const endIndex = item.dataset.index;
        const beginIndex = this.data.beginIndex;
        //向后移动
        if (beginIndex < endIndex) {
          let tem = data[beginIndex];
          for (let i = beginIndex; i < endIndex; i++) {
            data[i] = data[i + 1]
          }
          data[endIndex] = tem;
        }
        //向前移动
        if (beginIndex > endIndex) {
          let tem = data[beginIndex];
          for (let i = beginIndex; i > endIndex; i--) {
            data[i] = data[i - 1]
          }
          data[endIndex] = tem;
        }

        this.setData({
          data: data
        })
      }
    }
    this.setData({
      hidden: true,
      flag: false
    })
  },  
  touchm:function(e){//滑动
    if(this.data.flag){
      const x = e.touches[0].pageX+20//650rpx宽为基础适当调整
      const y = e.touches[0].pageY-this.data.dragwrapTopHeight
      this.setData({
        x: x - 75,
        y: y - 45
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
      //拖拽部分
      var query = wx.createSelectorQuery();
      var nodesRef = query.selectAll(".item");
      query.select('#wrap').boundingClientRect();//获取拖拽部分顶部的容器，与拖拽部分关联，防止错位
      nodesRef.fields({
        dataset: true,
        rect:true

      },(result)=>{
        this.setData({
          elements: result
        })
      }).exec(res => {
        this.setData({
          dragwrapTopHeight:res[0].height
        })
      })
      //删除测试
      setTimeout(function(){
        _this.data.data.splice(0,1)
        _this.setData({
          data:_this.data.data
        })
      },1500)
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

  },
})
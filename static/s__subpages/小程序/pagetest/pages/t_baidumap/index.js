var bmap = require('../common/baidumapSDK/bmap-wx.min.js');
var wxMarkerData = [];
Page({
  data: {
    //*baidumap*/
    BMap: '',
    keys: '广州',
    markers: [], //储存对应的地址位置信息
    latitude: '', //经度
    longitude: '', //纬度
    placeData: {}, //点击某个获取到位置信息
    //纯粹用来定位的
    markers: [],
    latitude2:'',
    longitude:''
  },
  //*baidumap方法*/
  fail: function (data) {
    wx.showModal({
      content:'地图请求失败或超时：'+data.errMsg
    })
  },
  success: function (data,type) {
    var that = this;
    wxMarkerData = data.wxMarkerData;
    if(type == 'map'){//地图定位使用
      that.setData({
        markers: wxMarkerData
      });
      if (wxMarkerData.length != 0) {
        that.setData({
          latitude: wxMarkerData[0].latitude,
          longitude: wxMarkerData[0].longitude
        });
      } else {
        that.setData({
          latitude: 22,
          longitude: 113
        });
      }
    }else{//不涉及地图，直接定位的
      var pro1 = wxMarkerData[0].address.split('省')[1]||'',pro2 = wxMarkerData[0].address.split('自治区')[1]||'',city = '',t = '';
      if(pro1){
        city = pro1.indexOf('自治州')!=-1?'自治州':pro1.indexOf('地区')!=-1?'地区':'市'
        t = pro1.split(city)[0]
      }else{
        city = pro2.indexOf('自治州')!=-1?'自治州':pro2.indexOf('地区')!=-1?'地区':'市'
        t = pro2.split(city)[0]
      }//
      that.setData({
        markers2: t,
        latitude2: wxMarkerData[0].latitude,
        longitude2: wxMarkerData[0].longitude
      });
    }
  },
  togetplaceByBaiduMap: function () {
    var that = this;
    // this.data.BMap.search({//只能搜索周边玩意
    this.data.BMap.geocoding({ //搜索地区的，不是附近的
      // "query": that.data.keys,//只能搜索周边玩意
      address: that.data.keys, //搜索地区的，不是附近的
      fail: that.fail,
      success: function(data){
        that.success(data,'map')
      },
      iconPath: '../common/img/baidumap/marker_red.png',
      iconTapPath: '../common/img/baidumap/marker_yellow.png'
    });
  },
  getplaceByBaiduMap: function () {
    var that = this;
    this.setData({
      BMap: new bmap.BMapWX({
        ak: 'h2scAu5BqOCvsuCmM4EHw8PKihSy6KXv'
      })
    })
    this.togetplaceByBaiduMap()
  }, //------
  showSearchInfo: function (data, i) {
    var that = this;
    that.data.BMap.regeocoding({ //geocoding方法时调用
      location:that.data.latitude + ',' + that.data.longitude,
      fail: that.fail,
      success: function(data){
        that.success(data,'map')
      },
      // iconPath: '../common/img/baidumap/marker_red.png',
      iconPath: '../common/img/baidumap/marker_yellow.png',
      iconTapPath: '../common/img/baidumap/marker_yellow.png'
    })
    // that.setData({//search方法调用
    //   placeData: {
    //     title: '名称：' + data[i].title + '\n',
    //     address: '地址：' + data[i].address + '\n',
    //     telephone: '电话：' + data[i].telephone
    //   }
    // });
  },
  changeMarkerColor: function (data, id) {//搜索周边的时候才使用
    var that = this;
    var markersTemp = [];
    for (var i = 0; i < data.length; i++) {
      if (i === id) {
        data[i].iconPath = "../common/img/baidumap/marker_yellow.png";
      } else {
        data[i].iconPath = "../common/img/baidumap/marker_red.png";
      }
      markersTemp[i] = data[i];
    }
    that.setData({
      markers: markersTemp
    });
  },
  makertap: function (e) { //点击改变图标并获取信息
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    // that.changeMarkerColor(wxMarkerData, id);
  },

  //*搜索地方*/

  setkeys: function (e) {
    this.setData({
      keys2: e.detail.value
    })
  },

  searchmap: function () {
    this.setData({
      keys: this.data.keys2
    })
    this.togetplaceByBaiduMap()
  },

  searchhelp: function () {
    wx.showModal({
      title: '搜索帮助',
      // content:'输入即可搜索ktv等附近地方娱乐设施',
      content: '可试着输入市区两个进行搜索',
      showCancel: false
    })
  },

  /*使用百度api直接定位，不涉及地图*/

  currentPositioning: function () {
    var that = this;
    wx.getLocation({//微信自带获取地理位置api
      type: 'wgs84',
      success: function (res) {
        var lgi = res.latitude,loi = res.longitude
        that.data.BMap.regeocoding({//通过百度地图api拿到具体位置
          location: lgi + ',' + loi,
          fail: that.fail,
          success: function(data){
            that.success(data,'posi')
          },
          iconPath: '../common/img/baidumap/marker_yellow.png',
          iconTapPath: '../common/img/baidumap/marker_yellow.png'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面挂载完成
   */
  onLoad: function () {
    this.getplaceByBaiduMap()
    this.currentPositioning()
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
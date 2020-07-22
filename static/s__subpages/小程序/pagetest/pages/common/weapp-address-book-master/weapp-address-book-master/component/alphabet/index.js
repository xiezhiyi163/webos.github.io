// component/index.js
var alphatimers = ''
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     list:{
       type:Array,
       value:""
     },
     keyword:{
       type:String,
       value:''
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    alpha: '',
    windowHeight: '',
    addBg: false,
  },

  ready:function(){
    var _this = this
    setTimeout(function(){
      console.log(_this.properties.keyword)
    },400)
    try {
      var res = wx.getSystemInfoSync();
      //每一个字母所占的高度
      this.apHeight = res.windowHeight / 26;
      this.setData({ windowHeight: res.windowHeight })
    } catch (e) {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击
    handlerAlphaTap(e) {
      clearTimeout(alphatimers)
      var _this = this
      let { ap } = e.target.dataset;
      this.setData({ alpha: ap });
      this.setData({ addBg: true });
      alphatimers = setTimeout(function(){
        _this.setData({ addBg: false });
      },1000)
    },
    //滑动
    handlerMove(e) {
      let { list } = this.data;
      this.setData({ addBg: true });
      let rY = e.touches[0].clientY;//竖向滑动的距离
      if (rY >= 0) {
        let index = Math.ceil((rY - this.apHeight) / this.apHeight);
        if (0 <= index < list.length) {
          let nonwAp = list[index];
          nonwAp && this.setData({ alpha: nonwAp.alphabet });
        }
      }
    },
    //滑动结束
    handlerEnd(e) {
      this.setData({ addBg: false });
    }
  }
})

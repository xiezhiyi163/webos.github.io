<template>
  <div>
    <div id="draggblewrap">
      <div id="draggble">
        <div v-for="(v,i) in datas" class="draggableItem">
          <p>
            <span class="dragspan" v-if="v.isshow" @mouseenter="draggble_mouseenter(i)" @mousedown="draggble_mousedown(i)">
              {{v.content}}
            </span>
          </p>
        </div>
        <i style="clear: both;display: block;"></i>
      </div>
      <div data-darghiddenwrap style="height: 0;position: relative;overflow: hidden;">
        <div id='draggableItem' class="draggableItem">
        </div>
        <span class="dragspan" id="fixeddrag" style="border: 1px solid #00C13F;">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      datas:[
        {isshow:1,content:"0"},
        {isshow:1,content:"1"},
        {isshow:1,content:"2"},
        {isshow:1,content:"3"},
        {isshow:1,content:"4"},
        {isshow:1,content:"5"},
        {isshow:1,content:"6"},
        {isshow:1,content:"7"},
      ],
      dragstart:0,
      dragflag:1,
      moveingdom:'',
      firstdragindex:0,
      lastdragindex:0,
      //
      scrollX0:'',
      scrollY0:'',
      stx:'',
      sty:'',
      h:'',
      w:'',
      oft:'',
      ofl:''
    }
  },
  methods:{
    //vuedraggbleMethods
    draggble_startFn(e,type){
      var _this = this
      _this.dragstart = 1
      _this.dragflag = 0
      //记录鼠标的开始位置,clientX为pc端拿的鼠标位置，touches是touch事件才有的
      var ev = type == 'pc'?(e||window.event):(e.targetTouches[0]||window.event.targetTouches[0])
      _this.scrollX0 = document.body.scrollLeft || document.documentElement.scrollLeft; //---
      _this.scrollY0 = document.body.scrollTop || document.documentElement.scrollTop; //---
      _this.stx = ev.pageX || (ev.clientX + _this.scrollX0)
      _this.sty = ev.pageY || (ev.clientY + _this.scrollY0)
      //
      _this.st = document.body.scrollTop || document.documentElement.scrollTop;
      _this.h = document.getElementById('draggableItem').offsetHeight
      _this.w = document.getElementById('draggableItem').offsetWidth-22
      //记录下标
      for(var i=0;i<document.querySelectorAll('.dragspan').length-1;i++){
        if(_this.datas[i].isshow == 0){
          _this.firstdragindex = i
        }
      }
      //开始移动
      document.getElementById('fixeddrag').style.position = 'fixed'
      //记录并隐藏正在拖动的那个
      _this.moveingdom = {isshow:0,content:_this.datas[_this.firstdragindex].content}
      _this.oft = document.querySelectorAll('.dragspan')[_this.firstdragindex].parentElement.offsetTop
      _this.ofl = document.querySelectorAll('.dragspan')[_this.firstdragindex].parentElement.offsetLeft

    },
    draggble_mousedown(i){
      this.firstdragindex = i
      this.draggble_startFn(window.event,'pc')
    },
    draggble_mouseenter(i){
      //前到后，替换后面然后再插入记录的后面的那个到插入的前面，然后删除原来的前面那个，替换完更新下标
      //后到前，替换前面的然后下标+1之后并追加被替换的并删除原来碰到的那个位置的+1的下标，替换完更新下标
      if(this.dragstart == 0){
        return;
      }
      this.lastdragindex = i
      if(this.lastdragindex>this.firstdragindex){//前到后
        console.log('ste')
        var t = {isshow:1,content:this.datas[this.lastdragindex].content}
        this.datas[this.lastdragindex] = this.moveingdom
        this.datas.splice(i,0,t)
        this.datas.splice(this.firstdragindex,1)
        this.datas[this.firstdragindex].isshow = 1
        this.firstdragindex = this.lastdragindex//原生的话可以在下面加个循环，刷新dom
      }else{
        console.log('ets')
        var t = {isshow:1,content:this.datas[this.lastdragindex].content}
        this.datas[this.lastdragindex] = this.moveingdom
        this.datas.splice(this.firstdragindex+1,0,t)
        this.datas.splice(this.firstdragindex,1)
        this.datas[this.firstdragindex].isshow = 1
        this.firstdragindex = this.lastdragindex
      }
    },
    draggble_moves(){
      var _this = this
      function fn2(e,type){
        if(_this.dragflag == 1){
          return
        }
        _this.datas[_this.firstdragindex].isshow = 0
        var evs = type == 'pc'?(e||window.e):(e.targetTouches[0]||window.e.targetTouches[0])
        var stxlast = evs.pageX || (evs.clientX + _this.scrollX0)
        var stylast = evs.pageY || (evs.clientY + _this.scrollY0)
        console.log(stylast-_this.sty)
        document.getElementById('fixeddrag').style.height = _this.h + 'px'
        document.getElementById('fixeddrag').style.lineHeight = _this.h + 'px'
        document.getElementById('fixeddrag').style.width = _this.w + 'px'
        document.getElementById('fixeddrag').style.opacity = 0.9
        document.getElementById('fixeddrag').style.top = (_this.oft-_this.st+1+(stylast-_this.sty))+'px'
        document.getElementById('fixeddrag').style.left = (_this.ofl+1+(stxlast-_this.stx))+'px'
        document.getElementById('fixeddrag').style.backgroundColor = 'transparent'//'#00C13F'
        document.getElementById('fixeddrag').style.pointerEvents = 'none'
      }
      document.onmousemove = function(e){
        setTimeout(function(){
          fn2(e,'pc')
        },0)
      }
      document.getElementById('draggblewrap').onmouseup = function(){
        _this.dragstart = 0
       _this.dragflag = 1
       setTimeout(function(){
          document.getElementById('fixeddrag').style.position = 'relative'
         _this.datas[_this.firstdragindex].isshow = 1
       },0)
      }
    }
  },
  mounted(){
    this.draggble_moves()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .draggableItem {
    user-select:none;
    float: left;
    width: 25%;
    height: 100px;
    margin-bottom: 20px;
  }
  .draggableItem p{
    height: 100%;
    margin: 10px 10px 0px 10px;
    border: 1px solid #108EE9;
    position: relative;
  }
  .draggableItem span{
    display: block;
    margin: 0;
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: #00C13F;
    line-height: 100px;
  }
</style>

<template>
  <div class="hello" id="hello" style="visibility: hidden;">
    <div style='height: 60px;text-align: center;line-height: 60px;' @click="mescrolldownloadclick();">顶部</div>
    <mescroll ref='mescroll' @init="initmescorll" :down="mescrollDown()" :up='mescrollup()'>
      <div v-for="v in 100">2333</div>
      <div id="emptywrap" style="padding: 0 0 20px;display: none;"></div>
    </mescroll>
  </div>
</template>

<script>
  import mescroll from 'mescroll.js/mescroll.vue'
  export default {
    data() {
      return {
        firstload:0,//阻止重置的时候调用上拉加载回调
        mescroll:'',
        mescrollSt:0,
      }
    },
    components:{
      mescroll,
    },
    methods:{
      //滚动带下拉上拉逻辑(数据空或者加载完，直接给个flag打断)
      mescrollDownCBTimeout:function(){
        var ls = this.mescroll
        ls.resetUpScroll(false);
        ls.setPageNum(2)//只影响上拉加载的
        /* 假设没数据*/
        ls.showEmpty()
        ls.endSuccess(0)
        document.getElementById('emptywrap').style.display = 'block'
      },
      mescrollDown:function(){
        return {
          callback:this['mescrollDownCB'],
          empty:{
            warpId : 'emptywrap' ,
            icon : null ,
            tip : "暂无相关数据~" ,
            btntext : "" ,
            btnClick : null,
            supportTap : false,
          },
        }
      },
      mescrollDownCB:function(){
        var _this = this;
        /* 清空并请求接口*/
        setTimeout(function(){
          this.firstload = 0
          _this.mescrollDownCBTimeout();/* 初始化页码 */
        }, 1000);
      },
      mescrolldownloadclick:function(){/* 点击触发下拉 */
        var _this = this;
        this.mescroll.triggerDownScroll();
      },
      mescrollup:function(){/*这里请求的话传第二页的页码请求*/
        return {
          callback:this['mescrollupCB'],
          page:{num:1,//强制从1开始，初始化完也是1，所以滑到底部得要页码-1才能正常，除非第一页从1算起
          size:10},
          noMoreSize:1,
          htmlnodata:'end',
          htmlLoading:'加载中',
          empty:{
            warpId : 'emptywrap' ,
            icon : null ,
            tip : "暂无相关数据~" ,
            btntext : "" ,
            btnClick : null,
            supportTap : false,
          },
          offset:0//离底部的距离
        }
      },
      mescrollupCB:function(page){
        var ls = this.mescroll
        if(this.firstload == 0){
          this.firstload = 1
          ls.endErr()
          return;
        }
        console.log(page.num-1)
        //判断是否到达底部，然后
        //接口请求（请求之前设置flag，请求中把flag设置为打断,并this.mescroll.endErr()，防止再次请求）
        //假设成功,有数据：
        /* if(100>page.num*10){
          ls.endSuccess(100)//100是总长度，调用这个之后num+1
          setTimeout(function() {document.querySelector('.mescroll-upwarp').style.visibility = 'visible'}, 0);
        }else{
          ls.endSuccess(100)
          ls.showNoMore()//少于几条的时候使用
        } */
        //假设没数据：
        ls.endSuccess(0)
        //假设失败：就运行失败逻辑就行,带上这个mescroll.endErr()
      },
      /* */
      initmescorll:function(mescroll){/* 下来刷新的时候得要碰到内容才能下拉刷新 */
        console.log('初始化逻辑')
        this.mescroll = mescroll
      },
      //监听
      scrollToplistening:function(){
        var _this = this;
        return (function(){
          setTimeout(function() {
            var wh = window.innerHeight,dbh = document.body.clientHeight,ddh = document.documentElement.clientHeight,mes = document.querySelector('.mescroll');
            document.getElementById('hello').style.visibility = 'visible'//
            mes.style.marginTop = 60+'px';
            mes.style.height = (wh?wh:dbh?dbh:ddh)-60+'px';
            _this.mescrollSt = _this.mescroll.getScrollTop()
            _this.scrollToplistening()()
          }, 100);
        })
      },
      listens:function(){
        var _this = this;
      }
    },
    mounted(){
      this.scrollToplistening()()
      this.listens()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mescroll {/*很重要*/
    position: fixed;
    top: 0;
    bottom: 0;
    height: auto;
  }
</style>

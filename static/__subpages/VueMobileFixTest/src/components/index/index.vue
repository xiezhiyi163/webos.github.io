<template>
  <div>
    <div id="content">
      <div id="slideDown">
        <div id="slideDown1">
          <p>松开刷新</p>
        </div>
        <div id="slideDown2">
          <p>正在刷新 ...</p>
        </div>
      </div>
      <div class="myContent">
        <!-- 顶部导航 -->
        <div class="topnav">
          <span style="padding: 0 17px;float: left;color: #1989fa;">< 返回</span>
          <span style="padding: 0 17px;float: right;color: #1989fa;">按钮</span>
          <p style="text-align: center;">标题</p>
        </div>
        <!-- 焦点图 -->
        <div class="swiper-container" style="height: 5.5rem;border-bottom: 1px solid #eee;background-color: #ddd;">
          <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-color: coral;">Slide 1</div>
            <div class="swiper-slide" style="background-color: palevioletred;">Slide 2</div>
            <div class="swiper-slide" style="background-color: #B3D8FF;">Slide 3</div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <!-- 分类 -->
        <div class="types">
          <div v-for="(v,i) in navs" :style="'float: left;width: 25%;height: '+200/32+'rem;line-height:'+200/32+'rem;background-color:'+v.color" style="text-align: center;color: white;">
            MENU{{i+1}}
          </div>
          <div style="clear: both;"></div>
        </div>
        <!-- 广告 -->
        <div class="ad">ads</div>
        <!-- 限时秒杀 -->
        <div>
          <p class="titles">限时秒杀</p>
          <div class="swiper-container2" style="height: 5.5rem;border-bottom: 1px solid #eee;background-color: #ddd;position: relative;width: 100%;overflow: hidden;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="background-color: coral;">Slide 1</div>
              <div class="swiper-slide" style="background-color: palevioletred;">Slide 2</div>
              <div class="swiper-slide" style="background-color: #B3D8FF;">Slide 3</div>
              <div class="swiper-slide" style="background-color: coral;">Slide 1</div>
              <div class="swiper-slide" style="background-color: palevioletred;">Slide 2</div>
              <div class="swiper-slide" style="background-color: #B3D8FF;">Slide 3</div>
              <div class="swiper-slide" style="background-color: coral;">Slide 1</div>
              <div class="swiper-slide" style="background-color: palevioletred;">Slide 2</div>
              <div class="swiper-slide" style="background-color: #B3D8FF;">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <!-- <div class="swiper-pagination swiper-pagination2"></div> -->
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev swiper-button-prev2"></div>
            <div class="swiper-button-next swiper-button-next2"></div> -->
          </div>
        </div>
        <!-- 正品行货 -->
        <div>
          <p class="titles">正品行货</p>
          <div style="height: 15rem;border-top: 1px solid #eee;border-bottom: 1px solid #eee;background-color: palevioletred;">
            <div style="float: left;width: 50%;position: relative;height: 100%;">
              <span data-line style="position: absolute;right: 0;top: 0;height: 100%;border-right: 1px solid #eee;"></span>
              <div style="height: 100%;line-height: 15rem;text-align: center;color: #ccc;">item</div>
            </div>
            <div style="float: left;width: 50%;position: relative;height: 100%;">
              <span data-line style="position: absolute;right: 50%;top: 0;height: 100%;border-right: 1px solid #eee;"></span>
              <span data-line style="position: absolute;right: 0;top: 50%;width: 100%;border-top: 1px solid #eee;"></span>
              <div style="float: left;height: 50%;width: 50%;">
                <div style="height: 100%;line-height: 7.5rem;text-align: center;color: #ccc;">item</div>
              </div>
              <div style="float: left;height: 50%;width: 50%;">
                <div style="height: 100%;line-height: 7.5rem;text-align: center;color: #ccc;">item</div>
              </div>
              <div style="float: left;height: 50%;width: 50%;">
                <div style="height: 100%;line-height: 7.5rem;text-align: center;color: #ccc;">item</div>
              </div>
              <div style="float: left;height: 50%;width: 50%;">
                <div style="height: 100%;line-height: 7.5rem;text-align: center;color: #ccc;">item</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 猜你喜欢 -->
        <div>
          <p class="titles">猜你喜欢</p>
          <div style="position: relative;">
            <span data-line style="position: absolute;right: 50%;top: 0;height: 100%;border-right: 1px solid #fff;"></span>
            <div v-for="(v,i) in tolike" style="float: left;width: 50%;height: 15rem;background-color: #4297D7;border-bottom: 1px solid #fff;text-align: center;line-height: 15rem;color: white;">item</div>
            <div style="clear: both;"></div>
          </div>
        </div>
        <!-- 正在加载 -->
        <div style="padding:1rem 0;font-size: 0.7rem;text-align: center;color: #666;">-- 正在加载 --</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        navs:[
          {color:'#ecbaba'},
          {color:'#a7ef8c'},
          {color:'#c599de'},
          {color:'#daa48d'},
          {color:'#98aef3'},
          {color:'#ffe756'},
          {color:'#a1daa2'},
          {color:'#ecbaba'},
        ],
        tolike:[
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ]
      }
    },
    methods: {
      listens() {
        document.getElementById('content').style.minHeight = window.innerHeight + 'px'
        window.addEventListener('resize', function() {
          document.getElementById('content').style.minHeight = window.innerHeight + 'px'
        })
      },
      //下拉刷新
      pushdownRefresh() {
        //第一步：下拉过程
        function slideDownStep1(dist) { // dist 下滑的距离，用以拉长背景模拟拉伸效果
          var slideDown1 = document.getElementById("slideDown1"),
            slideDown2 = document.getElementById("slideDown2");
          slideDown2.style.display = "none";
          slideDown1.style.display = "block";
          slideDown1.style.height = (parseInt("0px") - dist) + "px";
        }
        //第二步：下拉，然后松开，
        function slideDownStep2() {
          var slideDown1 = document.getElementById("slideDown1"),
            slideDown2 = document.getElementById("slideDown2");
          var h1 = slideDown1.style.height
          slideDown1.style.display = "none";
          slideDown2.style.display = "block";
          slideDown2.style.height = h1;
          setTimeout(function() {
            slideDown2.style.transition = 'height 300ms'
            slideDown2.style.height = 80 + 'px'
          }, 0)
          //刷新数据
          //location.reload();
        }
        //第三步：刷新完成，回归之前状态
        function slideDownStep3() {
          var slideDown1 = document.getElementById("slideDown1"),
            slideDown2 = document.getElementById("slideDown2");
          slideDown1.style.display = "none";
          slideDown2.style.display = "none";
        }

        //下滑刷新调用
        k_touch("content", "y");
        //contentId表示对其进行事件绑定，way==>x表示水平方向的操作，y表示竖直方向的操作
        function k_touch(contentId, way) {
          var _start = 0,
            _end = 0,
            _content = document.getElementById(contentId);
          _content.addEventListener("touchstart", touchStart, false);
          _content.addEventListener("touchmove", touchMove, false);
          _content.addEventListener("touchend", touchEnd, false);

          function touchStart(event) {
            //var touch = event.touches[0]; //这种获取也可以，但已不推荐使用

            var touch = event.targetTouches[0];
            if (way == "x") {
              _start = touch.pageX;
            } else {
              _start = touch.pageY;
            }
          }

          function touchMove(event) {
            var touch = event.targetTouches[0];
            if (way == "x") {
              _end = (_start - touch.pageX);
            } else {
              _end = (_start - touch.pageY);
              //下滑才执行操作
              if (_end < 0) {
                slideDownStep1(_end);
              }
            }

          }

          function touchEnd(event) {
            if (_end > 0) {
              slideDownStep3();
              console.log("左滑或上滑  " + _end);
            } else {
              console.log("右滑或下滑" + _end);
              if (document.getElementById("slideDown1").style.height.split('px')[0] > 80) {
                slideDownStep2();
              } else {
                slideDownStep3();
                return;
              }
              //刷新成功则
              //模拟刷新成功进入第三步
              setTimeout(function() {
                slideDownStep3();
              }, 2500);
            }
          }
        }
      },
      //vantUI
      //焦点图
      swiperOn() {
        var mySwiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          slidesPerView: 2,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 0,
            stretch: -30,
            depth: 100,
            modifier: 2,
            slideShadows: true
          },
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
        })
      },
      //限时秒杀
      swiperOn2(){
        var mySwiper = new Swiper('.swiper-container2', {
          freeMode: true,
          slidesPerView: 2.5,
          // pagination: {
          //   el: '.swiper-pagination2',
          // },
          // navigation: {
          //   nextEl: '.swiper-button-next2',
          //   prevEl: '.swiper-button-prev2',
          // },
          loop: false,
        })
      }
    },
    mounted() {
      this.listens()
      this.swiperOn()
      this.swiperOn2()
      this.pushdownRefresh()
    }
  }
</script>

<style scoped="scoped">
  /* 下拉刷新 */
  #slideDown {
    margin-top: 0;
    width: 100%;
  }

  #slideDown1,
  #slideDown2 {
    width: 100%;
    height: 70px;
    ;
    background: #e9f4f7;
    display: none;
    position: relative;
    overflow: hidden;
  }

  #slideDown1 {
    height: 20px;
  }

  #slideDown1>p,
  #slideDown2>p {
    text-align: center;
    font-size: 14px;
    color: #37bbf5;
  }

  /* 顶部导航 */
  .topnav {
    position: relative;
    height: 63px;
    border-bottom: 1px solid #eee;
    line-height: 63px;
    font-size: 18px;
  }
  /* vantui */
  /* 焦点图 */
  .swiper-slide {
    background-color: #ccc;
    line-height: 5.5rem;
    text-align: center;
    color: white;
  }
  /* 分类 */
  .types{
    padding-top: 15px;
  }
  /* 广告 */
  .ad{
    height: 160px;margin-top: 15px;background-color: #1989fa;;text-align: center;line-height:160px;color: #ccc;
  }
  /* 限时秒杀 正品行货 猜你喜欢 */
  .titles{
    padding: 20px;
    font-size: 24px;
  }
</style>

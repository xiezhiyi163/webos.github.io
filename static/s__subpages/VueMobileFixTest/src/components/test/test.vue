<template>
  <div style="font-size: 1rem;">
    1 <el-button class="buttontest">提交</el-button>
    <div class="swiper-container" style="height: 4rem;">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        effect : 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: -30,
          depth: 100,
          modifier: 2,
          slideShadows : false
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop : true,
      })
    }
  }
</script>

<style scoped="scoped">
  .swiper-slide{
    background-color: #01FF70;
  }
  .buttontest{
    font-size: 14px;
  }
</style>

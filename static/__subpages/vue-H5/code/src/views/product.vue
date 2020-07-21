<template>
  <div class="product pa h100">
    <div class="center product-bg">
			<vHeader style="background:rgba(0,0,0,0);">
			  <div slot="header-box2" class="header-box2 pa">
					<div class="p2">
						<img class="showDown" data-src="static/img/product/p2-01.png" alt="">
					</div>
			  </div>
			</vHeader>
      <div class="swiper-wrap pr">
        <swiper :options="swiperOption" class="oh fadeIn delay_5s pr z2" v-lazy-container="{ selector: 'img' }">
          <swiper-slide v-for="img in imgs" :key="img">
            <img :data-src="img" class="banner" alt="">
          </swiper-slide>
        </swiper>
        <div class="banner-btn pa">
          <div class="swiper-button-prev pa"></div>
          <div class="swiper-button-next pa"></div>
					<div class="click dx pa" @click="back()"></div>
        </div>
      </div>
    </div>
    <vMenu/>
  </div>
</template>

<script>
  import vHeader from '../components/header.vue';
  import vMenu from '../components/menu.vue';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    components: {
      vHeader,
      vMenu,
      swiper,
      swiperSlide
    },
    created() {
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.ani();
      }, 0);
    },
    data() {
      return {
        imgs: [
          'static/img/product/b-01.png',
          'static/img/product/b-02.png',
          'static/img/product/b-03.png',
          'static/img/product/b-04.png',
          'static/img/product/b-05.png',
          'static/img/product/b-06.png',
          'static/img/product/b-07.png',
          'static/img/product/b-08.png',
          'static/img/product/b-09.png',
          'static/img/product/b-10.png',
					'static/img/product/b-11.png',
					'static/img/product/b-12.png'
        ],
        swiperOption: {
          setWrapperSize: true,
          resistanceRatio: 0,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            disableOnInteraction: true,
            delay: 3000
          }
        }
      };
    },
		methods:{
			back () {
				this.$router.push({path:'/market'})
			}
		}
  };

</script>
<style scoped lang="scss">
  .product{
		height: 21.89rem;
		background:url(../../static/img/product/bg.png) top/10rem repeat-y;
		.p2{
			width: 2.13rem;
			margin:1.58rem 0.21rem;
		}
    .swiper-wrap{
			width: 9rem;
			height: 11.33rem;
			margin: 1.06rem auto;
      .banner-btn{
        width:100%;
        top:12rem;
        a{
          position: absolute;
          left: 2.7rem;
          top: 8.5rem;
        }
        .swiper-button-prev, .swiper-button-next{
          width: 2rem;
          height: 2rem;
        }
        .swiper-button-prev{top:0.2rem;left:0.5rem;background: url(../../static/img/product/left.png) top/1.4rem repeat-y;}
        .swiper-button-next{top:0.2rem;right:0.5rem;background: url(../../static/img/product/right.png) top/1.4rem repeat-y;}
        .click{height: 2.65rem;width:2.53rem;top:-0.5rem;left:3.2rem;background: url(../../static/img/common/click.png) top/2.53rem repeat-y;}
      }

    }
  }
</style>

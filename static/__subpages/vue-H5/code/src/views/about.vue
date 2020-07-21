<template>
  <div class="about oh" v-lazy-container="{ selector: 'img' }">
    <div class="part1 pr">
      <vHeader>
        <div slot="header-box2" class="header-box2 pa">
					<div class="p2">
						<img class="showDown" data-src="static/img/about/p2-01.png" alt="">
					</div>
        </div>
      </vHeader>
      <img class="pa p1-01 showUp" data-src="static/img/about/gr1-01.png"/>
      <img class="pa p1-02 showDown" data-src="static/img/about/gr1-02.png"/>
      <img class="pa p1-03 w100 z2" data-src="static/img/about/about-yezi.png"/>
      
    </div>
    <div class="part2 pr">
    	<img class="pa p2-01 showDown" data-src="static/img/about/gr1-03.png"/>
      <img class="pa p2-02 showLeft" data-src="static/img/about/gr1-04.png"/>
      <img class="pa p2-03 showRight" data-src="static/img/about/gr1-05.png"/>
    </div>
    <div class="part3 pr">
    	<img class="pa p3-01 showDown" data-src="static/img/about/gr2-01.png"/>
      <img class="pa p3-02 showUp" data-src="static/img/about/gr2-02.png"/>
    </div>
    <div class="part4 pr">
    	<img class="pa p4-01 showDown" data-src="static/img/about/gr3-01.png"/>
      <img class="pa p4-02 showUp" data-src="static/img/about/gr3-02.png"/>
    </div>
    <vFooter target="/feature"></vFooter>
    <vMenu/>
  </div>
</template>

<script>
  import vHeader from '../components/header.vue';
  import vMenu from '../components/menu.vue';
  import vFooter from '../components/footer.vue';

  export default {
    components: {
      vHeader,
      vMenu,
      vFooter
    },
    created() {
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.ani();
      }, 0);
    }
  };

</script>
<style scoped lang="scss">
  .about{
  	.part1{
  		height:14.2rem;
  		background: url(../../static/img/about/gr1-bj_01.png) top/10rem no-repeat;
  		.header{background: none;}
  		.p2{ width: 2.13rem; margin:1.58rem 0.21rem; }
			.p1-01{ width: 5.85rem; padding-left: 0.82rem; padding-top: 1.08rem; z-index: 2;}
			.p1-02{ width: 9.09rem; margin-left: 0.9rem; padding-top: 1.33rem;}
			.p1-03{ margin-left: 0; margin-top: 9.41rem;}
  	}
    .part2{
    	height: 17.64rem;
    	width: 10rem;
    	/*overflow: hidden;*/
    	background: url(../../static/img/about/gr1-bj_02.png) top/10rem no-repeat;
    	.p2-01{ width: 8.84rem; padding-left: 0.69rem;}
    	.p2-02{ width: 5.44rem; padding-left: 0.92rem; padding-top: 5.21rem;}
    	.p2-03{ width: 5.06rem; margin-left: 5.97rem; padding-top: 7.18rem;}
    }
    .part3{
    	height: 17.36rem;
    	background: url(../../static/img/about/gr2-bj.png) top/10rem no-repeat;
    	.p3-01{ width: 9.02rem; margin-left: 0.49rem; margin-top: -3.98rem;}
    	.p3-02{ width: 8.33rem; margin-left: 0.82rem; margin-top: 10.66rem;}
    }
    .part4{
    	height: 18.38rem;
    	background: url(../../static/img/about/gr3-bj.png) top/10rem no-repeat;
    	.p4-01{ width: 7.98rem; margin-left: 0.98rem; margin-top: -2.05rem;}
    	.p4-02{ width: 8.74rem; margin-left: 0.88rem; margin-top: 2.46rem;}
    	
    }
    footer{
      background: #f2efed url("../../static/img/about/footer-bj.png") top/10rem no-repeat;
      background-position-y: 0.6rem;

    }
  }
</style>

<template>
  <div class="feature" v-lazy-container="{ selector: 'img' }">
    <div class="part1 pr oh">
      <vHeader>
        <div slot="header-box2" class="header-box2 pa">
					<div class="p2">
						<img class="showDown" data-src="static/img/feature/title.png" alt="">
					</div>
        </div>
      </vHeader>
      <img class="pa p1-01 showUp" data-src="static/img/feature/gr1-01.png"/>
      <img class="pa p1-02 showLeft" data-src="static/img/feature/gr1-02.png"/>
    	<img class="pa p1-03" data-src="static/img/feature/gr1-03.png"/>
    	<img class="pa p1-04" data-src="static/img/feature/gr1-04.png"/>
    	<img class="pa p1-05" data-src="static/img/feature/gr1-05.png"/>
    </div>
		<div class="part2 pr">
			<img class="pr p2-01 showUp" data-src="static/img/feature/gr2-01.png"/>
      <img class="pr p2-02 showRight" data-src="static/img/feature/gr2-02.png"/>
    	<img class="pr p2-02 showRight" data-src="static/img/feature/gr2-03.png"/>
    	<img class="pr p2-02 showRight" data-src="static/img/feature/gr2-04.png"/>
    	<img class="pr p2-02 showRight" data-src="static/img/feature/gr2-05.png"/>
		</div>
		<div class="part3 pr z2">
			<img class="pa p3-01 showUp" data-src="static/img/feature/gr3-01.png"/>
      <img class="pa p3-02 showRight" data-src="static/img/feature/gr3-02.png"/>
    	<img class="pa p3-03 showRight" data-src="static/img/feature/gr3-03.png"/>
    	<img class="pa p3-04 showRight" data-src="static/img/feature/gr3-04.png"/>
		</div>

    <vFooter target="/product"></vFooter>
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
  .feature{
  	background: url("../../static/img/feature/feature-bj.png") top/10rem repeat;
  	.header{background: none;}
    .part1{
    	height:45.42rem;
  		background: url("../../static/img/feature/gr1-bj.png") top/10rem no-repeat;
  		.p2{ width: 1.93rem; margin:1.58rem 0.32rem;}
			.p1-01{ width: 9.1rem; margin-top: 0.58rem; margin-left: 2.28rem;}
			.p1-02{ width: 10rem; margin-top: 2.69rem; margin-left: 0;}
			.p1-03{ width: 10rem; margin-top: 13.98rem; margin-left: 0;}
			.p1-04{ width: 9.08rem;margin-left: 0.53rem; margin-top: 25.21rem;}
			.p1-05{ width: 9.08rem;margin-left: 0.53rem; margin-top: 33.72rem;}
    }
		.part2{
			height: 27.45rem;
			.p2-01{ width: 7.98rem; margin: 0 auto; padding-bottom: 0.77rem;}
			.p2-02{ width: 9.46rem; margin-left: 0.53rem; padding-bottom: 0.98rem;}
		}
		.part3{
  		background: url("../../static/img/feature/gr3-bj.png") top/10rem no-repeat;
  		height: 22.38rem;
			.p3-01{ width: 7.98rem; margin-left: 1rem; margin-top: -2rem;}
			.p3-02{ width: 9.18rem; margin-left: 0; margin-top: 3.41rem;}
			.p3-03{ width: 9.01rem; margin-left: 0.88rem; margin-top: 8.12rem;}
			.p3-04{ width: 9.17rem; margin-left: 0; margin-top: 15.16rem;}
		}
    footer{
      background: url("../../static/img/feature/feature-footer.png") top/10rem no-repeat;
      height: 6.01rem;
      padding-top: 0.8rem;
			margin-top: -0.03rem;

    }
  }
</style>

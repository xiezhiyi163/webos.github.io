<template>
  <div class="market" v-lazy-container="{ selector: 'img' }">
		<div class="part1 pr oh">
		  <vHeader>
		    <div slot="header-box2" class="header-box2 pa">
						<div class="p2">
							<img class="showDown" data-src="static/img/market/title.png" alt="">
						</div>
		    </div>
		  </vHeader>
	    <img class="pa p1-01 showUp" data-src="static/img/market/gr1-01.png"/>
      <img class="pa p1-02 showLeft" data-src="static/img/market/gr1-02.png"/>
    	<img class="pa p1-03 showDown" data-src="static/img/market/gr1-03.png"/>
		</div>
		<div class="part2 pr">
			<img class="pa p2-01 w100 showDown" data-src="static/img/market/gr2-01.png"/>
      <img class="pa p2-02 showLeft" data-src="static/img/market/gr2-02.png"/>
    	<img class="pa p2-03 showRight" data-src="static/img/market/gr2-03.png"/>
		</div>
		<div class="part3 pr">
			<img class="pa p3-01 w100 showDown" data-src="static/img/market/gr3-01.png"/>
      <img class="pa p3-02 showLeft" data-src="static/img/market/gr3-02.png"/>
    	<img class="pa p3-03 showUp" data-src="static/img/market/gr3-03.png"/>
    	<img class="pa p3-04 showRight" data-src="static/img/market/gr3-04.png"/>
    	<img class="pa p3-05 showDown" data-src="static/img/market/gr3-05.png"/>
		</div>
		<div class="part4 pr">
			<img class="pa p4-01 w100 showDown" data-src="static/img/market/gr4-01.png"/>
      <img class="pa p4-02 showLeft" data-src="static/img/market/gr4-02.png"/>
    	<img class="pa p4-03 showRight" data-src="static/img/market/gr4-03.png"/>
    	<img class="pa p4-04 showRight" data-src="static/img/market/gr4-04.png"/>
    	<img class="pa p4-05 showDown" data-src="static/img/market/gr4-05.png"/>
    	<img class="pa p4-06 showUp" data-src="static/img/market/gr4-06.png"/>
		</div>
    <vFooter target="/show"></vFooter>
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
  .market{
  	background: url("../../static/img/market/market-bj.png") repeat;;
    .part1{
    	height:19rem;
    	.header{background: url("../../static/img/market/header.png") top/10rem  no-repeat;}
  		.p2{ width: 1.89rem; margin:1.58rem 0.21rem; }
			.p1-01{ width: 10rem; margin-top: 0; margin-left: 0;}
			.p1-02{ width: 7.98rem; margin-left: 1rem; margin-top: 6.12rem;}
			.p1-03{ width: 8.4rem; margin-left: 0.84rem; margin-top: 10.65rem;}
		}
		.part2{
    	background: url("../../static/img/market/gr2-bj.png") top/10rem  no-repeat;
			height: 15.46rem;
			.p2-01{ margin-top: 0; margin-left: 0;}
			.p2-02{ width: 4.16rem; margin-left: 0.72rem; margin-top: 3.76rem;}
			.p2-03{ width: 4.16rem; margin-left: 5.34rem; margin-top: 3.76rem;}
		}
		.part3{
			height: 20.16rem;
			.p3-01{ width: 8.78rem; margin-left: 0.6rem; margin-top: 1.17rem;}
			.p3-02{ width: 8.52rem; margin-left: 0.73rem; margin-top: 5.38rem;}
			.p3-03{ width: 8.66rem; margin-left: 0.68rem; margin-top: 7.98rem;}
			.p3-04{ width: 8.66rem; margin-left: 0.68rem; margin-top: 12.56rem;}
			.p3-05{ width: 8.66rem; margin-left: 0.68rem; margin-top: 16.21rem;}
		}
		.part4{
			height: 25.76rem;
			.p4-01{ width: 7.98rem; margin-left: 1rem; margin-top: 0;}
			.p4-02{ width: 7.88rem; margin-left: 1.17rem; margin-top: 4.34rem;}
			.p4-03{ width: 7.08rem; margin-left: 1.17rem; margin-top: 8.12rem;}
			.p4-04{ width: 6.68rem; margin-left: 1.17rem; margin-top: 11.88rem;}
			.p4-05{ width: 8.08rem; margin-left: 0.85rem; margin-top: 15.92rem;}
			.p4-06{ width: 10.0rem; margin-left: 0; margin-top: 19.08rem;}
		}

  }
</style>

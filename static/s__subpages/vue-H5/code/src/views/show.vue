<template>
  <div class="show pr" v-lazy-container="{ selector: 'img' }">
    <div class="part1 pr oh">
      <vHeader>
        <div slot="header-box2" class="header-box2 pa">
      		<div class="p2">
      			<img class="showDown" data-src="static/img/show/p1-01.png" alt="">
      		</div>
        </div>
      </vHeader>
    </div>
		<div class="part2">
			<div class="part2-01">
				<img class="showLeft" data-src="static/img/show/1.png" alt="">
			</div>
			<div class="part2-02">
				<img class="showRight" data-src="static/img/show/2.png" alt="">
			</div>
			<div class="part2-02">
				<img class="showLeft" data-src="static/img/show/3.png" alt="">
			</div>
			<div class="part2-03">
				<img class="showUp" data-src="static/img/show/show-02.png" alt="">
			</div>
			<div class="part2-04">
				<img class="showLeft" data-src="static/img/show/2-1.png" alt="">
				<img class="showRight" data-src="static/img/show/2-2.png" alt="">
				<img class="showLeft" data-src="static/img/show/2-3.png" alt="">
				<img class="showRight" data-src="static/img/show/2-4.png" alt="">
			</div>
			<div class="part2-05">
				<img class="showLeft" data-src="static/img/show/3-1.png" alt="">
				<img class="showRight" data-src="static/img/show/3-3.png" alt="">
				<img class="showLeft" data-src="static/img/show/3-4.png" alt="">
				<img class="showRight" data-src="static/img/show/3-5.png" alt="">
				<img class="showLeft" data-src="static/img/show/3-6.png" alt="">
				<img class="showRight" data-src="static/img/show/3-7.png" alt="">
				<img class="showLeft" data-src="static/img/show/3-8.png" alt="">
			</div>
		</div>
    <vFooter target="/mask"></vFooter>
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
  .show{
		width: 100%;
		background:url("../../static/img/show/bg1.png");
    .part1{
			.p2{
				width: 2.13rem;
				margin:1.58rem 0.21rem;
			}
    }
    .part2{
			margin-top: 0.8rem;
			.part2-01{
				padding: 0 0.48rem;
				box-sizing: border-box;
			}
			.part2-02{
				padding: 0.09rem 0.32rem;
				box-sizing: border-box;
			}
			.part2-03{
				width: 3.76rem;
				margin: 0.66rem auto;
			}
			.part2-04{
				padding: 0 0.32rem;
				box-sizing: border-box;
				>img{
					padding: 0.09rem 0;
					box-sizing: border-box;
				}
			}
			.part2-05{
				padding: 0.22rem 0.32rem;
				box-sizing: border-box;
				>img{
					padding: 0.2rem 0;
					box-sizing: border-box;
				}
			}
    }
    .part3{
      
    }
  }
</style>

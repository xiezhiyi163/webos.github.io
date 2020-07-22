<template>
  <div class="header pr" v-lazy-container="{ selector: 'img' }">
    <div class="header-box pr">
      <slot name="header-box2"></slot>
      <img class="p2-01 showUp" data-src="static/img/common/bg-i.png" alt="">
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
  .header{
    height:3.14rem;
		background: url(../../static/img/common/bg-t.png);
    &-box{
      height:100%;
      width:9.46rem;
      margin:0 auto;
			background: url(../../static/img/common/bg-b.png) center/ 9.46rem auto no-repeat;
			.p2-01{
				width: 2rem;
				position: absolute;
				right: 0.5rem;
				bottom: 0.8rem;
			}
    }
    &-bot{bottom:0;}
  }
</style>

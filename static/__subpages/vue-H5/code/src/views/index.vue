<template>
  <div class="z9 h100 oh pr index">
    <!--class="dx"-->
    <router-link to="/about" class="center index-wrap oh fadeIn pr" tag="div">
		<img class="logo flipInY delay_4s" src="static/img/index/logo.png" alt="">
        <img class="p1-01 showRight" src="static/img/index/p1-01.png" alt="">
		<img class="p1-02 showDown" src="static/img/index/p1-02.png" alt="">
		<img class="p1-08 flipInY delay1_5s" src="static/img/index/p1-08.png" alt="">
        <img class="btn dx showDown" src="static/img/index/btn.png" alt="">
    </router-link>
  </div>
</template>

<script>
  export default {
    created() {
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.ani();
      }, 0);
    }
  };

</script>

<style scoped lang="scss">
  .index{
    &-wrap{
      background:url(../../static/img/index/p1-bg.png) top/10rem no-repeat;
	  .logo{
        margin-top:4rem;
        width:3.49rem;
      }
      .p1-01{
        width:2.5rem;
		position: absolute;
		right: 0;
		bottom: 7.5rem;
      }
	  .p1-02{
	    width:8rem;
		margin: 2rem auto;
	  }
	  .p1-08{
	    width:4.5rem;
		position: absolute;
		right: 0;
		left: 0;
		top: 8.45rem;
	  }
      .btn{
		width:3rem;
		margin-top: 2rem;
	 }
    }
  }
</style>

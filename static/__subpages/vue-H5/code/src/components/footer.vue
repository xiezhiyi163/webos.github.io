<template>
  <footer class="pr">
		<router-link to="/contact" onclick="window.scrollTo(0, 0);">
		  <img class="phone" data-src="static/img/common/feed.png" alt="">
		</router-link>
    <router-link :to="target" onclick="window.scrollTo(0, 0);">
      <img class="click dx" data-src="static/img/common/click.png" alt="">
    </router-link>
    <a href="tel:02081777164">
      <img class="feed" data-src="static/img/common/phone.png" alt="">
    </a>
  </footer>
</template>
<script>
  export default {
    props:{
      target: {
        type: String,
        default: '/about'
      },
      submit:{
        type:Boolean,
        default:false
      }
    }
  }
</script>
<style scoped lang="scss">
  footer{
    background: url("../../static/img/common/footer-bg-01.png") top/10rem no-repeat;
    height:4.66rem;
    display: flex;
    justify-content: space-around;
    a{
      width:33%;
      .phone{width:1.6rem;margin-top:2.1rem;margin-left: 1.1rem;}
      .click{width:2.53rem;margin-top:1.5rem;}
      .feed{width:1.6rem;margin-top:2.1rem;margin-right: 1.15rem;}
    }
  }
</style>

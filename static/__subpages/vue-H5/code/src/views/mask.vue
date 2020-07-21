<template>
  <div class="tip view h100 pr oh" v-lazy-container="{ selector: 'img' }" v-show="mask">
    <div class="center pr">
			<div class="box">
				<div class="link" @click="close">
				  <router-link to="/question">
				    <img class="dx click" data-src="static/img/mask/click.png" alt="">
				  </router-link>
				</div>
				<div class="back" @click="back()">
					<img class="click" data-src="static/img/mask/back.png" alt="">
				</div>
			</div>
    </div>

  </div>
</template>
<script>
  export default{
    data() {
      return{mask:true}
    },
    methods:{
      close() {
        this.mask = false
      },
			back () {
				this.$router.push({path:'/feedback'})
			}
    }
  }
</script>
<style scoped lang="scss">
  .tip{
		background: url("../../static/img/mask/tip.png") top/10rem no-repeat;
    &-img{
      width:100%;
    }
		.box{
			width: 8.53rem;
			height: 8.53rem;
			background: red;
			background: url("../../static/img/mask/top.png") top/8.53rem no-repeat;
			margin: 5rem auto;
			position: relative;
			.back{
				width: 3rem;
				height: 1rem;
				position: absolute;
				bottom: 0;
				left: 1rem;
				.click{
					width: 2.5rem;
				}
			}
			.link{
				position: absolute;
			  left:3.8rem;
			  bottom: -0.2rem;
				.click{
					width: 2.5rem;
				}
			  a{
			    display:block;
			    width:4.40rem;
			    height:1.20rem;
			  }
			}
		}
  }
</style>

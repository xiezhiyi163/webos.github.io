<template>
  <div id="feed" class="feedback" v-lazy-container="{ selector: 'img' }">
      <div class="part1 pr">
        <div class="f-content pa">
          <form action="">
            <div class="info" id="ques1">
              <p>姓名</p>
              <input type="text" :model="name">
            </div>
            <div class="info" id="ques2">
              <p>联系电话</p>
              <input type="text" :model="phone">
            </div>
            <div class="info" id="ques3">
              <p>邮寄地址</p>
              <input type="text" :model="address">
            </div>
            <div class="info">
              <p>到访时间</p>
              <input type="text" :model="time">
            </div>
            <div class="click pa" @click="send">
              <img class="dx" data-src="static/img/question/click.png" alt="">
            </div>
          </form>
        </div>
      </div>

    <div id="error" class="pf w100 fadeIn" v-text="error" v-show="showError"></div>
		<div class="btn pa">
			<router-link to="/contact" onclick="window.scrollTo(0, 0);">
				<div class="phone">
					<img data-src="../../static/img/common/feed.png" alt="">
				</div>
			</router-link>
			<div class="click-02 dx" @click="send">
					<img data-src="../../static/img/common/click2.png" alt="">
			</div>
			<a href="tel:02081777164">
				<div class="feed">
					<img data-src="../../static/img/common/phone.png" alt="">
				</div>
			</a>
		 </div>
    <vMenu/>
  </div>
</template>

<script>
  import vHeader from '../components/header.vue';
  import vMenu from '../components/menu.vue';
  export default {
    created() {
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.ani();
      }, 0);
    },
    components: {
      vHeader,
      vMenu
    },
    data() {
      return {
        name: '',//姓名
        phone: '',//联系电话
        address: '',//邮寄地址
        time: '',//到访时间
        error: '',
        showError: false,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    },
    methods: {
      send() {
//				this.$router.push({path:'/about'})
        // 表单验证
           if (this.name ==='') {
             this.backTop('请填写您的姓名！', 'ques1');
           }else if (this.phone.match(/^[1][0-9]{10}$/)) {
             this.backTop('请填写您的联系电话', 'ques2');
           }else if (this.address === '') {
             this.backTop('请填写您的邮寄地址', 'ques3');
           }else {
           	return;
             // 表单验证完毕才提交数据
             let time = new Date();
             let params = new URLSearchParams();
             params.append('ip', returnCitySN.cip);
             params.append('msg_date', time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日');
             params.append('msg_time', this.hours + '时' + this.minutes + '分' + this.seconds + '秒');
             params.append('name', this.name);
             params.append('phone', this.phone);
             params.append('address', this.address);
             params.append('time', this.time);
             this.$ajax({
               method: 'post',
               url: 'http://case.qudao51.com/wygf/php/add.php',
               data: params
             }).then(res => {
               this.backTop('提交成功！', 'feed');
             }).catch(err => {
               alert('服务器错误！');
             });
           };
      },
      // 回到顶部
      backTop(info, obj) {
        this.error = info;
        this.showError = true;
        window.scrollTo(0, document.getElementById(obj).offsetTop+150);
        let timer = setTimeout(() => {
          this.showError = false;
        }, 2500);
      },
      // 问卷计时
      TimingBegins() {
        setInterval(() => {
          this.seconds++
          if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++
          }
          ;
          if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++
          }
          ;
        }, 1000);
      },
      close() {
        this.mask = false
      }
    }
  };
</script>
<style scoped lang="scss">
  .feedback{
		height: 24.42rem;
    background:url("../../static/img/common/bg1.png") top/10rem repeat-y;
		position: relative;
		.btn{
			width: 100%;
			bottom: 0;
			z-index: 150;
			background: url("../../static/img/common/footer-bg-01.png") top/10rem no-repeat;
			height:4.66rem;
			display: flex;
			justify-content: space-around;
			.click-02{width:2.53rem;margin-top:1.5rem;
			background: url("../../static/img/common/click2.png") top/2.53rem no-repeat;
			}
			a{
			  width:33%;
			  .phone{width:1.6rem;margin:2.1rem 0 0 0.8rem;}
			  .feed{width:1.6rem;margin:2.1rem 0 0 0.8rem;}
			}
		}
    .part1{
      .title{width:9.15rem;padding-top:2.28rem;margin-bottom:0.83rem;}
      .f-content{
        width:8.45rem;
        top:10.2rem;
        left:0.78rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        form{
          .info{
            margin-bottom:0.8rem;
						text-align: center;
            p{
              font-size:0.37rem;
              color: #7d7d7d;
							margin-bottom: 0.34rem;
            }
            input[type=text]{
              width:5.17rem;
              border:1px dashed #d1c0a5;
              border-radius:1rem;
              height:0.68rem;
							line-height: 0.68rem;
              box-sizing: border-box;
              padding:0 0.27rem;
            }
          }
        }
        .click{
          left:2.7rem;
          bottom:-1.8rem;
          img{
            width:2.84rem;
          }
        }
      }
      .com-con{
        padding-top:10.20rem;
        padding-left:0.78rem;
        color:white;
        font-weight:100;
        h3{
          margin-top:1.29rem;
          font-size: 0.40rem;
          font-weight:100;
        }
        p{
          font-size:0.32rem;
          margin-bottom:1.72rem;
          margin-top:0.1rem;
        }
        a{
          display: block;
          margin-top:0.3rem;
          color: white;
          font-size:0.32rem;
        }
      }
      .r{
        img{width:4.43rem;}
      }
    }
    #error {
      top: 0;
      line-height: 1rem;
      font-size: 0.4rem;
      text-align: center;
      color: #fff;
      background: #c71041
    }
  }
</style>

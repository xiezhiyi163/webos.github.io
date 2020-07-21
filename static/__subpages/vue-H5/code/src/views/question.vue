<template>
  <div class="question">
      <div class="part1">
        <div class="form-wrap pa">
          <ul class="form-ul">
            <li id="ques1">
              <p class="p-title">您体验过“味艺工坊”的产品吗？</p>
              <div class="p-content">
                <input value="有" v-model="experience" type="radio" name="radioGroup1" id="radio1">
                <label for="radio1">有</label>
                <input value="没有" v-model="experience" type="radio" name="radioGroup1" id="radio2">
                <label for="radio2">没有</label>
              </div>
            </li>
            <li id="ques2">
              <p class="p-title">您投资创业的预算是多少？</p>
              <div class="p-content">
                <input value="10万以下" v-model="budget" type="radio" name="radioGroup2" id="radio3">
                <label for="radio3">3万以上</label>
                <input value="10万-18万" v-model="budget" type="radio" name="radioGroup2" id="radio4">
                <label for="radio4">5 - 10万</label>
                <input value="20万以上" v-model="budget" type="radio" name="radioGroup2" id="radio5">
                <label for="radio5">10万以上</label>
              </div>
            </li>
            <li id="ques3">
              <p class="p-title">您与公司合作希望得到哪方面的支持？</p>
              <div class="p-content">
                <input value="店铺选择" v-model="support" type="radio" name="radioGroup3" id="radio6">
                <label for="radio6">店铺选择</label>
                <input value="营销服务" v-model="support" type="radio" name="radioGroup3" id="radio7">
                <label for="radio7">营销服务</label>
                <input value="有无优惠" v-model="support" type="radio" name="radioGroup3" id="radio8">
                <label for="radio8">有无优惠</label>
              </div>
            </li>
            <li id="ques4">
              <p class="p-title">您在开店过程中最担心什么？</p>
              <div class="p-content">
                <input value="产品质量" v-model="worry" type="radio" name="radioGroup4" id="radio9">
                <label for="radio9">产品口感</label>
                <input value="店铺管理" v-model="worry" type="radio" name="radioGroup4" id="radio10">
                <label for="radio10">店铺管理</label>
                <input value="技术培训" v-model="worry" type="radio" name="radioGroup4" id="radio11">
                <label for="radio11">技术培训</label>
              </div>
            </li>
            <li id="ques6">
              <p class="p-title">您计划什么时候开业？</p>
              <div class="p-content">
                <input value="一个月内" v-model="open" type="radio" name="radioGroup6" id="radio14">
                <label for="radio14">一个月内</label>
                <input value="两个月内" v-model="open" type="radio" name="radioGroup6" id="radio15">
                <label for="radio15">两个月内</label>
              </div>
            </li>
            <li id="ques5">
              <p class="p-title">您的投资性质是什么？</p>
              <div class="p-content">
                <input value="个人独资" v-model="nature" type="radio" name="radioGroup5" id="radio12">
                <label for="radio12">个人独资</label>
                <input value="合伙经营" v-model="nature" type="radio" name="radioGroup5" id="radio13">
                <label for="radio13">合伙经营</label>
              </div>
            </li>
            <li id="ques7">
              <p class="p-title">您愿意加入“味艺工坊”大家庭吗？</p>
              <div class="p-content">
                <input value="愿意" v-model="join1" type="radio" name="radioGroup7" id="radio16">
                <label for="radio16">愿意</label>
                <input value="不愿意" v-model="join1" type="radio" name="radioGroup7" id="radio17">
                <label for="radio17">不愿意</label>
              </div>
            </li>
          </ul>
      </div>
			<div class="btn pa">
				<router-link to="/contact" onclick="window.scrollTo(0, 0);">
					<img class="phone" src="../../static/img/common/feed.png" alt="">
				</router-link>
				<div class="click-01 dx" @click="send">
					<router-link :to="target">
						<img data-src="../../static/img/common/click1.png" alt="">
					</router-link>
				</div>
				<a href="tel:02081777164">
					<img class="feed" src="../../static/img/common/phone.png" alt="">
				</a>
       </div>
    </div>
    <div id="error" class="pf w100 fadeIn" v-text="error" v-show="showError"></div>
    <div class="success pf z9 w100 h100 oh" v-show="success">
      <!--success-->
      <div class="center">
        <img class="send-ok" data-src="static/img/question/success.png" alt="">
        <router-link tag="div" to="/feedback" class="oh fadeIn click pa">
          <img class="dx" data-src="static/img/question/click.png" alt="">
        </router-link>
      </div>

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
        experience: '',//产品体验
        budget: '',//投资预算
        support: '',//支持
        worry: '',//担心
        nature: '',//投资性质
        open: '',//开业
        join1: '',//加入
        error: '',
        showError: false,
        hours: 0,
        minutes: 0,
        seconds: 0,
        success: false
      };
    },
    methods: {
      send() {
				this.$router.push({path:'/feedback'})
        // 表单验证
        // if (this.experience ==='') {
        //   this.backTop('您是否体验过“天府烤卤”的产品？', 'ques1');
        // }else if (this.budget === '') {
        //   this.backTop('请选择您投资创业的预算！', 'ques2');
        // }else if (this.support === '') {
        //   this.backTop('请选择您希望得到的支持！', 'ques3');
        // }else if (this.worry === '') {
        //   this.backTop('请选择您最担心的方面！', 'ques4');
        // }else if (this.nature === '') {
        //   this.backTop('请选择您的投资性质！', 'ques5');
        // }else if (this.open === '') {
        //   this.backTop('请选择您开业时间！', 'ques6');
        // }else if (this.join1 === '') {
        //   this.backTop('您愿意加入“天府烤卤”大家庭吗？', 'ques7');
        // }else {
        //   // 表单验证完毕才提交数据
        //   let time = new Date();
        //   let params = new URLSearchParams();
        //   params.append('ip', returnCitySN.cip);
        //   params.append('msg_date', time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日');
        //   params.append('msg_time', this.hours + '时' + this.minutes + '分' + this.seconds + '秒');
        //   params.append('experience', this.experience);
        //   params.append('budget', this.budget);
        //   params.append('support', this.support);
        //   params.append('worry', this.worry);
        //   params.append('nature', this.nature);
        //   params.append('open', this.open);
        //   params.append('join1', this.join1);
        //   this.$ajax({
        //     method: 'post',
        //     url: 'http://case.qudao51.com/wygf/php/add.php',
        //     data: params
        //   }).then(res => {
        //     this.success = true;
        //   }).catch(err => {
        //     alert('服务器错误！');
        //   });
        // };
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
      }
    }
  };
</script>
<style scoped lang="scss">
  .question{
		height: 27.66rem;
		background: url("../../static/img/question/b.png") top/10rem no-repeat;
		position: relative;
		.btn{
			width: 100%;
			position: absolute;
			bottom: 0;
			z-index: 100;
			background: url("../../static/img/common/footer-bg-01.png") top/10rem no-repeat;
			height:4.66rem;
			display: flex;
			justify-content: space-around;
			.click-01{width:2.53rem;margin-top:1.5rem;
			// background: red;
			background: url("../../static/img/common/click1.png") top/2.53rem no-repeat;
			}
			a{
			  width:33%;
			  .phone{width:1.6rem;margin-top:2.1rem;margin-left: 1.1rem;}
			  // .click{width:2.53rem;margin-top:1.5rem;z-index: 101;}
			  .feed{width:1.6rem;margin-top:2.1rem;margin-right: 1.15rem;}
			}
		}
    .part1{
      .form-wrap{
        width:8.45rem;
        top:6.2rem;
        left:0.75rem;
        box-sizing: border-box;
        .form-ul{
          padding:3.8rem 0.27rem 1.20rem 1.5rem;
          .p-title{
            font-size:0.37rem;
            color:#3c3c3c;
            font-weight: bolder;
          }
          .p-content{
            box-sizing: border-box;
            padding:0.40rem 0;
            input[type=radio]{
              display: none;
              &+label{
                margin-left:0.67rem;
                margin-right:0.13rem;
                position: relative;
                font-size:0.35rem;
                &:before{
                  content:'';
                  border:1px solid #0c4e4a;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                  width:0.23rem;
                  height:0.23rem;
                  position: absolute;
                  left:-0.4rem;
                  top:0.09rem;
                }
              }
              &:checked+label:before{
                background:#0c4e4a;
              }
            }
          }
        }
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
    .success{
      top:0;
      left:0;
      background:url(../../static/img/common/bg.png) top/10rem repeat-y;
      .send-ok{
        width: 9.15rem;
        margin-top: 4.026667rem;
      }
      .click{
        width:2.84rem;
        left: 3.6rem;
        top: 11.5rem;
      }
    }
  }
</style>

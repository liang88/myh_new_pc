<template>
  <div id="login">
		<div class="login-wap">
			<div class="login-log clear">
				<div class="login-l-left">
					<p class="login-ll-p">
						<span @click="switchs" :class="{loginspan:1 === qie}">手机快捷登录</span>
						<span>|</span>
						<span @click="switchsTwo" :class="{loginspan:2 === qie}">账号密码登录</span>
					</p>
					<div class="login-ll-inpone">
						<input type="text" name="1" placeholder="请输入手机号" v-model="value1">
						<transition name="el-zoom-in-top">
							<div class="login-lli-message" v-show="messageShowOne">
								{{message}}
							</div>
						</transition>
					</div>
					<div class="login-ll-inpone">
						<input type="text" name="1" placeholder="请输入短信验证码" v-model="value2">
						<div class="login-lli-code" v-show="shows" @click="getCode">发送验证码</div>
						<div class="login-lli-codeTwo" v-show="!shows">{{count}}S</div>
						<transition name="el-fade-in-linear">
							<div class="el-zoom-in-top" v-show="messageShowTwo">
								{{message}}
							</div>
						</transition>
					</div>
					<div style="display:none" >{{ val }}</div>
					<div class="login-ll-agreement clear">
						<img v-show="isImg" @click="clkImg" src="static/images/firstLevelPage/a-yes.png" alt="">
						<img v-show="!isImg" @click="clkImg" src="static/images/firstLevelPage/a-no.png" alt="">
						<p>
							我已阅读并接受
							<span>《用户服务协议》</span>
							&
							<span>《隐私权条款》</span>
						</p>
					</div>
					<div class="login-ll-sub" v-if="isSub">立即登录</div>
					<div class="login-ll-subTwo" v-else>立即登录</div>
				</div>
				<div class="login-l-right">
					
				</div>
			</div>
		</div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'login',
  components: {

  },
  data () {
    return {
    	qie: 1,
    	value1: '',
    	value2: '',
    	isVal: '',
    	shows: true,
    	count: '',
    	timer: null,
    	messageShowOne: false,
    	messageShowTwo: false,
    	message: '',
    	isImg: true,
    	isSub: false,
		}
  },
  computed: {
  	val () {
  		this.isVal = Number(Boolean(this.value1))+Number(Boolean(this.value2))+Number(Boolean(this.isImg))
  	}
  },
  mounted(){

  },
  methods: {
  	switchs () {
  		this.qie = 1
  	},
  	switchsTwo () {
  		this.qie = 2
  	},
  	clkImg () {
  		this.isImg = !this.isImg
  	},
		getCode () {
			var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
			if (!this.value1) {
				this.messageShowOne = true
				this.message = '手机号不能为空'
				this.messages ()
				return
			}
			if (!reg.test(this.value1)) {
				this.messageShowOne = true
				this.message = '手机号格式不正确'
				this.messages ()
				return
			}
			const TIME_COUNT = 60;
			if (!this.timer) {
				this.count = TIME_COUNT;
				this.shows = false;
				this.timer = setInterval(() => {
					if (this.count > 0 && this.count <= TIME_COUNT) {
						this.count--;
					} else {
						this.shows = true;
						clearInterval(this.timer);
						this.timer = null;
					}
				}, 1000)
			}
		},
		messages () {
      var thats = this
      setTimeout(function () {
				thats.messageShowOne = false
				thats.messageShowTwo = false
      }, 4000)
		},
		values () {
			if (this.value1 == '' || this.value2 == '') {
				console.log(1)
			}
		}
  },
  watch: {
		isVal(newVal,oldVal){
	    if(Number(newVal) === 3){
	    	this.isSub = true
	      // 三个input框内都有值时需要做的操作
	    }else{
	    	this.isSub = false
	      // 至少一个没有值
	    }
	    // console.log(newVal,oldVal)
	  }
  },
}
</script>
<style scoped>

</style>
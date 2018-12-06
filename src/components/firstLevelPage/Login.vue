<template>
  <div id="login">
		<div class="login-wap" v-show="perfectShow">
			<div class="login-log clear" v-show="registerShow">
					<!-- 手机快捷登录 -->
				<div class="login-log-wap" v-show="logShow">
					<div v-if="qie === 1" class="login-l-left">
						<p class="login-ll-p">
							<span @click="switchs" :class="{loginspan:1 === qie}">手机快捷登录</span>
							<span>|</span>
							<span @click="switchsTwo" :class="{loginspan:2 === qie}">账号密码登录</span>
						</p>
						<div class="login-ll-inpone">
							<input type="text" name="1" placeholder="请输入手机号" v-model="valueone">
							<div class="login-lli-message" v-show="messageShow1">
								{{message}}
							</div>
						</div>
						<div class="login-ll-inpone">
							<input type="text" name="1" placeholder="请输入短信验证码" v-model="valuetwo">
							<div class="login-lli-code" v-show="shows" @click="getCode">发送验证码</div>
							<div class="login-lli-codeTwo" v-show="!shows">{{count}}S</div>
							<div class="login-lli-message" v-show="messageShow2">
								{{message}}
							</div>
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
						<div class="login-ll-sub" v-if="isSub" @click="clkLogSuccess">立即登录</div>
						<div class="login-ll-subTwo" v-else>立即登录</div>
					</div>
					<!-- 账号密码登录 -->
					<div v-else class="login-l-left">
						<p class="login-ll-p">
							<span @click="switchs" :class="{loginspan:1 === qie}">手机快捷登录</span>
							<span>|</span>
							<span @click="switchsTwo" :class="{loginspan:2 === qie}">账号密码登录</span>
						</p>
						<div class="login-ll-inpone">
							<input type="text" name="1" placeholder="请输入手机号/用户名" v-model="value1">
							<div class="login-lli-message" v-show="messageShowOne">
								{{message}}
							</div>
						</div>
						<div class="login-ll-inpone">
							<input type="text" name="2" placeholder="请输入密码" v-model="value2">
							<div class="login-lli-message" v-show="messageShowTwo">
								{{message}}
							</div>
						</div>
						<div class="login-ll-inpone clear">
							<div class="login-lli-inptwo">
								<input type="text" name="" placeholder="请输入验证码 (不区分大小写)" v-model="value3">
							</div>
							<!-- 随机验证码 -->
							<div class="login-lli-code" @click="refreshCode">
								<Codeview :identifyCode="identifyCode"></Codeview>
							</div>
							<div class="login-lli-message" v-show="messageShowThree">
								{{message}}
							</div>
						</div>
						<p class="login-ll-forget" @click="clkGetBack">忘记密码</p>
						<div style="display:none" >{{ valTwo }}</div>
						<div class="login-ll-agreement clear">
							<img v-show="isImgTwo" @click="clkImgTwo" src="static/images/firstLevelPage/a-yes.png" alt="">
							<img v-show="!isImgTwo" @click="clkImgTwo" src="static/images/firstLevelPage/a-no.png" alt="">
							<p>
								我已阅读并接受
								<span>《用户服务协议》</span>
								&
								<span>《隐私权条款》</span>
							</p>
						</div>
						<div class="login-ll-sub login-ll-subAll" v-if="isSubTwo" @click="clkLogSuccessTwo">立即登录</div>
						<div class="login-ll-subTwo login-ll-subAll" v-else>立即登录</div>
					</div>
				</div>
				<!-- 找回密码第一步 -->
				<div class="login-l-getbackone" v-show="!logShow">
					<p class="login-lg-title">找回密码</p>
					<div class="login-lg-smallwap" v-show="getbacktwoshow">
						<div class="login-lg-inpone">
							<input type="text" name="1" placeholder="请输入手机号" v-model="getbackvalue1">
							<div class="login-lgi-message" v-show="getbackmessageShow1">
								{{message}}
							</div>
						</div>
						<div class="login-lg-inpone">
							<input type="text" name="1" placeholder="请输入短信验证码" v-model="getbackvalue2">
							<div class="login-lgi-code" v-show="getbackshows" @click="getBackBetCode">发送验证码</div>
							<div class="login-lgi-codeTwo" v-show="!getbackshows">{{getbackcount}}S</div>
							<div class="login-lgi-message" v-show="getbackmessageShow2">
								{{message}}
							</div>
						</div>
						<div style="display:none" >{{ getbackval }}</div>
						<div class="login-lg-sub" v-if="getBackIsSub" @click="clkGetBackTwo">下一步</div>
						<div class="login-lg-subTwo" v-else>下一步</div>
					</div>
				<!-- 找回密码第二步 完成 -->
					<div class="login-lg-smallwap" v-show="!getbacktwoshow">
						<div class="login-lg-inpone">
							<input :type="eye" name="1" placeholder="请输入密码(6-12位字母和数字)" v-model="getbackvalueone">
							<img v-if="eyeshow" @click="clkeye" class="login-lgi-eye" src="static/images/firstLevelPage/a-eye1.png" alt="">
							<img v-else @click="clkeyeelse" class="login-lgi-eye" src="static/images/firstLevelPage/a-eye2.png" alt="">
							<div class="login-lgi-message" v-show="getbackmessageShowOne">
								{{message}}
							</div>
						</div>
						<div class="login-lg-inpone">
							<input :type="eyeTwo" name="2" placeholder="请确认密码" v-model="getbackvaluetwo">
							<img v-if="eyeshowTwo" @click="clkeyeTwo" class="login-lgi-eye" src="static/images/firstLevelPage/a-eye1.png" alt="">
							<img v-else @click="clkeyeelseTwo" class="login-lgi-eye" src="static/images/firstLevelPage/a-eye2.png" alt="">
							<div class="login-lgi-message" v-show="getbackmessageShowTwo">
								{{message}}
							</div>
						</div>
						<div style="display:none" >{{ getbackvaltwo }}</div>
						<div class="login-lg-sub" v-if="getBackIsSubTwo" @click="clkGetBackEase">完成</div>
						<div class="login-lg-subTwo" v-else>完成</div>
					</div>
				</div>
				<!-- 第三方登录 -->
				<div class="login-l-right">
					<div class="login-lr-erweima">
						<img src="static/images/firstLevelPage/erweima.png" alt="">
						<div class="login-lre-bgfff">
							<div>
								<p>二维码已失效</p>
								<p>刷新</p>
							</div>
						</div>
					</div>
					<p class="login-lr-p">打开手机满易房扫码</p>
					<p class="login-lr-p">安全登录</p>
					<div class="login-lr-threelog">
						<p>第三方登录</p>
					</div>
					<div class="login-lr-qqweixin">
						<img @click="clkThreeLogSuccess" src="static/images/firstLevelPage/a-wx.png" alt="">
						<div id="login_container">
							
						</div>
						<img src="static/images/firstLevelPage/a-qq.png" alt="">
						<img src="static/images/firstLevelPage/a-wb.png" alt="">
					</div>
					<div class="login-lr-zhuce clear" @click="clkLogin">
						<p>立即注册<img src="static/images/firstLevelPage/a-next.png" alt=""></p>
					</div>
					<p class="login-lr-or">or</p>
				</div>
			</div>
			<div class="login-register clear" v-show="!registerShow">
				<div class="login-r-left">
					<p class="login-rl-p">
						注册账号
					</p>
					<div class="login-rl-inpone">
						<input type="text" name="1" placeholder="请输入手机号" v-model="registervalue1">
						<div class="login-rli-message" v-show="registermessageShow1">
							{{message}}
						</div>
					</div>
					<div class="login-rl-inpone">
						<input type="text" name="1" placeholder="请输入短信验证码" v-model="registervalue2">
						<div class="login-rli-code" v-show="registershows" @click="registerCode">发送验证码</div>
						<div class="login-rli-codeTwo" v-show="!registershows">{{registercount}}S</div>
						<div class="login-rli-message" v-show="registermessageShow2">
							{{message}}
						</div>
					</div>
					<div class="login-rl-inpone">
						<input type="text" name="1" placeholder="请输入用户名" v-model="registervalue3">
						<div class="login-rli-message" v-show="registermessageShow3">
							{{message}}
						</div>
					</div>
					<div class="login-rl-inpone">
						<input :type="registereye" name="1" placeholder="请输入密码(6-12位字母和数字)" v-model="registervalue4">
						<img v-if="registereyeshow" @click="clkregistereye" class="login-rli-eye" src="static/images/firstLevelPage/a-eye1.png" alt="">
						<img v-else @click="clkregistereyeelse" class="login-rli-eye" src="static/images/firstLevelPage/a-eye2.png" alt="">
						<div class="login-rli-message" v-show="registermessageShow4">
							{{message}}
						</div>
					</div>
					<div class="login-rl-inpone">
						<input :type="registereyeTwo" name="2" placeholder="请确认密码" v-model="registervalue5">
						<img v-if="registereyeshowTwo" @click="clkregistereyeTwo" class="login-rli-eye" src="static/images/firstLevelPage/a-eye1.png" alt="">
						<img v-else @click="clkregistereyeelseTwo" class="login-rli-eye" src="static/images/firstLevelPage/a-eye2.png" alt="">
						<div class="login-rli-message" v-show="registermessageShow5">
							{{message}}
						</div>
					</div>
					<div class="login-rl-agreement clear">
						<img v-show="isImgRegister" @click="clkregisterImg" src="static/images/firstLevelPage/a-yes.png" alt="">
						<img v-show="!isImgRegister" @click="clkregisterImg" src="static/images/firstLevelPage/a-no.png" alt="">
						<p>
							我已阅读并接受
							<span>《用户服务协议》</span>
							&
							<span>《隐私权条款》</span>
						</p>
					</div>
					<div style="display:none" >{{ registerval }}</div>
					<div class="login-rl-sub" v-if="registerisSub">立即登录</div>
					<div class="login-rl-subTwo" v-else>立即登录</div>
				</div>
				<div class="login-r-right">
					<div class="login-rr-erweima">
						<img src="static/images/firstLevelPage/erweima.png" alt="">
					</div>
					<p class="login-rr-title">扫码下载满易房APP</p>
					<div class="login-rr-denglu clear" @click="clkRegister">
						<p>去登录<img src="static/images/firstLevelPage/a-next.png" alt=""></p>
					</div>
					<p class="login-rr-or">or</p>
				</div>
			</div>
		</div>
		<div class="login-wap" v-show="!perfectShow">
			<div class="login-perfect">
				<p class="login-p-p">完善资料</p>
				<p class="login-p-ptwo"><span v-show="isLogAll">可获得更多权限和服务</span><span v-show="!isLogAll">您的手机号首次登录自动注册，请完善资料</span></p>
				<div v-show="isLogAll" class="login-p-inpone">
					<input type="text" name="1" placeholder="请输入手机号" v-model="perjectvalue1">
					<div class="login-pi-message" v-show="perjectmessageShow1">
						{{message}}
					</div>
				</div>
				<div v-show="isLogAll" class="login-p-inpone">
					<input type="text" name="2" placeholder="请输入短信验证码" v-model="perjectvalue2">
					<div class="login-pi-code" v-show="perjectshows" @click="perjectCode">发送验证码</div>
					<div class="login-pi-codeTwo" v-show="!perjectshows">{{perjectcount}}S</div>
					<div class="login-pi-message" v-show="perjectmessageShow2">
						{{message}}
					</div>
				</div>
				<div class="login-p-inpone">
					<input type="text" name="3" placeholder="请输入用户名" v-model="perjectvalue3">
					<div class="login-pi-message" v-show="perjectmessageShow3">
						{{message}}
					</div>
				</div>
				<div class="login-p-inpone">
					<input :type="perjecteye" name="1" placeholder="请输入密码(6-12位字母和数字)" v-model="perjectvalue4">
					<img v-if="perjecteyeshow" @click="clkperjecteye" class="login-pi-eye" src="static/images/firstLevelPage/a-eye1.png" alt="">
					<img v-else @click="clkperjecteyeelse" class="login-pi-eye" src="static/images/firstLevelPage/a-eye2.png" alt="">
					<div class="login-pi-message" v-show="perjectmessageShow4">
						{{message}}
					</div>
				</div>
				<div class="login-p-inpone">
					<input :type="perjecteyeTwo" name="2" placeholder="请确认密码" v-model="perjectvalue5">
					<img v-if="perjecteyeshowTwo" @click="clkperjecteyeTwo" class="login-pi-eye" src="static/images/firstLevelPage/a-eye1.png" alt="">
					<img v-else @click="clkperjecteyeelseTwo" class="login-pi-eye" src="static/images/firstLevelPage/a-eye2.png" alt="">
					<div class="login-pi-message" v-show="perjectmessageShow5">
						{{message}}
					</div>
				</div>
				<div class="login-p-agreement clear">
					<img v-show="isImgPerject" @click="clkperjectImg" src="static/images/firstLevelPage/a-yes.png" alt="">
					<img v-show="!isImgPerject" @click="clkperjectImg" src="static/images/firstLevelPage/a-no.png" alt="">
					<p>
						我已阅读并接受
						<span>《用户服务协议》</span>
						&
						<span>《隐私权条款》</span>
					</p>
				</div>
				<div style="display:none" >{{ perjectval }}</div>
				<div style="display:none" >{{ perjectvalTwo }}</div>
				<div v-show="isLogAll" class="login-p-sub" v-if="perjectisSub">完成</div>
				<div v-show="isLogAll" class="login-p-subTwo" v-else>完成</div>
				<div v-show="!isLogAll" class="login-p-sub" v-if="perjectisSubTwo">完成</div>
				<div v-show="!isLogAll" class="login-p-subTwo" v-else>完成</div>
				<!-- 关闭按钮 -->
				<div class="login-p-close" @click="popShow=true">
					<img src="static/images/firstLevelPage/a-close.png" alt="">
				</div>
				<!-- 关闭提示层 -->
				<transition name="el-zoom-in-center">
					<div class="login-p-pop" v-show="popShow">
						<div class="login-pp-message">
							<p>后期您可以在个人中心继续完善资料</p>
							<div class="login-ppm-but" @click="clkpop">知道了</div>
						</div>
					</div>
				</transition>
			</div>
		</div>
  </div>
</template>
<script type="text/javascript">
import Codeview from './public/Code.vue'
export default {
  name: 'login',
  components: {
  	Codeview
  },
  data () {
    return {
      identifyCodes: "1234567890abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      identifyCode: "",
    	qie: 1,
    	valueone: '',
    	valuetwo: '',
    	value1: '',
    	value2: '',
    	value3: '',
    	getbackvalue1: '',
    	getbackvalue2: '',
    	getbackvalueone: '',
    	getbackvaluetwo: '',
    	registervalue1: '',
    	registervalue2: '',
    	registervalue3: '',
    	registervalue4: '',
    	registervalue5: '',
    	perjectvalue1: '',
    	perjectvalue2: '',
    	perjectvalue3: '',
    	perjectvalue4: '',
    	perjectvalue5: '',
    	isVal: '',
    	isValTwo: '',
    	isValThree: '',
    	isValfore: '',
    	isValfive: '',
    	isValsix: '',
    	isValseven: '',
    	shows: true,
    	getbackshows: true,
    	registershows: true,
    	perjectshows: true,
    	count: '',
    	getbackcount: '',
    	registercount: '',
    	perjectcount: '',
    	timer: null,
    	getbacktimer: null,
    	registertimer: null,
    	perjecttimer: null,
    	messageShow1: false,
    	messageShow2: false,
    	messageShowOne: false,
    	messageShowTwo: false,
    	messageShowThree: false,
    	getbackmessageShow1: false,
    	getbackmessageShow2: false,
    	getbackmessageShowOne: false,
    	getbackmessageShowTwo: false,
    	registermessageShow1: false,
    	registermessageShow2: false,
    	registermessageShow3: false,
    	registermessageShow4: false,
    	registermessageShow5: false,
    	perjectmessageShow1: false,
    	perjectmessageShow2: false,
    	perjectmessageShow3: false,
    	perjectmessageShow4: false,
    	perjectmessageShow5: false,
    	message: '',
    	isImg: true,
    	isImgTwo: true,
    	isImgRegister: true,
    	isImgPerject: true,
    	isSub: false,
    	isSubTwo: false,
    	getBackIsSub: false,
    	getBackIsSubTwo: false,
    	registerisSub: false,
    	perjectisSub: false,
    	perjectisSubTwo: false,
    	logShow: true,
    	getbacktwoshow: true,
    	eye: 'password',
    	eyeTwo: 'password',
    	registereye: 'password',
    	registereyeTwo: 'password',
    	perjecteye: 'password',
    	perjecteyeTwo: 'password',
    	eyeshow: true,
    	eyeshowTwo: true,
    	registereyeshow: true,
    	registereyeshowTwo: true,
    	perjecteyeshow: true,
    	perjecteyeshowTwo: true,
    	registerShow: true,
    	perfectShow: true,
    	popShow: false,
    	isLogAll: false,
		}
  },
  computed: {
  	// 手机快捷登录监听变化
  	val () {
  		this.isVal = Number(Boolean(this.valueone))+Number(Boolean(this.valuetwo))+Number(Boolean(this.isImg))
  	},
  	// 账号密码登录监听变化
  	valTwo () {
  		this.isValTwo = Number(Boolean(this.value1))+Number(Boolean(this.value2))+Number(Boolean(this.value3))+Number(Boolean(this.isImgTwo))
  	},
  	// 找回密码第一步监听变化
  	getbackval () {
  		this.isValThree = Number(Boolean(this.getbackvalue1))+Number(Boolean(this.getbackvalue2))
  	},
  	// 找回密码第二步监听变化
  	getbackvaltwo () {
  		this.isValfore = Number(Boolean(this.getbackvalueone))+Number(Boolean(this.getbackvaluetwo))
  	},
  	// 注册监听变化
  	registerval () {
  		this.isValfive = Number(Boolean(this.registervalue1))+Number(Boolean(this.registervalue2))+Number(Boolean(this.registervalue3))+Number(Boolean(this.registervalue4))+Number(Boolean(this.registervalue5))+Number(Boolean(this.isImgRegister))
  	},
  	perjectval () {
  		this.isValsix = Number(Boolean(this.perjectvalue1))+Number(Boolean(this.perjectvalue2))+Number(Boolean(this.perjectvalue3))+Number(Boolean(this.perjectvalue4))+Number(Boolean(this.perjectvalue5))+Number(Boolean(this.isImgPerject))
  	},
  	perjectvalTwo () {
  		this.isValseven = Number(Boolean(this.perjectvalue3))+Number(Boolean(this.perjectvalue4))+Number(Boolean(this.perjectvalue5))+Number(Boolean(this.isImgPerject))
  	},
  },
  mounted(){
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    // const root = process.env.API_ROOT;
    // console.log(root)
   //  this.$post('http://www.manyihefc.com:8080/myh_management/agentLoginVsCode',{
			// loginMobile: 1,
			// password: 1,
			// valiCode: 123123,
			// clientType: 2
   //  }).then(response => {
   //  	console.log(response)
   //  	console.log(this.$url)
   //  })
  },
  methods: {
  	// 随机验证码部分
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      // console.log(this.identifyCode);
    },
  	// 切换手机登录和账号密码登录
  	switchs () {
  		this.qie = 1
  	},
  	switchsTwo () {
  		this.qie = 2
  	},
  	// 手机号快捷登录协议切换
  	clkImg () {
  		this.isImg = !this.isImg
  	},
  	// 账号密码登录协议切换
  	clkImgTwo () {
  		this.isImgTwo = !this.isImgTwo
  	},
  	// 注册协议切换
  	clkregisterImg () {
  		this.isImgRegister = !this.isImgRegister
  	},
  	// 完善信息协议切换
  	clkperjectImg () {
  		this.isImgPerject = !this.isImgPerject
  	},
  	//找回密码 and 登录切换
  	clkGetBack () {
  		this.logShow = !this.logShow
  	},
  	//找回密码 完成 and 登录切换
  	clkGetBackEase () {
  		this.logShow = !this.logShow
  		this.getbacktwoshow = true
  		this.eyeshow = true
  		this.eyeshowTwo = true
  		this.eye = 'password'
  		this.eyeTwo = 'password'
  	},
  	// 找回密码第二步
  	clkGetBackTwo () {
  		this.getbacktwoshow = !this.getbacktwoshow
  	},
  	// 找回密码1眼睛睁开/关闭
  	clkeye () {
  		this.eyeshow = !this.eyeshow
  		this.eye = 'text'
  	},
  	// 找回密码1眼睛睁开/关闭
  	clkeyeelse () {
  		this.eyeshow = !this.eyeshow
  		this.eye = 'password'
  	},
  	// 找回密码2眼睛睁开/关闭
  	clkeyeTwo () {
  		this.eyeshowTwo = !this.eyeshowTwo
  		this.eyeTwo = 'text'
  	},
  	// 找回密码2眼睛睁开/关闭
  	clkeyeelseTwo () {
  		this.eyeshowTwo = !this.eyeshowTwo
  		this.eyeTwo = 'password'
  	},
  	// 注册密码1眼睛睁开/关闭
  	clkregistereye () {
  		this.registereyeshow = !this.registereyeshow
  		this.registereye = 'text'
  	},
  	// 注册密码1眼睛睁开/关闭
  	clkregistereyeelse () {
  		this.registereyeshow = !this.registereyeshow
  		this.registereye = 'password'
  	},
  	// 注册密码2眼睛睁开/关闭
  	clkregistereyeTwo () {
  		this.registereyeshowTwo = !this.registereyeshowTwo
  		this.registereyeTwo = 'text'
  	},
  	// 注册密码2眼睛睁开/关闭
  	clkregistereyeelseTwo () {
  		this.registereyeshowTwo = !this.registereyeshowTwo
  		this.registereyeTwo = 'password'
  	},
  	// 完善信息1眼睛睁开/关闭
  	clkperjecteye () {
  		this.perjecteyeshow = !this.perjecteyeshow
  		this.perjecteye = 'text'
  	},
  	// 完善信息1眼睛睁开/关闭
  	clkperjecteyeelse () {
  		this.perjecteyeshow = !this.perjecteyeshow
  		this.perjecteye = 'password'
  	},
  	// 完善信息2眼睛睁开/关闭
  	clkperjecteyeTwo () {
  		this.perjecteyeshowTwo = !this.perjecteyeshowTwo
  		this.perjecteyeTwo = 'text'
  	},
  	// 完善信息2眼睛睁开/关闭
  	clkperjecteyeelseTwo () {
  		this.perjecteyeshowTwo = !this.perjecteyeshowTwo
  		this.perjecteyeTwo = 'password'
  	},
  	// 跳转到注册页面
  	clkLogin () {
  		this.registerShow = !this.registerShow
  	},
  	// 跳转到登录页面
  	clkRegister () {
  		this.registerShow = !this.registerShow
  		if (this.logShow == false) {
  			this.logShow = !this.logShow
  		}
  	},
  	// 取消完善信息 跳到首页
  	clkpop () {
  		this.popShow = !this.popShow
  		this.$router.push('/')
  	},
  	// 手机快捷登录成功 跳转到完善信息
  	clkLogSuccess () {
			var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
			if (!reg.test(this.valueone)) {
				this.messageShow1 = true
				this.message = '请输入正确的手机号'
				this.messages ()
				return
			}
			if (this.valuetwo.length !== 6) {
				this.messageShow2 = true
				this.message = '验证码格式不正确'
				this.messages ()
				return
			}
  		this.perfectShow = !this.perfectShow
  		this.isLogAll = false
  	},
  	// 账号密码登录成功 跳转到首页
  	clkLogSuccessTwo () {
			var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
			if (!reg.test(this.value1)) {
				this.messageShowOne = true
				this.message = '请输入正确的手机号'
				this.messages ()
				return
			}
			if (this.value2.length < 6 || this.value2.length > 12) {
				this.messageShowTwo = true
				this.message = '密码格式不正确，请输入6-12字母和数字'
				this.messages ()
				return
			}
			// console.log(this.value3.toUpperCase())
			// console.log(this.identifyCode.toUpperCase())
			if (this.value3.toUpperCase() !== this.identifyCode.toUpperCase()) {
				this.messageShowThree = true
				this.message = '输入的验证码不正确，请重新输入'
				this.messages ()
	      this.identifyCode = "";
	      this.makeCode(this.identifyCodes, 4);
				return
			}
			// console.log(this.identifyCode)
  		this.$router.push('/')
  	},
  	// 第三方登录成功 跳转到完善信息
  	clkThreeLogSuccess () {
  		this.perfectShow = !this.perfectShow
  		this.isLogAll = true
			// var obj = new WxLogin({
			// 	self_redirect:false,
			// 	id:"login_container",
			// 	appid: "wxe94d1868465fcec1",
			// 	scope: "snsapi_login",
			// 	redirect_uri: "http%3a%2f%2flocalhost%3a8080",
			// 	state: "1234557",
			// 	style: "",
			// 	href: ""
			// })
			// this.$get('/connect/qrconnect?appid='+'wxe94d1868465fcec1'+'&redirect_u ri='+'http%3a%2f%2flocalhost%3a8080'+'&response_type=code'+'&scope=snsapi_login'+'#wechat_redirect').then(response => {
			// 	// console.log(response)
			// })
			// this.$get('/sns/oauth2/access_token?appid=wxe94d1868465fcec1&secret=215ba04d5f4fdde8e84dbeee726f7ea4&code=021mltvr0kRF1f1Yxnur0khxvr0mltvd&grant_type=a021mltvr0kRF1f1Yxnur0khxvr0mltvd').then(response => {
			// 	console.log(response)
			// })
  	},
  	// 手机快捷登录验证码倒计时 and 手机号验证
		getCode () {
			var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
			if (!reg.test(this.valueone)) {
				this.messageShow1 = true
				this.message = '请输入正确的手机号'
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
  	// 找回密码验证码倒计时 and 手机号验证
		getBackBetCode () {
			var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
			if (!reg.test(this.getbackvalue1)) {
				this.getbackmessageShow1 = true
				this.message = '请输入正确的手机号'
				this.messages ()
				return
			}
			const TIME_COUNT = 60;
			if (!this.getbacktimer) {
				this.getbackcount = TIME_COUNT;
				this.getbackshows = false;
				this.getbacktimer = setInterval(() => {
					if (this.getbackcount > 0 && this.getbackcount <= TIME_COUNT) {
						this.getbackcount--;
					} else {
						this.getbackshows = true;
						clearInterval(this.getbacktimer);
						this.getbacktimer = null;
					}
				}, 1000)
			}
		},
  	// 注册验证码倒计时 and 手机号验证
		registerCode () {
			var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
			if (!reg.test(this.registervalue1)) {
				this.registermessageShow1 = true
				this.message = '请输入正确的手机号'
				this.messages ()
				return
			}
			const TIME_COUNT = 60;
			if (!this.registertimer) {
				this.registercount = TIME_COUNT;
				this.registershows = false;
				this.registertimer = setInterval(() => {
					if (this.registercount > 0 && this.registercount <= TIME_COUNT) {
						this.registercount--;
					} else {
						this.registershows = true;
						clearInterval(this.registertimer);
						this.registertimer = null;
					}
				}, 1000)
			}
		},
  	// 注册验证码倒计时 and 手机号验证
		perjectCode () {
			var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
			if (!reg.test(this.perjectvalue1)) {
				this.perjectmessageShow1 = true
				this.message = '请输入正确的手机号'
				this.messages ()
				return
			}
			const TIME_COUNT = 60;
			if (!this.perjecttimer) {
				console.log(1)
				this.perjectcount = TIME_COUNT;
				this.perjectshows = false;
				this.perjecttimer = setInterval(() => {
					if (this.perjectcount > 0 && this.perjectcount <= TIME_COUNT) {
						this.perjectcount--;
					} else {
						this.perjectshows = true;
						clearInterval(this.perjecttimer);
						this.perjecttimer = null;
					}
				}, 1000)
			}
		},
		// 倒计时4秒message信息隐藏
		messages () {
      var thats = this
      setTimeout(function () {
				thats.messageShow1 = false
				thats.messageShow2 = false
				thats.messageShowOne = false
				thats.messageShowTwo = false
				thats.messageShowThree = false
				thats.getbackmessageShow1 = false
				thats.getbackmessageShow2 = false
				thats.getbackmessageShowOne = false
				thats.getbackmessageShowTwo = false
				thats.registermessageShow1 = false
				thats.registermessageShow2 = false
				thats.registermessageShow3 = false
				thats.registermessageShow4 = false
				thats.registermessageShow5 = false
				thats.perjectmessageShow1 = false
				thats.perjectmessageShow2 = false
				thats.perjectmessageShow3 = false
				thats.perjectmessageShow4 = false
				thats.perjectmessageShow5 = false
      }, 4000)
		},
  },
  watch: {
  	// 监听手机快捷登录表单
		isVal(newVal,oldVal){
			// console.log(newVal)
	    if(Number(newVal) === 3){
	    	this.isSub = true
	      // 三个input框内都有值时需要做的操作
	    }else{
	    	this.isSub = false
	      // 至少一个没有值
	    }
	    // console.log(newVal,oldVal)
	  },
  	// 监听账号密码登录表单
		isValTwo(newVal,oldVal){
	    if(Number(newVal) === 4){
	    	this.isSubTwo = true
	      // 三个input框内都有值时需要做的操作
	    }else{
	    	this.isSubTwo = false
	      // 至少一个没有值
	    }
	    // console.log(newVal,oldVal)
	  },
  	// 监听找回密码第一步表单
		isValThree(newVal,oldVal){
	    if(Number(newVal) === 2){
	    	this.getBackIsSub = true
	      // 三个input框内都有值时需要做的操作
	    }else{
	    	this.getBackIsSub = false
	      // 至少一个没有值
	    }
	    // console.log(newVal,oldVal)
	  },
  	// 监听找回密码第二步表单
		isValfore(newVal,oldVal){
			// console.log(newVal)
	    if(Number(newVal) === 2){
	    	this.getBackIsSubTwo = true
	      // 三个input框内都有值时需要做的操作
	    }else{
	    	this.getBackIsSubTwo = false
	      // 至少一个没有值
	    }
	    // console.log(newVal,oldVal)
	  },
  	// 监听注册表单
		isValfive(newVal,oldVal){
			// console.log(newVal)
	    if(Number(newVal) === 6){
	    	this.registerisSub = true
	      // 三个input框内都有值时需要做的操作
	    }else{
	    	this.registerisSub = false
	      // 至少一个没有值
	    }
	    // console.log(newVal,oldVal)
	  },
  	// 监听完善信息 第三方登录调到的 表单
		isValsix(newVal,oldVal){
			// console.log(newVal)
	    if(Number(newVal) === 6){
	    	this.perjectisSub = true
	      // 三个input框内都有值时需要做的操作
	    }else{
	    	this.perjectisSub = false
	      // 至少一个没有值
	    }
	    // console.log(newVal,oldVal)
	  },
  	// 监听完善信息 手机快捷登录的 表单
		isValseven(newVal,oldVal){
			// console.log(newVal)
	    if(Number(newVal) === 4){
	    	this.perjectisSubTwo = true
	      // 三个input框内都有值时需要做的操作
	    }else{
	    	this.perjectisSubTwo = false
	      // 至少一个没有值
	    }
	    // console.log(newVal,oldVal)
	  }
  },
}
</script>
<style scoped>
	#login_container{
		background: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 999;
	}
</style>
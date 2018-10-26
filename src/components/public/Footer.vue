<template>
  <div id="footer">
    <div class="footer-wap">
    	<div class="footer-wap-center">
    		<div class="footer-wap-tbcener">
    			<div class="footer-wap-tbc-left">
    				<p>
    					<span>关于我们</span>
    					<span>联系我们</span>
    					<span>用户协议</span>
    					<span>意见反馈</span>
    					<span>售后服务</span>
    					<span>友情链接</span>
    				</p>
    				<p>地址 ：北京顺义南法信天博中心A座902  </p>
    				<p>电话 ：010-51322711</p>
    				<p>北京满易何房地产经纪有限公司 &nbsp;&nbsp; 版权所有 &nbsp;&nbsp; 京ICP备18008272号-2</p>
    			</div>
    			<div class="footer-wap-tbc-right">
    				<div class="footer-wap-tbc-r-left">
    					<img src="/static/images/public/erweima.png" alt="">
    					<p>APP下载</p>
    				</div>
    				<div class="footer-wap-tbc-r-right">
    					<img src="/static/images/public/erweima.png" alt="">
    					<p>微信公众号</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <el-collapse-transition>
	    <div class="footer-fixd" v-show="apponload">
	    	<div class="footer-f-center">
	    		<img src="/static/images/public/phonebig.png" alt="">
	    		<div class="footer-f-c-mleft">
	    			<p>扫码下载<span>满易房APP</span></p>
	    			<p>随时随地，掌握最新房产信息</p>
	    		</div>
	    		<div class="footer-f-c-mright">
	    			<img class="erweimas" src="/static/images/public/erweima.png" alt="">
	    		</div>
	    		<div class="footer-cha">
	    			<img src="/static/images/public/cha.png" @click="appOnload" alt="">
	    		</div>
	    	</div>
	    </div>
	  </el-collapse-transition>
	  <div class="footer-fantop">
	  	<div class="footer-f-dan">
		  	<div>
		  		<img src="/static/images/public/erweima.png" alt="">
		  		<p>APP下载</p>
		  	</div>
	  	</div>
	  	<div class="footer-f-dan">
		  	<div>
		  		<img src="/static/images/public/kanfang.png" alt="">
		  		<p>我要看房</p>
		  	</div>
	  	</div>
	  	<div class="footer-f-dan">
		  	<div>
		  		<img src="/static/images/public/fankui.png" alt="">
		  		<p>反馈</p>
		  	</div>
	  	</div>
	  	<div class="footer-f-dan">
		  	<div>
		  		<img src="/static/images/public/kefu.png" alt="">
		  		<p>客服</p>
		  	</div>
	  	</div>
	  	<transition name="el-fade-in-linear">
		  	<div v-show="showTop" class="footer-f-dan" @click="toTop">
			  	<div>
			  		<img src="/static/images/public/top.png" alt="">
			  		<p>返回顶部</p>
			  	</div>
		  	</div>
	  	</transition>
	  </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Footer',
  data () {
  	return {
  		apponload: true,
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0,
  	}
  },
  computed:{
    showTop: function(){
      let value = this.scrollTop>1000?true:false;
      return value;
    },
  },
  mounted () {
  	window.addEventListener('scroll', this.getScrollTop);
  },
  methods: {
  	appOnload () {
  		this.apponload = false
  	},
    toTop(e) {
      if(!!this.scrollState){
        return;
      }
      this.scrollState = 1;
      e.preventDefault();
      let distance = document.documentElement.scrollTop || document.body.scrollTop;
      let _this = this;
      this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 10);
    },
    gotoTop(distance){
      this.dParams += 5;
      distance = distance>0 ? distance : 0;
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
      if(this.scrollTop < 10){
        clearInterval(this.time);
        this.dParams = 20;
        this.scrollState = 0;
      }
    },
    getScrollTop() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
}
</script>
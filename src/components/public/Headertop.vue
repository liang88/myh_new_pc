<template>
  <div id="headertop">
    <div class="headtop-wap">
      <div class="headtop-center clear">
      	<div class="headertop-c-left">
      	  <p>
      	  	<img src="/static/images/public/position.png" alt="">
      	  	北京
      	  </p>
      	  <router-link tag="p" to="/Login">请登录</router-link>
      	  <p>注册</p>
      	</div>
      	<div class="headertop-c-right">
      	  <div class="headertop-c-r-p">我的足迹</div>
      	  <div class="headertop-c-r-p" @click="xiaLa">
            我的关注
            <el-collapse-transition>
              <ul class="headertop-dropone" v-show="xiala">
                <li>我的交易</li>
                <li>我的委托</li>
                <li>我的足迹</li>
              </ul>
            </el-collapse-transition>
          </div>
      	  <div class="headertop-c-r-p">我的委托</div>
      	  <div class="headertop-c-r-p">联系客服</div>
      	</div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Headertop',
  data () {
  	return {
  		xiala: false,
  	}
  },
  mounted(){

  },
  methods: {
  	xiaLa () {
  		this.xiala = !this.xiala
  	}
  }
}
</script>
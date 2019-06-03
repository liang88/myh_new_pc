<template>
  <div id="header">
		<div class="header-wap" :style="{background:bgcolor}">
			<div class="header-wap-center">
				<div class="header-w-top clear">
					<router-link tag="div" to="/" class="header-w-t-left" >
						<img src="/static/images/public/logo.png" alt="">
					</router-link>
					<div class="header-w-t-center">
						<div class="header-w-t-c-top clear">
							<p @click="xiaLa">
								<span>新房</span>
								<el-collapse-transition>
									<ul class="clear" v-show="xiala">
                    <li>新房</li>
										<li>二手房</li>
										<li>租房</li>
                    <li>找小区</li>
										<li>找经纪人</li>
									</ul>
								</el-collapse-transition>
							</p>
							<input type="text" name="" placeholder="请输入楼盘名称、区域或商圈">
							<p><img src="static/images/public/search.png" alt=""></p>
						</div>
						<!-- <p class="header-w-map"><img src="static/images/public/position.png" alt="">地图找房</p> -->
						<p class="header-w-mai">我要卖房</p>
						<p class="header-w-zu">我要出租</p>
						<div class="header-w-t-c-bottom">
							<ul class="clear">
								<li>地铁房</li>
								<li>VR房</li>
								<li>满五</li>
								<li>小户型</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="header-w-bottom">
					<ul class="clear">
						<li v-for="(item,index) in todoData" @click="addClass(index)" :class="{hovers:index === cour}" :key="item.index">
							<router-link tag="span" :to="{path:item.path}">{{item.text}}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Header',
  data () {
  	return {
  		xiala: false,
  		cour: 0,
  		bgcolor: '#fff',
  		todoData: [
  			{
  				name: 0,
  				text: '首页',
  				path: '/',
  			},
  			{
  				index: 1,
  				text: '新房',
  				path: '/Newhouse/',
  			},
  			{
  				index: 2,
  				text: '二手房',
  				path: '/Oldhouse/',
  			},
  			{
  				index: 3,
  				text: '租房',
  				path: '/Newhouse/',
  			},
  			{
  				index: 4,
  				text: '找小区',
  				path: '/Newhouse/',
  			},
  			{
  				index: 5,
  				text: '最新开盘',
  				path: '/Newhouse/',
  			},
  			{
  				index: 9,
  				text: '房产工具',
  				path: '/Newhouse/',
  			},
  			{
  				index: 10,
  				text: '找经纪人',
  				path: '/Newhouse/',
  			},
  			{
  				index: 11,
  				text: '商家入驻',
  				path: '/Newhouse/',
  			},
  			{
  				index: 12,
  				text: '资讯',
  				path: '/Newhouse/',
  			},
  		]
  	}
  },
  mounted(){
  	// if (this.cour !== this.todoData.index) {
  	// 	this.$router.push('/')
  	// 	console.log(this.todoData.index)
  	// }
  },
  methods: {
  	xiaLa () {
  		this.xiala = !this.xiala
  	},
  	addClass (index) {
  		this.cour = index
  	}
  },
	watch: {
		'$route' (to, from) {
			if (this.$route.path == '/Index' || this.$route.path == '/') {
				this.bgcolor = '#f5f5f5'
			} else {
				this.bgcolor = '#f5f5f5'
			}
			this.cour = to.name
		}
	}
}
</script>
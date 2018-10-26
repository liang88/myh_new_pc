<template>
  <div id="newhousedetails">
		<div class="newhousedetails-wap">
			<div class="newhousedetails-w-mianbao">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
				  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
				  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
				  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<p class="newhousedetails-w-title">瑞悦华府 精装修 带电梯</p>
			<div class="newhousedetails-w-number clear">
				<p class="newhousedetails-wn-left">房源编号：123456789</p>
				<div class="newhousedetails-wn-right">
					<p @click="FxShow" class="newhousedetails-wnr-p"><img src="static/images/firstLevelPage/secondLevelPage/b-fenxiang.png" alt="">
						分享
						<el-collapse-transition>
							<ul v-show="fxShow">
								<li>
									<img src="static/images/firstLevelPage/secondLevelPage/erweima.png" alt="">
									<p>分享到微信好友</p>
								</li>
								<li title="点击分享">
									<img src="static/images/firstLevelPage/secondLevelPage/lang.png" alt="">
									<p>微博</p>
								</li>
								<li title="点击复制">
									<img src="static/images/firstLevelPage/secondLevelPage/chaolianjie.png" alt="">
									<p>复制链接</p>
								</li>
							</ul>
						</el-collapse-transition>
					</p>
					<p class="newhousedetails-wnr-p"><img src="static/images/firstLevelPage/secondLevelPage/a-follow1.png" alt="">关注</p>
				</div>
			</div>
			<div class="newhousedetails-w-swiper clear">
				<div class="newhousedetails-ws-left">
					<Houseswiperview :slides="slides"></Houseswiperview>
				</div>
				<div class="newhousedetails-ws-right">
					<div class="newhousedetails-wsr-one clear	">
						<p>总价<span>650</span><span>万</span></p>
						<p>单价40000元/㎡</p>
						<p><img src="static/images/firstLevelPage/secondLevelPage/c-computed.png" alt="">房贷计算</p>
					</div>
					<div class="newhousedetails-wsr-two">
						<p>近地铁</p>
						<p>南北通透</p>
						<p>精装修</p>
					</div>
					<div class="newhousedetails-wsr-table">
						<table border="0">
						  <tr>
						    <td>户型</td>
						    <td>2室1厅</td>
						    <td>面积</td>
						    <td>112㎡</td>
						  </tr>
						  <tr>
						    <td>楼层</td>
						    <td>16层/共28层</td>
						    <td>朝向</td>
						    <td>南北通透</td>
						  </tr>
						  <tr>
						    <td>小区</td>
						    <td>辉光小区<span>地图</span></td>
						    <td>装修</td>
						    <td>精装</td>
						  </tr>
						  <tr>
						    <td>年代</td>
						    <td>2018年建</td>
						    <td>建筑类型</td>
						    <td>板楼</td>
						  </tr>
						  <tr>
						    <td>商圈</td>
						    <td>东直门</td>
						    <td>看房时间</td>
						    <td>随时看房</td>
						  </tr>
						  <tr>
						    <td>交通</td>
						    <td colspan="3">距东直门地铁800米</td>
					<!-- 	    <td>面积</td>
						    <td>112㎡</td> -->
						  </tr>
						  <tr>
						    <td>点评</td>
						    <td>10条点评<span>查看点评</span></td>
						    <td>发布时间</td>
						    <td>12天	前</td>
						  </tr>
						</table>
					</div>
					<p class="newhousedetails-wsr-mall"><span>更多房源信息 》</span></p>
					<div class="newhousedetails-wsr-phone">
						400-1133-233<span> 转 </span>66888
					</div>
				</div>
			</div>
		</div>
		<div class="newhousedetails-nav">
			<div class="newhousedetails-n-fixd">
				<div class="newhousedetails-nf-center">
					<a v-for="(item,index) in smallNavs" :href="item.to" @click="addClass(index)" :class="{newhouseColor:index === cour}">{{item.text}}</a>
				</div>
			</div>
		</div>
		<div class="newhousedetails-smallmodel">
			<div class="newhousedetails-s-center">
				<p class="newhousedetails-sc-title" id="middleman">经纪人</p>
				<div class="newhousedetails-sc-swiper">
					<!-- 经纪人swiper -->
					<Middlemanswiper :middlemanslides="middlemanslides"></Middlemanswiper>
				</div>
				<p class="newhousedetails-sc-title" id="housedetailsall">楼盘信息</p>
				<div class="newhousedetails-sc-details">
					<table border="0">
					  <tr>
					    <td>户型</td>
					    <td>2室1厅</td>
					    <td>建筑面积</td>
					    <td>112㎡</td>
					  </tr>
					  <tr>
					    <td>楼层</td>
					    <td>16层/共28层</td>
					    <td>朝向</td>
					    <td>南北通透</td>
					  </tr>
					  <tr>
					    <td>装修状况</td>
					    <td>精装</td>
					    <td>建筑类型</td>
					    <td>板楼</td>
					  </tr>
					  <tr>
					    <td>建造年代</td>
					    <td>2018年建</td>
					    <td>物业类型</td>
					    <td>住宅</td>
					  </tr>
					  <tr>
					    <td>产权年限</td>
					    <td>70年</td>
					  </tr>
					  <tr>
					    <td>供电方式</td>
					    <td>民电</td>
				<!-- 	    <td>面积</td>
					    <td>112㎡</td> -->
					  </tr>
					  <tr>
					    <td>供暖方式</td>
					    <td>集体供暖</td>
					    <td>供水方式</td>
					    <td>民水</td>
					  </tr>
					  <tr>
					    <td>挂牌时间</td>
					    <td>2018-5-12</td>
					    <td>电梯</td>
					    <td>有</td>
					  </tr>
					</table>
					<p class="newhousedetails-scd-p">说明：房源信息仅供参考，具体以房本信息为准。</p>
				</div>
				<div class="newhousedetails-sc-title newhousedetails-sc-titleTwo clear" id="housepic">
					房源图片
					<div class="newhousedetails-sct-title">
						<p v-for="(item, index) in titleOne" @click="addClassTwo (index)" :class="{sctTitle:index === courTwo}">{{item.text}}</p>
					</div>
				</div>
				<div class="newhousedetails-sc-houseswiper">
					<!-- 房源图片swiper -->
					<Housesimgwiper :houseslides="houseslides"></Housesimgwiper>
				</div>
				<p class="newhousedetails-sc-title" id="mymap">周边配套</p>
				<div class="newhousedetails-sc-map">
					<Mapviwe></Mapviwe>
				</div>
				<p class="newhousedetails-sc-title" id="housingloanTwo">房贷计算</p>
				<div class="newhousedetails-sc-housingloan">
					<Housingloannumber></Housingloannumber>
				</div>
				<p class="newhousedetails-sc-title" id="comment">点评（{{nav}}）</p>
				<div class="newhousedetails-sc-comment">
					<p class="newhousedetails-scc-zongcom">综合评分：<span>4.6分</span></p>
					<div class="newhousedetails-scc-xing clear">
						<div class="newhousedetails-sccx-one clear">
							<span>周边</span>
							<el-rate class="newhousedetails-xing" v-model="value1" disabled :colors="['#62a82f','#62a82f','#62a82f']"></el-rate>
						</div>
						<div class="newhousedetails-sccx-one clear">
							<span>交通</span>
							<el-rate class="newhousedetails-xing" v-model="value1" disabled :colors="['#62a82f','#62a82f','#62a82f']"></el-rate>
						</div>
						<div class="newhousedetails-sccx-one clear">
							<span>绿化</span>
							<el-rate class="newhousedetails-xing" v-model="value1" disabled :colors="['#62a82f','#62a82f','#62a82f']"></el-rate>
						</div>
					</div>
					<div class="newhousedetails-scc-dan clear" v-for="item in 3">
						<div class="newhousedetails-sccd-left">
							<div class="newhousedetails-sccdl-center">
								<div class="newhousedetails-sccdlc-img">
									<img src="static/images/firstLevelPage/secondLevelPage/erweima.png" alt="">
								</div>
								<p>李子奇</p>
								<p>158****1235</p>
							</div>
						</div>
						<div class="newhousedetails-sccd-right">
							<p>
								<span>周边：5.6</span>
								<span>交通：4.6</span>
								<span>绿化：4.3</span>
							</p>
							<p>接口和地方加会受到法律就好垃圾是的覅普沃；卢卡斯达卡接收到考虑好是 阿萨德撒娇的山东矿机就接口和地方加会受到法律就好垃圾是的覅普沃；卢卡斯达卡接收到考虑好是 阿萨德撒娇的山东矿机就接口和地方加会受到法律就好垃圾是的覅普沃；卢卡斯达卡接收到考虑好是 阿萨德撒娇的山东矿机就接口和地方加会受到法律就好垃圾是的覅普沃；卢卡斯达卡接收到考虑好是 阿萨德撒娇的山东矿机就接口和地方加会受到法律就好垃圾是的覅普沃；卢卡斯达卡接收到考虑好是 阿萨德撒娇的山东矿机就接口和地方加会受到法律就好垃圾是的覅普沃；卢卡斯达卡接收到考虑好是 阿萨德撒娇的山东矿机就</p>
							<p>
								<span>2018-2-24 11:32:59</span>
								<span>27</span>
							</p>
						</div>
					</div>
					<div class="newhousedetails-scc-xianshi">
						<p v-if="xianshi" @click="clkXianshi">显示全部<img src="static/images/firstLevelPage/a-bottom.png" alt=""></p>
						<p v-else @click="clkXianshi">收起<img src="static/images/firstLevelPage/a-top.png" alt=""></p>
					</div>
				</div>
				<p class="newhousedetails-sc-title newhousedetails-sc-titleThree" id="vicinity">附近房源 <span>更多 ></span></p>
				<div class="newhousedetails-sc-vicinity">
					<Vicinityview></Vicinityview>
				</div>
			</div>
		</div>
  </div>
</template>
<script type="text/javascript">
import Houseswiperview from './public/Houseswiper.vue'
import Middlemanswiper from './public/Middlemanswiper.vue'
import Housesimgwiper from './public/Houseimgswiper.vue'
import Mapviwe from './public/Map.vue'
import Housingloannumber from './public/Housingloannumber.vue'
import Vicinityview from './public/Vicinity.vue'
export default {
  name: 'newhousedetails',
  components: {
  	Houseswiperview,
  	Middlemanswiper,
  	Housesimgwiper,
  	Mapviwe,
  	Housingloannumber,
  	Vicinityview,
  },
  data () {
    return {
    	value1: 4,
    	xianshi: true,
    	fxShow: false,
    	//房源图片轮播
      slides: [
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '1',
        },
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '1',
        },
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/a-follow1.png'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '2',
        },
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '1',
        },
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/a-follow2.png'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '3',
        },
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '1',
        },
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '1',
        },
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '1',
        },
        {
          src: require('../../../../static/images/firstLevelPage/secondLevelPage/b-fenxiang.png'),
          srcTwo: require('../../../../static/images/firstLevelPage/secondLevelPage/vr.png'),
          title: '4',
        },
      ],
      //小导航栏
      nav: 0,
      cour: 0,
      smallNavs: [
      	{
      		text: '经纪人',
      		to: '#middleman',
      	},
      	{
      		text: '房源信息',
      		to: '#housedetailsall',
      	},
      	{
      		text: '房源图片',
      		to: '#housepic',
      	},
      	{
      		text: '周边配套',
      		to: '#mymap',
      	},
      	{
      		text: '房贷计算',
      		to: '#housingloanTwo',
      	},
      	{
      		text: '点评',
      		to: '#comment',
      	},
      	{
      		text: '附近房源',
      		to: '#vicinity',
      	},
      ],
      //小导航栏
      courTwo: 0,
      titleOne: [
      	{
      		text: '全部',
      		to: '#',
      	},
      	{
      		text: '卧室',
      		to: '#',
      	},
      	{
      		text: '公共区域',
      		to: '#',
      	},
      	{
      		text: '小区',
      		to: '#',
      	},
      	{
      		text: '周边',
      		to: '#',
      	},
      ],
      //经纪人图片轮播
      middlemanslides: [
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
      		name: '你好吗',
      		phone: '17610077669',
      	},
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/a-left.png'),
      		name: '你好吗',
      		phone: '17610077669',
      	},
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
      		name: '你好吗',
      		phone: '17610077669',
      	},
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/a-left.png'),
      		name: '你好吗',
      		phone: '17610077669',
      	},
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
      		name: '你好吗',
      		phone: '17610077669',
      	},
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/a-left.png'),
      		name: '你好吗',
      		phone: '17610077669',
      	},
      ],
      //房源图片轮播
      houseslides: [
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/a-left.png'),
      		name: '你好',
      		phone: '17610077669',
      	},
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
      		name: '你好',
      		phone: '17610077669',
      	},
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/b-left.png'),
      		name: '你好',
      		phone: '17610077669',
      	},
      	{
      		src: require('../../../../static/images/firstLevelPage/secondLevelPage/house.jpg'),
      		name: '你好',
      		phone: '17610077669',
      	},
      ]
		}
  },
  mounted(){
  	this.shi ()
  	//滚动导航栏
  	window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
  	clkXianshi () {
  		this.xianshi = !this.xianshi
  	},
  	//分享展示隐藏
  	FxShow () {
  		this.fxShow = !this.fxShow
  	},
  	//data 数据加变量
  	shi () {
  		this.smallNavs[5].text = '点评('+this.nav+')'
  	},
  	//滚动导航栏 添加class
  	addClass (index) {
  		this.cour = index
  	},
  	//房源图片title 添加class
  	addClassTwo (index) {
  		this.courTwo = index
  	},
  	//滚动导航栏
		handleScroll () {
			var topWap = document.querySelector('.newhousedetails-nav')
			var top = document.querySelector('.newhousedetails-n-fixd')
		  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		  var offsetTop = topWap.offsetTop
		  // console.log(scrollTop,offsetTop)
		  if (scrollTop > offsetTop) {
		  	top.style.position = 'fixed'
		  	top.style.top = '0'
		  	top.style.zIndex = '9999'
		  } else {
		  	top.style.position = 'static'
		  }
		},
  },
	//离开当前页面后执行
	destroyed: function () {
		//滚动导航栏
  	window.removeEventListener('scroll', this.handleScroll)
	},
}
</script>
<style scoped>

</style>
<style>
	.el-breadcrumb{
		font-size: 16px;
		color: #000;
	}
	.el-breadcrumb__inner{
		color: #808080;
	}
	.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
		color: #808080;
	}
	.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
		color: #081a24;
	}
	.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover{
		color: #62a82f;
	}
</style>
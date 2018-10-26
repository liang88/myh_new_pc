<template>
  <div id="index">
		<Swiperview></Swiperview>
		<div class="index-center clear">
			<div class="index-c-left">
				<div class="index-c-l-padding">
					<div class="index-c-l-top clear">
						<p>
							<span v-for="(items,index) in todoData" @click="addClass(index)" :class="{cuda:index === cour}">{{items.text}}</span>
						</p>
						<p>
							更多 >
						</p>
					</div>
					<div class="index-c-l-bottom">
						<div class="index-c-l-dan clear" v-for="item in 3">
							<div class="index-c-l-img">
								<img src="../../assets/images/firstLevelPage/tu1.png" alt="">
							</div>
							<div class="index-c-l-word">
								<p>2018年是房地产最难的一年吗？</p>
								<p>2018年是房地产最难的一年吗？首先肯定比2008年和1998年好过，不过从宏观角度讲，2018年是中国房地产自2009年以后最难的一年。中国楼市这匹脱缰的野马，在2017年上半年全国住宅类物业的再次惊艳2018年是房地产最难的一年吗？首先肯定比2008年和1998年好过，不过从宏观角度讲，2018年是中国房地产自2009年以后最难的一年。中国楼市这匹脱缰的野马，在2017年上半年全国住宅类物业的再次惊艳</p>
								<span>详情 ></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="index-c-right">
				<div class="index-c-r-top">
					<div class="index-crt-top clear">
						<div class="index-crtt-img">
							<img src="../../assets/images/firstLevelPage/header.png" alt="">
						</div>
						<p class="index-crtt-word">
							欢迎来到满易何!
						</p>
					</div>
					<div class="index-crt-bottom">
					<!-- 	<div class="index-crtb-center">
							<button type="button">登录</button>
							<button type="button">注册</button>
						</div> -->
						<div class="index-crtb-centerTwo">
							<div>
								<p>436</p>
								<p>足迹</p>
							</div>
							<div>
								<p>436</p>
								<p>委托</p>
							</div>
							<div>
								<p>436</p>
								<p>关注</p>
							</div>
						</div>
					</div>
				</div>
				<div class="index-c-r-bottom">
					<div class="index-crb-top">
						<p>公告</p>
						<p>更多 ></p>
					</div>
					<div class="index-crb-bottom">
						<p v-for="item in 4">用户须知：满意何服务条款及用户协议满意何服务条款及用户协议满</p>
					</div>
				</div>
			</div>
		</div>
<!-- 最新开盘 -->
		<div class="index-newest">
			<div class="index-n-top clear">
				<p>最新开盘</p>
				<p>更多 ></p>
			</div>
			<div class="index-n-bottom">
				<div class="index-nb-dan clear" v-for="(item,index) in 4">
					<div class="index-nbd-img" @mouseenter="heiBeiYes1(index)" @mouseleave="heiBeiNo1">
						<img src="../../assets/images/firstLevelPage/tu2.png" alt="">
						<div class="index-nbdi-hei" v-show="heibei1&&index==current"></div>
					</div>
					<div class="index-nbd-word">
						<p>和悦华锦</p>
						<p>开发商</p>
						<p>地铁周边 • 商场 • 学校</p>
						<p>56000<span>元/m2</span></p>
					</div>
				</div>
			</div>
		</div>
<!-- 新上房源 -->
		<div class="index-news">
			<div class="index-n-top clear">
				<p>新上房源</p>
				<p>更多 ></p>
			</div>
			<div class="index-n-bottom">
				<div class="index-nb-dan" v-for="(item,index) in 4">
					<div class="index-nbd-img" @mouseenter="heiBeiYes2(index)" @mouseleave="heiBeiNo2">
						<img src="../../assets/images/firstLevelPage/tu2.png" alt="">
						<div class="index-nbdi-hei" v-show="heibei2&&index==current"></div>
					</div>
					<div class="index-nbd-word">
						<p>和悦华锦</p>
						<p>开发商</p>
						<p>地铁周边 • 商场 • 学校</p>
						<p>56000<span>万</span></p>
					</div>
				</div>
			</div>
		</div>
<!-- 房源 -->
		<div class="index-qie">
			<div class="index-n-top index-n-topTwo clear">
				<p>
					<span v-for="(items,index) in todoDataTwo" @click="addClassTwo(index)" :class="{cuda:index === courTwo}">{{items.text}}</span>
				</p>
				<p>更多 ></p>
			</div>
			<div class="index-n-bottom">
				<div class="index-nb-dan" v-for="(item,index) in 4">
					<div class="index-nbd-img" @mouseenter="heiBeiYes3(index)" @mouseleave="heiBeiNo3">
						<img src="../../assets/images/firstLevelPage/tu2.png" alt="">
						<div class="index-nbdi-hei" v-show="heibei3&&index==current"></div>
					</div>
					<div class="index-nbd-word">
						<p>和悦华锦</p>
						<p>开发商</p>
						<p>地铁周边 • 商场 • 学校</p>
						<p>56000<span>万</span></p>
					</div>
				</div>
			</div>
		</div>
<!-- 小区 -->
		<div class="index-advertisement">
			<img src="../../assets/images/firstLevelPage/banner.png" alt="">
		</div>
		<div class="index-minarea">
			<div class="index-n-top clear">
				<p>小区</p>
				<p>更多 ></p>
			</div>
			<div class="index-n-bottom">
				<div class="index-nb-dan" v-for="(item,index) in 4">
					<div class="index-nbd-img" @mouseenter="heiBeiYes4(index)" @mouseleave="heiBeiNo4">
						<img src="../../assets/images/firstLevelPage/tu2.png" alt="">
						<div class="index-nbdi-hei" v-show="heibei4&&index==current"></div>
					</div>
					<div class="index-nbd-word">
						<p>和悦华锦</p>
						<p>开发商</p>
						<p>地铁周边 • 商场 • 学校</p>
						<p>56000<span>元/m2</span></p>
					</div>
				</div>
			</div>
		</div>
<!-- 品牌门店 -->
		<div class="index-brand">
			<div class="index-n-top clear">
				<p>品牌门店</p>
				<p>更多 ></p>
			</div>
			<div class="index-n-bottom">
				<div class="index-nb-dan" v-for="(item,index) in 4">
					<div class="index-nbd-img" @mouseenter="heiBeiYes5(index)" @mouseleave="heiBeiNo5">
						<img src="../../assets/images/firstLevelPage/tu2.png" alt="">
						<div class="index-nbdi-hei" v-show="heibei5&&index==current"></div>
					</div>
					<div class="index-nbd-word">
						<p>和悦华锦</p>
						<p class="clear">
							<span class="index-dengji">等级：</span>
							<el-rate class="index-xing" v-model="value1" disabled :colors="['#62a82f','#62a82f','#62a82f']"></el-rate>
						</p>
					</div>
				</div>
			</div>
		</div>
<!-- 中介公司 -->
		<div class="index-intermediary clear">
			<div class="index-i-left">
				<p class="index-il-top">
					优选中介公司
				</p>
				<div class="index-il-bottom clear">
					<div class="index-ilb-left">
						<div class="index-ilbl-top">
							<img src="../../assets/images/firstLevelPage/nomylogo.png" alt="">
						</div>
						<div class="index-ilbl-bottom">
							<div>
								<p>静雅房产</p>
								<p>13001045667</p>
							</div>
						</div>
					</div>
					<div class="index-ilb-right">
						<div class="index-ilbr-top">
							<div>
								<img src="../../assets/images/firstLevelPage/nomylogo1.png" alt="">
								<p>链家房产</p>
								<p>13001045667</p>
							</div>
						</div>
						<div class="index-ilbr-bottom">
							<div>
								<img src="../../assets/images/firstLevelPage/nomylogo2.png" alt="">
								<p>链家房产</p>
								<p>13001045667</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="index-i-right">
				<p class="index-ir-top">
					品牌开发商
				</p>
				<div class="index-ir-bottom">
					<div class="index-irb-tua">
						<div class="index-irbt-heibei">
							<ul>
								<li>沙河高教园北四街 </li>
								<li>4000366688</li>
							</ul>
						</div>
						<img src="../../assets/images/firstLevelPage/tu3.png" alt="">
					</div>
					<div class="index-irb-tua">
						<div class="index-irbt-heibei">
							<ul>
								<li>沙河高教园北四街 </li>
								<li>4000366688</li>
							</ul>
						</div>
						<img src="../../assets/images/firstLevelPage/tu3.png" alt="">
					</div>
					<div class="index-irb-tua">
						<div class="index-irbt-heibei">
							<ul>
								<li>沙河高教园北四街 </li>
								<li>4000366688</li>
							</ul>
						</div>
						<img src="../../assets/images/firstLevelPage/tu3.png" alt="">
					</div>
					<div class="index-irb-tua">
						<div class="index-irbt-heibei">
							<ul>
								<li>沙河高教园北四街 </li>
								<li>4000366688</li>
							</ul>
						</div>
						<img src="../../assets/images/firstLevelPage/tu3.png" alt="">
					</div>
				</div>
			</div>
		</div>
<!-- 金牌经纪人 -->
		<div class="index-middleman">
			<p class="index-m-top">
				金牌经纪人
			</p>
			<div class="index-m-bottom">
		    <div class="swiper-containerTwo" @mouseenter="upDownYes()" @mouseleave="upDownNo()">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="item in 20">
		              <img src="../../assets/images/firstLevelPage/ren.png" alt="">
		              <p class="index-swiper">
		              	高珊珊
		              </p>
		            </div>
		        </div>
		        <!-- 如果需要分页器 -->
		        <!-- <div class="swiper-pagination"></div> -->
		        <!-- 如果需要导航按钮 -->
		        <div class="swiper-button-prev" v-show="updown"></div>
		        <div class="swiper-button-next" v-show="updown"></div>
		        <!-- 如果需要滚动条 -->
		        <!-- <div class="swiper-scrollbar"></div> -->
		    </div>
			</div>
		</div>
		<div class="index-city clear">
			<div class="index-ci-left">
				<div class="index-cil-top">
					<p>热门城市</p>
					<p>换一换</p>
				</div>
				<div class="index-cil-bottom">
					<div class="index-cilb-top">
						<div class="index-cilb-heibei">
							<p>北京</p>
							<p>45412 套房源</p>
						</div>
						<img src="/static/images/firstLevelPage/tu4.png" alt="">
					</div>
					<div class="index-cilb-bottom clear">
						<div class="index-cilbb-left">
							<div class="index-cilbbl-heibei">
								<p>北京</p>
								<p>45412 套房源</p>
							</div>
							<img src="/static/images/firstLevelPage/tu4.png" alt="">
						</div>
						<div class="index-cilbb-right">
							<div class="index-cilbbr-heibei">
								<p>北京</p>
								<p>45412 套房源</p>
							</div>
							<img src="/static/images/firstLevelPage/tu4.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="index-ci-right">
				<div class="index-cir-top">
					<p>品牌代理商</p>
					<p>换一换</p>
				</div>
				<div class="index-cir-bottom">
					<div class="index-cirb-left">
						<div class="index-cirbl-top">
							<div class="index-cirblt-heibei">
								<p>街与春和路交口西南大兴广阳大街与春和路交口西南</p>
								<p>158488965655</p>
							</div>
							<img src="/static/images/firstLevelPage/tu4.png" alt="">
						</div>
						<div class="index-cirbl-bottom">
							<div class="index-cirblb-heibei">
								<p>大南大兴广阳大街与春和路交口大街与春和路交口西南</p>
								<p>158488965655</p>
							</div>
							<img src="/static/images/firstLevelPage/tu4.png" alt="">
						</div>
					</div>
					<div class="index-cirb-right">
						<div class="index-cirbr-one">
							<div class="index-cirbro-heibei">
								<p>大兴广阳大街与春和路交口西南大兴广西南</p>
								<p>158488965655</p>
							</div>
							<img src="/static/images/firstLevelPage/tu4.png" alt="">
						</div>
						<div class="index-cirbr-two">
							<div class="index-cirbro-heibei">
								<p>大兴广阳大街与春和路交口西南大兴和路交口西南大兴广阳大街与春和路交口西南</p>
								<p>158488965655</p>
							</div>
							<img src="/static/images/firstLevelPage/tu4.png" alt="">
						</div>
						<div class="index-cirbr-three">
							<div class="index-cirbro-heibei">
								<p>大兴广阳大街与春</p>
								<p>158488965655</p>
							</div>
							<img src="/static/images/firstLevelPage/tu4.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
<!-- 猜你喜欢 -->
		<div class="index-like">
			<div class="index-n-top clear">
				<p>猜你喜欢</p>
			</div>
			<div class="index-n-bottom clear">
				<div class="index-nb-dan clear" v-for="(item,index) in 12">
					<div class="index-nbd-img" @mouseenter="heiBeiYes(index)" @mouseleave="heiBeiNo">
						<img src="../../assets/images/firstLevelPage/tu2.png" alt="">
						<div class="index-nbdi-hei" v-show="heibei&&index==current"></div>
					</div>
					<div class="index-nbd-word">
						<p>和悦华锦</p>
						<p>开发商</p>
						<p>地铁周边 • 商场 • 学校</p>
						<p>56000<span>万</span></p>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>
<script type="text/javascript">
import Swiper from 'swiper';
import Swiperview from '../../components/public/Swiper'
export default {
  name: 'Index',
  components: {
  	Swiperview,
  },
  data () {
    return {
    	heibei: false,
    	heibei1: false,
    	heibei2: false,
    	heibei3: false,
    	heibei4: false,
    	heibei5: false,
    	updown: false,
    	current: 0,
    	value1: 4,
    	cour: 0,
    	courTwo: 0,
  		todoData: [
  			{
  				index: 0,
  				text: '头条资讯',
  			},
  			{
  				index: 1,
  				text: '房产知识',
  			},
  			{
  				index: 2,
  				text: '公司动态',
  			},
  		],
  		todoDataTwo: [
  			{
  				index: 0,
  				text: '新房',
  			},
  			{
  				index: 1,
  				text: '二手房',
  			},
  			{
  				index: 2,
  				text: '租房',
  			},
  		]
		}
  },
  mounted(){
      new Swiper ('.swiper-containerTwo', {
      // loop: true,
		  slidesPerView : 4,
		  slidesPerGroup : 4,
		  spaceBetween : 36,
  		centerInsufficientSlides: true,
      // 如果需要分页器
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable :true,
      // },
      // effect : 'cube',
      // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
    })
  },
  methods: {
  	upDownYes () {
  		this.updown = true
  	},
  	upDownNo () {
  		this.updown = false
  	},
  	heiBeiYes (index) {
  		this.heibei = true
  		this.current = index
  	},
  	heiBeiNo () {
  		this.heibei = false
  		this.current = null
  	},
  	heiBeiYes1 (index) {
  		this.heibei1 = true
  		this.current = index
  	},
  	heiBeiNo1 () {
  		this.heibei1 = false
  		this.current = null
  	},
  	heiBeiYes2 (index) {
  		this.heibei2 = true
  		this.current = index
  	},
  	heiBeiNo2 () {
  		this.heibei2 = false
  		this.current = null
  	},
  	heiBeiYes3 (index) {
  		this.heibei3 = true
  		this.current = index
  	},
  	heiBeiNo3 () {
  		this.heibei3 = false
  		this.current = null
  	},
  	heiBeiYes4 (index) {
  		this.heibei4 = true
  		this.current = index
  	},
  	heiBeiNo4 () {
  		this.heibei4 = false
  		this.current = null
  	},
  	heiBeiYes5 (index) {
  		this.heibei5 = true
  		this.current = index
  	},
  	heiBeiNo5 () {
  		this.heibei5 = false
  		this.current = null
  	},
  	addClass (index) {
  		this.cour = index
  	},
  	addClassTwo (index) {
  		this.courTwo = index
  	}
  },
}
</script>
<style scoped>
#index{
	background: #f5f5f5;
}
.index-m-bottom{
	padding: 0 20px;
}
.swiper-containerTwo {
  width: 100%;
  height: 360px;
  overflow: hidden;
  position: relative;
}
.swiper-slide{
  overflow: hidden;
  border: 1px solid #ededed;
  box-sizing: border-box;
  cursor: pointer;
}
.swiper-slide:hover{
  border: 1px solid #62a82f;
  transition: all .3s ease;
}
.swiper-slide img{
	width: 80%;
	margin: 0 auto;
	display: block;
}
.index-swiper{
	width: 250px;
	height: 40px;
	background: #f5f5f5;
	position: absolute;
	bottom: 10px;
	left: 10px;
	z-index: 9;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	line-height: 40px;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
	width: 34px;
	height: 60px;
	background-image: url('/static/images/firstLevelPage/zuo.png');
	-webkit-background-size: 34px 60px;
	background-size: 34px 60px;
	left: 0;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev{
	width: 34px;
	height: 60px;
	background-image: url('/static/images/firstLevelPage/you.png');
	-webkit-background-size: 34px 60px;
	background-size: 34px 60px;
	right: 0;
}
</style>
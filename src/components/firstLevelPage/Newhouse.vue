<template>
  <div id="newhouse">
		<div class="newhouse-search">
			<div class="newhouse-s-one clear">
				<div class="newhouse-so-left">
					<p>位置 ：</p>
				</div>
				<div class="newhouse-so-right">
					<div class="newhouse-sor-quyuAll clear">
						<p class="newhouse-sor-quyu addclass">区域</p>
						<p class="newhouse-sor-quyu">地铁</p>
					</div>
					<div class="newhouse-sor-quyuXia">
						<ul class="clear">
							<li @click="JieShowNo">不限</li>
							<li v-for="item in 20" @click="JieShow">昌平区</li>
						</ul>
						<transition name="el-zoom-in-top">
							<div class="newhouse-sorq-jiedao clear" v-show="jieShow">
								<p v-for="item in 26"><span class="newhouse-span2"><span class="newhouse-span1">A</span>阿萨德</span></p>
							</div>
						</transition>
					</div>
				</div>
			</div>
			<div class="newhouse-s-two clear">
				<div class="newhouse-st-left">
					<p>单价 ：</p>
				</div>
				<div class="newhouse-st-right clear">
					<div class="newhouse-str-left clear">
						<p v-for="item in 9"><span>不限</span></p>
					</div>
					<div class="newhouse-str-right">
						<input type="text" name="" oninput="value=value.replace(/[^\d]/g,'')">
						<span></span>
						<input type="text" name="" oninput="value=value.replace(/[^\d]/g,'')">
						<input type="button" name="" value="确定">
					</div>
				</div>
			</div>
			<div class="newhouse-s-three clear">
				<div class="newhouse-st-left">
					<p>面积 ：</p>
				</div>
				<div class="newhouse-st-right clear">
					<div class="newhouse-str-left clear">
						<p v-for="item in 9"><span>不限</span></p>
					</div>
					<div class="newhouse-str-right">
						<input type="text" name="" oninput="value=value.replace(/[^\d]/g,'')">
						<span></span>
						<input type="text" name="" oninput="value=value.replace(/[^\d]/g,'')">
						<input type="button" name="" value="确定">
					</div>
				</div>
			</div>
			<div class="newhouse-s-fore clear">
				<div class="newhouse-sf-left">
					<p>户型 ：</p>
				</div>
				<div class="newhouse-sf-right clear">
					<div class="newhouse-sfr-left clear">
						<p v-for="item in 9"><span>不限</span></p>
					</div>
				</div>
			</div>
			<div class="newhouse-s-five clear">
				<div class="newhouse-sf-left">
					<p>类型 ：</p>
				</div>
				<div class="newhouse-sf-right clear" :style="zsShow === true ? 'border-bottom:1px solid #ededed;' : 'border-bottom: none;'">
					<div class="newhouse-sfr-left clear">
						<p v-for="item in 9"><span>不限</span></p>
					</div>
				</div>
			</div>
			<transition name="el-zoom-in-top">
				<div class="newhouse-s-shows" v-show="zsShow">
					<div class="newhouse-s-six clear">
						<div class="newhouse-ss-left">
							<p>销售状态 ：</p>
						</div>
						<div class="newhouse-ss-right clear">
							<div class="newhouse-ssr-left clear">
								<p v-for="item in 9"><span>不限</span></p>
							</div>
						</div>
					</div>
					<div class="newhouse-s-seven clear">
						<div class="newhouse-ss-left">
							<p>开盘时间 ：</p>
						</div>
						<div class="newhouse-ss-right clear">
							<div class="newhouse-ssr-left clear">
								<p v-for="item in 9"><span>不限</span></p>
							</div>
						</div>
					</div>
					<div class="newhouse-s-eight clear">
						<div class="newhouse-se-left">
							<p>装修情况 ：</p>
						</div>
						<div class="newhouse-se-right clear">
							<div class="newhouse-ser-left clear">
								<p v-for="item in 9"><span>不限</span></p>
							</div>
						</div>
					</div>
				</div>
			</transition>
			<div class="newhouse-s-nine">
				<div></div>
				<div v-if="zsShow === false" @click="ZsShowYes">更多<img src="/static/images/firstLevelPage/a-bottom.png" alt=""></div>
				<div v-else @click="ZsShowNo">收起<img src="/static/images/firstLevelPage/a-top.png" alt=""></div>
				<div></div>
			</div>
			<div class="newhouse-s-eleven clear">
				<div class="newhouse-se-left">
					<p>已选分类 ：</p>
				</div>
				<div class="newhouse-se-right clear">
					<p class="newhouse-ser-tags">分类<img src="/static/images/firstLevelPage/b-del.png" alt=""></p>
					<p class="newhouse-ser-tags">分类分类分类<img src="/static/images/firstLevelPage/b-del.png" alt=""></p>
					<p class="newhouse-ser-tags">d <img src="/static/images/firstLevelPage/b-del.png" alt=""></p>
					<p class="newhouse-ser-tags">分类分类分类<img src="/static/images/firstLevelPage/b-del.png" alt=""></p>
					<p class="newhouse-ser-delAll"><img src="/static/images/firstLevelPage/c-delAll.png" alt="">清空</p>
				</div>
			</div>
		</div>
		<div class="newhouse-houselist clear">
			<div class="newhouse-h-left">
				<div class="newhouse-hl-title clear">
					<p v-for="(value,index) in dataone" @click="addClassOne(index)" :class="{newhouse_hlt_addclass:index === classOne}">{{value.text}}</p>
				</div>
				<div v-for="(item,index) in 10" class="newhouse-hl-dan clear">
					<router-link tag="div" to="/Newhousedetails/" class="newhouse-hld-left">
						<img class="newhouse-hldl-img1" src="static/images/firstLevelPage/house1.png" alt="">
						<img class="newhouse-hldl-img2" src="static/images/firstLevelPage/vadio.png" alt="">
						<p>在售</p>
					</router-link>
					<div class="newhouse-hld-center">
						<p>都城心屿<span>36条评价</span></p>
						<p>【朝阳•孙河】北京市朝阳区黄康路北侧孙路北侧孙路北侧孙路北侧孙路北侧孙路北侧孙路北侧孙</p>
						<p>
							<span>户型：3室1厅 &nbsp;|&nbsp;</span>
							<span>90-126m2 &nbsp;|&nbsp;</span>
							<span>南北通透</span>
						</p>
						<p>
							<span>别墅</span>
							<span>品牌开发商</span>
							<span>低总价</span>
							<span>低密度</span>
						</p>
<!-- 						<p class="clear">
							<ul>
								<li class="newhouse-fenxiang">
									<img src="static/images/firstLevelPage/g-fenxiang1.png" alt="">
									<span>分享</span>
									<div class="newhouse-f-kuai clear" v-show="false">
										<div class="newhouse-fk-dan">
											<img src="static/images/firstLevelPage/erweima.png" alt="">
											<span>微信扫码分享好友</span>
										</div>
										<div class="newhouse-fk-dan">
											<img src="static/images/firstLevelPage/lang.png" alt="">
											<span>分享到新浪微博</span>
										</div>
										<div class="newhouse-fk-dan">
											<img src="static/images/firstLevelPage/chaolianjie.png" alt="">
											<span>复制链接</span>
										</div>
									</div>
								</li>
								<li class="newhouse-shoucang">
									<img src="static/images/firstLevelPage/h-cang1.png" alt="">
									<span>收藏</span>
								</li>
							</ul>
						</p> -->
					</div>
					<div class="newhouse-hld-right">
						<p>最低<span>82000</span>元/㎡起</p>
						<p>400-603-2266转61001</p>
					</div>
				</div>
				<div class="newhouse-hl-page clear">
					<div class="newhouse-hlp-left">
						共有12880个有关北京新房楼盘
					</div>
					<div class="newhouse-hlp-right">
						<el-pagination
						  background
						  layout="prev, pager, next"
						  :total="1000">
						</el-pagination>
					</div>
				</div>
			</div>
			<div class="newhouse-h-right">
				<Freehouse></Freehouse>
				<p class="newhouse-hr-echartstitle">新房房价</p>
				<Echarts></Echarts>
				<p class="newhouse-hr-echartstitle">房贷估算器</p>
				<Housingloan></Housingloan>
				<Billboard></Billboard>
			</div>
		</div>
  </div>
</template>
<script type="text/javascript">
import Freehouse from '../../components/firstLevelPage/public/Freehouse'
import Echarts from '../../components/firstLevelPage/public/Echarts'
import Housingloan from '../../components/firstLevelPage/public/Housingloan'
import Billboard from '../../components/firstLevelPage/public/Billboard'
export default {
  name: 'newhouse',
  components: {
  	Freehouse,
  	Echarts,
  	Housingloan,
  	Billboard,
  },
  data () {
    return {
    	jieShow: false,
    	zsShow: false,
    	classOne: 0,
    	dataone: [
    		{
    			name: '0',
    			text: '默认排序'
    		},
    		{
    			name: '1',
    			text: '开盘时间'
    		},
    		{
    			name: '2',
    			text: '单价'
    		},
    		{
    			name: '3',
    			text: '面积'
    		},
    		{
    			name: '4',
    			text: '最新发布'
    		},
    	]
		}
  },
  mounted(){

  },
  methods: {
  	JieShow () {
  		this.jieShow = true
  	},
  	JieShowNo () {
  		this.jieShow = false
  	},
  	ZsShowYes () {
  		this.zsShow = true
  	},
  	ZsShowNo () {
  		this.zsShow = false
  	},
  	addClassOne (index) {
  		this.classOne = index
  	},
  },
}
</script>
<style scoped>

</style>
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active{
	background-color: #081a24;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover{
	color: #62a82f;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
	color: #081a24;
}
</style>
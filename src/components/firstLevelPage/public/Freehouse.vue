<template>
  <div id="freehouse">
		<div class="freehouse-title">
			免费看房
		</div>
		<div class="freehouse-swiper">
	    <el-carousel :interval="5000">
	      <el-carousel-item v-for="item in 5" :key="item">
	        <p class="freehouse-s-map"><img src="/static/images/firstLevelPage/d-map.png" alt="">【朝阳】北京市朝阳区</p>
	        <p class="freehouse-s-titleone">承诺服务 :</p>
	        <p class="freehouse-s-neirongone">
	        	<span><img src="/static/images/firstLevelPage/e-jou.png" alt="">免费车接车送</span>
	        	<span><img src="/static/images/firstLevelPage/e-jou.png" alt="">随时看房</span>
	        </p>
	        <p class="freehouse-s-titleone">推荐理由 :</p>
	        <p class="freehouse-s-neirongone">
	        	<span><img src="/static/images/firstLevelPage/e-jou.png" alt="">品牌开发商</span>
	        	<span><img src="/static/images/firstLevelPage/e-jou.png" alt="">近地铁</span>
	        	<span><img src="/static/images/firstLevelPage/e-jou.png" alt="">环境优</span>
	        </p>
	        <p class="freehouse-s-phone">咨询热线 ： 010-0101-0101</p>
	        <p class="freehouse-s-ren"><img src="/static/images/firstLevelPage/f-ren.png" alt="">已有102人看房</p>
	        <p class="freehouse-s-button">预约看房</p>
	      </el-carousel-item>
	    </el-carousel>
		</div>
  </div>
</template>
<script type="text/javascript">
import Swiper from 'swiper';
export default {
  name: 'freehouse',
  components: {
  },
  data () {
    return {

		}
  },
  mounted(){

  },
  methods: {

  },
}
</script>
<style scoped>

</style>
<style type="text/css" media="screen">
.el-carousel__indicators{
	bottom: 5px;
}
.el-carousel__indicator{
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #ededed;
	padding: 0;
	margin: 0 5px;
}
.el-carousel__button{
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #ededed;
	padding: 0;
}
.el-carousel__indicator.is-active button{
	background: #62a82f;
}
.el-carousel__arrow--left,.el-carousel__arrow--right{
	display: none;
}
.el-carousel__container{
	height: 430px;
}
</style>
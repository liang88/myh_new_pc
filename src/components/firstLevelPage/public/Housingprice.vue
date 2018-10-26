<template>
  <div id="housingloan">
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">小&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</p>
			<div class="housingloan-s-option" style="width: 100%;">
				<input type="text" placeholder="请填写小区名">
			</div>
		</div>
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">建筑年代：</p>
			<div class="housingloan-s-option" style="width: 85%;">
				<select>
				  <option value ="volvo">Volvo</option>
				  <option value ="saab">Saab</option>
				  <option value="opel">Opel</option>
				  <option value="audi">Audi</option>
				</select>
				<div class="housingloan-so-xia"></div>
			</div>
			<p style="width: 15%; text-align: right; font-size: 14px;line-height: 32px;">年</p>
		</div>
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">面&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;积：</p>
			<div class="housingloan-s-option" style="width: 85%;">
				<input type="text" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" name="" placeholder="请填写面积">
			</div>
			<p style="width: 15%; text-align: right; font-size: 14px;line-height: 32px;">㎡</p>
		</div>
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</p>
			<div class="housingloan-s-option">
				<select>
				  <option value ="volvo">Volvo</option>
				  <option value ="saab">Saab</option>
				  <option value="opel">Opel</option>
				  <option value="audi">Audi</option>
				</select>
				<div class="housingloan-so-xia"></div>
			</div>
		</div>
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">朝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;向：</p>
			<div class="housingloan-s-option">
				<select>
				  <option value ="volvo">Volvo</option>
				  <option value ="saab">Saab</option>
				  <option value="opel">Opel</option>
				  <option value="audi">Audi</option>
				</select>
				<div class="housingloan-so-xia"></div>
			</div>
		</div>
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;层：</p>
			<div class="housingloan-s-option" style="width: 85%;">
				<input type="text" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" name="" placeholder="请填写所在楼层">
			</div>
			<p style="width: 15%; text-align: right; font-size: 14px;line-height: 32px;">层</p>
		</div>
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">总&nbsp;&nbsp;层&nbsp;&nbsp;数：</p>
			<div class="housingloan-s-option" style="width: 85%;">
				<input type="text" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" name="" placeholder="请填写总层数">
			</div>
			<p style="width: 15%; text-align: right; font-size: 14px;line-height: 32px;">层</p>
		</div>
		<div class="housingloan-submit">
			提交计算
		</div>
  </div>
</template>
<script type="text/javascript">
import Swiper from 'swiper';
export default {
  name: 'housingloan',
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

</style>
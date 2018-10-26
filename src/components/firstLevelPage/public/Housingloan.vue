<template>
  <div id="housingloan">
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">还款方式：</p>
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
			<p class="housingloan-s-title">房屋总价：</p>
			<div class="housingloan-s-option" style="width: 80%;">
				<input type="text" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" name="" placeholder="请填写房屋总价">
			</div>
			<p style="width: 20%; text-align: right; font-size: 14px;line-height: 32px;">万元</p>
		</div>
		<div class="housingloan-select clear">
			<p class="housingloan-s-title">贷款类别：</p>
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
			<p class="housingloan-s-title">按揭成数：</p>
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
			<p class="housingloan-s-title">按揭年数：</p>
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
			<p class="housingloan-s-title">计算方式：</p>
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
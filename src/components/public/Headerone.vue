<template>
  <div id="headerone">
    <div class="headerone-wap">
      <div class="headerone-w-center">
        <router-link class="headerone-wc-logo" tag="div" to="/">
          <img src="static/images/public/logo.png" alt="">
        </router-link>
        <div class="headerone-wc-map">
          <img src="static/images/public/position1.png" alt="">
          <p>北京</p>
        </div>
        <div class="headerone-wc-search">
          <div class="headerone-wcs-maphouse">
            <img src="static/images/public/map1.png" alt="">
            <p>地图找房</p>
          </div>
          <div class="headerone-wcs-butsearch">
            <img src="static/images/public/search.png" alt="">
          </div>
          <div class="headerone-wcs-inpsearch">
            <input type="text" name="" placeholder="请输入楼盘名称、区域或商圈">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Headerone',
  data () {
  	return {

  	}
  },
  mounted(){

  },
  methods: {

  },
	watch: {

	}
}
</script>
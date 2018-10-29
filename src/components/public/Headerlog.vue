<template>
  <div id="headerlog">
    <div class="headerlog-wap">
      <div class="headerlog-w-center">
        <img @click="indexs" src="/static/images/public/logo.png" alt="">
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'headerlog',
  data () {
  	return {

  	}
  },
  mounted(){

  },
  methods: {
    indexs () {
      this.$router.push('/')
    }
  },
	watch: {

	}
}
</script>
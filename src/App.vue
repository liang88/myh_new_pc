<template>
  <div id="app">
    <Headertopview v-show="firstpage"></Headertopview>
  	<Headertoponeview v-show="secondpage"></Headertoponeview>
    <Headerview v-show="firstpage"></Headerview>
  	<Headeroneview v-show="secondpage"></Headeroneview>
    <Headerlog v-show="log"></Headerlog>
    <router-view></router-view>
    <Footerview v-show="footlog"></Footerview>
    <Footerlog v-show="log"></Footerlog>
  </div>
</template>

<script>
/* eslint-disable */
import Headertopview from './components/public/Headertop.vue'
import Headertoponeview from './components/public/Headertopone.vue'
import Headerview from './components/public/Header.vue'
import Headeroneview from './components/public/Headerone.vue'
import Headerlog from './components/public/Headerlog.vue'
import Footerview from './components/public/Footer.vue'
import Footerlog from './components/public/Footerlog.vue'
export default {
  name: 'App',
  components: {
    Headertoponeview,
  	Headertopview,
    Headerview,
  	Headeroneview,
    Headerlog,
  	Footerview,
    Footerlog,
  },
  data () {
    return {
      firstpage: true,
      secondpage: false,
      log: false,
      footlog: true,
    }
  },
  methods: {
    isTab(){
      if(this.$route.path==='/Newhousedetails/'){
        this.firstpage = false
        this.secondpage = true
        this.log = false
        this.footlog = true
      } else if (this.$route.path=='/Login') {
        this.firstpage = false
        this.secondpage = false
        this.log = true
        this.footlog = false
      } else {
        this.firstpage = true
        this.secondpage = false
        this.log = false
        this.footlog = true
      }
    }
  },
  watch: {
    '$route':'isTab'
  }
}
</script>

<style>
  @import './assets/css/reset.css'; /*引入公共样式*/
  @import './assets/css/myAll.css'; /*引入全部*/
  @import './assets/css/public.css'; /*引入公共组件样式*/
  @import './assets/css/firstPublic.css'; /*引入一级页面公共组件样式*/
  @import './assets/css/secondPublic.css'; /*引入一级页面公共组件样式*/
</style>

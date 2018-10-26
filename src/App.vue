<template>
  <div id="app">
    <Headertopview v-show="firstpage"></Headertopview>
  	<Headertoponeview v-show="secondpage"></Headertoponeview>
    <Headerview v-show="firstpage"></Headerview>
  	<Headeroneview v-show="secondpage"></Headeroneview>
    <router-view></router-view>
    <Footerview></Footerview>
  </div>
</template>

<script>
/* eslint-disable */
import Headertopview from './components/public/Headertop.vue'
import Headertoponeview from './components/public/Headertopone.vue'
import Headerview from './components/public/Header.vue'
import Headeroneview from './components/public/Headerone.vue'
import Footerview from './components/public/Footer.vue'
export default {
  name: 'App',
  components: {
    Headertoponeview,
  	Headertopview,
    Headerview,
  	Headeroneview,
  	Footerview,
  },
  data () {
    return {
      firstpage: true,
      secondpage: false,
    }
  },
  methods: {
    isTab(){
      if(this.$route.path==='/Newhousedetails/'){
        this.firstpage = false
        this.secondpage = true
      }else {
        this.firstpage = true
        this.secondpage = false
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

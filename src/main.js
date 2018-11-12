// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css';
import store from './store/index'
import { axios } from './axios/axios'
Vue.use(ElementUI)
Vue.config.productionTip = false
// let axiosIns = axios.create({})
// Vue.prototype.$http = axiosIns
// 设置变量 将变量挂在到原型链上 来实现线上线下的切换
const url = process.env.API_ROOT
Vue.prototype.$url = url
//跳转路由移到页面顶部
router.afterEach((to,from,next) => {window.scrollTo(0,0)})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

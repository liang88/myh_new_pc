<template>
  <div id="swiper">
    <div id="swiper-container" class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/static/images/public/banner.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="/static/images/public/banner.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="/static/images/public/banner.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="/static/images/public/banner.png" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>
<script type="text/javascript">
import Swiper from 'swiper';
export default {
  name: 'Swiper',
  data () {
  	return {
  	}
  },
  mounted(){
      new Swiper ('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },
      preventLinksPropagation : false,
      // effect : 'cube',
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
    })
  },
  methods: {

  }
}
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 720px;
}
.swiper-slide{
  overflow: hidden;
  position: relative;
}
.swiper-slide img{
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
</style>
<style type="text/css">
.swiper-pagination-bullet{
  width: 42px;
  height: 3px;
  border-radius: 0;
  background: #fff;
  opacity: 0.6;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 0 15px;
}
.swiper-pagination-bullet-active{
  background: #62a82f;
  opacity: 1;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 30px;
}
</style>
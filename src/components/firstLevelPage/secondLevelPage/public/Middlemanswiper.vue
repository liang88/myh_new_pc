<template>
  <div id="middlemanswiper" class="swiper-no-swiping">
    <div class="mySwiperOne">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in middlemanslides">
              <div class="swiper-s-wap">
                <div class="swiper-sw-img">
                  <img :src="item.src" alt="">
                </div>
                <div class="swiper-sw-zi">
                  <p>{{item.name}}</p>
                  <p>{{item.phone}}</p>
                  <p><img src="static/images/firstLevelPage/secondLevelPage/a-zixun.png" alt="">在线咨询</p>
                </div>
              </div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Swiper from 'swiper';
export default {
  name: 'middlemanswiper',
  components: {

  },
  props: {
    middlemanslides: {
      type: Array,
      default: []
    },
  },
  computed: {

  },
  data () {
    return {

		}
  },
  mounted(){
      new Swiper ('.mySwiperOne', {
      // loop: true,
      slidesPerView : 4,
      slidesPerGroup : 4,
      spaceBetween : 30,
      centerInsufficientSlides: true,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
  methods: {

  },
  watch: {

  },
}
</script>
<style scoped>
  .mySwiperOne {
    width: 100%;
    height: 280px;
    overflow: hidden;
    position: relative;
  }
  .mySwiperOne .swiper-wrapper .swiper-slide{
    height: 160px;
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    width: 30px;
    height: 30px;
    background-image: url('/static/images/firstLevelPage/secondLevelPage/a-left.png');
    -webkit-background-size: 30px 30px;
    background-size: 30px 30px;
    position: absolute;
    top: auto;
    bottom: 60px;
    left: 50%;
    transform: translate(-50%);
    margin-left: -45px;
    z-index: 999;
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    width: 30px;
    height: 30px;
    background-image: url('/static/images/firstLevelPage/secondLevelPage/a-right.png');
    -webkit-background-size: 30px 30px;
    background-size: 30px 30px;
    position: absolute;
    top: auto;
    bottom: 60px;
    right: 50%;
    transform: translate(-50%);
    margin-right: -45px;
    z-index: 999;
  }
  .mySwiperOne[data-v-64647516]{
    position: static;
  }
  #newhousedetails .newhousedetails-smallmodel .newhousedetails-s-center .newhousedetails-sc-swiper{
    position: relative;
  }
</style>
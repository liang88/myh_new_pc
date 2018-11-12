<template>
  <div id="houseimgswiper" class="swiper-no-swiping">
    <div class="mySwiperTwo">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in Newdetailsfloor" @click="swiperT (index)">
              <img :src="item.src" alt="">
              <p>{{item.name}}</p>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- 如果需要导航按钮 -->
       <!--  <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
    </div>
    <transition name="el-fade-in">
      <div class="houseimgswiper-heibei" v-show="swiperShow">
        <div class="mySwiperThree">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in Newdetailsfloor">
                  <img :src="item.src" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <!-- <div class="swiper-pagination"></div> -->
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <img class="houseimgswiper-h-img" src="static/images/firstLevelPage/secondLevelPage/cha.png" @click="swipernone ()">
      </div>
    </transition>
  </div>
</template>
<script type="text/javascript">
import Swiper from 'swiper';
export default {
  name: 'houseimgswiper',
  components: {

  },
  props: {
    Newdetailsfloor: {
      type: Array,
      default: []
    },
  },
  computed: {

  },
  data () {
    return {
      swiperShow: false,
      swiper: null,
		}
  },
  mounted(){
    new Swiper ('.mySwiperTwo', {
      // loop: true,
      slidesPerView : 4,
      slidesPerGroup : 4,
      spaceBetween : 30,
      centerInsufficientSlides: true,
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      onSlideChangeEnd: function(swiper){
        swiper.update()
        // mySwiper.startAutoplay()
        mySwiper.reLoop()
      },
    })
  },
  methods: {
    swiperT (index) {
      this.swiperShow = true
      this.swiper = new Swiper ('.mySwiperThree', {
        pagination : '.mySwiperThree',
        speed:0,
        observer:true,
        observeParents:true,
        loop: true,
        // effect : 'fade',//切换效果
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        onSlideChangeEnd: function(swiper){
          swiper.update()
          // mySwiper.startAutoplay()
          mySwiper.reLoop()
        },
      })
    },
    swipernone () {
      this.swiper = null
      this.swiperShow = false
    },
  },
  watch: {

  },
}
</script>
<style scoped>
  .mySwiperTwo {
    width: 100%;
    height: 405px;
    overflow: hidden;
    position: relative;
  }
  .mySwiperTwo .swiper-wrapper .swiper-slide{
    height: 285px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }
  .mySwiperTwo .swiper-wrapper .swiper-slide img{
    width: 100%;
    height: 240px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .mySwiperTwo .swiper-wrapper .swiper-slide p{
    font-size: 16px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
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
  .mySwiperTwo[data-v-64647516]{
    position: static;
  }
  #newhousedetails .newhousedetails-smallmodel .newhousedetails-s-center .newhousedetails-sc-swiper{
    position: relative;
  }
  .houseimgswiper-heibei{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: rgba(8, 26, 36, 0.5);
  }
  .mySwiperThree{
    height: 100%;
  }
  .mySwiperThree .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    width: 30px;
    height: 60px;
    background-image: url('/static/images/firstLevelPage/secondLevelPage/b-left.png');
    -webkit-background-size: 30px 60px;
    background-size: 30px 60px;
    position: absolute;
    top: 50%;
    left: 20%;
    margin-left: -45px;
    z-index: 9999;
  }
  .mySwiperThree .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    width: 30px;
    height: 60px;
    background-image: url('/static/images/firstLevelPage/secondLevelPage/b-right.png');
    -webkit-background-size: 30px 600px;
    background-size: 30px 60px;
    position: absolute;
    top: 50%;
    right: 20%;
    margin-right: -45px;
    z-index: 9999;
  }
  .mySwiperThree .swiper-wrapper .swiper-slide{
    position: relative;
  }
  .mySwiperThree .swiper-wrapper .swiper-slide img{
    display: block;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .houseimgswiper-h-img{
    position: absolute;
    top: 10%;
    right: 10%;
    cursor: pointer;
    z-index: 9999;
  }
</style>
<template>
  <div id="newdetailspic" class="swiper-no-swiping">
    <div class="mySwiperfive">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in newdetailspics">
              <div class="swiper-s-wap">
                <div class="swiper-sw-img">
                  <img src="static/images/firstLevelPage/secondLevelPage/house.jpg" alt="">
                </div>
                <p>A1 3室2厅1卫2厨</p>
                <p>建筑面积：99㎡</p>
                <p>在售</p>
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
  name: 'newdetailspic',
  components: {

  },
  props: {
    newdetailspics: {
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
      new Swiper ('.mySwiperfive', {
      // loop: true,
      slidesPerView : 3,
      slidesPerGroup : 3,
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
  .mySwiperfive {
    width: 100%;
    height: 666px;
    overflow: hidden;
    position: relative;
  }
  .mySwiperfive .swiper-wrapper .swiper-slide{
    height: 546px;
    cursor: pointer;
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
  .mySwiperfive[data-v-64647516]{
    position: static;
  }
  #newhousedetails .newhousedetails-smallmodel .newhousedetails-s-center .newhousedetails-sc-swiper{
    position: relative;
  }
  #newdetailspic .mySwiperfive .swiper-wrapper .swiper-slide .swiper-s-wap{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ededed;
  }
  #newdetailspic .mySwiperfive .swiper-wrapper .swiper-slide .swiper-s-wap .swiper-sw-img{
    width: 100%;
    height: 350px;
  }
  #newdetailspic .mySwiperfive .swiper-wrapper .swiper-slide .swiper-s-wap .swiper-sw-img img{
    width: 100%;
    height: 100%;
  }
  #newdetailspic .mySwiperfive .swiper-wrapper .swiper-slide .swiper-s-wap p:nth-child(2){
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
  }
  #newdetailspic .mySwiperfive .swiper-wrapper .swiper-slide .swiper-s-wap p:nth-child(3){
    text-align: center;
    margin-top: 24px;
    font-size: 18px;
    color: #808080;
  }
  #newdetailspic .mySwiperfive .swiper-wrapper .swiper-slide .swiper-s-wap p:nth-child(4){
    width: 76px;
    height: 32px;
    background: #62a82f;
    border-radius: 2px;
    margin: 30px auto 0;
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height: 32px;
  }
</style>
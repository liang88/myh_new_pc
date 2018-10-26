<template>
  <div id="houseswiper">
		<div class="houseswiper-wap" @mouseover="clearInv" @mouseout="runInv">
			<div class="houseswiper-w-bigswiper">
				<ul class="houseswiper-wb-ul">
					<transition name="slide-trans">
						<li class="houseswiper-wbu-li" v-if="isShow">
							<img class="houseswiper-wb-img1" :src="slides[nowIndex].src" alt="">
							<img class="houseswiper-wb-img2" :src="slides[nowIndex].srcTwo" alt="">
						</li>
					</transition>
					<transition name="slide-trans-old">
						<li class="houseswiper-wbu-li" v-if="!isShow">
							<img class="houseswiper-wb-img1" :src="slides[nowIndex].src" alt="">
							<img class="houseswiper-wb-img2" :src="slides[nowIndex].srcTwo" alt="">
						</li>
					</transition>
				</ul>
			</div>
			<div class="houseswiper-w-smallswiper clear">
				<div class="houseswiper-ws-prev" @click="goto(prevIndex)"></div>
				<div class="houseswiper-ws-div">
					<ul class="houseswiper-ws-ul clear" :style="containerStyle">
						<li class="houseswiper-wsu-li" v-for="(item,index) in slides" @click="goto (index)">
							<div class="houseswiper-wsul-heibei" :class="{addheibei:index === nowIndex}"></div>
							<img class="houseswiper-wb-img1" :src="item.src" alt="">
							<img class="houseswiper-wb-img2" :src="item.srcTwo" alt="">
						</li>
					</ul>
				</div>
				<div class="houseswiper-ws-next" @click="goto(nextIndex)"></div>
			</div>
		</div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'houseswiper',
  components: {

  },
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 4000
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    },
    containerStyle () {
    	return {
    		transform:`translateX(${this.imgWidth}px)`,
    		transition: `all 0.5s ease`
    	}
    },
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true,
      imgWidth: 0,
      imgWidthTwo: 160,
		}
  },
  mounted(){
  	clearInterval(this.invId)
    this.runInv()
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      	this.imgWidth = -160*this.nowIndex
      	// console.log(this.imgWidth,-160*(this.slides.length-1))
	      if (this.imgWidth < -160*(this.slides.length)){
	      	this.imgWidth = 0
	      	// console.log(0)
	      } else if (this.imgWidth < (-160*(this.slides.length))+160*4) {
	      	if (this.slides.length < 4) {
	      		this.imgWidth = 0
	      		if (this.slides.length === 1) {
	      			clearInterval(this.invId)
	      			this.isShow = false
	      		}
	      	} else {
	      		this.imgWidth = (-160*(this.slides.length))+160*4
	      	}
	      }
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
			this.$once('hook:beforeDestroy', () => {
		    clearInterval(this.invId)
			})
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },

}
</script>
<style scoped>
.slide-trans-enter-active {
  transition: all .3s ease;
}
.slide-trans-enter {
  transform: translateY(-490px);
  opacity: 1;
}
.slide-trans-old-leave-active {
  transition: all .3s ease;
  transform: translateY(0px);
  opacity: 0;
}
</style>
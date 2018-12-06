<template>
  <div id="headertwo">
    <div class="headertwo-center">
      <div class="headertwo-c-top clear">
        <div class="headertwo-ct-left clear">
          <img src="static/images/public/logo.png" alt="">
          <ul>
            <li v-for="(item,index) in todoData" @click="addClass(index)" :class="{hovers:index === cour}" :key="item.index">{{item.text}}</li>
          </ul>
        </div>
        <div class="headertwo-ct-right">
          <p><img src="static/images/public/position1.png" alt="">北京</p>
        </div>
      </div>
      <div class="headertwo-c-bottom">
        <p>发布出售房源</p>
        <p>平台会对发布房源进行核实，请务必填写真实信息</p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Headertwo',
  data () {
  	return {
      cour: 0,
      todoData: [
        {
          text: '我要卖房',
        },
        {
          text: '我要出租',
        },
      ]
  	}
  },
  mounted(){

  },
  methods: {
    addClass (index) {
      this.cour = index
    },
  },
	watch: {
    '$route' (to, from) {
      this.cour = to.name
    }
	}
}
</script>
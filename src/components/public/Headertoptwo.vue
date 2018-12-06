<template>
  <div id="headertoptwo">
    <div class="headertoptwo-wap">
      <div class="headertoptwo-w-center">
        <ul class="clear">
          <li v-for="(item,index) in todoData" :key="item.index">
            <router-link tag="span" :to="{path:item.path}">{{item.text}}</router-link>
          </li>
        </ul>
        <div class="headertoptwo-w-right">
          <p class="headertoptwo-wr-dandu">登录</p>
          <div class="headertoptwo-wr-xian"></div>
          <p class="headertoptwo-wr-dandu">注册</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Headertoptwo',
  data () {
  	return {
  		xiala: false,
      todoData: [
        {
          name: 0,
          text: '首页',
          path: '/',
        },
        {
          index: 1,
          text: '新房',
          path: '/Newhouse/',
        },
        {
          index: 2,
          text: '二手房',
          path: '/Oldhouse/',
        },
        {
          index: 3,
          text: '租房',
          path: '/Newhouse/',
        },
        {
          index: 4,
          text: '找小区',
          path: '/Newhouse/',
        },
        {
          index: 5,
          text: '最新开盘',
          path: '/Newhouse/',
        },
        {
          index: 9,
          text: '房产工具',
          path: '/Newhouse/',
        },
        {
          index: 10,
          text: '找经纪人',
          path: '/Newhouse/',
        },
        {
          index: 11,
          text: '商家入驻',
          path: '/Newhouse/',
        },
        {
          index: 12,
          text: '咨询',
          path: '/Newhouse/',
        },
      ]
  	}
  },
  mounted(){

  },
  methods: {
  	xiaLa () {
  		this.xiala = !this.xiala
  	}
  }
}
</script>
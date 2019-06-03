<template>
  <div id="headertopone">
    <div class="headertopone-wap">
      <div class="headertopone-w-center">
        <ul class="clear">
          <li v-for="(item,index) in todoData" :key="item.index">
            <router-link tag="span" :to="{path:item.path}">{{item.text}}</router-link>
          </li>
        </ul>
        <p class="headertopone-w-dandu">我要出租</p>
        <div class="headertopone-w-xian"></div>
        <p class="headertopone-w-dandu">我要卖房</p>
        <div class="headertopone-w-right">
          <p class="headertopone-wr-dandu">登录</p>
          <div class="headertopone-wr-xian"></div>
          <p class="headertopone-wr-dandu">注册</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Headertopone',
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
          text: '资讯',
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